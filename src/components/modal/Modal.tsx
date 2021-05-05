// import { useRef } from "react";
// import { createPortal } from "react-dom";

import "./modal.scss";

interface ChildrenType {
	show: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ show, setShowModal }: ChildrenType) {
	return (
		show && (
			<div className="modal">
				<div className="iframe-container">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/E-YJMgH75oQ?autoplay=1"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
				<button onClick={() => setShowModal(false)}>Close</button>
			</div>
		)
	);
}
