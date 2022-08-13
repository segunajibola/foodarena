import React from "react";

function Hero() {
  return (
    <main className="bg-white px-12 py-6">
      <header
        style={{
          background: "url('img/headerbg.jpeg') norepeat",
          backgroundSize: "100%",
          margin: "55px 0px 25px 0px",
          width: "100%",
          height: "50%",
        }}
      >
        <div className="text-center" style={{ opacity: "100%" }}>
          <h2 className="inline text-6xl sm:mt-4 md:mt-10 font-semibold text-center tracking-widest">
            FOODARENA
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline -mt-9 h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className="header_svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>
        </div>
        <h3 className="lg:text-6xl font-semibold italic text-center text-primary mt-4 sm:text-3xl tracking-widest">
          Tasty meals at your doorstep
        </h3>
      </header>

      <div className="carousel relative shadow-2xl bg-white">
        <div className="carousel-inner relative overflow-hidden w-full">
          {/* <!--Slide 1--> */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div className="block h-full w-full text-white text-5xl text-center">
              <img
                src="img/bakedeggs.jpeg"
                alt=""
                width="1500px"
                height="500px"
              />
            </div>
          </div>

          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* <!--Slide 2--> */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div className="block h-full w-full text-white text-5xl text-center">
              <img
                src="img/spicyrice.jpeg"
                alt=""
                width="1500px"
                height="0px"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* <!--Slide 3--> */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div className="block h-full w-full text-white text-5xl text-center">
              <img
                src="img/indianrice.jpg"
                alt=""
                width="1500px"
                height="500px"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* <!-- Add additional indicators for each slide--> */}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h4 className="font-bold mt-6 pb-2 text-lg border-b border-red-200">
          Latest Recipies
        </h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {/* <!--card goes here--> */}
          <div className="card hover:shadow-lg transform duration-300 hover:scale-110 m-2">
            <img
              src="img/friedrice.jfif"
              alt="Fried rice"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold text-gray-800">Fried Rice</span>
              <span className="block text-gray-800 text-sm">
                Recipe by Shop 3
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>45 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-lg transform duration-300 hover:scale-110 m-2">
            <img
              src="img/breadandbeans.jfif"
              alt="Bread and Beans"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold text-gray-800">Bread and Beans</span>
              <span className="block text-gray-800 text-sm">
                Recipe by Shop 15
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          {/* <!--card goes here--> */}
          <div className="card hover:shadow-lg hidden lg:block transform duration-300 hover:scale-110 m-2">
            <img
              src="img/poundedyam.jfif"
              alt="Pounded Yam"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold text-gray-800">Pounded Yam</span>
              <span className="block text-gray-800 text-sm">
                Recipe by Shop 20
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>1:30 hours</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="rounded-lg py-3 px-6 uppercase text-xs font-bold cursor-pointer tracking-wider bg-red-500 p-6 mt-8 text-white hover:shadow-inner transform hover:scale-110 border transition ease-out duration-300"
          >
            See more
          </div>
        </div>

        <div className="border-b border-red-200">
          <h4 className="font-bold mt-6 pb-2 text-lg inline-block">
            Most Popular Recipies
          </h4>
          <div className="inline-block bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 ml-4 mb-2">
            <svg
              className="w-5 inline-block"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Duration</span>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {/* <!--card goes here--> */}
          <div className="card hover:shadow-lg transform duration-300 hover:scale-125 m-2">
            <img
              src="img/bakedeggs.jpeg"
              alt="Baked Eggs"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold text-gray-800">Baked Eggs</span>
              <span className="block text-gray-800 text-sm">
                Recipe by Outlet 3
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>30 mins</span>
            </div>
          </div>

          {/* <!--card goes here--> */}
          <div className="card hover:shadow-lg transform duration-300 hover:scale-125 m-2">
            <img
              src="img/spicyrice.jpeg"
              alt="Spicy Rice"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold text-gray-800">Spicy Rice</span>
              <span className="block text-gray-800 text-sm">
                Recipe by Outlet 15
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>1 hour</span>
            </div>
          </div>

          {/* <!--card goes here--> */}
          <div className="card hover:shadow-lg hidden lg:block transform duration-300 hover:scale-125 m-2">
            <img
              src="img/indianrice.jpg"
              alt="Indian Rice"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold text-gray-800">Indian Rice</span>
              <span className="block text-gray-800 text-sm">
                Recipe by Outlet 20
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>45 mins</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="rounded-lg py-3 px-6 uppercase text-xs font-bold cursor-pointer tracking-wider
                bg-primary p-6 mt-8 text-white hover:shadow-inner hover:bg-white transform hover:scale-110 hover:text-primary border hover:border-primary transition ease-out duration-300"
          >
            See more
          </div>
        </div>
      </div>

      <div
        style={{
          background: "url('img/kitchen4.jpg') no-repeat",
          backgroundSize: "100%",
          margin: "55px 0px 25px 0px",
          width: "100%",
          height: "70%",
          marginTop: "20px",
        }}
      >
        <div className="text-center">
          <div className="text-4xl font-bold italic flex text-center justify-center text-200">
            <div
              className="rounded-lg py-3 px-6 uppercase text-lg cursor-pointer tracking-wider
                bg-primary p-6 mt-32 lg:mt-52 text-white hover:shadow-inner hover:bg-white transform hover:scale-110 hover:text-primary border hover:border-primary transition ease-out duration-300"
            >
              Visit our Kitchen
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-5xl border-b-2 border-primary inline-block">
          <a href="">Visit Us</a>
        </h3>
        <p className="mt-3">
          A day at FoodIt to experience how we cook what we eat is a great way
          to spend your day. Take a tour of our kitchen and get 10% discount off
          your next meal.
        </p>
      </div>

      <div
        style={{
          background: "url('img/bookatable.jpg') no-repeat",
          backgroundSize: "100%",
          margin: "55px 0px 25px 0px",
          width: "100%",
          height: "70%",
          marginTop: "20px",
        }}
      >
        <div className="text-center sm:mb-52">
          <div className="text-4xl font-bold italic flex text-center justify-center text-200">
            <div
              className="rounded-lg py-3 px-6 uppercase text-lg cursor-pointer tracking-wider
                bg-primary p-6 mt-32 lg:mt-52 text-white hover:shadow-inner hover:bg-white transform hover:scale-110 hover:text-primary border hover:border-primary transition ease-out duration-300"
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-5xl border-b-2 border-primary inline-block">
          <a href="">Contact Us</a>
        </h3>
        <p className="mt-3">
          Want to suggest a help for us? Contact our Support and Sales Team
          here. Our team is ready and happy to answer your sales questions. Fill
          out the form and we'll be in touch as soon as possible.
        </p>
      </div>

      <div
        style={{
          background: "url('img/bookatable2.jpg') no-repeat",
          backgroundSize: "100%",
          margin: "55px 0px 25px 0px",
          width: "100%",
          height: "70%",
          marginTop: "20px",
        }}
      >
        <div className="text-center">
          <div className="text-4xl font-bold italic flex text-center justify-center text-200">
            <div
              className="rounded-lg py-3 px-6 uppercase text-lg cursor-pointer tracking-wider
                    bg-primary p-6 mt-32 lg:mt-52 text-white hover:shadow-inner hover:bg-white transform hover:scale-110 hover:text-primary border hover:border-primary transition ease-out duration-300"
            >
              Know more About Us
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-5xl border-b-2 border-primary inline-block">
          <a href="">About Us</a>
        </h3>
        <p className="mt-3">
          At Foodarena, a modern-day food distribution channel, we care about what
          you eat, how you eat and when you eat. What matters to us is customers
          experience and we try to make that feeling awesome for you.
        </p>
      </div>
    </main>
  );
}

export default Hero;
