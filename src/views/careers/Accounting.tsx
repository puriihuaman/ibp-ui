import MainComponent from "@features/MainComponent";
import CareerInformation from "./components/CareerInformation";
import Form from "./components/Form";
import GraduateProfile from "./components/GraduateProfile";
import Requirement from "./components/Requirement";
import Schedule from "./components/Schedule";
import Title from "./components/Title";
import Footer from "@components/footer/Footer";
import Banner from "@features/Banner";
import Header from "@components/header/Header";

export default function Accounting() {
	return (
		<>
			<Banner />
			<Header />

			<MainComponent>
				<section className="max-w-6xl mx-auto py-8">
					<div className="flex flex-col lg:flex-row gap-8">
						<section className="w-full">
							<CareerInformation
								title="Contabilidad"
								description="Docentes reconocidos con experiencia en procesos contables,
							tributarios y financieros. Desarrollo de habilidades blandas para
							la empleabilidad. Desarrollamos tu talento para el manejo de la
							información de tu negocio u organización, incluyendo sus estados
							financieros. Malla curricular diseñada para formar emprendedores
							con valores. Convenios y bolsa de empleo. Organización y difusión
							de talleres, conferencias y congresos."
							/>

							<GraduateProfile
								description="Analizar la situación económico – financiera de la organización
							para la correcta toma de decisiones. Liderar y supervisar grupos
							de trabajo. Gestionar los procesos contables mediante software y
							herramientas tecnológicas. Implementar estrategias para la
							rentabilidad de la empresa mediante los estados financieros.
							Optimizar los procesos de comunicación de la organización para
							mejorar la experiencia de los clientes. Desarrollar nuevos modelos
							de negocio y emprendimiento en cualquier rubro."
							/>

							<Schedule />

							<Requirement />

							<Title />
						</section>

						<Form />
					</div>
				</section>
			</MainComponent>

			<Footer />
		</>
	);
}
