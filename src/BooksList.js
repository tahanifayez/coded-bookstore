import React from "react";
import products from "./products";
import BookItem from "./BookItem";

const BooksList = () => {
  const productList = products.map((book) => {
    return <BookItem book={book}></BookItem>;
  });

  return productList;
};

export default BooksList;
