import React from "react";

function Navbar() {
  return (
    <nav className="fixed mt-0 w-full top-0 flex items-center justify-between flex-wrap bg-red-500 p-4 z-50">
      <div className="flex items-center flex-shrink-0 text-white ml-6 mr-6">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>
          <span className="font-semibold text-3xl tracking-tight">FOODARENA</span>
        </a>
      </div>
      <div className="block px-4 cursor-pointer lg:hidden" id="burger">
        <svg
          className="w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>

      <div
        className="w-full block lg:flex lg:items-center lg:justify-end lg:w-auto"
        id="menu"
      >
        <div className="text-lg lg:flex-grow lg:mr-12 lg:text-sm sm:flex-col">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            <svg
              className="inline mb-1 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span>Home</span>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline mb-1 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>About</span>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline mb-1 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span>Blog</span>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline mb-1 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span>Take a Tour</span>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline mb-1 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact</span>
          </a>
        </div>

        <div>
          <a
            href="#"
            className="btoon inline-block text-primary leading-none text-center mt-4 md:mt-0 border-primary md:border-2 bg-white hover:bg-primary hover:border-white hover:text-white transition ease-out duration-400 delay-2s rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-widest"
            style={{ verticalAlign: "middle" }}
          >
            <span>Quick Order</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
