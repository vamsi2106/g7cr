import React from "react";

interface BooksDetailsProps {
  book?: any;
  onBookDelete: (id: string) => void;
}

const BookDetails = ({ book, onBookDelete }: BooksDetailsProps) => {
  if (!book) return <h2>Select An Book</h2>;
  return (
    <div>
      <div
        className="container"
        style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}
      >
        <h2>{book.title}</h2>
        <div className="row">
          <div className="col-4">
            <img
              src={book.cover}
              alt={book.title}
              style={{ width: "80%", height: "80%" }}
            />
          </div>
          <div className="col-8">
            <div>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Pages:</strong> {book.pages}
              </p>
              <p>
                <strong>Rating:</strong> {book.rating} (Votes: {book.votes})
              </p>
              <p>
                <strong>Tags:</strong> {book.tags?.join(", ")}
              </p>
              <p>
                <strong>Series:</strong> {book.series} (Book {book.seriesIndex})
              </p>
              <p>
                <strong>Price:</strong> ₹{book.price}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>Reviews:</h3>

          {book.reviews?.length ? (
            book.reviews.map((review: any) => (
              <div key={review._id} className="review-card">
                <div className="review-header">
                  <strong className="review-name">{review.name}</strong>
                  <span className="review-title"> • {review.title}</span>
                </div>
                <p className="review-details">{review.details}</p>
                <div className="review-footer">
                  <span className="review-rating">
                    Rating: {review.rating}/5
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
        <button
          onClick={() => onBookDelete(book._id)}
          className="btn btn-danger"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
