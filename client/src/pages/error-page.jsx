import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ErrorPage() {
  return (
    <div
      style={css`
        height: 100vh;
        width: 100%;
        display: grid;
        place-content: center;
      `}
    >
      <h2>Sorry</h2>
      <p>Page not found</p>
      <Button>
        <Link to="/">Go back to home</Link>
      </Button>
    </div>
  );
}
