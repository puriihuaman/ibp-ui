export default function SvgIcon({
	iconID,
	classes,
}: {
	iconID: string;
	classes: string;
}) {
	return (
		<span className="flex justify-center items-center">
			<svg className={`block text-current fill-current ${classes}`}>
				<use href={`/assets/icons/icons.svg#${iconID}`} />
			</svg>
		</span>
	);
}
