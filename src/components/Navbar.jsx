import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import "../styles/header.scss"
import logo from "../assets/logo.png";


const Navbar = (props) => {
	console.log(props);
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const [colorNav, setColorNav] = useState(false)
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColorNav(true)
		}
		else {
			setColorNav(false)
		}
	}

	const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
	const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

	window.addEventListener('scroll', changeColor)
	const closeMenu = () => setClick(false)


	const list = props.items.map((item) =>
		<li className='header__nav-item'>
			<a href={`#
				${item.toLocaleLowerCase()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")}`
				.replace(/\s/g, '')} 
				onClick={closeMenu}>{item}
			</a>
		</li>
	)

	const icons = () => {
		return <ul className='header__icons'>
					<a href='https://www.instagram.com/kostolnahrane/'>
					<FaInstagram size={25} className="header__icons--ig"/>
					</a>
					<a href='https://www.facebook.com/kostolnahrane'>
					<FaFacebookSquare size={24} className="header__icons--fb"/>
					</a>
					<a href='https://www.youtube.com/channel/UCq2niug0zrtR4Xo_-4-F7eA'>
					<FaYoutube size={28} className="header__icons--yt"/>
					</a>
				</ul>
	}

	const image = () => {
			return 	<img className='header__logo' src={logo} alt="logo"/>
	}

	return (
		<div className={`header ${colorNav ? "header--color" : ""}`}>
			<nav className='header__navbar'>
				<div className='header__hamburger' onClick={handleClick}>
					{click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
						: (<FaBars size={30} style={{ color: '#ffffff' }} />)}
				</div>
				{isDesktop ? image() : ''}
				<div className={`header__menu ${click ? "active" : ""}`}>
					<ul className='header__text'>
						{list}
					</ul>
					{icons()}
				{!isDesktop ? image() : ''}
				</div>
			</nav>
		</div>
	)
}

export default Navbar