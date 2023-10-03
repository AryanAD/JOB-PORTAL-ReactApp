import { Table, Sheet, Button } from "@mui/joy";
import { Box, Divider, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const AdminVendors = () => {
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
							<th style={{ textAlign: "center", width: "250px" }}>Actions</th>
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
							<td style={{ color: "#138113" }}>Approved</td>
							<td style={{ display: "flex", justifyContent: "space-evenly" }}>
								<Button
									sx={{ gap: 1 }}
									color="success"
									onClick={function () {}}
									size="sm"
									variant="solid">
									<DoneRoundedIcon
										sx={{
											fontSize: "20px",
										}}
									/>
									Approve
								</Button>
								<Button
									sx={{ gap: 1 }}
									color="danger"
									onClick={function () {}}
									size="sm"
									variant="solid">
									<CloseRoundedIcon
										sx={{
											fontSize: "20px",
										}}
									/>
									Reject
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</Sheet>
		</Box>
	);
};

export default AdminVendors;
