import { useEffect } from "react";

import "./second.scss";
import data from "../../data/second";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

function getDirections(direction: string) {
	if (vars.matchWidth(vars.mobileWidth1)) {
		return {
			margin: "0",
			image: "l",
			ul: null
		};
	} else {
		return {
			margin: direction === "r" ? "0 50px 0 0" : "0 0 0 50px",
			image: direction,
			ul: direction === "r" ? "rtl" : null
		};
	}
}

export default function Second() {
	useEffect(() => {
		if (vars.matchWidth(vars.tabletWidth)) {
			const containers = document.querySelectorAll<HTMLElement>(
				".second-detail .container"
			);
			containers.forEach(container => {
				container.addEventListener("click", () => {
					const overlay = container.querySelector<HTMLElement>(".hidden");
					if (overlay.style.opacity === "1") {
						overlay.style.opacity = "0";
						overlay.style.transform = "translateX(-3%)";
					} else {
						overlay.style.opacity = "1";
						overlay.style.transform = "translateX(0)";
					}
				});
			});
		}
	}, []);

	return (
		<section id="second" className="second">
			<div className="inner">
				<SectionHeader>
					<h1>Our Services</h1>
				</SectionHeader>
				<div className="grid">
					{data.map(details => {
						const directs = getDirections(details.direction);

						return (
							<div key={details.id}>
								<div className="second-detail">
									{directs.image === "l" && (
										<img src={details.image} alt={details.title} />
									)}
									<div
										className="container"
										style={{
											textAlign: details.direction === "l" ? "left" : "right",
											margin: directs.margin
										}}
									>
										<h1>{details.title}</h1>
										<h2>{details.subtitle}</h2>
										<ul dir={directs.ul}>
											<li>{details.content[0]}</li>
											<li>{details.content[1]}</li>
											<div className="hidden">
												{details.content.slice(2).map((item, i) => (
													<li key={i}>{item}</li>
												))}
											</div>
										</ul>
									</div>
									{directs.image === "r" && (
										<img src={details.image} alt={details.title} />
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
