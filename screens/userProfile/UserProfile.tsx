import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
//Routes
import { useNavigation, useRoute } from "@react-navigation/native";

//Icon
import {
	HomeIcon,
	PlusCircleIcon,
	UserCircleIcon,
} from "react-native-heroicons/outline";

const UserProfile: React.FC = () => {
	//receiving props
	const {
		//@ts-ignore
		params: { phone, email, image },
	} = useRoute();

	//navigation
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Image source={{ uri: image }} style={styles.image} />
			<Text style={styles.text}>Email: {email}</Text>
			<Text style={styles.text}>Phone: {phone}</Text>

			<View
				style={{
					position: "absolute",
					bottom: "0%",
					width: "100%",
					height: 80,
					backgroundColor: "#fff",
					borderTopWidth: 1,
					borderColor: "#faddcf",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingHorizontal: "5%",
						marginTop: "2%",
					}}
				>
					<TouchableOpacity
						style={{
							flexDirection: "column",
							alignItems: "center",
						}}
						//@ts-ignore
						onPress={() => navigation.navigate("Home")}
					>
						<HomeIcon color="#a3a1a0" />
						<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
							Home
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: "column",
							alignItems: "center",
						}}
						//@ts-ignore
						onPress={() => navigation.navigate("CreateProduct")}
					>
						<PlusCircleIcon color={"#a3a1a0"} />
						<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
							Add product
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: "column",
							alignItems: "center",
						}}
						onPress={() =>
							//@ts-ignore
							navigation.navigate("UserProfile", {
								email,
								phone,
								image: "https://i.ibb.co/Wn7zMVf/Screen-Shot-2023-02-16-at-09-07-33.png",
							})
						}
					>
						<UserCircleIcon color={"#ff833c"} />
						<Text style={{ fontSize: 10, color: "#ff833c" }}>
							Profile
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 20,
		backgroundColor: "#fff",
		height: "100%",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 5,
	},
});

export default UserProfile;
