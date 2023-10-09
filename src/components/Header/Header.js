import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import "./styles.scss"; // Import the SCSS stylesheet
import Cookies from "js-cookie";

function Header() {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  const onClickOption = () => {
    setMobileMenu(!mobileMenu);
  };

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
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={34} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <nav className={`navigation ${mobileMenu ? "active" : ""}`}>
        <ul>
          <li onClick={onClickOption}>
            <a href="/">Home</a>
          </li>
          <li onClick={onClickOption}>
            <a href="/job-listing">Jobs</a>
          </li>
          <li onClick={onClickOption}>
            <a href="/about">About Us</a>
          </li>
          <li onClick={onClickOption}>
            <a href="/contact">Contact</a>
          </li>
          {mobileMenu ? (
            <li onClick={onClickLogout}>
              <a href="/login">Logout</a>
            </li>
          ) : (
            ""
          )}
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
