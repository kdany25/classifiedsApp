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
import { login } from "../../utils/apiCalls";

//Hook
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//Styles
import { styles } from "./LoginScreen.style";
import LoadingIndicator from "../../components/shared/LoadingIndicator";

const LoginScreen: React.FC = () => {
	//states
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [signPlaced, setSignedPlaced] = useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	//navigation
	const navigation = useNavigation();

	//getting a user from state
	const user = useSelector((state: any) => state.user.currentUser?._id);

	//hide header
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	const dispatch = useDispatch();

	const handleClick = () => {
		setIsLoading(true);
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
			setIsLoading(false);
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
								secureTextEntry={true}
							/>
						</View>
					</View>
				</View>
				{/* Sign in button */}
				<View style={{ alignItems: "center" }}>
					{isLoading ? (
						<LoadingIndicator />
					) : (
						<Pressable
							style={styles.button}
							//@ts-ignore
							onPress={handleClick}
						>
							<Text style={styles.text}>{"Sign in"}</Text>
						</Pressable>
					)}
				</View>
				<Text style={styles.signInText}></Text>

				{/* SignUp */}

				<TouchableOpacity
					//@ts-ignore
					onPress={() => navigation.navigate("Signup")}
				>
					<Text style={styles.signUpText}>
						Don't have an account? click here to Signup
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
