import React from 'react'
import {Link} from 'react-router-dom'
class Menu extends React.Component 
{

  render(){
    return <><ul className="nav justify-content-center">
    <li className="nav-item">
    <Link className="nav-link" to="/">home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/mybid">my bid</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="">Login</a>
    </li>
  </ul>
    </>
  }
 
}

export default Menu;