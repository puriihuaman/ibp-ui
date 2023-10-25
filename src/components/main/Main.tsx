import Agreements from "@components/agreements/Agreements";
import BlogSection from "@components/blog/BlogSection";
import StudyPrograms from "@components/careers/StudyPrograms";
import Courses from "@components/courses/Courses";
import MoralValues from "@components/moral-values/MoralValues";
import InstallmentPrices from "@components/prices/InstallmentPrices";
import StudentStatistics from "@components/statistics/StudentStatistics";

export default function Main() {
	return (
		<main className="">
			<MoralValues />
			<StudentStatistics />
			<StudyPrograms />
			<Agreements />
			<InstallmentPrices />
			<Courses />
			<BlogSection />
		</main>
	);
}
