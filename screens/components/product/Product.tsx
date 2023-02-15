import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./Product.style";
import { productProps } from "./product.interface";

const Product: React.FC<productProps> = ({
	_id,
	name,
	price,
	short_description,
	image,
	manufacture_date,
}) => {
	return (
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
	);
};

export default Product;
