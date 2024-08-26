"use client";

import React, { useState } from "react"; // Import useState hook
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({}));

export default function Navbar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const { isLightTheme, toggleTheme } = useTheme();

	const [account, setAccount] = useState([
		{
			url: "avatar.png",
			name: "Stacy Jones",
			role: "Micro",
			email: "stacyjones@gmail.com",
		},
		{
			url: "sw-account.png",
			name: "Sky Jones",
			role: "Advertiser",
			email: "skyjones@gmail.com",
		},
		{
			url: "sw-account.png",
			name: "John Doe",
			role: "Recruiter",
			email: "skyjones@gmail.com",
		},
	]);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const SwitchAccount = (index) => {
		console.log("id=", index);
		setAccount((prevAccount) => {
			// Create a new array with the second item at the first position
			const newAccount = [
				prevAccount[index], // Move the second item to the first position
				...prevAccount.slice(0, index),
				...prevAccount.slice(index + 1),
			];
			return newAccount;
		});
	};
	return (
		<div className="menu">
			<Button
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="contained"
				disableelevation="true"
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				className={
					isLightTheme
						? "btn-menu light-theme"
						: "btn-menu dark-theme"
				}
			>
				<Image
					src={`/images/${account[0].url}`}
					alt="Avatar"
					width={100}
					height={100}
				/>
				<div>
					<p className={isLightTheme ? "light-theme" : "dark-theme"}>
						{account[0].name}
					</p>
					<p className={isLightTheme ? "light-theme" : "dark-theme"}>
						{account[0].role}
					</p>
				</div>
			</Button>
			<StyledMenu
				id="demo-customized-menu"
				MenuListProps={{
					"aria-labelledby": "demo-customized-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				className={isLightTheme ? "light-theme" : "dark-theme"}
			>
				<MenuItem onClick={handleClose} disableRipple>
					<PersonIcon />
					Accounts
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<SettingsOutlinedIcon />
					Settings
				</MenuItem>

				<MenuItem onClick={handleClose} disableRipple>
					<LiveHelpOutlinedIcon />
					FAQ&apos;s
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<HelpOutlineOutlinedIcon />
					Q&A&apos;s
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<PrivacyTipOutlinedIcon />
					Help/Support
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					disableRipple
					className="noHoverEffect"
				>
					<Button
						startIcon={<WbSunnyOutlinedIcon />}
						className={` ${
							isLightTheme
								? "lighttheme-btn active"
								: "lighttheme-btn"
						}`}
						onClick={(e) => {
							e.stopPropagation();
							toggleTheme();
						}}
					>
						Light
					</Button>
					<Button
						startIcon={<DarkModeOutlinedIcon />}
						className={`${
							!isLightTheme
								? "darktheme-btn active"
								: "darktheme-btn"
						}`}
						onClick={(e) => {
							e.stopPropagation();
							toggleTheme();
						}}
					>
						Dark
					</Button>
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					disableRipple
					className="sw-label"
				>
					SWITCH ACCOUNTS
				</MenuItem>
				{account.map((user, index) => {
					if (index != 0) {
						return (
							<div
								className="sw-account"
								onClick={() => SwitchAccount(index)}
								key={index}
							>
								<div>
									<Image
										src={`/images/${account[index].url}`}
										alt="Avatar"
										width={50}
										height={50}
									/>
									<div className="sw-acc-gp">
										<p>{account[index].role}</p>
										<p>{account[index].name}</p>
										<p>{account[index].email}</p>
									</div>
								</div>
								<CircleOutlinedIcon className="circle-icon" />
							</div>
						);
					}
				})}

				<MenuItem
					onClick={handleClose}
					disableRipple
					className="noHoverEffect"
				>
					<Button
						startIcon={<LoginOutlinedIcon />}
						className={
							isLightTheme
								? "theme-btn light-theme"
								: "theme-btn dark-theme"
						}
					>
						Sign out
					</Button>
				</MenuItem>
			</StyledMenu>
		</div>
	);
}
