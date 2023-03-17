//Dependencies
import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	SafeAreaView,
	Share,
	Alert,
} from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

//Icons
import {
	ArrowLeftIcon,
	ShareIcon,
	StarIcon,
	TagIcon,
	CalendarDaysIcon,
} from "react-native-heroicons/solid";
//Routes
import { useNavigation, useRoute } from "@react-navigation/native";

//Styles
import { styles } from "./product.style";

const ProductPage: React.FC = () => {
	const navigation = useNavigation();

	//receiving props
	const {
		//@ts-ignore
		params: {	_id, name, price, short_description, image, manufacture_date, category,
		},
	} = useRoute();

	//share
	const onShare = async () => {
		try {
			const result = await Share.share({
				message: `${name}`,
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error: any) {
			Alert.alert(error.message);
		}
	};
	return (
		<SafeAreaView
			style={{
				backgroundColor: "#fff",
				height: "100%",

				position: "relative",
			}}
		>
			{/* banner */}
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
					<ArrowLeftIcon size={20} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity onPress={onShare} style={styles.shareButton}>
					<ShareIcon size={20} color="#fff" />
				</TouchableOpacity>
			</View>

			{/* Details */}
			<View
				style={{
					height: "100%",
					backgroundColor: "#e3effc",
					borderTopLeftRadius: 50,
					borderTopRightRadius: 50,
					alignItems: "center",
				}}
			>
				<View style={{ marginTop: "10%", width: "90%" }}>
					<View style={styles.titleRow}>
						<Text style={styles.title}>{name}</Text>

						<Text style={styles.price}>
							{" "}
							<Currency quantity={price} currency="USD" />
						</Text>
					</View>
					<View
						style={{
							borderBottomColor: "#f5e6e6",
							borderBottomWidth: 1,
							marginTop: 5,
						}}
					/>
					<View>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "bold",
								marginTop: 5,
							}}
						>
							{"Product Detail: "}
						</Text>
					</View>
					<View>
						<Text style={styles.shortDes}>{short_description}</Text>
					</View>
					<View style={{ paddingVertical: 10 }}>
						<View style={styles.rating}>
							<TagIcon color="#ff833c" size={22} />

							<Text style={{ color: "#000", marginLeft: "1%" }}>
								{category}
							</Text>
						</View>
						<View style={styles.rating}>
							<CalendarDaysIcon color="#ff833c" size={22} />

							<Text style={{ color: "#000", marginLeft: "1%" }}>
								{manufacture_date}
							</Text>
						</View>
						<View style={styles.rating}>
							<StarIcon color="#ff833c" size={22} />

							<Text style={{ color: "#000", marginLeft: "1%" }}>
								{4.5}
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row" }}></View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default ProductPage;
