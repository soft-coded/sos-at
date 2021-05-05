import Slider from "react-slick";

import data from "../../data/research";
import "./problem.scss";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

const sliderSettings = {
	dots: true,
	adaptiveHeight: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true,
	arrows: !vars.matchWidth(vars.tabletWidth)
};

function getContent(content: string) {
	if (vars.matchWidth(vars.tabletWidth)) return content.substr(0, 500) + "...";
	return content;
}

export default function Research() {
	return (
		<section id="research" className="research section">
			<div className="inner">
				<SectionHeader>
					<h1>Problem</h1>
				</SectionHeader>
				<Slider {...sliderSettings} className="slider">
					{data.map(details => {
						const cont = getContent(details.content);
						return (
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
									<p>{cont}</p>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
}
