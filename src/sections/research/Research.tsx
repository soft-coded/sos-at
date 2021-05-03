import Slider from "react-slick";

import data from "../../data/research";
import "./research.scss";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

function matchWidth() {
	return window.matchMedia("(max-width: " + vars.tabletWidth + ")").matches;
}

const sliderSettings = {
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true,
	arrows: !matchWidth()
};

export default function Research() {
	return (
		<section id="research" className="research section">
			<div className="inner">
				<SectionHeader>
					<h1>Problems Faced By Farmers</h1>
				</SectionHeader>
				<Slider {...sliderSettings} className="slider">
					{data.map(details => (
						<div key={details.id}>
							<div
								className="research-item"
								style={{
									background: `url(${details.image}) no-repeat`,
									backgroundPosition: "center",
									backgroundSize: "cover"
								}}
							>
								<h1>{details.title}</h1>
								<p>
									{matchWidth()
										? details.content.substr(0, 500) + "..."
										: details.content}
								</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
