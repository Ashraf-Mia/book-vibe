import { IBook } from "@/types/BookType";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BooksCard = ({ book }: IBookCardProps) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
      {/* Cover Image */}
      <div className="relative h-64 w-full bg-slate-100">
        <Image src={image} alt={bookName} fill className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
            {bookName}
          </h3>
          <p className="text-sm text-slate-500">by {author}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
          ⭐ {rating}
        </div>

        {/* Review */}
        <p className="line-clamp-3 text-sm text-slate-500">{review}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
          <span>{totalPages} pages</span>
          <span>{yearOfPublishing}</span>
        </div>

        <Link href={`/books/${book.bookId}`}>
          <button className="btn btn-success mt-2 w-full rounded-xl">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
