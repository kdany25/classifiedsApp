import { StyleSheet } from "react-native";

export const styles = StyleSheet.create<any>({
	main: {
		flex: 1,
		position: "relative",
		backgroundColor: "#fff",
		paddingTop: 5,
	},
	titleLogo: {
		fontSize: 20,
		fontWeight: "bold",
	},
	searchBarContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: 2,
		width: "100%",
		justifyContent: "space-between",
		paddingHorizontal: "3%",
	},
	searchInput: {
		flexDirection: "row",
		backgroundColor: "#f7e8df",
		padding: 10,
		borderRadius: 10,
	},
	list: {
		alignItems: "center",
		paddingVertical: 5,
	},
	filterIcon: {
		backgroundColor: "#ff833c",
		padding: 6,
		borderRadius: 5,
	},
	input: {
		width: "80%",
		borderRadius: 10,
	},
	avatarImage: {
		borderRadius: 10,
		height: 40,
		width: 40,
	},
	avatar: {
		position: "absolute",
		left: "85%",
		top: "15%",
	},
	header: {
		position: "relative",
	},
});
