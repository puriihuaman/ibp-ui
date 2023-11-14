import UserCard from "@components/UserCard";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import MainComponent from "@features/MainComponent";
import { ITeacher } from "@interfaces/teacher";
import { teachers } from "@services/teacher-list";

export default function Teacher() {
	return (
		<>
			<Header />

			<MainComponent>
				<section className="max-w-5xl mx-auto px-4 py-16">
					<h1 className="mb-4 font-bold text-2xl lg:text-4xl">
						Nuestros docentes
					</h1>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-wrap gap-8">
						{teachers.map((teacher: ITeacher) => (
							<UserCard key={teacher.id} user={teacher} />
						))}
					</div>
				</section>
			</MainComponent>

			<Footer />
		</>
	);
}
