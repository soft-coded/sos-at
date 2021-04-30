import Slider from "react-slick";

import "./second.scss";
import data from "../../data/second";

const sliderSettings = {
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true
};

export default function Second() {
	return (
		<section id="second" className="second">
			<div className="inner">
				<Slider {...sliderSettings} className="slider">
					{data.map(details => (
						<div key={details.id}>
							<div className="second-detail">
								<img src={details.image} alt={details.title} />
								<h1>{details.title}</h1>
								<h2>{details.subtitle}</h2>
								<p>{details.content}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
