import React from 'react';
import "./Home.css";

import Inbokzer from "../../media/inbokzer.png";
import Studio from "../../media/720studio.png";

export default function Home() {
  return (
    <div className='HomeContainer'>
      <div className='HeroColorContainer py-5'>
        <div className="HeroContainer container d-flex py-5">
          <div className='HeroInfo pt-5'>
            <span className='text-primary fs-4 fw-bold'>Hey there!, I'm</span>
            <h1><span className='display-2 fw-bolder text-white'>Carlos Murillo.</span>
              <br/>
            < span className='display-2 fw-bolder text-white'>Full Stack developer</span>
            </h1>
          </div>
          <div className='HeroForm mx-auto justify-content-center shadow-sm p-3 mb-5 bg-white rounded px-5 py-4'>
            <form>
              <p className='fs-4 fw-bold'>Get in touch</p>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name"/>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className='ContactContainer py-5'>
        <div className="container">
          <h2 className='display-5 fw-bolder text-white'>Skills</h2>
        </div>
        
        <div class="container">
          <div class="row">
            <div class="col text-white">
              <h2>Frontend</h2>
              <p>HTML, CSS, JS</p>
              <p>Reactjs</p>
              <p>React-Native</p>
              <p>Bootstrap</p>
              <p>Material UI</p>
              <p>Tailwind</p>
              <p>Styled components</p>
            </div>

            <div class="col text-white">              
              <h2>Backend</h2>
              <p>PHP</p>
              <p>Nodejs</p>
              <p>Firebase</p>
              <p>Express</p>
            </div>

            <div class="col text-white">
              <h2>Platforms</h2>
              <p>Wordpress</p>
              <p>Plesk</p>
              <p>Cpanel</p>
              <p>Netlify</p>
              <p>Heroku</p>
              <p>MongoDB</p>
              <p>Google Analytics</p>
              <p>Maikchimp</p>
              <p>Github</p>
            </div>

            <div class="col text-white">
              <h2>Tools</h2>
              <p>Figma</p>
              <p>Premiere Pro</p>
              <p>After Effects</p>
              <p>Google Analytics</p>
              <p>Postman</p>
              <p>Plesk</p>
            </div>

          </div>
        </div>

      </div>

      <div className="ProjectsContainer py-5">
        <div className="container">
          <h2 className='display-5 fw-bolder text-white'>Projects</h2>
        </div>

        <div className="container py-5">
          <div class="row row-cols-3 gy-4">

          <div class="col">
              <div className="card cardcontainer text-white" >
                <img className="card-img-top" src={Inbokzer} alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Inbokzer</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-github"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom'>
                    <p className='badge bg-primary'>React</p>
                    <p className='badge bg-primary'>Firebase</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Ecommerce platform for small business using WhatsApp API</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="card" >
                <img className="card-img-top" src="..." alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Inbokzer</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-github"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom'>
                    <p className='badge bg-primary'>React</p>
                    <p className='badge bg-primary'>Firebase</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Ecommerce platform for small business using WhatsApp API</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="card" >
                <img className="card-img-top" src="..." alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Full Stack Fitness Tracker</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-github"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom'>
                    <p className='badge bg-primary'>React</p>
                  </div>
                  <div className='cardInfo'>
                    <p>asihdbadjipsbajo;dsjsabkasnkaslndojlasndjoasbnuodasuobsoujabs</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="card" >
                <img className="card-img-top" src="..." alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Full Stack Expense Tracker</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-github"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom'>
                    <p className='badge bg-primary'>React</p>
                  </div>
                  <div className='cardInfo'>
                    <p>asihdbadjipsbajo;dsjsabkasnkaslndojlasndjoasbnuodasuobsoujabs</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="card" >
                <img className="card-img-top" src="..." alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Linktree Clone</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-github"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom'>
                    <p className='badge bg-primary'>React</p>
                  </div>
                  <div className='cardInfo'>
                    <p>asihdbadjipsbajo;dsjsabkasnkaslndojlasndjoasbnuodasuobsoujabs</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="card" >
                <img className="card-img-top" src={Studio} alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Architecture Portfolio</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-github"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom'>
                    <p className='badge bg-primary'>React</p>
                  </div>
                  <div className='cardInfo'>
                    <p>asihdbadjipsbajo;dsjsabkasnkaslndojlasndjoasbnuodasuobsoujabs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
}



