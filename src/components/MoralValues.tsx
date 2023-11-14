import SvgIcon from "./SvgIcon";

export default function MoralValues() {
	return (
		<section className="px-4 max-w-6xl mx-auto py-8">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="toga" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p>
							Otorgamos Grado de{" "}
							<span className="text-ibp-500">
								Bachiller Técnico y Título a Nombre de la Nación.
							</span>
						</p>
					</div>
				</article>

				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="degree" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p>
							<span className="text-ibp-500">Licenciados por MINEDU,</span>
							<br />
							Resolución Ministerial N° 683-2018
						</p>
					</div>
				</article>

				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="job" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p>
							Centro de{" "}
							<span className="text-ibp-500">
								Experiencias Formativas y Bolsa de Empleo
							</span>
						</p>
					</div>
				</article>

				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="money" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p>
							Facilidades de{" "}
							<span className="text-ibp-500">pago y precios accesibles</span>
						</p>
					</div>
				</article>

				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="psychologist" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p>
							Apoyo <span className="text-ibp-500">psicológico </span>a todos
							nuestros estudiantes
						</p>
					</div>
				</article>

				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="hands" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p className="text-ibp-500">Responsabilidad social</p>
					</div>
				</article>

				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="cross" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p>
							Formación en
							<span className="text-ibp-500"> valores cristianos</span>
						</p>
					</div>
				</article>

				<article className="flex items-center flex-col gap-4 p-6 text-slate-800 bg-slate-50 shadow rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-b dark:border-slate-800 transition-colors">
					<div className="w-16 h-16 flex justify-center items-center md:mr-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
						<SvgIcon iconID="users" classes="w-8 h-8" />
					</div>

					<div className="text-base font-light text-center">
						<p>
							Organización y difusión de{" "}
							<span className="text-ibp-500">eventos académicos</span>
						</p>
					</div>
				</article>
			</div>
		</section>
	);
}
