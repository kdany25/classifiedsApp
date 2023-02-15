import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./product.style";

const ProductPage: React.FC = () => {
	const navigation = useNavigation();
	const {
		params: {
			_id,
			name,
			price,
			short_description,
			image,
			manufacture_date,
		},
	} = useRoute();
	return (
		<ScrollView style={{ backgroundColor: "#fff" }}>
			<View style={styles.banner}>
				<Image
					source={{
						uri: image,
					}}
					style={styles.image}
				/>
				<TouchableOpacity
					onPress={navigation.goBack}
					style={styles.backButton}
				>
					<ArrowLeftIcon size={20} color="#00CCBB" />
				</TouchableOpacity>
			</View>
			<View style={styles.titleRow}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.price}>{price}</Text>
			</View>
			<View>
				<Text style={styles.shortDes}>{short_description}</Text>
			</View>
		</ScrollView>
	);
};

export default ProductPage;
