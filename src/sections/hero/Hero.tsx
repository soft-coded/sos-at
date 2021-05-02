import { BsFillCameraVideoFill } from "react-icons/bs";

import "./hero.scss";

export default function Hero() {
	return (
		<section id="home" className="hero">
			<div className="inner">
				<h1>Reinventing Agriculture</h1>
				<h2>Productivity</h2>
				<h2>Connectivity</h2>
				<h2>Sustainability</h2>
				<button>
					<BsFillCameraVideoFill size={23} />
					Watch Video
				</button>
			</div>
		</section>
	);
}
