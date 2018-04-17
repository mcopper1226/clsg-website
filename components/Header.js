import React from 'react'; 
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/simulations">
          <a style={linkStyle}>Simulations</a>
        </Link>
        <Link href="/events">
          <a style={linkStyle}>Events</a>
        </Link>
        <Link href="/workshops">
          <a style={linkStyle}>Workshops</a>
        </Link>
    </div>
)

export default Header
