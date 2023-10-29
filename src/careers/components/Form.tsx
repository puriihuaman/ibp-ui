export default function Form() {
	return (
		<aside className="ml-auto lg:max-w-xs">
			<form
				action="#"
				method="POST"
				className="sticky top-20 px-6 py-8 flex flex-col gap-6 text-gray-900 bg-gray-100 text-center shadow-md rounded-md"
			>
				<fieldset className="flex flex-col gap-3">
					<h3 className="font-bold text-2xl text-blue-500">
						¡Aprovecha un descuento del 50% disponible hasta el 18 de agosto!
					</h3>
					<p className="font-semibold text-gray-800">
						Obtén un descuento del 50% al referir a un amigo.
						<span>¡No te pierdas esta oferta especial!</span>
					</p>
				</fieldset>

				<fieldset className="block">
					<input
						className="block w-full py-3 px-4 outline-none ring ring-gray-200 rounded-md focus:ring-blue-500"
						type="text"
						placeholder="Nombres y Apellidos"
					/>
				</fieldset>

				<fieldset>
					<input
						className="block w-full py-3 px-4 outline-none ring ring-gray-200 rounded-md focus:ring-blue-500"
						type="text"
						placeholder="999-999-999"
					/>
				</fieldset>

				<fieldset>
					<input
						className="block w-full py-3 px-4 outline-none ring ring-gray-200 rounded-md focus:ring-blue-500"
						type="text"
						placeholder="ibp@gmail.com"
					/>
				</fieldset>

				<fieldset>
					<button
						className="flex justify-center items-center gap-2 mx-auto py-2 px-6 text-gray-50 bg-blue-500 rounded-md ring ring-blue-500 hover:bg-blue-600 transition-colors"
						type="submit"
					>
						<span className="block text-current fill-current">
							<svg className="block w-5 h-5">
								<use href="/assets/icons/icons.svg#send"></use>
							</svg>
						</span>
						<span>Enviar</span>
					</button>
				</fieldset>
			</form>
		</aside>
	);
}
