import React from "react";

function Footer() {
  return (
    <footer className="bg-red-300 mt-4 px-2 py-2">
      <div className="text-center text-gray-900 text-lg font-semibold mt-5 mb-2 tracking-widest">
        Connect on Social Media
      </div>
      <div className="grid grid-cols-4 grid-flow-col gap-4 text-center">
        <ul className="grid-items">
          <li>
            <a href="#">
              Facebook <i className="fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>
        <ul className="grid-items">
          <li>
            <a href="#">
              Instagram <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <ul className="grid-items">
          <li>
            <a href="#">
              Whatsapp <i className="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
        <ul className="grid-items">
          <li>
            <a href="#">
              Twitter <i className="block sm:inline mt-1 fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-gray-900 text-lg font-semibold mt-5 tracking-widest">
        Additional links
      </div>
      <div className="grid grid-cols-3 grid-flow-col gap-4 text-center">
        <ul className="grid-items">
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="grid-items">
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Terms & Condition</a>
          </li>
        </ul>
        <ul className="grid-items">
          <li>
            <a href="#">Awards</a>
          </li>
          <li>
            <a href="#">Freebies & Offers</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center mt-5">
          Made with &#9829; by
          <a href="https://www.twitter.com/iamsegunajibola">Segun Ajibola</a>
        </p>
      </div>
      <div>
        <p className="text-center">Copyright 2021. All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
