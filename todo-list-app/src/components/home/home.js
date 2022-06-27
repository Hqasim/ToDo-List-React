import React from "react";

import Todo from "../todo/todo";
import "./home.css";

function Home() {
  return (
    <div className="customBackground">
      <div className="d-flex justify-content-center">
        <div className="card m-3 mt-4 w-75">
          <div className="card-body">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
