import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='abc.com'>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">
      <div >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href='abc.com'>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='abc.com'>Link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}
