//Dependencies
import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	Pressable,
	TouchableOpacity,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import axios, { AxiosResponse } from "axios";

//styles
import { styles } from "./createProduct.styles";

//interfaces
import {
	InewProduct,
	Icategory,
} from "../../interfaces/createProduct.interface";

//Icons
import {
	HomeIcon,
	PlusCircleIcon,
	UserCircleIcon,
} from "react-native-heroicons/outline";
import { CalendarDaysIcon } from "react-native-heroicons/solid";

const CreateProduct: React.FC = () => {
	//States
	const [inputs, setInputs] = useState({});
	const [isPickerShow, setIsPickerShow] = useState(false);
	const [date, setDate] = useState(new Date(Date.now()));
	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);
	const [categories, setCategories] = useState([]);
	const navigation = useNavigation();

	//Method to show DatePicker
	const showPicker = () => {
		setIsPickerShow(true);
	};

	//handle for Datepicker
	const onChange = (value: any) => {
		setDate(value);
	};
	//Onchange for product form
	const handleChange = (key: string, e: any) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};

	//Api call for creating product
	const onSave = () => {
		axios.post<InewProduct>(
			"https://classfiedbackend.herokuapp.com/api/product",
			inputs
		);
	};

	//to  the category
	useEffect(() => {
		handleChange("category", value);
	}, [value]);

	//Api call for category from database
	useEffect(() => {
		axios
			.get<Icategory[]>(
				"https://classfiedbackend.herokuapp.com/api/category"
			)
			.then((response: AxiosResponse) => {
				setCategories(response.data);
			});
	}, []);

	return (
		<SafeAreaView style={styles.mainContainer}>
			<View
				style={{
					width: "80%",
					flexDirection: "column",
					marginTop: "15%",
				}}
			>
				<View>
					<Text
						style={{
							textAlign: "center",
							fontSize: 24,
							fontWeight: "bold",
						}}
					>
						Create Product
					</Text>
				</View>

				<View>
					<View style={{ marginTop: "10%" }}>
						<TextInput
							style={styles.input}
							onChangeText={(name) => handleChange("name", name)}
							placeholder="Enter name"
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(price) =>
								handleChange("price", price)
							}
							placeholder="Enter price"
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(des) =>
								handleChange("short_description", des)
							}
							placeholder="Enter description"
							multiline
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(image) =>
								handleChange("image", image)
							}
						/>
					</View>
					<View style={styles.container}>
						<Dropdown
							style={[
								styles.dropdown,
								isFocus && { borderColor: "blue" },
							]}
							placeholderStyle={styles.placeholderStyle}
							selectedTextStyle={styles.selectedTextStyle}
							inputSearchStyle={styles.inputSearchStyle}
							iconStyle={styles.iconStyle}
							data={categories}
							search
							maxHeight={300}
							labelField="name"
							valueField="name"
							placeholder={!isFocus ? "Select Category" : "..."}
							searchPlaceholder="Search..."
							value={value}
							onFocus={() => setIsFocus(true)}
							onBlur={() => setIsFocus(false)}
							onChange={(item) => {
								//@ts-ignore
								setValue(item.name);
								setIsFocus(false);
							}}
						/>
					</View>
					{!isPickerShow && (
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: "2%",
							}}
							onPress={showPicker}
						>
							<CalendarDaysIcon color={"#a3a1a0"} />
							<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
								Add manufacture date
							</Text>
						</TouchableOpacity>
					)}
					<TouchableOpacity></TouchableOpacity>
					{isPickerShow && (
						<DateTimePicker
							value={date}
							mode={"date"}
							display={
								Platform.OS === "ios" ? "spinner" : "default"
							}
							is24Hour={true}
							onChange={onChange}
							style={styles.datePicker}
						/>
					)}
					{isPickerShow && (
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
							onPress={() => {
								setIsPickerShow(false);
								handleChange("manufacture_date", date);
							}}
						>
							<CalendarDaysIcon color={"#ff833c"} />
							<Text style={{ fontSize: 10, color: "#ff833c" }}>
								save date
							</Text>
						</TouchableOpacity>
					)}
				</View>
				<View style={{ marginTop: "10%" }}>
					<Pressable style={styles.button} onPress={() => onSave()}>
						<Text style={{ color: "#fff" }}>
							{"Create Product"}
						</Text>
					</Pressable>
				</View>
			</View>

				{/* Menu */}
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
						//@ts-ignore
						onPress={() => navigation.navigate("Home")}
					>
						<HomeIcon color={"#a3a1a0"} />
						<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
							Home
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<PlusCircleIcon color="#ff833c" />
						<Text style={{ fontSize: 10, color: "#ff833c" }}>
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
		</SafeAreaView>
	);
};

export default CreateProduct;
