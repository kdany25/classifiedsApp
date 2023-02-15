import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main: {
		flex: 1,
		position: "relative",
		backgroundColor: "#fff",
		paddingTop: 5,
	},
	titleLogo: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 5,
	},
	searchBarContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: 2,
		margin: 4,
    width: '90%',
    justifyContent: 'center'
	},
	searchInput: {
		flexDirection: "row",
		flex: 1,
		backgroundColor: "#e6e8eb",
		padding: 10,
	},
});
