import { useStoredTheme } from "@hooks/useStoredTheme";
import SvgIcon from "./SvgIcon";

export default function ToggleTheme({ classes }: { classes?: string }) {
	const { isDarkMode, handleChangeTheme } = useStoredTheme();

	return (
		<button
			className={`max-w-min px-4 rounded-md border border-current ${classes}`}
			onClick={handleChangeTheme}
		>
			<span className="inline-flex items-center gap-2 py-2 whitespace-nowrap">
				<SvgIcon
					iconID={isDarkMode ? "moon-on-linear" : "sun-on-linear"}
					classes="w-5 h-5"
				/>
				<small>{isDarkMode ? "Modo oscuro" : "Modo claro"}</small>
			</span>
		</button>
	);
}
