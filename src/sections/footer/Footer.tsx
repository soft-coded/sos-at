import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

import "./footer.scss";
import data from "../../data/footer";

// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function() {
//     if(isScrolledIntoView($('#theTarget')))
//     {
//         alert('visible');
//     }
// });

// function scrolledIntoView(_class: string) {
// 	let winTop = window.pageYOffset;
// 	let winBottom = winTop + window.innerHeight;
// 	let elemTop = document.querySelector<HTMLElement>(_class);
// 	let elemBottom = elemTop.clientHeight;
// }

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
							{data.contact.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
					<div className="site-links">
						<h2>Site Links</h2>
						<ul>
							{data.siteLinks.map((item, i) => (
								<li key={i}>
									{/* eslint-disable-next-line */}
									<a href={item.link}>{item.text}</a>
								</li>
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
				<div className="copy">&copy; SystemOnSilicon</div>
			</div>
		</footer>
	);
}
