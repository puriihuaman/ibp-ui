import { Title } from "@interfaces/title";
import { titles } from "@services/titles";

export default function Title() {
	return (
		<div className="text-center py-8 lg:text-left">
			<h2 className="text-2xl font-bold mb-4 lg:text-3xl">Títulos</h2>

			<div className="flex flex-col gap-4">
				{titles.map((title: Title) => (
					<div key={title.id} className="overflow-hidden shadow rounded-md">
						<img
							className="aspect-video"
							src={title.path}
							alt={title.description}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
