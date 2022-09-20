import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../style/output.css';
import HomeContent from "../pages/HomeContent";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
          <Fragment>
            <nav className="h-20 flex justify-between items-center px-10">
              <h1 className="font-bold text-[32px] text-blue-donk">My Web</h1>
              <ul className="flex">
                <li className="pr-10 text-[#E23E57] ">
                  <Link to="/">Home</Link>
                </li>
                <li className="pr-10">
                  <Link to="/about" className="hover:text-[#E23E57] text-blue-donk">About</Link>
                </li>
                <li >
                  <Link to="/sertif" className="hover:text-[#E23E57] text-blue-donk">Sertificate</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" component={HomeContent} />
          </Fragment>
      </Router>
    );
  }
}

export default Navbar;