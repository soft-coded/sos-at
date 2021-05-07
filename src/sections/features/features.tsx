import { useEffect } from "react";

import "./features.scss";
import data from "../../data/second";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

export default function Second() {
	useEffect(() => {
		if (vars.matchWidth(vars.tabletWidth)) {
			const containers = document.querySelectorAll<HTMLElement>(
				".second .second-detail"
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
					<h1>Features</h1>
				</SectionHeader>
				<div className="grid">
					{data.map(details => {
						return (
							<div key={details.id} className="second-detail">
								<div className="container">
									<img src={details.image} alt={details.title} />
									<h1>{details.title}</h1>
									<h2>{details.subtitle}</h2>
									<ul>
										<li>{details.content[0]}</li>
										<li>{details.content[1]}</li>
										<div className="hidden">
											{details.content.slice(2).map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</div>
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
