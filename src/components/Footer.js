import React from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  return (
    <footer>
      <button onClick={history.goBack}>Back</button>
      <button onClick={history.goForward}>Forward</button>
    </footer>
  );
}
