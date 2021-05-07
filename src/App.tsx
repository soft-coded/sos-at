import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Features from "./sections/features/Features";
import Solution from "./sections/solution/Solution";
import Problem from "./sections/problem/Problem";
import Footer from "./sections/footer/Footer";
import Collabs from "./sections/collabs/Collabs";

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
				<Collabs />
				<Footer />
			</main>
		</>
	);
}
