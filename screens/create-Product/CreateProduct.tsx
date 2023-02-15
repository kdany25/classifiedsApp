import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import React from "react";
import { styles } from "./createProduct.styles";

const CreateProduct: React.FC = () => {
	return (
		<SafeAreaView>
			<Text>CreateProduct</Text>
			<View>
				<Text>Name</Text>
				<TextInput style={styles.input} />
			</View>
			<View>
				<Text>price</Text>
				<TextInput style={styles.input} />
			</View>
			<View>
				<Text>Short description</Text>
				<TextInput style={styles.input} />
			</View>
			<View>
				<Text>Image</Text>
				<TextInput style={styles.input} />
			</View>
			<View>
				<Text>Manufacture Date</Text>
				<TextInput style={styles.input} />
			</View>
			<Pressable style={styles.button}>
				<Text style={styles.text}>{"Create Product"}</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default CreateProduct;
