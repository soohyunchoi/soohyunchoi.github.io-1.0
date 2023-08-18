import React, { Component } from 'react';

interface NavLinkProps {
    label: string;
    to: string;
}

function NavLink(props: NavLinkProps) {
    return (
        <a href={props.to} className="nav-link">
            {props.title}
        </a>
    );
}

interface NavMenuProps {
    
}
function NavMenu(props: NavMenuProps) {
    return (
        <div></div>
    )
}

function NavBar() {
    return (
        <div className='flex justify-between'>
            <NavMenu>
                <NavLink label='About' to='/about'/>
                <NavLink label='Resume' to='/resume'/>
                <NavLink label='Contact' to='/contact'/>
            </NavMenu>
        </div>
    );
}

export { NavBar };