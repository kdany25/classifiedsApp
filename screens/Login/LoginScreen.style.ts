import { StyleSheet } from "react-native";

export const styles = StyleSheet.create<any>({
	main: {
		flex: 1,
		position: "relative",
		backgroundColor: "#ff833c",
	},
	container: {
		position: "absolute",
		backgroundColor: "#ffffff",
		top: "35%",
		left: "0%",
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	title: {
		color: "#ff833c",
		textAlign: "center",
		marginTop: "5%",
		marginBottom: "5%",
		fontSize: 24,
		fontWeight: "bold",
	},
	labelContainer: {
		backgroundColor: "white",
		paddingHorizontal: 3,
		marginStart: 10,
		zIndex: 1,
		elevation: 1,
		shadowColor: "white",
		position: "absolute",
		top: "-20%",
		left: "5%",
	},
	inputContainer: {
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		zIndex: 0,
		width: "90%",
		borderColor: "#d5d7db",
	},
	inputHolder: {
		alignItems: "center",
		marginBottom: "5%",
	},

	checkboxContainer: {
		flexDirection: "row",
		marginBottom: "10%",
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		borderRadius: 10,
		elevation: 3,
		backgroundColor: "#ff833c",
		width: "90%",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
	signInText: {
		color: "#c2b9b8",
		textAlign: "center",
		marginTop: "10%",
	},
	socialMedia: {
		flexDirection: "row",
		paddingVertical: "5%",
	},
	signUpText: {
		color: "#000",
		textAlign: "center",
	},
});
