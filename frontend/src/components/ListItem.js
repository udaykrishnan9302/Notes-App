import React from "react";
import { Link } from "react-router-dom";
const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div>
        <h1>{note.body}</h1>
      </div>
    </Link>
  );
};

export default ListItem;
