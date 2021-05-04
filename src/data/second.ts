import agriNet from "../images/agrinet2.svg";
import eMarket from "../images/emarket2.svg";
import farmer from "../images/farmer2.svg";
import growSmart from "../images/growsmart2.svg";

// eslint-disable-next-line
export default [
	{
		id: 1,
		image: farmer,
		direction: "l",
		title: "Farmers First",
		subtitle: "One stop solution",
		content: [
			"Search for jobs easily",
			"Apply to crop loans and insurance easily",
			"Give vocational training and jobs to women",
			"Provide subsidized education to children",
			"Track financial support from government securely"
		]
	},
	{
		id: 2,
		image: growSmart,
		direction: "r",
		title: "Agro Smart",
		subtitle: "Become tech savvy",
		content: [
			"Know the best sustainable practices",
			"Monitors the fields for nutrients, pH, irrigation, diseases",
			"Know when to give medicines, nutrients, water, by how much"
		]
	},
	{
		id: 3,
		image: eMarket,
		direction: "l",
		title: "Agro Mart",
		subtitle: "From soil to foil",
		content: [
			"Buy seeds, medicines and fertilizers at best prices",
			"Rent farm machinery & tech for a season at affordable prices",
			"Know the retail market rates of produce. Sell the produce at just prices",
			"Track the produce live, know the location of customers"
		]
	},
	{
		id: 4,
		image: agriNet,
		direction: "r",
		title: "Agro Net",
		subtitle: "Collaborative ecosystem",
		content: [
			"Connect with neighbouring farmers",
			"Contact agro scientists and engineers for support 24x7",
			"Compare yield of other regions",
			"Get retail market updates 24x7",
			"Stay up to date with government schemes and subsidies"
		]
	}
];
