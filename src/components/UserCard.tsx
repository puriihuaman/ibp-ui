import { StaffType } from "@interfaces/staff";
import { ITeacher } from "@interfaces/teacher";
import SvgIcon from "./SvgIcon";

export default function UserCard({ user }: { user: StaffType | ITeacher }) {
	return (
		<article className="flex flex-col gap-4 p-6 bg-slate-50 border shadow-md rounded-md dark:bg-slate-900 dark:border-slate-800 transition-all">
			<header className="overflow-hidden">
				<img
					className="aspect-square w-24 h-24 mx-auto rounded-full object-cover"
					src={user.photo}
					alt={user.name}
				/>
			</header>

			<div className="text-center">
				<h3 className="font-semibold mb-4 text-xl">{user.name}</h3>

				<p>{user.biography}</p>
			</div>

			<footer className="mt-auto flex gap-4 justify-between items-center flex-wrap md:flex-nowrap">
				<a
					className="inline-flex justify-center items-center gap-2 w-full p-2 text-sm text-slate-500 border-b border-transparent hover:border-ibp-500 hover:text-ibp-500 transition-all dark:text-slate-400 dark:hover:text-ibp-500"
					href={user.linkedin}
					target="_blank"
					rel="noopener noreferrer"
				>
					<SvgIcon iconID="linkedin" classes="w-5 h-5 text-ibp-500" />
					<span>LinkedIn</span>
				</a>

				<a
					className="inline-flex justify-center items-center gap-2 w-full p-2 text-sm text-slate-500 border-b border-transparent hover:border-ibp-500 hover:text-ibp-500 transition-all dark:text-slate-400 dark:hover:text-ibp-500"
					href={user.mail}
					rel="noopener noreferrer"
				>
					<SvgIcon iconID="mail" classes="w-5 h-5" />
					<span>Correo</span>
				</a>
			</footer>
		</article>
	);
}
