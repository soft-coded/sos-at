import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

import "./footer.scss";
import data from "../../data/footer";

export default function Footer() {
	return (
		<footer id="footer">
			<div className="inner">
				<div className="container">
					<div className="desc">
						{data.description}
						<div className="icons">
							{/* eslint-disable-next-line */}
							<a href="#">
								<FaFacebookSquare color="blue" size={30} />
							</a>
							{/* eslint-disable-next-line */}
							<a href="#">
								<FaTwitter color="lightblue" size={30} className="twitter" />
							</a>
						</div>
					</div>
					<div className="contact">
						<h2>Contact</h2>
						<ul>
							<a href={`mailto:${data.contact}`}>
								<li>{data.contact}</li>
							</a>
						</ul>
					</div>
					<div className="newsletter">
						<h2>Our Newsletter</h2>
						<form>
							<input type="email" placeholder="Email" />
							<button type="button">Send</button>
						</form>
					</div>
				</div>
				<div className="copy">
					&copy; SystemOnSilicon Corporation.
					<div> All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
}
