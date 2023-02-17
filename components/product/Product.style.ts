import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main: {
		backgroundColor: "#e3effc",
		width: 180,
		margin: 2,
		borderRadius: 10,
		justifyContent: "space-between",
		position: "relative",
	},
	imageHolder: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		position: "relative",
	},
	image: {
		height: 150,
		width: "90%",
		borderRadius: 10,
	},
	likeButton: {
		position: "absolute",
		top: "5%",
		left: "88%",
	},
	name: {
		fontSize: 9,
		marginLeft: "10%",
		color: "#7c7c7d",
	},
	price: {
		fontSize: 10,
		fontWeight: "bold",
		marginLeft: "10%",
	},
	manufacture_date: {
		color: "#d4d4d4",
		fontSize: 8,
		marginLeft: "10%",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		justifyContent: "space-between",
		paddingBottom: 5,
	},
	backButton: {
		position: "absolute",
		bottom: "5%",
		left: "82%",
		padding: 2,
		borderRadius: 5,
		backgroundColor: "#ff833c",
	},
});
