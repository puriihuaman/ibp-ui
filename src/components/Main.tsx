import Agreements from "@components/agreements/Agreements";
import BlogSection from "@components/blog/BlogSection";
import Courses from "@components/courses/Courses";
import MoralValues from "@components/moral-values/MoralValues";
import InstallmentPrices from "@components/prices/InstallmentPrices";
import StudentStatistics from "@components/statistics/StudentStatistics";

import CareerSection from "@careers/components/CareerSection";

export default function Main() {
	return (
		<main className="">
			<MoralValues />

			<StudentStatistics />

			<CareerSection />

			<Agreements />

			<InstallmentPrices />

			<Courses />

			<BlogSection />
		</main>
	);
}
