import { useEffect } from "react";

import "./navbar.scss";
import logo from "../../images/logo.png";
import play from "../../images/playstore.png";

export default function Navbar() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const nav = document.querySelector<HTMLElement>(".nav-pc");
			if (window.pageYOffset > 2) nav.className = "nav-pc sticky";
			else nav.className = "nav-pc";
		});
	}, []);

	return (
		<nav className="nav-pc">
			<div className="inner">
				<ul>
					<li className="logo-container">
						<a href="/">
							<img className="logo" src={logo} alt="agrotick logo" />
						</a>
					</li>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#second">Features</a>
					</li>
					<li>
						<a href="#third">You</a>
					</li>
					<li>
						<a href="#research">Research</a>
					</li>
					<li>
						<a href="#footer">Contact</a>
					</li>
					<li>
						<img src={play} alt="PlayStore" />
					</li>
				</ul>
			</div>
		</nav>
	);
}
