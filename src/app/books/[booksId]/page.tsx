import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishlistButton from "@/app/components/bookDetails/WishListButton";
import { IBook } from "@/types/BookType";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    booksId: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return res.json();
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { booksId } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => book.bookId === Number(booksId),
  ) as IBook;

  // console.log(booksData);
  return (
    <div className=" container mx-auto card card-side bg-base-100 shadow-lg rounded-2xl overflow-hidden border border-slate-100">
      <figure className="w-70 shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-slate-900">
          {book.bookName}
        </h2>
        <p className="text-sm font-medium text-slate-500">by {book.author}</p>
        <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
          {book.category}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold mt-1">
          ⭐ {book.rating}
          <span className="text-slate-400 font-normal">/ 5</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Review */}
        <p className="mt-4 text-slate-600 leading-relaxed line-clamp-4">
          {book.review}
        </p>

        {/* Meta info */}
        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <div>
            <p className="font-semibold text-slate-800">{book.totalPages}</p>
            <p>Pages</p>
          </div>
          <div>
            <p className="font-semibold text-slate-800">
              {book.yearOfPublishing}
            </p>
            <p>Published</p>
          </div>
          <div>
            <p className="font-semibold text-slate-800">{book.publisher}</p>
            <p>Publisher</p>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <ReadButton book={book} />
          <WishlistButton book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
