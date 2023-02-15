import {
	View,
	Text,
	ImageBackground,
	SafeAreaView,
	TextInput,
	Pressable,
	FlatList,
} from "react-native";
import React from "react";
import { styles } from "./Home.styles";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Product from "../components/product/Product";
import {
	productProps,
	ItemProps,
	DATA,
} from "../components/product/product.interface";

const HomeScreen: React.FC = () => {
	const renderItem = ({ item }: { item: productProps }) => {
		return (
			<Product
				_id={item._id}
				name={item.name}
				price={item.price}
				short_description={item.short_description}
				image={item.image}
				manufacture_date={item.manufacture_date}
			/>
		);
	};
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
			<View>
				<FlatList
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(item) => item._id}
					numColumns={2}
				/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
