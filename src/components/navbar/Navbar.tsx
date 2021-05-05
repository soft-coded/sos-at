import { useEffect } from "react";
import { GrMenu } from "react-icons/gr";

import "./navbar.scss";
import NavList from "./Navlist";
import NavMob from "./NavMob";
import logo from "../../images/favicon.png";
import play from "../../images/playstore-mob.png";
import vars from "../../variables";

export default function Navbar() {
	useEffect(() => {
		if (!vars.matchWidth(vars.mobileWidth1)) {
			window.addEventListener("scroll", () => {
				const nav = document.querySelector<HTMLElement>(".nav-pc");
				if (window.pageYOffset > 2) nav.className = "nav-pc sticky";
				else nav.className = "nav-pc";
			});
		} else {
			window.addEventListener("scroll", () => {
				const navTop = document.querySelector<HTMLElement>(".nav-mob-top");
				if (window.pageYOffset > 2) navTop.style.top = "0";
				else navTop.style.top = "-100px";
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
						<GrMenu size={30} />
					</button>
					<a href="#home">
						<img src={logo} alt="agrotick logo" />
					</a>
					<div className="container">
						<a
							href="https://play.google.com/store/apps/details?id=com.systemonsilicon.agrotick&hl=en&gl=US"
							target="_blank"
							rel="noreferrer"
						>
							<img src={play} alt="playstore" />
						</a>
					</div>
				</div>
			</nav>
			<NavMob />
		</>
	);
}
