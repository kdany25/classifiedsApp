import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import ProductPage from "./screens/product/ProductPage";
import CreateProduct from "./screens/create-Product/CreateProduct";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
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
				</Stack.Navigator>
			</TailwindProvider>
		</NavigationContainer>
	);
}
