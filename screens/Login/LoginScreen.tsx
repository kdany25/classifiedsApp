import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	View,
	Text,
	ImageBackground,
	SafeAreaView,
	TextInput,
	Pressable,
} from "react-native";
import { styles } from "./LoginScreen.style";
import { SocialIcon } from "react-native-elements";

const LoginScreen: React.FC = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView style={styles.main}>
			{/* Section container */}
			<View style={styles.container}>
				<Text style={styles.title}>Get started</Text>

				{/* Login form */}
				<View>
					<View style={styles.inputHolder}>
						<View style={styles.labelContainer}>
							<Text>Email</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInput
								placeholder="Enter Email"
								onChangeText={(email) => setEmail(email)}
							/>
						</View>
					</View>
					<View style={styles.inputHolder}>
						<View style={styles.labelContainer}>
							<Text>Password</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInput
								placeholder="Enter Password"
								onChangeText={(email) => setPassword(email)}
							/>
						</View>
					</View>
				</View>
				{/* Sign in button */}
				<View style={{ alignItems: "center" }}>
					<Pressable
						style={styles.button}
						//@ts-ignore
						onPress={() => console.log(email, password)}
					>
						<Text style={styles.text}>{"Sign in"}</Text>
					</Pressable>
				</View>
				<Text style={styles.signInText}>Sign In with this</Text>

				{/* social media */}
				<View style={{ alignItems: "center" }}>
					<View style={styles.socialMedia}>
						<SocialIcon type="google" />
						<SocialIcon type="facebook" />
					</View>
				</View>

				{/* SignUp */}
				<Text style={styles.signUpText}>
					Don't have an account? Signup
				</Text>

				{/* continue as customer */}
				<View style={{ alignItems: "center", marginTop: "5%" }}>
					<Pressable
						style={styles.button}
						//@ts-ignore
						onPress={() => navigation.navigate("Home")}
					>
						<Text style={styles.text}>
							{"Continue as customer"}
						</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
