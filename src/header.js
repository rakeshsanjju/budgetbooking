import React from 'react'

// Import Raleway font from Google Fonts
const linkElement = document.createElement('link');
linkElement.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap';
linkElement.rel = 'stylesheet';
if (typeof document !== 'undefined' && document.head) {
    document.head.appendChild(linkElement);
}

const header = () => {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 50px',
        // backgroundColor: '#ffffff',
        // borderBottom: '1px solid #ddd',
        // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'relative',
        height:'50px',
        marginTop:'20px'
    }

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ff9500',
        textDecoration: 'none',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        marginLeft: '0',
        marginRight: '0'
    }

    const logoImageStyle = {
        height: '90px',
        width: '100px',
        display: 'block'
    }

    const navStyle = {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        paddingRight: '50px'
    }

    const rightNavStyle = {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        paddingLeft: '50px'
    }

    const navItemStyle = {
        textDecoration: 'none',
        color: '#333',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'Raleway, sans-serif',
        cursor: 'pointer',
        transition: 'color 0.3s ease'
    }

    const navItemHover = {
        ...navItemStyle,
        color: '#ff9500'
    }

    const NavLink = ({ href, children }) => {
        const [isHovered, setIsHovered] = React.useState(false)
        return (
            <a
                href={href}
                style={isHovered ? navItemHover : navItemStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
            </a>
        )
    }

    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About Us</NavLink>
                <NavLink href="#tour">Tour package</NavLink>
               
            </nav>
            <div style={logoStyle}>
                <img src="./logo.png" alt="Budget Booking Logo" style={logoImageStyle} />
            </div>
            <nav style={rightNavStyle}>
                 <NavLink href="#tour">Tour package</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default header