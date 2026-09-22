import React from "react";
import BooksCard from "../shared/BooksCard";
import { IBook } from "@/types/BookType";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return res.json();
};

const Books = async () => {
  const booksData = await getBooks();
  //   console.log(booksData);
  return (
    <div>
      <section className=" container mx-auto my-4">
        <h2 className="font-bold text-[40px] text-center pb-4">Books</h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {booksData.slice(0, 6).map((book: IBook) => (
            <BooksCard key={book.bookId} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Books;
