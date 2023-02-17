import { StyleSheet } from "react-native";

export const styles = StyleSheet.create<any>({
	input: {
		width: "100%",
		borderRadius: 15,
		padding: 10,
		marginTop: "10%",
		backgroundColor: "#f7f4f2",
		position: "relative",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		borderRadius: 10,
		elevation: 3,
		backgroundColor: "#ff833c",
	},
	container: {
		backgroundColor: "white",
		marginTop: "10%",
		width: "100%",
	},
	dropdown: {
		borderRadius: 15,

		backgroundColor: "#f7f4f2",

		paddingHorizontal: 30,
	},
	icon: {
		marginRight: 5,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
	mainContainer: {
		alignItems: "center",
		backgroundColor: "#fff",
		height: "100%",
		position: "relative",
	},
});
