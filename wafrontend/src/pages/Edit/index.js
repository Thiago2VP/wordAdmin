import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import axios from "../../services/axios";
import { Presentation } from "./styled";

export default function Edit() {
  const { id } = useParams();
  const [Platform, setPlatform] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Platform.length < 1 || email.length < 1 || password < 1) {
      toast.error("");
      return;
    }

    await axios.put(`/words/${id}`, {
      Platform,
      email,
      password,
    });

    toast.success("");
  };

  return (
    <Presentation>
      <div className="container page-section">
        <h1 className="title">Edit Word</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={Platform} onChange={(e) => setPlatform(e.target.value)} placeholder="Platform" />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Presentation>
  );
}
