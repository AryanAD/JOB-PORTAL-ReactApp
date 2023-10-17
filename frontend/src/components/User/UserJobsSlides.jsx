import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import React from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const content = [
	{
		label: "Software Developer",
		imgPath:
			"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
	},
	{
		label: "Graphics Designer",
		imgPath:
			"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
	},
	{
		label: "Social Media Manager",
		imgPath:
			"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
	},
	{
		label: "Project Manager",
		imgPath:
			"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
	},
];

const UserJobsSlides = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = content.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
			}}>
			<Paper
				square
				elevation={0}
				sx={{
					bgcolor: "#3ad047",
					width: "80%",
					color: "black",
					borderRadius: "13px 13px 0  0",
					mt: 2,
					display: "flex",
					alignItems: "center",
					height: 50,
					pl: 2,
				}}>
				<Typography
					sx={{
						fontFamily: "nunito",
						letterSpacing: "6px",
						fontWeight: "bold",
						textAlign: "center",
					}}
					variant="h6">
					{content[activeStep].label}
				</Typography>
			</Paper>
			<Box
				sx={{
					width: "80%",
					flexGrow: 1,
					bgcolor: "whitesmoke",
				}}>
				<AutoPlaySwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents>
					{content.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Box
									component="text"
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										height: "77vh",
										overflow: "hidden",
										width: "100%",
									}}
									alt={step.label}>
									<img
										style={{ height: "70vh", width: "100%" }}
										src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
									/>
									<Typography
										sx={{
											color: "GrayText",
											height: "7vh",
											textAlign: "center",
											fontFamily: "monospace",
										}}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eius voluptatibus autem totam quos aperiam quaerat sint
										provident fugiat, perspiciatis laborum repellendus facilis
										reprehenderit, asperiores laboriosam saepe iure sed
										accusantium quod?
									</Typography>
								</Box>
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					sx={{ bgcolor: "#3ad047", borderRadius: "0 0 4px 4px" }}
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							sx={{ color: "black" }}
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}>
							Next
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							sx={{ color: "black" }}
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</Box>
		</Box>
	);
};

export default UserJobsSlides;
