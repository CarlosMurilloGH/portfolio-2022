import React from 'react';
import "./Home.css";

import Inbokzer from "../../media/inbokzer.png";
import Studio from "../../media/720studio.png";
import Linktree from "../../media/linktreeclone.png";
import Cripto from "../../media/criptotracker.png";
import Fitness from "../../media/fitnesstracker.png";


export default function Home() {
  return (
    <div className='HomeContainer'>
      <div className='HeroColorContainer py-5'>
        <div className="HeroContainer container d-xl-flex d-md-block py-5">
          <div className='HeroInfo pt-5'>
            <span className='text-primary fs-4 fw-bold'>Hey there!, I'm</span>
            <h1><span className='display-2 fw-bolder text-white'>Carlos Murillo.</span>
              <br/>
            < span className='display-2 fw-bolder text-white'>Full Stack developer</span>
            </h1>
          </div>
          <div className='HeroForm mx-auto justify-content-center shadow-sm p-3 mb-5 rounded px-5 py-4 text-white'>
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
              <button type='submit' className='btn btn-primary'>Send</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className='SkillsContainer py-5'>
        <div className="container">
          <h2 className='display-5 fw-bolder text-white'>Skills</h2>
        </div>
        
        <div className="container">
          <div className=" d-lg-flex d-sm-block px-sm-3">
            <div className="col text-white">
              <h2>Frontend</h2>
              <p>HTML, CSS, JS</p>
              <p>Reactjs</p>
              <p>React-Native</p>
              <p>Gatsby</p>
              <p>Bootstrap</p>
              <p>Material UI</p>
              <p>Tailwind</p>
              <p>Styled components</p>
            </div>

            <div className="col text-white">              
              <h2>Backend</h2>
              <p>PHP</p>
              <p>Nodejs</p>
              <p>Firebase</p>
              <p>Express</p>
            </div>

            <div className="col text-white">
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

            <div className="col text-white">
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
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-xs-1 gy-4">

          <div className="col">
              <div className="card cardcontainer text-white" >
                <img className="card-img-top" src={Inbokzer} alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Inbokzer</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <a href="https://demo-inbokzer.netlify.app" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right me-2"></i></a>
                      <a href="https://github.com/CarlosMurilloGH/alphacarrito" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge bg-primary col me-2'>React</p>
                    <p className='badge bg-primary col me-2'>CSS3</p>
                    <p className='badge bg-primary col'>Firebase</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Ecommerce platform for small business using WhatsApp API</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card cardcontainer text-white">
                <img className="card-img-top" src={Studio} alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Architecture Portfolio</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <a href="https://glowing-dragon-e00f5e.netlify.app" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right me-2"></i></a>
                      <a href="https://github.com/CarlosMurilloGH/architecture-portfolio" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge bg-primary me-2'>React</p>
                    <p className='badge bg-primary me-2'>Material UI</p>
                    <p className='badge bg-primary'>Firebase</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Minimalistic masonry gallery website for an architecture studio</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card cardcontainer text-white">
                <img className="card-img-top" src={Linktree} alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Linktree Clone</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <a href="https://linktreeclone-cm.netlify.app" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right me-2"></i></a>
                      <a href="https://github.com/CarlosMurilloGH/linktreeclone" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge bg-primary me-2'>React</p>
                    <p className='badge bg-primary me-2'>CSS Modules</p>
                    <p className='badge bg-primary'>Firebase</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Linktree landing redesign and manage user's links and profiles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card cardcontainer text-white">
                <img className="card-img-top" src={Fitness} alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>FullStack Fitness Tracker</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge bg-primary me-2 '>React</p>
                    <p className='badge bg-primary me-2 '>MongoDB</p>
                    <p className='badge bg-primary me-2 '>Express</p>
                    <p className='badge bg-primary me-2 '>NodeJS</p>
                    <p className='badge bg-primary '>TailwindCSS</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Fitness website where you can track your body measurements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card cardcontainer text-white">
                <img className="card-img-top" src={Cripto} alt="Card cap"/>
                <div className="card-body">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Cripto Currency Tracker</p>
                    </div>
                    <div className='cardIcons d-flex'>
                    <a href="https://criptocurrencytracker-cm.netlify.app" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right me-2"></i></a>
                    <a href="https://github.com/CarlosMurilloGH/cryptocurrencytracker" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge bg-primary me-2'>React</p>
                    <p className='badge bg-primary'>API</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Real time cripto currency tracker with live search using coingecko's API</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card cardcontainer text-white">
                <img className="card-img-top" src={Linktree} alt="Card cap"/>
                <div className="card-body ">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Soap Website</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge bg-primary me-2'>Gatsby</p>
                    <p className='badge bg-primary'>Netlify CMS</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Website made with gatsby and connected with netlify cms to manage the content.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="ContactContainer py-5">
        <div className="container">
          <h2 className='display-5 fw-bolder text-white'>Contact me</h2>
        </div>
        
        <div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>



    </div>
  )
}



