import { Table, Sheet } from "@mui/joy";
import { Box, Divider, Typography } from "@mui/material";

const Vendors = () => {
	return (
		<Box
			sx={{
				margin: "auto 20px",
			}}>
			<Divider
				variant="inset"
				textAlign="left">
				<Typography
					sx={{
						color: "black",
						fontFamily: "nunito",
						letterSpacing: "6px",
						marginBottom: "5px",
						fontWeight: "bold",
						textAlign: "center",
					}}
					variant="h4">
					Vendors
				</Typography>
			</Divider>

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
					variant="soft"
					align="left">
					<thead
						style={{
							fontWeight: "bold",
							fontSize: "18px",
						}}>
						<tr>
							<th style={{ width: "50px" }}>ID</th>
							<th>Name</th>
							<th>Services</th>
							<th>Designation</th>
							<th>Email</th>
							<th>Contact</th>
							<th>Address</th>
							<th style={{ width: "150px" }}>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
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
		</Box>
	);
};

export default Vendors;
