import "./second.scss";
import data from "../../data/second";
import SectionHeader from "../../components/section-header/SectionHeader";

export default function Second() {
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
								<img src={details.image} alt={details.title} />
								<h1>{details.title}</h1>
								<h2>{details.subtitle}</h2>
								<p>{details.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
