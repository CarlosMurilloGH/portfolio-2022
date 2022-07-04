import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Carlos Murillo</a>

    <div className="collapse navbar-collapse">
      <div >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href='#herocontainer'>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#skillscontainer'>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#experiencecontainer'>Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#contactontainer'>Experience</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}
