import React, { useState } from "react";
import News from "./components/News";
import NavBar from "./components/NavBar";
import { ProgressBar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <ProgressBar
          className="fixed-top"
          style={{ height: "5px", borderRadius: "0px", marginTop: "55px" }}
          now={progress}
        />
        ;
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                category="General"
                pageSize="8"
              />
            }
          />
          <Route
            path="/home"
            element={
              <News
                setProgress={setProgress}
                key="general"
                category="General"
                pageSize="8"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                category="Business"
                pageSize="8"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                category="Entertainment"
                pageSize="8"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                category="Health"
                pageSize="8"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                category="Science"
                pageSize="8"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                category="Sports"
                pageSize="8"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                category="Technology"
                pageSize="8"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
