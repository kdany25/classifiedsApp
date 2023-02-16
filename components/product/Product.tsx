import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Product.style";
import { productProps } from "./product.interface";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import { HeartIcon } from "react-native-heroicons/outline";
import { PlusSmallIcon } from "react-native-heroicons/solid";

const Product: React.FC<productProps> = ({
	_id,
	name,
	price,
	short_description,
	image,
	manufacture_date,
}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("ProductPage", {
					_id,
					name,
					price,
					short_description,
					image,
					manufacture_date,
				})
			}
		>
			<View style={[styles.main]}>
				<View style={styles.imageHolder}>
					<Image source={{ uri: image }} style={styles.image} />
					<View style={styles.likeButton}>
						<HeartIcon color={"#f7ac65"} size={12} />
					</View>
				</View>
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.price}>
						<Currency quantity={price} currency="USD" />
					</Text>
					<Text style={styles.manufacture_date}>
						{manufacture_date}
					</Text>
				</View>
				<TouchableOpacity
					onPress={() =>
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
