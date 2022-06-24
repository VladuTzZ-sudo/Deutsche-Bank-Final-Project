import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
	if (!sessionStorage.getItem("isAuth")) {
		sessionStorage.setItem("isAuth", "false");
	}
	if (sessionStorage.getItem("isAuth") == "false") {
		return false;
	} else {
		return true;
	}
}
export default function PrivateRoute() {
	return useAuth() === true ? <Outlet /> : <Navigate to="/loginPage" />;
}
