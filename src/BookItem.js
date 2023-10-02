import React from "react";

const BookItem = (props) => {
  const book = props.book;
  return (
    <div>
      <h1>{book.name}</h1>
      <h4>{book.price}</h4>
      <img src={book.img} width={"200px"} />
    </div>
  );
};

export default BookItem;
