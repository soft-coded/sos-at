import { useEffect } from "react";

import "./second.scss";
import data from "../../data/second";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

function matchWidth() {
	return window.matchMedia("(max-width: " + vars.tabletWidth + ")").matches;
}

export default function Second() {
	useEffect(() => {
		if (matchWidth()) {
			const containers = document.querySelectorAll<HTMLElement>(
				".second-detail .container"
			);
			containers.forEach(container => {
				container.addEventListener("touchstart", () => {
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
					{data.map(details => (
						<div key={details.id}>
							<div className="second-detail">
								{details.direction === "l" && (
									<img src={details.image} alt={details.title} />
								)}
								<div
									className="container"
									style={{
										textAlign: details.direction === "r" ? "right" : "left",
										margin:
											details.direction === "r" ? "0 50px 0 0" : "0 0 0 50px"
									}}
								>
									<h1>{details.title}</h1>
									<h2>{details.subtitle}</h2>
									<ul dir={details.direction === "r" ? "rtl" : null}>
										<li>{details.content[0]}</li>
										<li>{details.content[1]}</li>
										<div className="hidden">
											{details.content.slice(2).map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</div>
									</ul>
								</div>
								{details.direction === "r" && (
									<img src={details.image} alt={details.title} />
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
