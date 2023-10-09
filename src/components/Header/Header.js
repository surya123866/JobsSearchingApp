import { useNavigate } from "react-router-dom";
import "./styles.scss"; // Import the SCSS stylesheet
import Cookies from "js-cookie";

function Header() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("userToken");
    navigate("/login");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/job-listing");
    }
  };
  return (
    <header className="header-container">
      <div className="logo">
        <h1 onClick={() => navigate("/")}>Jobs</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/job-listing">Jobs</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Enter a programming language"
          onKeyPress={handleKeyPress}
        />
        <button onClick={onClickLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
