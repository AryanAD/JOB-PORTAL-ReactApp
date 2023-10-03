import { Table, Sheet, Button } from "@mui/joy";
import { Box, Divider, Typography } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const AdminUsers = () => {
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
					Users
				</Typography>
			</Divider>

			<Sheet
				sx={{
					display: "flex",
					width: "50%",
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
							<th style={{ width: "200px" }}>Name</th>
							<th style={{ width: "250px" }}>Email</th>
							<th style={{ width: "80px" }}>Role</th>
							<th style={{ textAlign: "center" }}>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>David Gilmore</td>
							<td>gilmore.floyd@wmail.com</td>
							<td>User</td>
							<td style={{ textAlign: "right" }}>
								<Button
									sx={{ gap: 1 }}
									color="success"
									onClick={function () {}}
									size="sm"
									variant="solid">
									<DeleteForeverRoundedIcon
										sx={{
											fontSize: "20px",
										}}
									/>
									Approve User
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</Sheet>
		</Box>
	);
};

export default AdminUsers;
