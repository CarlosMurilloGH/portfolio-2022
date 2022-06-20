import React from 'react';
import "./Home.css";

import Inbokzer from "../../media/inbokzer.png";
import Studio from "../../media/720studio.png";

export default function Home() {
  return (
    <div className='HomeContainer'>
      <div className='HeroColorContainer bg-black py-5'>
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
      
      <div className='SkillContainer py-5'>
        <div className="container">
          <h2 className='display-5 fw-bolder'>Skills</h2>
        </div>
        <div class="container py-5">
          <div class="row row-cols-5">
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> React</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> React Native</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Wordpress</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> PHP</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> MongoDB</span>
            </div>

            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Express</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> NodeJs</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> HTML 5</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> CSS 3</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> JavaScript</span>
            </div>

            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Firebase</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Plesk</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> CPanel</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Netlify</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Heroku</span>
            </div>

            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> SEO</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Figma</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Github</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> After Effects</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Photoshop</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> APIs</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Premiere Pro</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Excel</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Mailchimp</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Postman</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Google Analytics</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Bootstrap</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Material UI</span>
            </div>
            <div class="col">
              <span className="badgecontainer badge bg-dark py-3 px-4 m-1 fs-5"><i className="bi bi-github"></i> Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectsContainer">
        <div className="container">
          <h2 className='display-5 fw-bolder'>Projects</h2>
        </div>

        <div className="container py-5">
          <div class="row row-cols-3 gy-4">

          <div class="col">
              <div className="card" >
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

      <div className='ContactContainer'>
        <div className="container">
          <h2 className='display-5 fw-bolder'>Get in touch</h2>
        </div>
      </div>
    </div>
  )
}



