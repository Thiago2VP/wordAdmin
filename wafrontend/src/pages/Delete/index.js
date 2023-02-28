import React from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import axios from "../../services/axios";
import { Presentation } from "./styled";

export default function Edit() {
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.delete(`/words/${id}`);

    toast.success("");
  };

  return (
    <Presentation>
      <div className="container page-section">
        <h1 className="title">Do you confirm?</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Presentation>
  );
}
