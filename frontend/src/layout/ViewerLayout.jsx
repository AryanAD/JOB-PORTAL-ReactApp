import { Outlet } from "react-router-dom";

const ViewerLayout = () => {
	return (
		<>
			<Outlet /> {/* This will render the child routes */}
		</>
	);
};

export default ViewerLayout;
