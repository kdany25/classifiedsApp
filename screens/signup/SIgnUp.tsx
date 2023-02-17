//Dependencies
import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";

//styles
import { styles } from "./Signup.styles";

//interfaces
import { IuserProps } from "../../interfaces/signUp.interface";

const SignUp: React.FC = () => {
	//States
	const [inputs, setInputs] = useState({});

	//navigation
	const navigation = useNavigation();

	//Onchange for product form
	const handleChange = (key: string, e: any) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};

	//success taost
	const showSuccessMessage = () => {
		Toast.show({
			type: "success",
			text1: "Message",
			text2: "Account created",
			autoHide: true,
			visibilityTime: 3000,
		});
	};

	//error taost
	const showErrorMessage = () => {
		Toast.show({
			type: "error",
			text1: "Message",
			text2: "Error, please try again and check the inputs ",
			autoHide: true,
			visibilityTime: 3000,
		});
	};

	//Api call for creating product
	const onSave = async () => {
		await axios
			.post<IuserProps>(
				"https://classfiedbackend.herokuapp.com/api/auth/register",
				inputs
			)
			.then((res) => {
				if (res.data.firstName) {
					showSuccessMessage();
					//@ts-ignore
					setTimeout(() => navigation.navigate("Login"), 3000);
				}
			})
			.catch((error) => {
				console.log(inputs);
				showErrorMessage();
			});
	};

	return (
		<SafeAreaView style={styles.mainContainer}>
			{/* toast notification */}
			<Toast />
			<View
				style={{
					width: "80%",
					flexDirection: "column",
					marginTop: "15%",
				}}
			>
				{/* Title */}
				<View>
					<Text
						style={{
							textAlign: "center",
							fontSize: 24,
							fontWeight: "bold",
						}}
					>
						Create An account
					</Text>
				</View>

				{/* Form */}
				<View>
					<View style={{ marginTop: "10%" }}>
						<TextInput
							style={styles.input}
							onChangeText={(name) =>
								handleChange("firstname", name)
							}
							placeholder="enter first name"
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(lastName) =>
								handleChange("lastname", lastName)
							}
							placeholder="Enter lastName"
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(email) =>
								handleChange("email", email)
							}
							placeholder="Enter email"
							multiline
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(password) =>
								handleChange("password", password)
							}
							placeholder="Enter password"
							secureTextEntry={true}
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(phone) =>
								handleChange("phone", phone)
							}
							placeholder="Enter phone number"
						/>
					</View>

					{/* Creating account button */}
					<View style={{ marginTop: "10%" }}>
						<Pressable
							style={styles.button}
							onPress={() => {
								onSave();
							}}
						>
							<Text style={{ color: "#fff" }}>{"Sign Up"}</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SignUp;
