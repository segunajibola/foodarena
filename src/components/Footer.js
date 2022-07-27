import React from 'react'

function Footer() {
  return (
    <footer class="bg-red-300 mt-4 px-2 py-2">
       <div class="text-center text-gray-900 text-lg font-semibold mt-5 mb-2 tracking-widest">Connect on Social Media</div>
       <div class="grid grid-cols-4 grid-flow-col gap-4 text-center">
        <ul class="grid-items">
            <li>
                <a href="#">Facebook <i class="fab fa-facebook-f"></i></a> 
            </li>
        </ul>
        <ul class="grid-items">
            <li>
                <a href="#">Instagram <i class="fab fa-instagram"></i></a>
            </li>
        </ul>
        <ul class="grid-items">
            <li>
                <a href="#">Whatsapp <i class="fab fa-whatsapp"></i></a>
            </li>
        </ul>
        <ul class="grid-items">
            <li>
                <a href="#">Twitter <i class="block sm:inline mt-1 fab fa-twitter"></i></a>
            </li>
        </ul>
        </div>
        <div class="text-center text-gray-900 text-lg font-semibold mt-5 tracking-widest">Additional links</div>
        <div class="grid grid-cols-3 grid-flow-col gap-4 text-center">
        <ul class="grid-items">
            <li>
                <a href="#">Live</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
        </ul>
        <ul class="grid-items">
            
            <li>
                <a href="#">History</a>
            </li>
            <li>
                <a href="#">Terms & Condition</a>
            </li>
        </ul>
        <ul class="grid-items">
            <li>
                <a href="#">Awards</a>
            </li>
            <li>
                <a href="#">Freebies & Offers</a> 
            </li>
        </ul>
        </div>
        <div>
            <p class="text-center mt-5">Made with &#9829 by <a href="https://www.twitter.com/iamsegunajibola">Segun Ajibola</a></p>
        </div>
        <div>
            <p class="text-center">Copyright 2021. All right reserved.</p>
        </div>
    </footer>
  )
}

export default Footer