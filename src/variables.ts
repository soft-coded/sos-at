//eslint-disable-next-line
export default {
	tabletWidth: "900px",
	mobileWidth1: "750px",
	matchWidth: (width: string) => {
		return window.matchMedia(`(max-width: ${width})`).matches;
	}
};
