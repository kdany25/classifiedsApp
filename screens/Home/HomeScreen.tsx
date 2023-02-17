import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Home.styles";
import {
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
	BarsArrowDownIcon,
	BarsArrowUpIcon,
} from "react-native-heroicons/solid";
import {
	HomeIcon,
	PlusCircleIcon,
	UserCircleIcon,
} from "react-native-heroicons/outline";
import { productProps } from "../../interfaces/product.interface";
import { Iproduct } from "../../interfaces/Home.interface";
import axios, { AxiosResponse } from "axios";
import Product from "../../components/product/Product";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

const HomeScreen: React.FC = () => {
	const [products, setProducts] = useState<Iproduct[]>([]);
	const [filterQuery, setfilterQuery] = useState<string>();
	const [filteredData, setFilteredData] = useState<Iproduct[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const user = useSelector((state: any) => state.user.currentUser?._id);
	const navigation = useNavigation();
	useEffect(() => {
		axios
			.get<Iproduct[]>(
				"https://classfiedbackend.herokuapp.com/api/product"
			)
			.then((response: AxiosResponse) => {
				setProducts(response.data);
			});
	}, []);
	useEffect(() => {
		if (filterQuery) {
			const newFilteredData = products.filter((row) =>
				row.name.toString().toLocaleLowerCase().includes(filterQuery)
			);
			setFilteredData(newFilteredData);
		} else if (!filterQuery) {
			setFilteredData(products);
		}
	}, [filterQuery, products]);

	const ascendingOrder = () => {
		const newProductList = filteredData.sort(function (a, b) {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		setFilteredData(newProductList);
		setIsModalVisible(false);
	};
	const descendingOrder = () => {
		const newProductList = filteredData.sort(function (a, b) {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA > nameB) {
				return -1;
			}
			if (nameA < nameB) {
				return 1;
			}
			return 0;
		});
		setFilteredData(newProductList);
		setIsModalVisible(false);
	};

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
					<TextInput
						placeholder="Search"
						style={styles.input}
						onChangeText={(query) => setfilterQuery(query)}
						autoCapitalize="none"
					/>
				</View>
				<TouchableOpacity
					style={styles.filterIcon}
					onPress={() => setIsModalVisible(true)}
				>
					<AdjustmentsHorizontalIcon color="#fff" />
				</TouchableOpacity>
			</View>
			<View style={styles.list}>
				<FlatList
					data={filteredData.slice(0, 10)}
					renderItem={renderItem}
					keyExtractor={(item) => item._id}
					numColumns={2}
				/>
			</View>
			{user && (
				<View
					style={{
						position: "absolute",
						bottom: "0%",
						width: "100%",
						height: 80,
						backgroundColor: "#fff",
						borderTopWidth: 1,
						borderColor: "#faddcf",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							paddingHorizontal: "5%",
							marginTop: "2%",
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<HomeIcon color="#ff833c" />
							<Text style={{ fontSize: 10, color: "#ff833c" }}>
								Home
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: "column",
								alignItems: "center",
							}}
							//@ts-ignore
							onPress={() => navigation.navigate("CreateProduct")}
						>
							<PlusCircleIcon color={"#a3a1a0"} />
							<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
								Add product
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<UserCircleIcon color={"#a3a1a0"} />
							<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
								Profile
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
			<Modal isVisible={isModalVisible}>
				<TouchableOpacity
					style={{
						flexDirection: "column",
						alignItems: "center",
						marginTop: "20%",
					}}
					onPress={() => ascendingOrder()}
				>
					<BarsArrowUpIcon color={"#fff"} />

					<Text style={{ fontSize: 10, color: "#fff" }}>
						ascending order(A-Z)
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flexDirection: "column",
						alignItems: "center",
						marginTop: "20%",
					}}
					onPress={() => descendingOrder()}
				>
					<BarsArrowDownIcon color={"#fff"} />
					<Text style={{ fontSize: 10, color: "#fff" }}>
						descending order(Z-A)
					</Text>
				</TouchableOpacity>
			</Modal>
		</SafeAreaView>
	);
};

export default HomeScreen;
