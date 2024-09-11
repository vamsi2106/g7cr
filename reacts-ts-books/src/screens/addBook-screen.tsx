import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

interface Book {
  _id: string;
  isbn: string;
  id: string;
  title: string;
  author: string;
  pages: string;
  rating: string;
  votes: string;
  description: string;
  tags: string[];
  series: string;
  seriesIndex: string;
  cover: string;
  reviews: any[];
  price: number;
  authorId: string;
}

interface AddBookProps {
  onAddBook: (newBook: Book) => void;
}

const AddBook = ({ onAddBook }: AddBookProps) => {
  const [isbn, setIsbn] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [votes, setVotes] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [series, setSeries] = useState("");
  const [seriesIndex, setSeriesIndex] = useState("");
  const [cover, setCover] = useState("");
  const [reviews] = useState<any[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [authorId, setAuthorId] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Book = {
      _id: uuidv4(),
      isbn: `isb-${uuidv4}`,
      id,
      title,
      author,
      pages,
      rating,
      votes,
      description,
      tags,
      series,
      seriesIndex,
      cover,
      reviews,
      price,
      authorId,
    };

    onAddBook(newBook);

    setIsbn("");
    setId("");
    setTitle("");
    setAuthor("");
    setPages("");
    setRating("");
    setVotes("");
    setDescription("");
    setTags([]);
    setSeries("");
    setSeriesIndex("");
    setCover("");
    setPrice(0);
    setAuthorId("");
  };

  return (
    <div className="container mt-2 w-100">
      <h2 className="text-center mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Pages</label>
            <input
              type="text"
              className="form-control"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Rating</label>
            <input
              type="text"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Series</label>
            <input
              type="text"
              className="form-control"
              value={series}
              onChange={(e) => setSeries(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Cover URL</label>
          <input
            type="text"
            className="form-control"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-5 ">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
