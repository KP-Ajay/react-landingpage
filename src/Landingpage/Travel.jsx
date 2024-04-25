import React from 'react'
import logo from '../Images/log.png'
import search from '../Images/search.png'
import img1 from '../Images/image-1.png'
import img2 from '../Images/image-2.png'
import img3 from '../Images/image-3.png'
import img4 from '../Images/image-4.png'
import img5 from '../Images/image-5.png'
import img6 from '../Images/image-6.png'
import img7 from '../Images/image-7.png'
import img8 from '../Images/image-8.png'
import img9 from '../Images/image-9.png'
import img10 from '../Images/image-10.png'
import dubai from '../Images/dubai.png'
import ny from '../Images/new-york.png'
import paris from '../Images/paris.png'
import nd from '../Images/new-delhi.png'
import story1 from '../Images/story-1.png'
import story2 from '../Images/story-2.png'
import story3 from '../Images/story-3.png'
import './Style.css'

function Travel() {
  return (
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>KP - Travel Website</title>
        <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"/>
        <link rel="stylesheet" href="Style.css"/>
    </head>
    <body>
        <div className="header">
            <nav>
                <img src={logo} className="logo"/>
                <ul className="nav-links">
                    <li><a href="#">Popular Places</a></li>
                    <li><a href="#">Travel Outside</a></li>
                    <li><a href="#">Online Packages</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" className="register-btn">Register Now</a>
                <a href="#" className="login-btn">Login</a>
            </nav>
            <div className="container">
                <h1>Find Your Next Stay</h1>
                <div className="search-bar">
                    <form>
                            <div className="location-input">
                            <label>Location</label>
                            <input type="text" placeholder="Where are you going ?"/>
                        </div>
                        <div>
                            <label>Check in</label>
                            <input type="text" placeholder="Add Date"/>
                        </div>
                        <div>
                            <label>Check out</label>
                            <input type="text" placeholder="Add Date"/>
                        </div>
                        <div>
                            <label>Guest</label>
                            <input type="text" placeholder="Add Guest"/>
                        </div>
                        <button type="submit"><img src={search}/></button>
                    </form>
                </div>
            </div>
            <div class="container">
            <h2 class="sub-title">Exclusives</h2>
            <div class="Exclusives">
                <div>
                    <img src ={img1}/>
                    <span>
                        <h3>London</h3>
                        <p>Starts @ $250</p>
                    </span>
                </div>
                <div>
                    <img src ={img2}/>
                    <span>
                        <h3>New York</h3>
                        <p>Starts @ $250</p>
                    </span>
                </div>
                <div>
                    <img src ={img3}/>
                    <span>
                        <h3>Switzerland</h3>
                        <p>Starts @ $300</p>
                    </span>
                </div>
                <div>
                    <img src ={img4}/>
                    <span>
                        <h3>Australia</h3>
                        <p>Starts @ $200</p>
                    </span>
                </div>
                <div>
                    <img src ={img5}/>
                    <span>
                        <h3>France</h3>
                        <p>Starts @ $240</p>
                    </span>
                </div>
                <div>
                    <img src ={img6}/>
                    <span>
                        <h3>Amsterdam</h3>
                        <p>Starts @ $240</p>
                    </span>
                </div>   
                <div>
                    <img src ={img7}/>
                    <span>
                        <h3>Netherlands</h3>
                        <p>Starts @ $240</p>
                    </span>
                </div> 
                <div>
                    <img src ={img8}/>
                    <span>
                        <h3>Chicago</h3>
                        <p>Starts @ $240</p>
                    </span>
                </div>  
                <div>
                    <img src ={img9}/>
                    <span>
                        <h3>San Francisco</h3>
                        <p>Starts @ $240</p>
                    </span>
                </div> 
                <div>
                    <img src ={img10}/>
                    <span>
                        <h3>Shanghai</h3>
                        <p>Starts @ $240</p>
                    </span>
                </div>
            </div>

            <h2 class="sub-title">Trending Places</h2>
            <div class="trending">
                <div>
                    <img src={dubai}/>
                    <h3>Dubai</h3>
                </div>
                <div>
                    <img src={ny}/>
                    <h3>New York</h3>
                </div>
                <div>
                    <img src={paris}/>
                    <h3>Paris</h3>
                </div>
                <div>
                    <img src={nd}/>
                    <h3>New Delhi</h3>
                </div>
            </div>

            <h2 class="sub-title">Travellers Stories</h2>
            <div class="stories">
                <div>
                    <img src={story1} />
                    <p>Popular European countries with a budget of just $10,000 </p>
                </div>
                <div>
                    <img src={story2}/>
                    <p>Traveled more than 100 Countries in less than a year </p>
                </div>
                <div>
                    <img src={story3}/>
                    <p>Best experience you get while travelling to Thailand </p>
                </div>
            </div>
            <a href="#" class="start-btn">Start making money</a>
            
            <h4 class="footer">
                <span><i class="ri-messenger-fill"></i></span>
                <span><i class="ri-instagram-fill"></i></span>
                <span><i class="ri-twitter-x-fill"></i></span>
                <span><i class="ri-whatsapp-line"></i></span><br />Copyright @ 2024,KP - Travel Website</h4>
            </div>
          
        </div>
    </body> 
    </html>   
  )
}

export default Travel
