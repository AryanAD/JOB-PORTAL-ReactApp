import {
	Avatar,
	Box,
	Button,
	CssBaseline,
	Grid,
	Link,
	TextField,
	ThemeProvider,
	Typography,
	Paper,
	createTheme,
	InputAdornment,
} from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}>
			{"Copyright © "}
			<Link
				color="inherit"
				href="/">
				React Job Portal
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const defaultTheme = createTheme();

const SignupPage = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid
				container
				component="main"
				sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: "",
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Avatar
							variant="rounded"
							sx={{ m: 1, bgcolor: "#17e717", width: 50, height: 50 }}>
							<LockPersonIcon />
						</Avatar>
						<Typography
							component="h1"
							variant="h4">
							Sign Up
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}>
							<TextField
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PersonIcon />
										</InputAdornment>
									),
								}}
								type="text"
								margin="normal"
								required
								fullWidth
								id="name"
								label="Full Name"
								name="name"
								autoComplete="name"
								autoFocus
							/>
							<TextField
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<EmailIcon />
										</InputAdornment>
									),
								}}
								type="email"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<LockIcon />
										</InputAdornment>
									),
								}}
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<TextField
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<LockIcon />
										</InputAdornment>
									),
								}}
								margin="normal"
								required
								fullWidth
								name="password"
								label="Confirm Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}>
								Sign Up
							</Button>
							<Grid container>
								<Grid item>
									<Link
										href="/signin"
										variant="body2">
										{"↼ Back"}
									</Link>
								</Grid>
							</Grid>
							<Copyright sx={{ mt: 5 }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default SignupPage;
