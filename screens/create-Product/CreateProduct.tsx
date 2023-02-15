import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./createProduct.styles";
import { InewProduct } from "./createProduct.interface";
import axios, { AxiosResponse } from "axios";

const CreateProduct: React.FC = () => {
	const [inputs, setInputs] = useState({});

	const handleChange = (key: string, e: any) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};
	const onSave = () => {
		axios.post<InewProduct>("http://localhost:7001/api/product", inputs);
		console.log('here')
	};
	return (
		<SafeAreaView>
			<Text>CreateProduct</Text>
			<View>
				<Text>Name</Text>
				<TextInput
					style={styles.input}
					onChangeText={(name) => handleChange("name", name)}
				/>
			</View>
			<View>
				<Text>price</Text>
				<TextInput
					style={styles.input}
					onChangeText={(price) => handleChange("price", price)}
				/>
			</View>
			<View>
				<Text>Short description</Text>
				<TextInput
					style={styles.input}
					onChangeText={(des) =>
						handleChange("short_description", des)
					}
				/>
			</View>
			<View>
				<Text>Image</Text>
				<TextInput
					style={styles.input}
					onChangeText={(image) => handleChange("image", image)}
				/>
			</View>
			<View>
				<Text>Manufacture Date</Text>
				<TextInput
					style={styles.input}
					onChangeText={(date) =>
						handleChange("manufacture_date", date)
					}
				/>
			</View>
			<View>
				<Text>category</Text>
				<TextInput
					style={styles.input}
					onChangeText={(cat) => handleChange("category", cat)}
				/>
			</View>
			<Pressable style={styles.button} onPress={() => onSave()}>
				<Text style={styles.text}>{"Create Product"}</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default CreateProduct;
