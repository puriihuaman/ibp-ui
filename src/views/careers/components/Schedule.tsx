import SvgIcon from "@components/SvgIcon";

export default function Schedule() {
	return (
		<div className="text-center py-8 lg:text-left">
			<h4 className="font-bold text-2xl mb-4 lg:text-3xl">Horario</h4>

			<div className="bg-slate-50 shadow-sm rounded-md overflow-hidden border border-slate-200 dark:bg-slate-900 dark:border-slate-800 transition-all">
				<div className="grid grid-cols-4 py-3 font-semibold border-b border-slate-200 dark:border-slate-800">
					<div>
						<span></span>
					</div>
					<div className="flex justify-center items-center">
						<span>Turnos</span>
					</div>

					<div className="flex justify-center items-center">
						<span>Frecuencia</span>
					</div>

					<div className="flex justify-center items-center">
						<span>Lugar</span>
					</div>
				</div>

				<div className="py-2">
					<div className="grid grid-cols-4 py-3 text-slate-600 dark:text-slate-400">
						<div className="w-16 h-16 flex justify-center items-center mx-auto p-3 text-yellow-500 bg-yellow-50 rounded-md dark:bg-yellow-900/20 transition-colors">
							<SvgIcon iconID="sun-on-linear" classes="w-8 h-8" />
						</div>
						<div className="flex justify-center items-center">
							<span>8:00 - 13:00</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lunes - Viernes</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lima</span>
						</div>
					</div>

					<div className="grid grid-cols-4 py-3 text-slate-600 dark:text-slate-400">
						<div className="w-16 h-16 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
							<SvgIcon iconID="moon-on-linear" classes="w-8 h-8" />
						</div>

						<div className="flex justify-center items-center">
							<span className="">18:30 - 22:30</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lunes - Viernes</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lima</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
