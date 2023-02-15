import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Product.style";
import { productProps } from "./product.interface";
import { useNavigation} from "@react-navigation/native";

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
			<View style={styles.main}>
				<View>
					<Image source={{ uri: image }} style={styles.image} />
				</View>
				<View style={styles.titleRow}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.price}>{price}</Text>
				</View>
				<Text style={styles.manufacture_date}>{manufacture_date}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Product;
