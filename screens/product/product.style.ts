import { StyleSheet } from "react-native";

export const styles = StyleSheet.create<any>({
	banner: {
		position: "relative",
		marginTop: "10%",
		height: "40%",
	},
	image: {
		width: "100%",
		height: '100%',
	},
	backButton: {
		position: "absolute",
		left: '5%',
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#ff833c",
		top: "-10%",
	},
	shareButton: {
		position: "absolute",
		left: "90%",
		top: "-10%",
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#ff833c",
	},
	titleRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: "3%",
	},
	title: {
		fontSize: 15,
		fontWeight: "bold",
	},
	price: {
		fontWeight: "bold",
		fontSize: 15,
	},
	shortDes: {
		color: "#2e2d2d",
		marginTop: 10,
	},
	rating: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: "2%",
	},
});
