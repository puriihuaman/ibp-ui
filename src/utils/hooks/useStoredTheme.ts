import { useEffect, useState } from "react";

import { themePreference } from "@functions/theme-preference";

export const useStoredTheme = (): {
	isDarkMode: boolean;
	handleChangeTheme: () => void;
} => {
	const THEME_MODE = "DARK_MODE";

	const [isDarkMode, setIsDarkMode] = useState(true);

	const darkTheme = (): void => {
		const htmlDoc = document.documentElement;
		setIsDarkMode(true);

		htmlDoc.classList.remove("light");
		htmlDoc.classList.add("dark");

		localStorage.setItem(THEME_MODE, "dark");
	};

	const lightTheme = (): void => {
		const htmlDoc = document.documentElement;
		setIsDarkMode(false);

		htmlDoc.classList.remove("dark");
		htmlDoc.classList.add("light");

		localStorage.setItem(THEME_MODE, "light");
	};

	const handleChangeTheme = (): void => {
		isDarkMode ? lightTheme() : darkTheme();
	};

	useEffect((): void => {
		const storedTheme = (): void => {
			const storeTheme = localStorage.getItem(THEME_MODE);

			themePreference(THEME_MODE);

			!storeTheme || storeTheme.toLowerCase() === "light"
				? lightTheme()
				: darkTheme();
		};

		storedTheme();
	}, [isDarkMode]);

	return { isDarkMode, handleChangeTheme };
};
