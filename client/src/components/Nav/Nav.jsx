import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.module.css"

export default function Nav() {
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
  }
  