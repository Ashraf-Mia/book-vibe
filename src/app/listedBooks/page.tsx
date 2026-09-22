"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/BookType";
import React, { useContext, useState } from "react";
import ListedBooksCard from "../components/shared/ListedBooksCard";

const ListedBooks = () => {
  const { read, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  // console.log(read, "readdd books", wishlist, "wishlist books");
  // console.log(sortBy, "sortByh");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  const sortedRead = sortBooks(read);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto">
      <h2 className="  bg-amber-200 py-5 my-10 rounded-2xl font-bold text-3xl text-center">
        Books
      </h2>

      <div className=" text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Pick a Runtime"
          className="select select-success"
        >
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Publisher year</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${read.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 my-4">
          {" "}
          {sortedRead.length > 0 ? (
            sortedRead.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className=" text-center text-lg font-semibold">
              No Read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 my-4">
          {" "}
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className=" text-center text-lg font-semibold">
              No Read books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
