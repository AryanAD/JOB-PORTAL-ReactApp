import { Box, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { HailRounded as HailRoundedIcon } from "@mui/icons-material";

const footerStyles = {
	left: 0,
	bottom: 0,
	width: "100vw",
	background: "#1565c0",
};
const footerContainer = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-around",
	margin: "0px 10px 0 10px",
};

const divider = {
	borderLeft: "6px solid #222",
	borderRadius: "3px",
	height: "200px",
	position: "absolute",
	left: "65%",
	marginLeft: "-3px",
};
const left = { width: "40vw" };

const right = {
	display: "flex",
	flexFlow: "column",
	height: "25vh",
	justifyContent: "space-evenly",
	alignItems: "center",
	width: "25vw",
	paddingLeft: "20px",
};

const contactInfo = {
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	height: "25vh",
	width: "25vw",
};

const socialIcons = {
	color: "whitesmoke",
};
const link = {
	textDecoration: "none",
	color: "whitesmoke",
};

const UserFooter = () => {
	return (
		<footer style={footerStyles}>
			<Box sx={footerContainer}>
				<Box sx={divider} />
				<Box sx={left}>
					<Typography
						variant="h2"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							color: "#222",
							padding: "10px",
							margin: "20px",
							mb: "16px",
							fontSize: "2rem",
							fontFamily: "monospace",
							fontWeight: "bolder",
						}}>
						<HailRoundedIcon
							sx={{
								fontSize: 40,
							}}
						/>
						React Job Portal
					</Typography>
					<p
						style={{
							borderLeft: "3px solid #222",
							borderRadius: "2px",
							paddingLeft: "10px",
							fontFamily: "monospace",
							fontSize: "14px",
							color: "whitesmoke",
							margin: "0 30px 20px",
							lineHeight: "28px",
						}}>
						Find your first job with us. We are a Job Portal with a huge network
						and database of currently available jobs in Nepal and we provide you
						with the option to choose from our huge database.
					</p>
				</Box>
				<Box sx={right}>
					<Box sx={contactInfo}>
						<p
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
							}}>
							<FacebookIcon sx={socialIcons} />
							<Link
								sx={link}
								href="https://www.facebook.com"
								target="_blank">
								Facebook
							</Link>
						</p>
					</Box>
					<Box sx={contactInfo}>
						<p
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
							}}>
							<InstagramIcon sx={socialIcons} />
							<Link
								sx={link}
								href="https://www.instagram.com"
								target="_blank">
								Instagram
							</Link>
						</p>
					</Box>
					<Box sx={contactInfo}>
						<p
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
							}}>
							<TwitterIcon sx={socialIcons} />
							<Link
								sx={link}
								href="https://www.twitter.com">
								Twitter
							</Link>
						</p>
					</Box>
					<Box sx={contactInfo}>
						<p
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
							}}>
							<LinkedInIcon sx={socialIcons} />
							<Link
								sx={link}
								href="https://www.linkedin.com"
								target="_blank">
								LinkedIn
							</Link>
						</p>
					</Box>
				</Box>
			</Box>
		</footer>
	);
};

export default UserFooter;
