import React from 'react'
import SidebarUpper from './SidebarUpper'
import SidebarBody from './SidebarBody'
import "./Sidebar.css" ;

function Sidebar() {
  return (
    <div className='side-bar'>
        <SidebarUpper />
        <SidebarBody />
    </div>
  )
}

export default Sidebar