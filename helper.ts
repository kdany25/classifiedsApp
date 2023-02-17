import axios from "axios";

export const uploadImage = async (imgurl: string) => {
	try {
		const URL = "https://api.cloudinary.com/v1_1/diae50mdi/image/upload";
		const form = new FormData();
		form.append("file", imgurl);
		form.append("upload_preset", "classifiedApp");
		const { data } = await axios.post(URL, form, {
			headers: {
				Accept: "application/json",
				"Content-Type": "multipart/form-data",
			},
		});
		return data.secure_url;
	} catch (error: any) {
		if (error) {
			return null;
		}
	}
};
