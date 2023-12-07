/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
