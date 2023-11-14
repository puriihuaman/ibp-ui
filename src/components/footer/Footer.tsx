import Association from "./Association";
import Copyright from "./Copyright";
import Reclamation from "./Reclamation";
import SuportLink from "./SuportLink";

export default function Footer() {
	return (
		<footer className="px-4 py-8 text-sm text-slate-800 bg-slate-50 border-t border-slate-200 overflow-hidden dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 transition-colors">
			<section className="max-w-6xl mx-auto py-4 flex flex-wrap flex-col gap-8 md:flex-row">
				<Association />

				<Reclamation />

				<SuportLink />
			</section>

			<Copyright />
		</footer>
	);
}
