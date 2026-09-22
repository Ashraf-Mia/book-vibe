import { IBook } from "@/types/BookType";
import { FileText, MapPin, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListedBooksCard = ({ book }: { book: IBook }) => {
  return (
    <div className="flex items-center gap-6 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Book cover */}
      <div className="flex h-40 w-32 shrink-0 items-center justify-center rounded-2xl bg-slate-100 p-2">
        <Image
          src={book.image}
          alt={book.bookName}
          width={100}
          height={140}
          className="h-full w-auto object-contain rounded-md shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-900">{book.bookName}</h3>
        <p className="mt-1 text-sm text-slate-500">
          By : <span className="text-slate-700">{book.author}</span>
        </p>

        {/* Tags + Year */}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-slate-700">Tag</span>
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600"
            >
              #{tag}
            </span>
          ))}
          <span className="flex items-center gap-1 text-sm text-slate-500">
            <MapPin size={14} />
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher + Pages */}
        <div className="mt-3 flex items-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <User size={14} />
            Publisher: {book.publisher}
          </span>
          <span className="flex items-center gap-1.5">
            <FileText size={14} />
            Page {book.totalPages}
          </span>
        </div>

        <div className="my-3 border-t border-slate-100" />

        {/* Category, Rating, Button */}
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            Category: {book.category}
          </span>
          <span className="rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-600">
            Rating: {book.rating}
          </span>
          <Link
            href={`/books/${book.bookId}`}
            className="ml-auto rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
