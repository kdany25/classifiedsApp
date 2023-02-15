import {
	View,
	Text,
	ImageBackground,
	SafeAreaView,
	TextInput,
	Pressable,
} from "react-native";
import React from "react";
import { styles } from "./Home.styles";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";


const HomeScreen: React.FC = () => {
	return (
		<SafeAreaView style={styles.main}>
			<View>
				<Text style={styles.titleLogo}>Danube</Text>
			</View>
			<View style={styles.searchBarContainer}>
				<View style={styles.searchInput}>
					<MagnifyingGlassIcon color="gray" size={20} />

					<TextInput placeholder="Search" keyboardType="default" />
				</View>
				{/* <AdjustmentsIcon color="#00CCBB" /> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

