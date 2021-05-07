import Slider from "react-slick";

import "./collabs.scss";
import SectionHeader from "../../components/section-header/SectionHeader";
import data from "../../data/collabs";
import vars from "../../variables";

const sliderSettings = {
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: true,
	arrows: false,
	slidesToShow: vars.matchWidth(vars.mobileWidth1) ? 1 : 3
};

export default function Collab() {
	return (
		<section id="collabs" className="collabs">
			<div className="inner">
				<SectionHeader>
					<h1>Our Collaborations</h1>
				</SectionHeader>
				<Slider {...sliderSettings} className="slider-container">
					{data.map(item => (
						<div className="container">
							<img src={item} alt="collaborator" />
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
