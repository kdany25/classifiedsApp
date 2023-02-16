import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	FlatList,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Home.styles";
import {
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import { productProps } from "../../components/product/product.interface";
import { Iproduct } from "./Home.interface";
import axios, { AxiosResponse } from "axios";
import Product from "../../components/product/Product";

const HomeScreen: React.FC = () => {
	const [products, setProducts] = useState<Iproduct[]>([]);
	useEffect(() => {
		axios
			.get<Iproduct[]>("http://localhost:7001/api/product")
			.then((response: AxiosResponse) => {
				setProducts(response.data);
			});
	}, []);
	const renderItem = ({ item }: { item: productProps }) => {
		return (
			<Product
				_id={item._id}
				name={item.name}
				price={item.price}
				short_description={item.short_description}
				image={item.image}
				manufacture_date={item.manufacture_date}
				category={item.category}
			/>
		);
	};
	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.header}>
				<View
					style={{
						margin: 5,
					}}
				>
					<Text style={styles.titleLogo}>Shop Your</Text>
					<Text style={styles.titleLogo}>Favourite Device.</Text>
				</View>
				<View style={styles.avatar}>
					<Image
						source={{
							uri: "https://i.ibb.co/Wn7zMVf/Screen-Shot-2023-02-16-at-09-07-33.png",
						}}
						style={styles.avatarImage}
					></Image>
				</View>
			</View>

			<View style={styles.searchBarContainer}>
				<View style={styles.searchInput}>
					<MagnifyingGlassIcon color="#ff833c" size={20} />
					<TextInput placeholder="Search" style={styles.input} />
				</View>
				<View style={styles.filterIcon}>
					<AdjustmentsHorizontalIcon color="#fff" />
				</View>
			</View>
			<View style={styles.list}>
				<FlatList
					data={products}
					renderItem={renderItem}
					keyExtractor={(item) => item._id}
					numColumns={2}
				/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
