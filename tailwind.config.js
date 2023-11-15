/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				swipe: "swipe 10s linear infinite backwards",
				"swipe-reverse": "swipe-reverse 10s linear infinite reverse backwards",
				"loop-scroll": "loop-scroll 20s alternate linear infinite",
			},

			keyframes: {
				swipe: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-65%)" },
				},
				"loop-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
			colors: {
				ibp: {
					// 50: "#E6F1FE",
					// 100: "#CCE3FD",
					// 200: "#99C7FB",
					// 300: "#66AAF9",
					// 400: "#576afd",
					// 500: "#393ff2",
					// 600: "#2628c5",
					// 700: "#004493",
					// 800: "#002E62",
					// 900: "#001731",

					50: "#E3F2FD",
					100: "#BBDEFB",
					200: "#90CAF9",
					300: "#64B5F6",
					400: "#42A5F5",
					500: "#2196F3",
					600: "#1E88E5",
					700: "#1976D2",
					800: "#1565C0",
					900: "#0D47A1",
				},
			},
		},
	},
	plugins: [],
};
