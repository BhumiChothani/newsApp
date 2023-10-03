import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props)=> {
  
  const [query, setQuery] = useState('');

  const handleInputOnChange = (e)=>{
    setQuery(e.target.value);
    if(e.target.value === ''){
      props.onSearchClick('');
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.onSearchClick(query);
  }

  const removeAllActiveClass = ()=>{
    document.getElementById('home').classList.remove('active');
    document.getElementById('business').classList.remove('active');
    document.getElementById('entertainment').classList.remove('active');
    document.getElementById('health').classList.remove('active');
    document.getElementById('science').classList.remove('active');
    document.getElementById('sports').classList.remove('active');
  }

  const activeLink = (e)=>{
      removeAllActiveClass();
      document.getElementById(e).classList.add('active');
  }

    return (
      <div style={{position: 'fixed', top:0, left:0, width:'100%', zIndex:101}} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{color: 'blue', pointerEvents:'none'}}>NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" id="home" onClick={()=>{activeLink('home')}}>
                  <Link className="nav-link"  aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item" id="business" onClick={()=>{activeLink('business')}}>
                  <Link className="nav-link"  to="/business">Business</Link>
                </li>
                <li className="nav-item" id="entertainment" onClick={()=>{activeLink('entertainment')}}>
                  <Link className="nav-link"  to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item" id="health" onClick={()=>{activeLink('health')}}>
                  <Link className="nav-link"  to="/health">Health</Link>
                </li>
                <li className="nav-item" id="science" onClick={()=>{activeLink('science')}}>
                  <Link className="nav-link"  to="/science">Science</Link>
                </li>
                <li className="nav-item" id="sports" onClick={()=>{activeLink('sports')}}>
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
              </ul>

              <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" value={query} onChange={handleInputOnChange} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
    )
}

export default Navbar