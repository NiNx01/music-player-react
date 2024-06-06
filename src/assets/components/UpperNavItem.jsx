import React from 'react'
import "./UpperNavItem.css" ;

function UpperNavItem( {text , icon , active=false} ) {
  return (
    <li>
            <a href="#" className={active? "upper-nav__link active-link" : "upper-nav__link"}>
              <span className="upper-nav__icon">
                <i className={icon}></i>
              </span>
              {text}
            </a>
          </li>
  )
}

export default UpperNavItem