import React from "react";
import { BookList } from "../components/Book-list.component";
import BookDetails from "../components/book-details.component";

interface bookScreen {
  bookList: any[];
}

const ViewBooks = ({ bookList }: bookScreen) => {
  const [selectedBook, setSelectedBook] = React.useState(null);

  const [books, updateBook] = React.useState(bookList);

  const handleBookDelete = (id: string) => {
    var remainingBook = books.filter((a) => a.id !== id);
    updateBook(remainingBook);
  };
  return (
    <div className="row g-0">
      <div className="col col-5  author-list">
        <BookList
          bookList={bookList}
          onBookSelect={(book) => setSelectedBook(book)}
        />
      </div>
      <div className="col col-7 author-details">
        <BookDetails book={selectedBook} onBookDelete={handleBookDelete} />
      </div>
    </div>
  );
};

export default ViewBooks;
