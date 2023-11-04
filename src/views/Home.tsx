import Agreements from "@components/Agreements";
import BlogSection from "@components/BlogSection";
import Courses from "@components/Courses";
import InstallmentPrices from "@components/InstallmentPrices";
import MoralValues from "@components/MoralValues";
import StudentStatistics from "@components/StudentStatistics";
import CareerSection from "./careers/components/CareerSection";
import MainComponent from "@features/MainComponent";
import Banner from "@features/Banner";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

export default function Home() {
	return (
		<>
			<Banner />
			<Header />

			<MainComponent>
				<MoralValues />

				<StudentStatistics />

				<CareerSection />

				<Agreements />

				<InstallmentPrices />

				<Courses />

				<BlogSection />
			</MainComponent>

			<Footer />
		</>
	);
}
