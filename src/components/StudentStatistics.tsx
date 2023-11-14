import SvgIcon from "./SvgIcon";

export default function StudentStatistics() {
	return (
		<section className="px-4 max-w-6xl mx-auto py-8">
			<div className="relative w-full min-h-[120px] h-full overflow-hidden lg:min-h-[160px]">
				<div className="absolute w-full flex gap-8">
					<div className={`flex gap-8 animate-swipe lg:animate-none`}>
						{statisticList.map((statistic: Statistic) => (
							<article
								key={statistic.id}
								className={`flex justify-center items-center gap-4 p-4 text-slate-800 bg-slate-50 border-b shadow rounded-md lg:p-8 dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 transition-colors`}
							>
								<div className="font-bold text-center">
									<h3 className="text-xl lg:text-2xl">{statistic.amount}</h3>
									<h4 className="text-slate-700 dark:text-slate-400 transition-colors">
										{statistic.description}
									</h4>
								</div>

								<div className="flex justify-center items-center text-ibp-500 w-16 h-16 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
									<SvgIcon iconID={statistic.iconID} classes="w-8 h-8" />
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

type Statistic = {
	id: number;
	amount: number;
	description: string;
	iconID: string;
};

const statisticList: Statistic[] = [
	{
		id: 1,
		amount: 80,
		description: "Ingresantes 2023",
		iconID: "person-standing",
	},
	{ id: 2, amount: 271, description: "Matriculados 2023", iconID: "file-text" },
	{ id: 3, amount: 25, description: "Egresados 2023", iconID: "toga" },
	{
		id: 4,
		amount: 100,
		description: "Becados 2023",
		iconID: "scholarship-recipients",
	},
];
