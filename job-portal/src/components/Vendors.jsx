import { Table, Sheet } from "@mui/joy";

const Vendors = () => {
	return (
		<div>
			<Sheet
				sx={{
					borderRadius: "11px",
					bgcolor: "#29a2f3",
				}}>
				<Table
					borderAxis="xBetween"
					color="neutral"
					size="lg"
					stripe="odd"
					variant="soft">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Services</th>
							<th>Designation</th>
							<th>Email</th>
							<th>Contact</th>
							<th>Address</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>H89yhaBDSJAKH8a09</td>
							<td>David Gilmore</td>
							<td>Guitarist</td>
							<td>Guitarist</td>
							<td>gilmore.floyd@wmail.com</td>
							<td>9877927103</td>
							<td>House - 4, HouseHouse</td>
							<td>Approved</td>
						</tr>
					</tbody>
				</Table>
			</Sheet>
		</div>
	);
};

export default Vendors;
