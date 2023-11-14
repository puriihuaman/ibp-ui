import MainComponent from "@features/MainComponent";
import CareerInformation from "./components/CareerInformation";
import Form from "./components/Form";
import GraduateProfile from "./components/GraduateProfile";
import Requirement from "./components/Requirement";
import Schedule from "./components/Schedule";
import Title from "./components/Title";
import Banner from "@features/Banner";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

export default function Administration() {
	return (
		<>
			<Banner
				title="Administración de Empresa"
				srcImage={"bg-[url('/assets/images/adm.png')]"}
				transparency={true}
			>
				<a
					className="mt-4 py-3 px-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 rounded-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
					href="https://ibp.edu.pe/doc/AdministracionIBP.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					Descargar Malla
				</a>
			</Banner>

			<Header />

			<MainComponent>
				<section className="max-w-6xl mx-auto py-8 px-4">
					<div className="flex flex-col lg:flex-row gap-8">
						<section className="w-full">
							<CareerInformation
								title="Administración de Empresa"
								description="Docentes con experiencia en emprendimiento y enseñanza en instituciones superiores.Desarrollo de las habilidades blandas para la empleabilidad.Asesoramiento en las ideas de negocios y Ferias de emprendimiento.Malla curricular diseñada para formar emprendedores con valores.Convenios y bolsa de empleo.Organización y difusión de talleres,conferencias y congresos."
							/>

							<GraduateProfile description="Administrar adecuada y éticamente la información de la empresa para contribuir a la toma de decisiones.Liderar y supervisar grupos de trabajo, círculos de calidad y cadenas de valor. Gestionar los procesos de la empresa mediante herramientas tecnológicas.Implementar planes y estrategias para mejorar la rentabilidad de la empresa.Optimizar los procesos de comunicación de la organización para mejorar la experiencia de los clientes.Desarrollar nuevos modelos de negocio y emprendimiento en cualquier rubro." />

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
