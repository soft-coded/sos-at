import { useEffect } from "react";

import "./navbar.scss";
import logo from "../../images/logo.png";

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
						<img className="logo" src={logo} alt="agrotick logo" />
					</li>
					<li>Home</li>
					<li>Features</li>
					<li>You</li>
					<li>Research</li>
					<li>News</li>
					<li>Impact</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
}
