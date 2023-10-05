import { Outlet } from "react-router-dom";

const UserLayout = () => {
	return (
		<>
			<Outlet /> {/* This will render the child routes */}
		</>
	);
};

export default UserLayout;
