import UserCard from "@components/UserCard";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Banner from "@features/Banner";
import MainComponent from "@features/MainComponent";
import { StaffType } from "@interfaces/staff";
import { staffList } from "@services/staff-list";

export default function Staff() {
	return (
		<>
			<Banner
				srcImage={"bg-[url('/assets/images/bienestudianttil.png')]"}
				title="Plana Administrativa"
			/>
			<Header />

			<MainComponent>
				<section className="max-w-5xl mx-auto px-4 py-16">
					<h1 className="mb-8 font-bold text-2xl capitalize lg:text-4xl">
						Nuestro personal
					</h1>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-wrap gap-8">
						{staffList.map((staff: StaffType) => (
							<UserCard key={staff.id} user={staff} />
						))}
					</div>
				</section>
			</MainComponent>

			<Footer />
		</>
	);
}
