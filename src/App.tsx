import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Features from "./sections/features/features";
import Solution from "./sections/solution/solution";
import Problem from "./sections/problem/problem";
import Footer from "./sections/footer/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<main>
				<div className="backdrop" />
				<Hero />
				<Problem />
				<Solution />
				<Features />
				<Footer />
			</main>
		</>
	);
}
