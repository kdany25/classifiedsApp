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
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";

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
import { CalendarDaysIcon, PhotoIcon } from "react-native-heroicons/solid";

//Helper
import { uploadImage } from "../../helper";

const CreateProduct: React.FC = () => {
	//States
	const [inputs, setInputs] = useState({});
	const [isPickerShow, setIsPickerShow] = useState(false);
	const [date, setDate] = useState(new Date(Date.now()));
	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);
	const [categories, setCategories] = useState([]);
	const [image, setImage] = useState<any>(null);
	const [base64Image, setBase64Image] = useState<any>(null);

	//navigation
	const navigation = useNavigation();

	//selecting user from state
	const user = useSelector((state: any) => state.user.currentUser?._id);

	//Method to show DatePicker
	const showPicker = () => {
		setIsPickerShow(true);
	};

	//handle for Datepicker
	const onChange = (event: any, value: any) => {
		setDate(value);
		setIsPickerShow(false)
		handleChange("manufacture_date", date);
	};
	//Onchange for product form
	const handleChange = (key: string, e: any) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};

	//success taost
	const showSuccessMessage = () => {
		Toast.show({
			type: "success",
			text1: "Message",
			text2: "Product created successful",
			autoHide: true,
			visibilityTime: 3000,
		});
	};

	//error taost
	const showErrorMessage = () => {
		Toast.show({
			type: "error",
			text1: "Message",
			text2: "Error, please try again and check the inputs ",
			autoHide: true,
			visibilityTime: 3000,
		});
	};

	//Api call for creating product
	const onSave = async () => {
		await axios
			.post<InewProduct>(
				"https://classfiedbackend.herokuapp.com/api/product",
				inputs
			)
			.then((res) => {
				if (res.data.name) {
					showSuccessMessage();
				}
			})
			.catch((error) => {
				showErrorMessage();
			});
	};

	//to save  the category
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

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
			base64: true,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
			setBase64Image(`data:image/jpg;base64,${result.assets[0].base64}`);
		}
	};

	//upload image
	const getImgurl = async () => {
		try {
			const result = await uploadImage(base64Image);
			handleChange("image", result);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<SafeAreaView style={styles.mainContainer}>
	{/* <ScrollView> */}

			{/* toast notification */}
			<Toast />
			<View
				style={{
					width: "80%",
					flexDirection: "column",
					marginTop: "15%",
				}}
			>
				{/* Title */}
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

				{/* Form */}
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
					{/* Category dropdown */}
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

					{/* Date picker button */}
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

					{/* Date picker */}
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
					{image ? (
						<>
							<View
								style={{ margin: 10, alignItems: "center" }}
							></View>
							<Image
								source={{ uri: image }}
								style={{ height: 70, width: 70 }}
							/>

							<TouchableOpacity
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: "5%",
								}}
								onPress={getImgurl}
							>
								<PhotoIcon color={"#ff833c"} />
								<Text
									style={{ fontSize: 10, color: "#ff833c" }}
								>
									Upload it
								</Text>
							</TouchableOpacity>
						</>
					) : (
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: "2%",
							}}
							onPress={pickImage}
						>
							<PhotoIcon color={"#a3a1a0"} />
							<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
								Select Image
							</Text>
						</TouchableOpacity>
					)}
				</View>

				{/* Creating product button */}
				<View style={{ marginTop: "10%" }}>
					<Pressable
						style={styles.button}
						onPress={() => {
							onSave();
						}}
					>
						<Text style={{ color: "#fff" }}>
							{"Create Product"}
						</Text>
					</Pressable>
				</View>
			</View>

			{/* MenuBar */}
			{user && (
				<View
					style={{
						position: "absolute",
						bottom: "0%",
						width: "100%",
						height: 50,
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
			)}
			{/* </ScrollView> */}
		</SafeAreaView>
	);
};

export default CreateProduct;
