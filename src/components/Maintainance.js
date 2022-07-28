import React from "react";

const Maintainance = () => {
  return (
    <>
      <h1 class="mt-20 text-center px-4">
        We are so sorry, this page is under maintenance, we will fix this page
        as soon as possible.
      </h1>

      <div class="w-40 fa-5x mt-20 m-auto">
        <i class="inline-flex items-center w-40 fas fa-spinner fa-pulse"></i>
      </div>

      <div class="flex justify-center mt-20">
        <button class="inline-flex items-center px-6 py-3 text-white font-semibold bg-primary rounded-md shadow-sm">
          <span>
            <a href="index.html">Go Back</a>
          </span>
          <svg class="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Maintainance;
