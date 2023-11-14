import SvgIcon from "@components/SvgIcon";

export default function SuportLink() {
	return (
		<div className="flex-1 text-center">
			<div className="mb-4">
				<h4 className="text-xl">Link de apoyo</h4>
			</div>

			<div className="flex flex-col gap-2">
				<a
					className="inline-flex justify-center items-center gap-2 p-2 text-ibsp-500 hover:text-ibp-600 transition-colors"
					href="https://www.gob.pe/941-consultar-titulos-de-instituciones-tecnologicas-y-pedagogicas"
					rel="noopener noreferrer"
					target="_blank"
				>
					Consulta tu título
					<SvgIcon iconID="arrow-line-right" classes="w-5 h-5" />
				</a>

				<a
					className="inline-flex justify-center items-center gap-2 p-2 text-ibsp-500 hover:text-ibp-600 transition-colors"
					href="https://www.empleosperu.gob.pe/portal-mtpe/#/"
					rel="noopener noreferrer"
					target="_blank"
				>
					Empleos Perú
					<SvgIcon iconID="arrow-line-right" classes="w-5 h-5" />
				</a>
			</div>
		</div>
	);
}
