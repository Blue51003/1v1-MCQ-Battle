import { Link } from "react-router-dom";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav>
      <Link to="/">Home</Link>
      {!isLoggedIn ? (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link to="/mcqs">MCQ Management</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
