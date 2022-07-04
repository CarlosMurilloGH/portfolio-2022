import React from 'react';
import "./Home.css";

import Hero from "../../media/heroimage.png";
import Inbokzer from "../../media/inbokzer.png";
import Studio from "../../media/720studio.png";
import Linktree from "../../media/linktreeclone.png";
import Cripto from "../../media/criptotracker.png";
import Fitness from "../../media/fitnesstracker.png";
import Gatsby from "../../media/Gatsby-website.png";



export default function Home() {
  return (
    <div className='HomeContainer'>
      <div className='HeroColorContainer py-5' id="herocontainer">
        <div className="HeroContainer container d-xl-flex d-md-block py-5">
          <div className='HeroInfo pt-5'>
            <span className='fs-4 fw-bold text-white'>Hey there!, I'm</span>
            <h1><span className='display-2 fw-bolder text-white'>Carlos Murillo.</span>
              <br/>
            < span className='display-2 fw-bolder text-white'>Full Stack developer</span>
            </h1>
          </div>
          <div className='HeroImage mx-auto justify-content-center p-3 mb-5 rounded px-5 py-4'>
            <img src={Hero} className="mx-auto d-block" alt="porfolio heroimage"/>
          </div>
        </div>
      </div>
      
      <div className='SkillsContainer py-5' id="skillscontainer">
        <div className="container">
          <h2 className='display-5 fw-bolder text-white'>Skills</h2>
        </div>
        
        <div className="container py-5">
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
              <p>Mailchimp</p>
              <p>Github</p>
            </div>

            <div className="col text-white">
              <h2>Tools</h2>
              <p>Figma</p>
              <p>Premiere Pro</p>
              <p>After Effects</p>
              <p>Google Analytics</p>
              <p>Postman</p>
            </div>

          </div>
        </div>

      </div>

      <div className="ExperienceContainer py-5" id="experiencecontainer">
        <div className="container">
          <h2 className='display-5 fw-bolder text-white'>Experience</h2>
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
                    <p className='badge purplebadge col me-2'>React</p>
                    <p className='badge purplebadge col me-2'>CSS3</p>
                    <p className='badge purplebadge col'>Firebase</p>
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
                    <p className='badge purplebadge me-2'>React</p>
                    <p className='badge purplebadge me-2'>Material UI</p>
                    <p className='badge purplebadge'>Firebase</p>
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
                    <p className='badge purplebadge me-2'>React</p>
                    <p className='badge purplebadge me-2'>CSS Modules</p>
                    <p className='badge purplebadge'>Firebase</p>
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
                      <a href="https://fitness-trackercm.netlify.app" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right me-2"></i></a>
                      <a href="https://github.com/CarlosMurilloGH/fitness-tracker" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge purplebadge me-2 '>React</p>
                    <p className='badge purplebadge me-2 '>MongoDB</p>
                    <p className='badge purplebadge me-2 '>Express</p>
                    <p className='badge purplebadge me-2 '>NodeJS</p>
                    <p className='badge purplebadge '>TailwindCSS</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Fitness website where you can track your body measurements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card cardcontainer text-white">
                <img className="card-img-top" src={Gatsby} alt="Card cap"/>
                <div className="card-body ">
                  <div className="cardInfo d-flex justify-content-between">
                    <div className='cardTitle'>
                      <p>Soap Website</p>
                    </div>
                    <div className='cardIcons d-flex'>
                      <a href="https://soap-website.netlify.app" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right me-2"></i></a>
                      <a href="https://github.com/CarlosMurilloGH/Soap-website" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                  <div className='cardStack d-flex border-bottom row row-cols-auto'>
                    <p className='badge purplebadge me-2'>Gatsby</p>
                    <p className='badge purplebadge me-2'>CSS</p>
                    <p className='badge purplebadge'>Contentful CMS</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Website made with gatsby and connected with contentful cms to manage the content.</p>
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
                    <p className='badge purplebadge me-2'>React</p>
                    <p className='badge purplebadge'>API</p>
                  </div>
                  <div className='cardInfo'>
                    <p>Real time cripto currency tracker with live search using coingecko's API</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="ContactContainer py-5" id="contactontainer">
        <div className="container">
          <h2 className='display-5 fw-bolder text-white'>Contact me</h2>
        </div>
        
        <div className="w-50 mx-auto py-5">
          <form>
            <div className="form-group">
              <label className='text-white'>Name</label>
              <input type="text" className="form-control my-2" placeholder="Name" />
            </div>

            <div className="form-group">
              <label className='text-white'>Email address</label>
              <input type="email" className="form-control my-2" placeholder="Enter email" />
            </div>

            <div class="form-group">
              <label className='text-white'>Example textarea</label>
              <textarea class="form-control my-2" rows="3" placeholder='Your message'></textarea>
            </div>

            <button type="submit" className="btn btn-purple my-2">Submit</button>
          </form>
        </div>
      </div>


    </div>
  )
}



