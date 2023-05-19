import { Link } from "react-router-dom";
import Button from "./button";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="link-wrapper">
        <Link to="contact" className="link">
          Contact us
        </Link>
      </div>
      <div>
        <Button className="btn1" link="" text="Sign up" />{" "}
      </div>
    </div>
  );
}

export default Nav;
