import React, { useState } from "react";
import { editUser } from "../features/session/sessionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

export default function EditProfileForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ username: username }));
    history.push("/profile");
  };

  return (
    <section>
      <h2>Edit Username</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button className="primary">Edit</button>
          </div>
        </label>
      </form>
    </section>
  );
}
