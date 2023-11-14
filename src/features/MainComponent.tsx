import { ReactNode } from "react";

export default function MainComponent({ children }: { children: ReactNode }) {
	return <main>{children}</main>;
}
