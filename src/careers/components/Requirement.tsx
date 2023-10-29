import { requirements } from "@careers/data/requirements";
import { Requirement } from "@careers/interfaces/requirement";

export default function Requirement() {
	return (
		<div className="text-center py-8 lg:text-left">
			<h2 className="text-2xl font-bold mb-4 lg:text-3xl">Requisitos</h2>

			<div className="flex flex-wrap gap-4 text-center">
				{requirements.map((requirement: Requirement) => (
					<div
						key={requirement.id}
						className="flex-1 flex flex-col justify-center items-center gap-4 p-4 bg-gray-100 shadow-md"
					>
						<span className="text-blue-500">
							<span className="flex justify-center items-center text-current fill-current">
								<svg className="block w-20 h-20">
									<use href={requirement.icon}></use>
								</svg>
							</span>
						</span>

						<span className="font-semibold text-gray-600 mb-auto">
							{requirement.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
