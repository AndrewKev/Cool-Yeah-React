import React from "react";
import '../style/output.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="h-20 flex justify-between items-center px-10">
        <h1 className="font-bold text-[32px] text-blue-donk">My Web</h1>
        <ul className="flex">
          <li className="pr-10 text-[#E23E57] "><button href="#">Home</button></li>
          <li className="pr-10"><button className="hover:text-[#E23E57] text-blue-donk" href="#">About</button></li>
          <li ><button className="hover:text-[#E23E57] text-blue-donk" href="#">Sertificate</button></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;