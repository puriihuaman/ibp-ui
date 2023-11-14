import SvgIcon from "@components/SvgIcon";
import { Requirement } from "@interfaces/requirement";
import { requirements } from "@services/requirements";

export default function Requirement() {
	return (
		<div className="text-center py-8 lg:text-left">
			<h2 className="text-2xl font-bold mb-4 lg:text-3xl">Requisitos</h2>

			<div className="flex flex-wrap gap-4 text-center">
				{requirements.map((requirement: Requirement) => (
					<div
						key={requirement.id}
						className="flex-1 flex flex-col justify-center items-center gap-4 p-4 bg-slate-50 border border-slate-200 shadow rounded-md dark:bg-slate-900 dark:border-slate-800 transition-all"
					>
						<div className="w-16 h-16 flex justify-center items-center p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
							<SvgIcon iconID={requirement.icon} classes="w-8 h-8" />
						</div>

						<span className="font-semibold text-slate-600 mb-auto dark:text-slate-400">
							{requirement.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
