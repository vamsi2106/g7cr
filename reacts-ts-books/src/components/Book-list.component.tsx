import React from "react";

interface BookList {
  bookList: any[];
  onBookSelect: (book: any) => void;
}

export const BookList = (props: BookList) => {
  return (
    <div className="list-group">
      {props.bookList.map((book) => (
        <button
          key={book.id}
          onClick={() => props.onBookSelect(book)}
          className="list-group-item list-group-item-action"
        >
          {book.title}
        </button>
      ))}
    </div>
  );
};
