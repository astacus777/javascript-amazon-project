import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export const deliveryOptions = [
	{
		id: "1",
		deliveryDays: 7,
		priceCents: 0,
	},
	{
		id: "2",
		deliveryDays: 3,
		priceCents: 499,
	},
	{
		id: "3",
		deliveryDays: 1,
		priceCents: 999,
	},
];

export function getDeliveryOption(deliveryOptionId) {
	let deliveryOption;

	deliveryOptions.forEach(option => {
		if (option.id === deliveryOptionId) {
			deliveryOption = option;
		}
	});
	return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryOptionDate(deliveryOption) {
	const today = dayjs();

	const transitDays = deliveryOption.deliveryDays;
	let deliveryDate = today;

	//let deliveryDate = today.add(transitDays, "days");

	// if (deliveryDate.format('dddd') === 'Saturday' ) {

	// 	deliveryDate = today.add(transitDays+2, "days");
	// } else if (deliveryDate.format('dddd') === 'Sunday') {
	// 	deliveryDate = today.add(transitDays+1, "days");
	// }

	let i = 0;

	while (i < transitDays ) {
		deliveryDate = deliveryDate.add(1, "day");
		const offWeekend = deliveryDate.format('dddd');
		if (offWeekend !== 'Saturday' && offWeekend !== 'Sunday') {
			i++;
		}
		
	}


	const dateString = deliveryDate.format("dddd, MMMM D");

	console.log(dateString);

	return dateString;
}

// function isWeekend(dateDate, transitDays) {
// 	console.log(dateDate);
// 	console.log(transitDays);
// 	const today = dayjs();

// 	if (dateDate === 'Saturday') {
// 		return today.add(transitDays +2, "days");
// 	}
// }
