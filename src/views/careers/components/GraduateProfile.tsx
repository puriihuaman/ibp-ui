export default function GraduateProfile({
	title = "Perfil de Egresado",
	description,
}: {
	title?: string;
	description: string;
}) {
	return (
		<article className="text-center py-8 lg:text-left">
			<h2 className="text-2xl font-bold mb-4 lg:text-3xl">{title}</h2>

			<p>{description}</p>
		</article>
	);
}
