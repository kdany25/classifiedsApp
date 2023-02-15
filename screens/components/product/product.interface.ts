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
	onPress?: () => void;
}

export const DATA: productProps[] = [
	{
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		name: "furniture 1",
		price: 300,
		short_description: "testing furnture 1",
		image: "https://i.ibb.co/XyvvSvM/Screen-Shot-2023-02-15-at-11-35-29.png",
		manufacture_date: "2th jan 2023",
	},
	{
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb289a",
		name: "furniture 2",
		price: 400,
		short_description: "testing furnture 2",
		image: "https://i.ibb.co/v15mQ08/Screen-Shot-2023-02-15-at-11-36-09.png",
		manufacture_date: "2th jan 2023",
	},
	{
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
		name: "furniture 3",
		price: 700,
		short_description: "testing furnture 3",
		image: "https://i.ibb.co/9wWcBgK/Screen-Shot-2023-02-15-at-11-36-30.png",
		manufacture_date: "2th jan 2023",
	},
	{
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
		name: "furniture 4",
		price: 100,
		short_description: "testing furnture 4",
		image: "https://i.ibb.co/WgTwwCM/Screen-Shot-2023-02-15-at-12-48-42.png",
		manufacture_date: "2th jan 2023",
	},
  {
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		name: "furniture 1",
		price: 300,
		short_description: "testing furnture 1",
		image: "https://i.ibb.co/XyvvSvM/Screen-Shot-2023-02-15-at-11-35-29.png",
		manufacture_date: "2th jan 2023",
	},
	{
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb289a",
		name: "furniture 2",
		price: 400,
		short_description: "testing furnture 2",
		image: "https://i.ibb.co/v15mQ08/Screen-Shot-2023-02-15-at-11-36-09.png",
		manufacture_date: "2th jan 2023",
	},
	{
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
		name: "furniture 3",
		price: 700,
		short_description: "testing furnture 3",
		image: "https://i.ibb.co/9wWcBgK/Screen-Shot-2023-02-15-at-11-36-30.png",
		manufacture_date: "2th jan 2023",
	},
	{
		_id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
		name: "furniture 4",
		price: 100,
		short_description: "testing furnture 4",
		image: "https://i.ibb.co/WgTwwCM/Screen-Shot-2023-02-15-at-12-48-42.png",
		manufacture_date: "2th jan 2023",
	},
];
