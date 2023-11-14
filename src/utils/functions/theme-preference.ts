export const themePreference = (themeMode: string) => {
	const htmlDoc = document.documentElement;

	if (
		localStorage.getItem(themeMode) === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		htmlDoc.classList.add("light");
		htmlDoc.classList.remove("dark");
	} else {
		htmlDoc.classList.add("dark");
		htmlDoc.classList.remove("light");
	}
};
