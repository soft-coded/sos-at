import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Second from "./sections/second/Second";
import Third from "./sections/third/Third";
import Research from "./sections/research/Research";
import Footer from "./sections/footer/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<main>
				<div className="backdrop" />
				<Hero />
				<Second />
				<Third />
				<Research />
				<Footer />
			</main>
		</>
	);
}
