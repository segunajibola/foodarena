<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodIt</title>
    <link rel="shortcut icon" href="img/fried rice.jfif" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<nav class="fixed mt-0 w-full z-10 top-0 flex items-center justify-between flex-wrap bg-primary p-4 z-50">
    <div class="flex items-center flex-shrink-0 text-white ml-6 mr-6">
    <a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/></svg></a>
      <a href="#"><span class="font-semibold text-3xl tracking-tight">FOODIT</span></a>
    </div>
    <div class="block px-4 cursor-pointer lg:hidden" id="burger">
        <svg class="w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
     </div>


    <div class="w-full block lg:flex lg:flex hidden lg:items-center lg:justify-end lg:w-auto" id="menu">
      <div class="text-lg lg:flex-grow lg:mr-12 lg:text-sm sm:flex-col">
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        <svg class="inline mb-1 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>       <span>Home</span>
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline mb-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span>About</span>
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline mb-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg><span>Blog</span>
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline mb-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg><span>Take a Tour</span>
            </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline mb-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg><span>Contact</span>
            </a>
      </div>

      <div>
        <a href="#" class="btoon inline-block text-primary leading-none text-center mt-4 md:mt-0 border-primary md:border-2 bg-white hover:bg-primary hover:border-white hover:text-white transition ease-out duration-400 delay-2s rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-widest" style="vertical-align: middle;"><span>Quick Order</span></a>
      </div>
    </div>
</nav>
<h1 class="mt-20 text-center px-4">We are so sorry, this page is under maintenance, we will fix this page as soon as possible.</h1>

<div class="w-40 fa-5x mt-20 m-auto">
    <i class="inline flex inline-flex items-center w-40 fas fa-spinner fa-pulse"></i>
</div>

<div class="flex justify-center mt-20">
<button
  class="inline-flex items-center px-6 py-3 text-white font-semibold bg-primary rounded-md shadow-sm"
>
  <span><a href="index.html">Go Back</a></span>
  <svg class="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fill-rule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
</div>
<script src="main.js"></script>
</body>
</html>
