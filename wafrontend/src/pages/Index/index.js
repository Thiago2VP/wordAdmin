import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../../services/axios";
import { Presentation } from "./styled";

export default function Index() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/words");
      setWords(response.data);
    }

    getData();
  }, []);

  return (
    <Presentation>
      <div className="page-section">
        <div className="container">
          {words.map((word) => (
            <div className="card">
              <h1 className="titleInfo">{word.Platform}</h1>
              <p className="contentInfo">{word.email}</p>
              <p className="contentInfo">{word.password}</p>
              <div className="subOptions">
                <Link to={`/edit/${word.Platform}`} className="edit">
                  Edit
                </Link>
                <Link to={`/delete/${word.Platform}`} className="delete">
                  Delete
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Presentation>
  );
}
