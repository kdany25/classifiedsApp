//Dependencies
import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	Pressable,
	TouchableOpacity,
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";

//Components
import LoadingIndicator from "../../components/shared/LoadingIndicator";

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
	ArrowUpTrayIcon,
	CheckCircleIcon,
} from "react-native-heroicons/outline";
import { CalendarDaysIcon, PhotoIcon } from "react-native-heroicons/solid";

//Helper
import { uploadImage } from "../../utils/imageHelper";

const CreateProduct: React.FC = () => {
	//States
	const [inputs, setInputs] = useState<InewProduct | any>({});
	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);
	const [categories, setCategories] = useState([]);
	const [image, setImage] = useState<any>(null);
	const [base64Image, setBase64Image] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [chosenDate, setChosenDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [isSaving, setIsSaving] = useState<boolean>(false);

	//navigation
	const navigation = useNavigation();

	//selecting user from state
	const user = useSelector((state: any) => state.user.currentUser?._id);
	const email = useSelector((state: any) => state.user.currentUser?.email);
	const phone = useSelector((state: any) => state.user.currentUser?.phone);

	//Onchange for product form
	const handleChange = (key: string, e: any) => {
		setInputs((prev: any) => {
			return { ...prev, [key]: e };
		});
	};

	//success taost
	const showSuccessMessage = () => {
		Toast.show({
			type: "success",
			text1: "Message",
			text2: "Product created",
			autoHide: true,
			visibilityTime: 3000,
		});
	};

	//success taost
	const showSuccessMessageForImage = () => {
		Toast.show({
			type: "success",
			text1: "Message",
			text2: "Image uploaded",
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

	//error taost
	const showErrorMessageForImage = () => {
		Toast.show({
			type: "error",
			text1: "Message",
			text2: "Error, Image is too big please try image less than 4MB",
			autoHide: true,
			visibilityTime: 3000,
		});
	};

	//Api call for creating product
	const onSave = async () => {
		setIsSaving(true);
		await axios
			.post<InewProduct>(
				"http://localhost:7001/api/product",
				inputs
			)
			.then((res) => {
				if (res.data.name) {
					showSuccessMessage();
					setIsSaving(false);
				}
			})
			.catch((error) => {
				showErrorMessage();
				setIsSaving(false);
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
				"http://localhost:7001/api/category"
			)
			.then((response: AxiosResponse) => {
				setCategories(response.data);
			});
	}, []);

	//Method for pick image from local storage
	const pickImage = async () => {
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
		setIsLoading(true);
		try {
			const result = await uploadImage(base64Image);
			handleChange("image", result);
			if (result) {
				setIsLoading(false);
				showSuccessMessageForImage();
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			showErrorMessageForImage();
		}
	};
	//handle date selection
	const handleDateChange = (event: any, date: any) => {
		setShowDatePicker(true);
		if (date) {
			setChosenDate(date);
			handleChange("manufacture_date", date);
		}
	};

	return (
		<SafeAreaView style={styles.mainContainer}>
			{/* toast notification */}
			<Toast />
			<View
				style={{
					width: "80%",
					flexDirection: "column",
					marginTop: "5%",
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
					{!showDatePicker && (
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: "2%",
							}}
							onPress={() => setShowDatePicker(true)}
						>
							<CalendarDaysIcon color={"#a3a1a0"} />
							<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
								Add manufacture date
							</Text>
						</TouchableOpacity>
					)}

					{/* Date picker */}
					{showDatePicker && (
						<DateTimePicker
							value={chosenDate}
							mode="date"
							is24Hour={true}
							display="default"
							onChange={handleDateChange}
							style={{
								alignSelf: "flex-start",
								marginVertical: 3,
							}}
						/>
					)}

					{/* Image selection */}
					{image ? (
						<>
							<View
								style={{ margin: 10, alignItems: "center" }}
							></View>
							<Image
								source={{ uri: image }}
								style={{ height: 70, width: 70 }}
							/>
							{isLoading ? (
								<LoadingIndicator />
							) : (
								<>
									{inputs.image ? (
										<TouchableOpacity
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginTop: "5%",
											}}
											onPress={getImgurl}
										>
											<CheckCircleIcon
												color={"#ff833c"}
											/>
											<Text
												style={{
													fontSize: 10,
													color: "#ff833c",
												}}
											>
												Image saved
											</Text>
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginTop: "5%",
											}}
											onPress={getImgurl}
										>
											<ArrowUpTrayIcon
												color={"#a3a1a0"}
											/>
											<Text
												style={{
													fontSize: 10,
													color: "#a3a1a0",
												}}
											>
												CLick here to Upload it
											</Text>
										</TouchableOpacity>
									)}
								</>
							)}
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
					{isSaving ? (
						<LoadingIndicator />
					) : (
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
					)}
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
							onPress={() =>
								//@ts-ignore
								navigation.navigate("UserProfile", {
									email,
									phone,
									image: "https://i.ibb.co/Wn7zMVf/Screen-Shot-2023-02-16-at-09-07-33.png",
								})
							}
						>
							<UserCircleIcon color={"#a3a1a0"} />
							<Text style={{ fontSize: 10, color: "#a3a1a0" }}>
								Profile
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
};

export default CreateProduct;
