import SvgIcon from "@components/SvgIcon";

export default function Form() {
	return (
		<aside className="lg:ml-auto lg:max-w-xs">
			<form
				action="#"
				method="POST"
				className="sticky top-20 px-6 py-8 flex flex-col gap-6 text-slate-900 bg-slate-50 text-center border border-slate-200 shadow-sm rounded-md dark:text-slate-50 dark:bg-slate-900 dark:border-slate-800 transition-all"
			>
				<div className="flex flex-col gap-3">
					<h3 className="font-bold text-2xl text-ibp-500">
						¡Aprovecha un descuento del 50% disponible hasta el 18 de agosto!
					</h3>

					<p className="font-semibold text-slate-800 dark:text-slate-300">
						Obtén un descuento del 50% al referir a un amigo.
						<br />
						<span>¡No te pierdas esta oferta especial!</span>
					</p>
				</div>

				<fieldset className="block">
					<input
						className="block w-full py-3 px-4 outline-none bg-slate-50 border-2 border-slate-200 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-slate-400 placeholder:text-sm dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500 transition-all"
						type="text"
						placeholder="Nombres y Apellidos"
					/>
				</fieldset>

				<fieldset>
					<input
						className="block w-full py-3 px-4 outline-none bg-slate-50 border-2 border-slate-200 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-slate-400 placeholder:text-sm dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500 transition-all"
						type="text"
						placeholder="999-999-999"
					/>
				</fieldset>

				<fieldset>
					<input
						className="block w-full py-3 px-4 outline-none bg-slate-50 border-2 border-slate-200 rounded-md focus:border-ibp-500 active:border-ibp-500 placeholder:text-slate-400 placeholder:text-sm dark:bg-slate-900 dark:border-slate-800 dark:focus:border-ibp-500 dark:active:border-ibp-500 transition-all"
						type="text"
						placeholder="ibp@gmail.com"
					/>
				</fieldset>

				<fieldset>
					<button
						className="flex justify-center items-center gap-2 mx-auto py-2 px-6 text-slate-50 bg-ibp-500 rounded-md border-2 border-ibp-500 hover:bg-ibp-600  hover:border-ibp-600 transition-colors"
						type="submit"
					>
						<SvgIcon iconID="send-linear" classes="w-5 h-5" />

						<span>Enviar</span>
					</button>
				</fieldset>
			</form>
		</aside>
	);
}
