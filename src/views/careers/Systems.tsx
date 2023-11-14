import Schedule from "./components/Schedule";
import Requirement from "./components/Requirement";
import Title from "./components/Title";
import Form from "./components/Form";
import GraduateProfile from "./components/GraduateProfile";
import CareerInformation from "./components/CareerInformation";
import MainComponent from "@features/MainComponent";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Banner from "@features/Banner";

export default function Systems() {
	return (
		<>
			<Banner
				title="Desarrollo de Sistemas e Información"
				srcImage={"bg-[url('/assets/images/dsi.jpg')]"}
				transparency={true}
			>
				<a
					className="mt-4 py-3 px-4 text-sm text-slate-50 bg-green-500 border-2 border-green-500 rounded-md hover:bg-green-600 hover:border-green-600 transition-all"
					href="https://ibp.edu.pe/doc/DesarrolloIBP.pdf"
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
								title="Desarrollo de Sistemas"
								description="Docentes con experiencia en informática y tecnología. Desarrollo
							de las habilidades blandas para la empleabilidad. Potenciamos tu
							talento para el desarrollo de soluciones informáticas en distintas
							plataformas. Malla curricular diseñada para formar emprendedores
							con valores. Convenios y bolsa de empleo. Organización y difusión
							de talleres, conferencias y congresos."
							/>

							<GraduateProfile
								description="Desarrollar sistemas multiplataformas y ejecutar arquitecturas TI.
							Desarrollar la implementación de arquitecturas de aplicaciones
							móviles. Diseñar sistemas de información, en función de los
							requerimientos estratégicos de la organización. Afrontar cambios
							tecnológicos futuros, con prontitud y efectividad, con capacidad
							de liderazgo y creatividad. Innovar a través de proyectos de
							implementación de software en E-Commerce, CRM, ERP, SCM,
							inteligencia de negocios. Desarrollar nuevos modelos de negocio y
							emprendimiento en el rubro de la tecnología."
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
