import data from "../../data/third";
import "./third.scss";
import SectionHeader from "../../components/section-header/SectionHeader";

export default function Third() {
	return (
		<section id="third" className="third">
			<div className="inner">
				<SectionHeader>
					<h1>Help Provided</h1>
				</SectionHeader>
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
