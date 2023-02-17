//Dependencies
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
//Icon
import { HeartIcon } from "react-native-heroicons/outline";
import { PlusSmallIcon } from "react-native-heroicons/solid";
//Interface
import { productProps } from "../../interfaces/product.interface";
//Css
import { styles } from "./Product.style";

const Product: React.FC<productProps> = ({
	_id,
	name,
	price,
	short_description,
	image,
	manufacture_date,
	category,
}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() =>
				//@ts-ignore
				navigation.navigate("ProductPage", {
					_id,
					name,
					price,
					short_description,
					image,
					manufacture_date,
					category,
				})
			}
		>
			<View style={[styles.main]}>
				{/* product Image */}
				<View style={styles.imageHolder}>
					<Image source={{ uri: image }} style={styles.image} />
					<View style={styles.likeButton}>
						<HeartIcon color={"#f7ac65"} size={12} />
					</View>
				</View>
				{/* product name,price,date */}
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.price}>
						<Currency quantity={price} currency="USD" />
					</Text>
					<Text style={styles.manufacture_date}>
						{manufacture_date}
					</Text>
				</View>
				{/*Go to product button */}
				<TouchableOpacity
					onPress={() =>
						//@ts-ignore
						navigation.navigate("ProductPage", {
							_id,
							name,
							price,
							short_description,
							image,
							manufacture_date,
						})
					}
					style={styles.backButton}
				>
					<PlusSmallIcon size={13} color="#fff" />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

export default Product;
