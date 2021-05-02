import Slider from "react-slick";

import data from "../../data/research";
import "./research.scss";
import SectionHeader from "../../components/section-header/SectionHeader";

const sliderSettings = {
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true,
	fade: true
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
									backgroundSize: "cover",
									backgroundBlendMode: "lighten"
								}}
							>
								<h1>{details.title}</h1>
								<p>{details.content}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
