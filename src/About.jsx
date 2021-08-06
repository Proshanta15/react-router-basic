import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () =>{
    return(
        <>
            <h1> This Is About Page</h1>
             <NavLink to="/contact"> Visit contact</NavLink>
        </>
    )
}
export default About;