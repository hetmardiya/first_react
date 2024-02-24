import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <nav>
        <h1>Tech_guys</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/brands"}>Brands</Link>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default header