import { Outlet } from "react-router-dom";

const PublicLayout = () => {
	return (
		<>
			<Outlet /> {/* This will render the child routes */}
		</>
	);
};

export default PublicLayout;
