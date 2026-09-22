"use client";
import React, { ReactNode, useState, createContext } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [read, setRead] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const sharedData = {
    read,
    setRead,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
