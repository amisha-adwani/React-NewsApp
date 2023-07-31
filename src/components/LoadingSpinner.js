import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div style={{ textAlign: "center" }}>
      <Spinner animation="border" />
    </div>
  );
}

export default Loading;
