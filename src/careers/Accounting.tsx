import Form from "./components/Form";
import Requirement from "./components/Requirement";
import Schedule from "./components/Schedule";
import Title from "./components/Title";

export default function Accounting() {
	return (
		<main className="max-w-6xl mx-auto px-4 py-8">
			<div className="flex flex-col lg:flex-row gap-8">
				<section className="w-full">
					<article className="text-center py-8 lg:text-left">
						<h2 className="text-2xl font-bold mb-4 lg:text-3xl">
							Contabilidad
						</h2>

						<p>
							Docentes reconocidos con experiencia en procesos contables,
							tributarios y financieros. Desarrollo de habilidades blandas para
							la empleabilidad. Desarrollamos tu talento para el manejo de la
							información de tu negocio u organización, incluyendo sus estados
							financieros. Malla curricular diseñada para formar emprendedores
							con valores. Convenios y bolsa de empleo. Organización y difusión
							de talleres, conferencias y congresos.
						</p>
					</article>

					<article className="text-center py-8 lg:text-left">
						<h2 className="text-2xl font-bold mb-4 lg:text-3xl">
							Perfil de Egresado
						</h2>

						<p>
							Analizar la situación económico – financiera de la organización
							para la correcta toma de decisiones. Liderar y supervisar grupos
							de trabajo. Gestionar los procesos contables mediante software y
							herramientas tecnológicas. Implementar estrategias para la
							rentabilidad de la empresa mediante los estados financieros.
							Optimizar los procesos de comunicación de la organización para
							mejorar la experiencia de los clientes. Desarrollar nuevos modelos
							de negocio y emprendimiento en cualquier rubro.
						</p>
					</article>

					<Schedule />

					<Requirement />

					<Title />
				</section>

				<Form />
			</div>
		</main>
	);
}
