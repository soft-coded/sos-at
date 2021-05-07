import { useEffect } from "react";

import data from "../../data/third";
import "./solution.scss";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

export default function Third() {
	useEffect(() => {
		if (vars.matchWidth(vars.tabletWidth)) {
			const containers = document.querySelectorAll<HTMLElement>(
				".third .grid-item"
			);
			containers.forEach(container => {
				container.addEventListener("click", () => {
					const overlay = container.querySelector<HTMLElement>("article");
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
		<section id="third" className="third">
			<div className="inner">
				<SectionHeader>
					<h1>Solution</h1>
				</SectionHeader>
				<h2>
					Agrotick: An agri-tech platform for climate smart and precision
					agriculture.
				</h2>
				<div className="grid">
					{data.map(details => (
						<div className="grid-item" key={details.id}>
							<header>
								<img src={details.image} alt={details.title} />
								<h1>{details.title}</h1>
							</header>
							<article>
								<p>{details.content}</p>
								<ul>
									{details.list.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
