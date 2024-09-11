import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Author {
  _id: {
    $oid: string;
  };
  name: string;
  id: string;
  photo: string;
  biography: string;
  tags: string[];
  __v?: number; // Make __v optional
}

interface AddAuthorProps {
  onAddAuthor: (author: Author) => void;
}

const AddAuthor = ({ onAddAuthor }: AddAuthorProps) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState("");
  const [biography, setBiography] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAuthor: Author = {
      _id: {
        $oid: uuidv4(),
      },
      name,
      id,
      photo,
      biography,
      tags,
    };
    onAddAuthor(newAuthor);

    setName("");
    setId("");
    setPhoto("");
    setBiography("");
    setTags([]);
  };

  return (
    <div className="container mt-2 w-100">
      <h2 className="text-center mb-2">Add New Author</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <label className="form-label m-4">
            Name:
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="form-label m-4">
            Photo URL:
            <input
              type="text"
              className="form-control"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label m-3">
            Biography:
            <textarea
              className="form-control"
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              rows={4}
              required
            />
          </label>
          <label className="form-label m-3">
            Tags:
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleAddTag}
              >
                Add Tag
              </button>
            </div>
          </label>
        </div>

        <div className="mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-2">
              {tag}
            </span>
          ))}
        </div>

        <button type="submit" className="btn btn-success">
          Add Author
        </button>
      </form>
    </div>
  );
};

export default AddAuthor;
