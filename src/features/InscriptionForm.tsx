import SvgIcon from "@components/SvgIcon";
import { useState } from "react";

export default function InscriptionForm() {
	const [isDataComplete, setIsDataComplete] = useState<boolean>(true);
	const [isEducationComplete, setIsEducationComplete] =
		useState<boolean>(false);
	const [isOtherComplete, setIsOtherComplete] = useState<boolean>(false);

	return (
		<div className="w-full overflow-hidden bg-slate-50 rounded-md shadow-lg dark:bg-slate-900 transition-colors">
			<div className="relative py-4 text-center border-b border-ibp-500 mb-4">
				<h2 className="text-2xl font-bold">Registra tu datos</h2>
			</div>

			<form action="#" className="w-full p-6">
				<div className="relative w-full flex overflow-hidden">
					{/* Personal data */}
					<fieldset
						className={`w-full pt-4 px-4 bg-inherit border border-slate-200 rounded-md ${
							isDataComplete
								? "relative translate-x-0 "
								: "absolute -translate-x-full"
						} dark:border-slate-800 transition-all`}
					>
						<legend className="text-sm text-slate-500">Datos personales</legend>

						<fieldset className="mb-4">
							<label className="block mb-2" htmlFor="name">
								Nombre
							</label>

							<input
								className="flex w-full py-3 px-4 outline-none border border-slate-200 text-slate-800 bg-slate-50 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-slate-400 placeholder:text-sm dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500"
								type="text"
								id="name"
								name="name"
								placeholder="Escribe tu nombre"
							/>
						</fieldset>

						<fieldset className="mb-4">
							<label className="block mb-2" htmlFor="surname">
								Apellidos
							</label>

							<input
								className="flex w-full py-3 px-4 outline-none border border-slate-200 text-slate-800 bg-slate-50 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-slate-400 placeholder:text-sm dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500"
								type="text"
								id="surname"
								name="surname"
								placeholder="Escribe tus apellidos"
							/>
						</fieldset>

						<fieldset className="mb-4">
							<label className="block mb-2" htmlFor="phone">
								Teléfono
							</label>

							<input
								className="flex w-full py-3 px-4 outline-none border border-slate-200 text-slate-800 bg-slate-50 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-slate-400 placeholder:text-sm dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500"
								type="tel"
								id="phone"
								name="phone"
								placeholder="999 999 999"
							/>
						</fieldset>

						<fieldset className="mb-4">
							<label className="block mb-2" htmlFor="email">
								Correo electrónico
							</label>

							<input
								className="flex w-full py-3 px-4 outline-none border border-slate-200 text-slate-800 bg-slate-50 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-slate-400 placeholder:text-sm dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500"
								type="email"
								id="email"
								name="email"
								placeholder="Escribe tu correo electrónico"
							/>
						</fieldset>

						<fieldset className="mb-4 flex justify-center gap-4">
							<button
								className="inline-flex items-center gap-2 text-center py-2 px-4 text-sm text-rose-50 bg-rose-500 border border-rose-500 hover:bg-rose-600 hover:border-rose-600 disabled:text-rose-300 disabled:bg-rose-100 disabled:border-current dark:disabled:text-rose-500/50 dark:disabled:bg-rose-600/20 dark:disabled:border-current rounded-md cursor-pointer transition-all"
								disabled={true}
								type="button"
								onClick={() => {
									setIsDataComplete(!isDataComplete);
									setIsEducationComplete(!isEducationComplete);
								}}
							>
								<SvgIcon iconID="arrow-linear-left" classes="w-4 h-4" />
								Volver
							</button>

							<button
								className="inline-flex items-center gap-2 text-center py-2 px-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 hover:bg-ibp-600 hover:border-ibp-600 rounded-md cursor-pointer transition-all"
								type="button"
								onClick={() => {
									setIsDataComplete(!isDataComplete);
									setIsEducationComplete(!isEducationComplete);
								}}
							>
								Siguiente
								<SvgIcon iconID="arrow-linear-right" classes="w-4 h-4" />
							</button>
						</fieldset>
					</fieldset>

					{/* Education data */}
					<fieldset
						className={`w-full pt-4 px-4 bg-inherit border border-slate-200 rounded-md ${
							isEducationComplete
								? "relative translate-x-0"
								: "absolute -translate-x-full"
						} dark:border-slate-800 transition-all`}
					>
						<legend className="text-sm text-slate-500">Educación</legend>

						<fieldset className="mb-8">
							<label className="block mb-2" htmlFor="career">
								Programa de estudios
							</label>

							<select
								className="w-full py-3 px-4 bg-slate-50 outline-none border border-slate-200 rounded-md focus:border-ibp-500 active:border-ibp-500 dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500 transition-colors"
								name="career"
								id="career"
							>
								<option value="" className="text-sm">
									Escoja su carrera
								</option>
								<option value="administration" className="text-sm">
									administración de empresas
								</option>
								<option value="accounting" className="text-sm">
									Contabilidad
								</option>
								<option value="system" className="text-sm">
									Desarrollo de Sistemas
								</option>
							</select>
						</fieldset>

						<fieldset className="mb-6">
							<label className="block mb-2" htmlFor="academic-situation">
								Situación
							</label>

							<select
								className="w-full py-3 px-4 bg-slate-50 outline-none border border-slate-200 rounded-md focus:border-ibp-500 active:border-ibp-500 dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500 transition-colors"
								name="academic-situation"
								id="academic-situation"
							>
								<option value="" className="text-sm">
									Usted es
								</option>
								<option value="student" className="text-sm capitalize">
									Estudiante
								</option>
								<option value="graduate" className="text-sm capitalize">
									Egresado
								</option>
							</select>
						</fieldset>

						<fieldset className="mb-6 flex justify-center gap-4">
							<button
								className="inline-flex items-center gap-2 text-center py-2 px-4 text-sm text-rose-500 bg-rose-100 border border-rose-500 hover:text-rose-50 hover:bg-rose-500 hover:border-rose-500 rounded-md cursor-pointer dark:text-rose-400 dark:bg-rose-950/60 dark:border-current dark:hover:text-rose-50 dark:hover:bg-rose-500 dark:hover:border-rose-500 transition-colors"
								type="button"
								onClick={() => {
									setIsDataComplete(!isDataComplete);
									setIsEducationComplete(!isEducationComplete);
								}}
							>
								<SvgIcon iconID="arrow-linear-left" classes="w-4 h-4" />
								Volver
							</button>

							<button
								className="inline-flex items-center gap-2 text-center py-2 px-4 text-sm text-slate-50 bg-ibp-500 border border-ibp-500 hover:text-slate-50 hover:bg-ibp-600 hover:border-ibp-600 rounded-md cursor-pointer transition-all"
								type="button"
								onClick={() => {
									setIsDataComplete(false);
									setIsEducationComplete(false);
									setIsOtherComplete(true);
								}}
							>
								Siguiente
								<SvgIcon iconID="arrow-linear-right" classes="w-4 h-4" />
							</button>
						</fieldset>
					</fieldset>

					{/* Other data */}
					<fieldset
						className={`w-full pt-4 px-4 bg-inherit border border-slate-200 rounded-md ${
							isOtherComplete
								? "relative translate-x-0"
								: "absolute -translate-x-full"
						} dark:border-slate-800 transition-all`}
					>
						<legend className="text-sm text-slate-500">Otros</legend>

						<fieldset className="mb-4">
							<label className="block mb-2" htmlFor="subject">
								Tema de interés
							</label>

							<textarea
								className="w-full py-2 px-4 bg-slate-50 outline-none border-2 border-slate-200 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-sm placeholder:text-slate-400 dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500"
								name="subject"
								id="subject"
								placeholder="Como realizar un buen CV"
							></textarea>
						</fieldset>
					</fieldset>
				</div>

				{isOtherComplete && (
					<fieldset className="py-4 flex justify-center gap-4">
						{isOtherComplete && (
							<>
								<button
									className="inline-flex items-center gap-2 text-center py-2 px-4 text-sm text-rose-500 bg-rose-100 border border-rose-500 hover:text-rose-50 hover:bg-rose-500 hover:border-rose-500 rounded-md cursor-pointer dark:text-rose-400 dark:bg-rose-950/60 dark:border-current dark:hover:text-rose-50 dark:hover:bg-rose-500 dark:hover:border-rose-500 transition-colors"
									type="button"
									onClick={() => {
										setIsOtherComplete(!isOtherComplete);
										setIsEducationComplete(!isEducationComplete);
									}}
								>
									<SvgIcon iconID="arrow-linear-left" classes="w-4 h-4" />
									Volver
								</button>

								<button
									className="inline-flex items-center gap-2 text-sm py-2 px-4 text-slate-50 bg-ibp-500 border-2 border-ibp-500 hover:text-slate-50 hover:bg-ibp-600 hover:border-ibp-600 rounded-md transition-all"
									type="button"
								>
									Enviar
									<SvgIcon iconID="send-linear" classes="w-4 h-4" />
								</button>
							</>
						)}
					</fieldset>
				)}
			</form>
		</div>
	);
}
