import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	banner: {
		position: "relative",
		marginTop: 30,
	},
	image: {
		width: "100%",
		height: 300,
		padding: 4,
		backgroundColor: "#000",
	},
	backButton: {
		position: "absolute",
		top: 14,
		left: 5,
		padding: 2,
		borderRadius: 50,
		backgroundColor: "#fff",
	},
	titleRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%",
		margin: 5,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	price: {
		fontWeight: "bold",
		fontSize: 24,
	},
	shortDes: {
		color: "#a6a5a2",
	},
});
