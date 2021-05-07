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

				<div className="heading">
					<h1>Reinventing</h1>
					<h1 className="agriculture">Agriculture.</h1>
					<h2>Productivity. Connectivity. Sustainability.</h2>
					<button onClick={() => setShowModal(true)}>
						<BsFillCameraVideoFill size={23} />
						Watch Video
					</button>
				</div>
			</div>
		</section>
	);
}
