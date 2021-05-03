import { useEffect } from "react";

import "./navbar.scss";
import NavList from "./Navlist";
import NavMob from "./NavMob";
import logo from "../../images/logo.png";
import play from "../../images/playstore.png";
import vars from "../../variables";

export default function Navbar() {
	useEffect(() => {
		if (!vars.matchWidth(vars.tabletWidth)) {
			window.addEventListener("scroll", () => {
				const nav = document.querySelector<HTMLElement>(".nav-pc");
				if (window.pageYOffset > 2) nav.className = "nav-pc sticky";
				else nav.className = "nav-pc";
			});
		}
	}, []);

	function handleOpen() {
		const drawer = document.querySelector<HTMLElement>(".nav-side-menu")!;
		const backdrop = document.querySelector<HTMLElement>(".backdrop")!;
		drawer.style.transform = "translateX(0%)";
		backdrop.style.display = "block";
		backdrop.style.animation = "fade-in 0.3s ease-in-out forwards";
	}

	return (
		<>
			<nav className="nav-pc">
				<div className="inner">
					<NavList />
				</div>
			</nav>
			<nav className="nav-mob-top">
				<div className="inner">
					<button className="nav-mob-btn" onClick={handleOpen}>
						<div></div>
						<div></div>
						<div></div>
					</button>
					<img src={logo} alt="agrotick logo" />
					<div className="container">
						<img src={play} alt="playstore" />
					</div>
				</div>
			</nav>
			<NavMob />
		</>
	);
}
