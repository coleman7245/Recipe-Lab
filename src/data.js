const data = [ 
	{
		id : 1, 
		person: 'Karolin', 
		order: { 
			main: 'Burrito', 
			protein: 'Organic Tofu', 
			rice: 'Purple Rice', 
			sauce: 'Green Crack', 
			toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], 
			drink: 'Korchata', 
			cost: 22 
		}, 
		paid: false 
	}, 
	{
		id : 2, 
		person: 'Mark', 
		order: { 
			main: 'Rice Bowl', 
			protein: 'Ginger Soy Chix', 
			rice: 'Sticky Rice', 
			sauce: 'Korilla', 
			toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], 
			drink: 'Korchata', 
			cost: 19 
		}, 
		paid: false 
	}, 
	{
		id : 3, 
		person: 'Matt', 
		order: { 
			main: 'Salad Bowl', 
			protein: 'Organic Tofu', 
			rice: 'none', 
			sauce: "K'lla", 
			toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], 
			drink: 'Sparkling Blood Orange Soda', 
			cost: 20 
		}, 
		paid: true 
	} 
]

export default data;