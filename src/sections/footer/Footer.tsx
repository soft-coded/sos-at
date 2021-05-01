import "./footer.scss";
import data from "../../data/footer";
import play from "../../images/playstore.png";
import appstore from "../../images/appstore.png";

export default function Footer() {
	return (
		<footer>
			<div className="inner">
				<div className="container">
					<div className="desc">
						{data.description}
						<div className="icons">(%) (%)</div>
					</div>
					<div className="contact">
						<h2>Contact</h2>
						<ul>
							{data.contact.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
					<div className="site-links">
						<h2>Site Links</h2>
						<ul>
							{data.siteLinks.map((item, i) => (
								<li key={i}>{item}</li>
							))}
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
				<div className="get-app">
					<h2>Download the app on:</h2>
					<img src={play} alt="playstore" />
					<img src={appstore} alt="appstore" />
				</div>
				<div className="copy">&copy; SystemOnSilicon</div>
			</div>
		</footer>
	);
}
