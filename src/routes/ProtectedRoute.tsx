import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
	isStudent,
	children,
	redirectTo,
}: {
	isStudent: boolean;
	children: ReactNode;
	redirectTo: string;
}) {
	if (!isStudent) {
		return <Navigate to={redirectTo} />;
	}

	return children ? children : <Outlet />;
}
