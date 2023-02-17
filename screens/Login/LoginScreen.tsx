//Dependencies
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
	View,
	Text,
	ImageBackground,
	SafeAreaView,
	TextInput,
	Pressable,
	TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";
import { SocialIcon } from "react-native-elements";

//api
import { login } from "../../redux/apiCalls";

//Hook
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//Styles
import { styles } from "./LoginScreen.style";

const LoginScreen: React.FC = () => {
	//states
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [signPlaced, setSignedPlaced] = useState(false);
	const navigation = useNavigation();
	const user = useSelector((state: any) => state.user.currentUser?._id);

	//hide header
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	const dispatch = useDispatch();

	const handleClick = () => {
		login(dispatch, { email, password });
		setSignedPlaced(true);
	};

	//showing error toast
	const showError = () => {
		Toast.show({
			type: "error",
			text1: "Message",
			text2: "Invalid credintials",
			autoHide: true,
			visibilityTime: 3000,
		});
	};

	//navigate after logging in
	useEffect(() => {
		if (user) {
			//@ts-ignore
			navigation.navigate("Home");
		}
		if (!user && email && password && signPlaced) {
			setTimeout(showError, 3000);
		}
	}, [user, signPlaced]);

	return (
		<SafeAreaView style={styles.main}>
			<Toast />
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
								autoCapitalize="none"
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
								autoCapitalize="none"
							/>
						</View>
					</View>
				</View>
				{/* Sign in button */}
				<View style={{ alignItems: "center" }}>
					<Pressable
						style={styles.button}
						//@ts-ignore
						onPress={handleClick}
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
				<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
					<Text style={styles.signUpText}>
						Don't have an account? Signup
					</Text>
				</TouchableOpacity>

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
