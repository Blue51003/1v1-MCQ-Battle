import React from "react";
import { Outlet, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/mcqs">MCQs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
