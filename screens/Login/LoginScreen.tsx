import React, { useLayoutEffect } from "react";
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
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.container}>
				<Text style={styles.title}>Get started</Text>

				<View>
					<View style={styles.inputHolder}>
						<View style={styles.labelContainer}>
							<Text>Email</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInput placeholder="Enter Email" />
						</View>
					</View>
					<View style={styles.inputHolder}>
						<View style={styles.labelContainer}>
							<Text>Password</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInput placeholder="Enter Password" />
						</View>
					</View>
				</View>

				<View style={{ alignItems: "center" }}>
					<Pressable
						style={styles.button}
						//@ts-ignore
						onPress={() => navigation.navigate("Home")}
					>
						<Text style={styles.text}>{"Sign in"}</Text>
					</Pressable>
				</View>
				<Text style={styles.signInText}>Sign In with this</Text>
				<View style={styles.socialMedia}>
					<SocialIcon type="facebook" />
					<SocialIcon type="twitter" />
					<SocialIcon type="google" />
					<SocialIcon type="instagram" />
				</View>
				<Text style={styles.signUpText}>
					Don't have an account? Signup
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
