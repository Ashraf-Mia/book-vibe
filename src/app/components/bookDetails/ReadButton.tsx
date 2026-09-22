"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/BookType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { read, setRead } = useContext(BooksContext);

  const handleReadButton = () => {
    setRead([...read, book]);

    toast.success(`You have wishlist ${book.bookName}`);
  };

  return (
    <div>
      <button
        onClick={handleReadButton}
        className="btn btn-success rounded-xl px-8 shadow-md hover:scale-105 transition-transform"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
