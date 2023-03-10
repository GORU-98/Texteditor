import React from 'react'

function Navbar(props) {
    
  return (
    <>
    <div className='container'>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"  href="/">Disabled</a>
        </li> */}
      </ul>
    </div>
<button type="button" className={`btn btn-${props.mode}`} onClick={props.modeHandler}>{props.modeText}</button>
  </div>

</nav>
    </div>
    </>

  )
}

export default Navbar
