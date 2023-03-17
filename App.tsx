import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import ProductPage from "./screens/product/ProductPage";
import CreateProduct from "./screens/create-Product/CreateProduct";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import SignUp from "./screens/signup/SIgnUp";
import UserProfile from "./screens/userProfile/UserProfile";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<TailwindProvider>
					<Stack.Navigator>
						<Stack.Screen
							name="Login"
							component={LoginScreen}
							options={{
								presentation: "modal",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="ProductPage"
							component={ProductPage}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="CreateProduct"
							component={CreateProduct}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="Signup"
							component={SignUp}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="UserProfile"
							component={UserProfile}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</TailwindProvider>
			</Provider>
		</NavigationContainer>
	);
}
