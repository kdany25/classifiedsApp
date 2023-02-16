export interface productProps {
	_id: string;
	name: string;
	price: number;
	short_description: string;
	image: string;
	manufacture_date: string;
}

export interface ItemProps {
	item: productProps;
	onPress: () => void;
}
