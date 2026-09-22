"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/BookType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleWishlist = () => {
    setWishlist([...wishlist, book]);

    toast.success(`You have read ${book.bookName}`);
  };

  return (
    <div>
      <button
        onClick={handleWishlist}
        className="btn btn-success rounded-xl px-8 shadow-md hover:scale-105 transition-transform"
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishlistButton;
