import Agreements from "@components/Agreements";
import BlogSection from "@components/BlogSection";
import Courses from "@components/Courses";
import InstallmentPrices from "@components/InstallmentPrices";
import MoralValues from "@components/MoralValues";
import StudentStatistics from "@components/StudentStatistics";
import CareerSection from "./careers/components/CareerSection";
import MainComponent from "@features/MainComponent";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Slider from "@features/Slider";

export default function Home() {
	return (
		<>
			<Slider />
			<Header />

			<MainComponent>
				<CareerSection />

				<Courses />

				<MoralValues />

				<StudentStatistics />

				<Agreements />

				<section className="relative min-h-[500px] mb-8">
					<InstallmentPrices />

					<BlogSection />
				</section>
			</MainComponent>

			<Footer />
		</>
	);
}
