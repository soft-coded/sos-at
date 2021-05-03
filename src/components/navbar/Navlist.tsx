import logo from "../../images/logo.png";
import play from "../../images/playstore.png";

export default function Navlist() {
	return (
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
				<img src={play} alt="PlayStore" className="playstore" />
			</li>
		</ul>
	);
}
