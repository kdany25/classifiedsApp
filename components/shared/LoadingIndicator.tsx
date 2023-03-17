import React, { FunctionComponent } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingIndicator: FunctionComponent = () => {
	return (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size="large" color="#ff833c" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10,
	},
});
export default LoadingIndicator;
