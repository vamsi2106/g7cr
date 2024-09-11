import React from "react";
import { AuthorList } from "../components/author-list.component";
import { AuthorDetails } from "../components/author-details.component";

interface authors {
  authorList: any[];
}

const ViewAuthorComponent = (props: authors) => {
  const [selectedAuthor, setSelectedAuthor] = React.useState(null);

  const [authors, updateAuthors] = React.useState(props.authorList);

  const handleAuthorDelete = (id: string) => {
    var remainingAuthors = authors.filter((a) => a.id !== id);
    updateAuthors(remainingAuthors);
  };
  return (
    <div className="row g-0">
      <div className="col col-5  author-list">
        <AuthorList
          authors={authors}
          onAuthorSelect={(author) => setSelectedAuthor(author)}
        />
      </div>
      <div className="col col-7 author-details">
        <AuthorDetails
          author={selectedAuthor}
          onAuthorDelete={handleAuthorDelete}
        />
      </div>
    </div>
  );
};

export default ViewAuthorComponent;
