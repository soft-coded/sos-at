import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";

import "./hero.scss";
import Modal from "../../components/modal/Modal";

export default function Hero() {
	const [showModal, setShowModal] = useState(false);

	return (
		<section id="home" className="hero">
			<div className="inner">
				<Modal show={showModal} setShowModal={setShowModal} />
				<h1>Reinventing Agriculture</h1>
				<h2>Productivity</h2>
				<h2>Connectivity</h2>
				<h2>Sustainability</h2>
				<button onClick={() => setShowModal(true)}>
					<BsFillCameraVideoFill size={23} />
					Watch Video
				</button>
			</div>
		</section>
	);
}
