import SvgIcon from "./SvgIcon";

export default function Network() {
	return (
		<div className="flex justify-center items-center flex-wrap gap-4">
			<a
				href="https://m.facebook.com/people/CEFE-IBP/100057463237906/"
				className="block text-ibp-500"
				target="_blank"
			>
				<SvgIcon iconID="facebook" classes="w-6 h-6" />

				<span className="hidden">Facebook</span>
			</a>

			<a href="#" className="block text-pink-500" target="_blank">
				<SvgIcon iconID="instagram" classes="w-6 h-6" />
				<span className="hidden">instagram</span>
			</a>
		</div>
	);
}
