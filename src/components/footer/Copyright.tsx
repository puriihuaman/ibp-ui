import Network from "@components/Network";
import ToggleTheme from "@components/ToggleTheme";

export default function Copyright() {
	return (
		<section className="border-t border-slate-200 dark:border-slate-800 transition-colors">
			<div className="max-w-5xl mx-auto text-center text-slate-600 pt-4 dark:text-slate-400">
				<div className="flex justify-center items-center gap-4 flex-wrap md:justify-between">
					<Network />

					<p>
						© {new Date().getFullYear()} Instituto IBP. Todos los derechos
						reservados
					</p>

					<ToggleTheme />
				</div>
			</div>
		</section>
	);
}
