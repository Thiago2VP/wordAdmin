import React, { useState } from "react";
import { toast } from "react-toastify";

import axios from "../../services/axios";
import { Presentation } from "./styled";

export default function Create() {
  const [Platform, setPlatform] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Platform.length < 1 || email.length < 1 || password < 1) {
      toast.error("");
      return;
    }

    await axios.post(`/words`, {
      Platform,
      email,
      password,
    });

    toast.success("");
  };

  return (
    <Presentation>
      <div className="container page-section">
        <h1 className="title">Create Word</h1>
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
