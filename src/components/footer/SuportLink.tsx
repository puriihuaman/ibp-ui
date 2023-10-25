export default function SuportLink() {
	return (
		<div className="flex-1 text-center">
			<div className="mb-4">
				<h4 className="uppercase text-2xl">Link de apoyo</h4>
			</div>

			<div className="flex flex-col gap-2">
				<a
					className="block p-2 text-blue-500 hover:text-blue-600 transition-colors"
					href="https://www.gob.pe/941-consultar-titulos-de-instituciones-tecnologicas-y-pedagogicas"
					rel="noopener noreferrer"
					target="_blank"
				>
					Consulta tu título
				</a>

				<a
					className="block p-2 text-blue-500 hover:text-blue-600 transition-colors"
					href="https://www.empleosperu.gob.pe/portal-mtpe/#/"
					rel="noopener noreferrer"
					target="_blank"
				>
					Empleos Perú
				</a>
			</div>
		</div>
	);
}
