import Association from "./Association";
import Copyright from "./Copyright";
import Reclamation from "./Reclamation";
import SuportLink from "./SuportLink";

export default function Footer() {
	return (
		<footer className="p-4 py-8 text-slate-100 bg-slate-900">
			<section className="max-w-6xl mx-auto flex flex-wrap flex-col gap-8 md:flex-row">
				<Association />

				<Reclamation />

				<SuportLink />

				<Copyright />
			</section>
		</footer>
	);
}
