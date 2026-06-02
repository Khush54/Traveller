const CATEGORY_IMAGES = {
  Adventure: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  Beach: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
  City: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=900&q=80",
  Culture: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
  Heritage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
  "Hill Station": "https://images.unsplash.com/photo-1544634076-a90160ddf845?auto=format&fit=crop&w=900&q=80",
  Mountain: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  Nature: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  Spiritual: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=900&q=80",
  Wildlife: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=900&q=80"
};

const STATE_DESTINATION_GROUPS = [
  {
    state: "Andhra Pradesh",
    region: "South India",
    places: [
      ["Araku Valley", "Hill Station", ["Coffee plantations", "Borra Caves", "Valley viewpoints"]],
      ["Visakhapatnam", "Beach", ["RK Beach", "Submarine Museum", "Kailasagiri"]],
      ["Srisailam", "Spiritual", ["Mallikarjuna Temple", "Dam views", "Nallamala forest"]],
      ["Lepakshi", "Heritage", ["Veerabhadra Temple", "Stone carvings", "Nandi statue"]]
    ]
  },
  {
    state: "Arunachal Pradesh",
    region: "North East India",
    places: [
      ["Tawang", "Mountain", ["Tawang Monastery", "Sela Pass", "Mountain lakes"]],
      ["Ziro Valley", "Culture", ["Apatani culture", "Paddy fields", "Music festival"]],
      ["Bomdila", "Hill Station", ["Monasteries", "Apple orchards", "Himalayan views"]],
      ["Namdapha National Park", "Wildlife", ["Rainforest trails", "Birdwatching", "River valleys"]]
    ]
  },
  {
    state: "Assam",
    region: "North East India",
    places: [
      ["Kaziranga National Park", "Wildlife", ["Jeep safari", "Rhino sightings", "Grasslands"]],
      ["Majuli", "Culture", ["River island", "Satras", "Mask making"]],
      ["Guwahati", "City", ["Kamakhya Temple", "Brahmaputra cruise", "Museums"]],
      ["Sivasagar", "Heritage", ["Ahom monuments", "Talatal Ghar", "Sivasagar tank"]]
    ]
  },
  {
    state: "Bihar",
    region: "East India",
    places: [
      ["Bodh Gaya", "Spiritual", ["Mahabodhi Temple", "Monasteries", "Meditation spaces"]],
      ["Nalanda", "Heritage", ["Ancient university", "Museum", "Buddhist history"]],
      ["Rajgir", "Heritage", ["Vishwa Shanti Stupa", "Hot springs", "Ropeway"]],
      ["Patna", "City", ["Patna Sahib", "Bihar Museum", "Riverfront"]]
    ]
  },
  {
    state: "Chhattisgarh",
    region: "Central India",
    places: [
      ["Chitrakote Falls", "Nature", ["Waterfall views", "Forest stays", "Boat rides"]],
      ["Barnawapara Wildlife Sanctuary", "Wildlife", ["Forest safari", "Birdwatching", "Deer sightings"]],
      ["Sirpur", "Heritage", ["Ancient temples", "Buddhist sites", "Archaeology"]],
      ["Raipur", "City", ["Purkhouti Muktangan", "Museums", "Local food"]]
    ]
  },
  {
    state: "Goa",
    region: "West India",
    places: [
      ["Baga Beach", "Beach", ["Nightlife", "Water sports", "Beach shacks"]],
      ["Old Goa", "Heritage", ["Churches", "Portuguese history", "Museums"]],
      ["Dudhsagar Falls", "Nature", ["Waterfall trek", "Jeep trail", "Forest views"]],
      ["Fontainhas", "Culture", ["Latin Quarter", "Colorful streets", "Cafe walks"]]
    ]
  },
  {
    state: "Gujarat",
    region: "West India",
    places: [
      ["Rann of Kutch", "Culture", ["White desert", "Craft villages", "Rann Utsav"]],
      ["Statue of Unity", "Heritage", ["Viewing gallery", "Narmada views", "Museum"]],
      ["Gir National Park", "Wildlife", ["Lion safari", "Forest trails", "Birdlife"]],
      ["Dwarka", "Spiritual", ["Dwarkadhish Temple", "Seaside ghats", "Bet Dwarka"]]
    ]
  },
  {
    state: "Haryana",
    region: "North India",
    places: [
      ["Kurukshetra", "Spiritual", ["Brahma Sarovar", "Gita sites", "Museums"]],
      ["Sultanpur National Park", "Wildlife", ["Birdwatching", "Wetlands", "Winter migration"]],
      ["Morni Hills", "Hill Station", ["Lake views", "Short treks", "Forest roads"]],
      ["Pinjore Gardens", "Heritage", ["Mughal gardens", "Fountains", "Terraces"]]
    ]
  },
  {
    state: "Himachal Pradesh",
    region: "North India",
    places: [
      ["Manali", "Mountain", ["Solang Valley", "Atal Tunnel", "Mountain cafes"]],
      ["Shimla", "Hill Station", ["Mall Road", "Jakhu Temple", "Colonial walks"]],
      ["Dharamshala", "Culture", ["Monasteries", "Cricket stadium", "McLeod Ganj"]],
      ["Spiti Valley", "Adventure", ["High passes", "Monasteries", "Cold desert"]]
    ]
  },
  {
    state: "Jharkhand",
    region: "East India",
    places: [
      ["Netarhat", "Hill Station", ["Sunrise point", "Forest roads", "Plateau views"]],
      ["Dassam Falls", "Nature", ["Waterfall views", "Picnic trails", "Rocky landscape"]],
      ["Deoghar", "Spiritual", ["Baidyanath Temple", "Pilgrimage walks", "Local markets"]],
      ["Betla National Park", "Wildlife", ["Safari routes", "Forests", "Historic fort"]]
    ]
  },
  {
    state: "Karnataka",
    region: "South India",
    places: [
      ["Hampi", "Heritage", ["Vittala Temple", "Boulder landscape", "Sunset points"]],
      ["Mysuru", "Culture", ["Mysore Palace", "Dasara culture", "Markets"]],
      ["Coorg", "Hill Station", ["Coffee estates", "Abbey Falls", "Forest stays"]],
      ["Gokarna", "Beach", ["Om Beach", "Temple town", "Cliff walks"]]
    ]
  },
  {
    state: "Kerala",
    region: "South India",
    places: [
      ["Alleppey Backwaters", "Nature", ["Houseboats", "Canals", "Village life"]],
      ["Munnar", "Hill Station", ["Tea gardens", "Eravikulam", "Viewpoints"]],
      ["Kochi", "Culture", ["Fort Kochi", "Chinese nets", "Art cafes"]],
      ["Wayanad", "Adventure", ["Edakkal Caves", "Waterfalls", "Forest trails"]]
    ]
  },
  {
    state: "Madhya Pradesh",
    region: "Central India",
    places: [
      ["Khajuraho", "Heritage", ["Temple carvings", "Light show", "Architecture"]],
      ["Kanha National Park", "Wildlife", ["Tiger safari", "Sal forest", "Birdlife"]],
      ["Sanchi", "Heritage", ["Great Stupa", "Buddhist monuments", "Museum"]],
      ["Bhopal", "City", ["Upper Lake", "Tribal Museum", "Old city"]]
    ]
  },
  {
    state: "Maharashtra",
    region: "West India",
    places: [
      ["Mumbai", "City", ["Gateway of India", "Marine Drive", "Street food"]],
      ["Ajanta and Ellora", "Heritage", ["Cave temples", "Rock-cut art", "Ancient murals"]],
      ["Mahabaleshwar", "Hill Station", ["Viewpoints", "Strawberry farms", "Lake rides"]],
      ["Tadoba National Park", "Wildlife", ["Tiger safari", "Forest lodges", "Birdwatching"]]
    ]
  },
  {
    state: "Manipur",
    region: "North East India",
    places: [
      ["Loktak Lake", "Nature", ["Floating islands", "Lake views", "Keibul Lamjao"]],
      ["Imphal", "Culture", ["Ima Market", "Museums", "Local food"]],
      ["Ukhrul", "Hill Station", ["Shirui hills", "Village trails", "Lily season"]],
      ["Moirang", "Heritage", ["INA history", "Lake access", "Cultural sites"]]
    ]
  },
  {
    state: "Meghalaya",
    region: "North East India",
    places: [
      ["Shillong", "Hill Station", ["Umiam Lake", "Elephant Falls", "Cafe culture"]],
      ["Cherrapunji", "Nature", ["Waterfalls", "Caves", "Living root bridges"]],
      ["Mawlynnong", "Culture", ["Clean village", "Root bridge", "Sky walk"]],
      ["Dawki", "Adventure", ["Umngot River", "Boating", "Border views"]]
    ]
  },
  {
    state: "Mizoram",
    region: "North East India",
    places: [
      ["Aizawl", "Culture", ["Viewpoints", "Local markets", "Churches"]],
      ["Reiek", "Hill Station", ["Mountain views", "Village walks", "Short treks"]],
      ["Vantawng Falls", "Nature", ["Waterfall views", "Forest landscape", "Photography"]],
      ["Champhai", "Culture", ["Vineyards", "Valley views", "Mizo villages"]]
    ]
  },
  {
    state: "Nagaland",
    region: "North East India",
    places: [
      ["Kohima", "Culture", ["War cemetery", "Local markets", "Naga food"]],
      ["Dzukou Valley", "Adventure", ["Valley trek", "Camp views", "Seasonal flowers"]],
      ["Mokokchung", "Culture", ["Ao villages", "Hill views", "Craft culture"]],
      ["Mon", "Heritage", ["Konyak culture", "Village trails", "Wood carvings"]]
    ]
  },
  {
    state: "Odisha",
    region: "East India",
    places: [
      ["Puri", "Spiritual", ["Jagannath Temple", "Puri Beach", "Konark day trip"]],
      ["Konark", "Heritage", ["Sun Temple", "Stone carvings", "Chandrabhaga Beach"]],
      ["Chilika Lake", "Nature", ["Boat rides", "Birdwatching", "Dolphin sightings"]],
      ["Bhubaneswar", "City", ["Temple trail", "Museums", "Old town"]]
    ]
  },
  {
    state: "Punjab",
    region: "North India",
    places: [
      ["Amritsar", "Spiritual", ["Golden Temple", "Wagah border", "Punjabi food"]],
      ["Anandpur Sahib", "Spiritual", ["Takht Sahib", "Heritage walks", "Sikh history"]],
      ["Patiala", "Culture", ["Qila Mubarak", "Markets", "Royal heritage"]],
      ["Chandigarh Rock Garden", "City", ["Art installations", "Sukhna Lake", "Garden walks"]]
    ]
  },
  {
    state: "Rajasthan",
    region: "North India",
    places: [
      ["Jaipur", "Culture", ["Amber Fort", "Hawa Mahal", "Local bazaars"]],
      ["Udaipur", "Heritage", ["Lake Pichola", "City Palace", "Sunset views"]],
      ["Jaisalmer", "Adventure", ["Desert safari", "Golden Fort", "Dune camping"]],
      ["Jodhpur", "Heritage", ["Mehrangarh Fort", "Blue city", "Old markets"]]
    ]
  },
  {
    state: "Sikkim",
    region: "North East India",
    places: [
      ["Gangtok", "Mountain", ["MG Marg", "Rumtek Monastery", "Cable car"]],
      ["Pelling", "Hill Station", ["Kanchenjunga views", "Skywalk", "Monasteries"]],
      ["Lachung", "Mountain", ["Yumthang Valley", "Snow views", "River roads"]],
      ["Tsomgo Lake", "Nature", ["Glacial lake", "Yak rides", "High-altitude views"]]
    ]
  },
  {
    state: "Tamil Nadu",
    region: "South India",
    places: [
      ["Ooty", "Hill Station", ["Botanical Garden", "Ooty Lake", "Tea viewpoints"]],
      ["Madurai", "Spiritual", ["Meenakshi Temple", "Old streets", "Local food"]],
      ["Rameswaram", "Spiritual", ["Ramanathaswamy Temple", "Pamban Bridge", "Dhanushkodi"]],
      ["Mahabalipuram", "Heritage", ["Shore Temple", "Stone carvings", "Beach walks"]]
    ]
  },
  {
    state: "Telangana",
    region: "South India",
    places: [
      ["Hyderabad", "City", ["Charminar", "Golconda Fort", "Biryani"]],
      ["Warangal", "Heritage", ["Warangal Fort", "Thousand Pillar Temple", "Kakatiya art"]],
      ["Nagarjuna Sagar", "Nature", ["Dam views", "Boat rides", "Island museum"]],
      ["Ananthagiri Hills", "Hill Station", ["Forest trails", "Viewpoints", "Weekend stays"]]
    ]
  },
  {
    state: "Tripura",
    region: "North East India",
    places: [
      ["Unakoti", "Heritage", ["Rock carvings", "Forest trails", "Photography"]],
      ["Agartala", "City", ["Ujjayanta Palace", "Museums", "Markets"]],
      ["Neermahal", "Heritage", ["Lake palace", "Boat ride", "Royal history"]],
      ["Jampui Hills", "Hill Station", ["Orange orchards", "Viewpoints", "Village stays"]]
    ]
  },
  {
    state: "Uttarakhand",
    region: "North India",
    places: [
      ["Rishikesh", "Adventure", ["River rafting", "Yoga retreats", "Ganga viewpoints"]],
      ["Nainital", "Hill Station", ["Naini Lake", "Mall Road", "Viewpoints"]],
      ["Auli", "Mountain", ["Snow slopes", "Cable car", "Himalayan views"]],
      ["Jim Corbett National Park", "Wildlife", ["Jeep safari", "Tiger reserve", "Forest lodges"]]
    ]
  },
  {
    state: "Uttar Pradesh",
    region: "North India",
    places: [
      ["Taj Mahal", "Heritage", ["Sunrise photography", "Mughal architecture", "Yamuna views"]],
      ["Varanasi", "Spiritual", ["Ganga aarti", "Boat ride", "Old city lanes"]],
      ["Lucknow", "Culture", ["Bara Imambara", "Awadhi food", "Heritage walks"]],
      ["Mathura and Vrindavan", "Spiritual", ["Temple trail", "Yamuna ghats", "Festivals"]]
    ]
  },
  {
    state: "West Bengal",
    region: "East India",
    places: [
      ["Darjeeling", "Hill Station", ["Tiger Hill", "Tea gardens", "Toy train"]],
      ["Kolkata", "City", ["Victoria Memorial", "Park Street", "Heritage trams"]],
      ["Sundarbans", "Wildlife", ["Mangrove safari", "Birdlife", "River channels"]],
      ["Digha", "Beach", ["Sea beach", "Seafood", "Weekend stays"]]
    ]
  },
  {
    state: "Andaman and Nicobar Islands",
    region: "Islands",
    places: [
      ["Port Blair", "Heritage", ["Cellular Jail", "Ross Island", "Harbor views"]],
      ["Havelock Island", "Beach", ["Radhanagar Beach", "Snorkeling", "Island sunsets"]],
      ["Neil Island", "Beach", ["Natural Bridge", "Coral beaches", "Cycling"]],
      ["Baratang Island", "Adventure", ["Limestone caves", "Mangrove creeks", "Mud volcano"]]
    ]
  },
  {
    state: "Chandigarh",
    region: "North India",
    places: [
      ["Rock Garden", "City", ["Sculpture garden", "Art installations", "Urban walks"]],
      ["Sukhna Lake", "Nature", ["Boating", "Sunset walks", "Birdlife"]],
      ["Rose Garden", "Nature", ["Seasonal flowers", "Garden paths", "Photography"]],
      ["Capitol Complex", "Heritage", ["Modernist architecture", "Open Hand Monument", "City planning"]]
    ]
  },
  {
    state: "Dadra and Nagar Haveli and Daman and Diu",
    region: "West India",
    places: [
      ["Silvassa", "Nature", ["Vanganga Lake", "Tribal museum", "Garden walks"]],
      ["Daman", "Beach", ["Devka Beach", "Fort walls", "Portuguese heritage"]],
      ["Diu", "Beach", ["Diu Fort", "Nagoa Beach", "Seaside cafes"]],
      ["Khanvel", "Nature", ["Forest stays", "River views", "Quiet resorts"]]
    ]
  },
  {
    state: "Delhi",
    region: "North India",
    places: [
      ["Red Fort", "Heritage", ["Mughal fort", "Old Delhi", "Light show"]],
      ["India Gate", "Heritage", ["War memorial", "Kartavya Path", "Evening walks"]],
      ["Qutub Minar", "Heritage", ["Minaret complex", "Stone carvings", "History walks"]],
      ["Lotus Temple", "Spiritual", ["Modern architecture", "Quiet halls", "Gardens"]]
    ]
  },
  {
    state: "Jammu and Kashmir",
    region: "North India",
    places: [
      ["Srinagar", "Mountain", ["Dal Lake", "Mughal gardens", "Houseboats"]],
      ["Gulmarg", "Adventure", ["Gondola ride", "Snow sports", "Meadow views"]],
      ["Pahalgam", "Hill Station", ["Lidder River", "Valley walks", "Pine forests"]],
      ["Jammu", "Spiritual", ["Raghunath Temple", "Bahu Fort", "Local markets"]]
    ]
  },
  {
    state: "Ladakh",
    region: "North India",
    places: [
      ["Leh", "Adventure", ["Monasteries", "High passes", "Road trips"]],
      ["Pangong Lake", "Nature", ["Blue lake", "Camping", "High-altitude views"]],
      ["Nubra Valley", "Mountain", ["Sand dunes", "Diskit Monastery", "Bactrian camels"]],
      ["Zanskar Valley", "Adventure", ["Remote treks", "River valleys", "Monasteries"]]
    ]
  },
  {
    state: "Lakshadweep",
    region: "Islands",
    places: [
      ["Kavaratti", "Beach", ["Lagoon views", "Snorkeling", "Kayaking"]],
      ["Agatti Island", "Beach", ["Clear water", "Coral views", "Beach stays"]],
      ["Bangaram Island", "Beach", ["Quiet beaches", "Water sports", "Sunsets"]],
      ["Minicoy Island", "Culture", ["Lighthouse", "Lagoon", "Island culture"]]
    ]
  },
  {
    state: "Puducherry",
    region: "South India",
    places: [
      ["French Quarter", "Culture", ["Colonial streets", "Cafes", "Heritage walks"]],
      ["Auroville", "Spiritual", ["Matrimandir", "Community spaces", "Quiet gardens"]],
      ["Promenade Beach", "Beach", ["Seaside walks", "Rock beach", "Sunrise views"]],
      ["Paradise Beach", "Beach", ["Boat access", "Golden sand", "Backwater views"]]
    ]
  }
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function durationFor(category) {
  const durations = {
    Adventure: "2-4 days",
    Beach: "2-3 days",
    City: "1-2 days",
    Culture: "2 days",
    Heritage: "1-2 days",
    "Hill Station": "2-3 days",
    Mountain: "3-4 days",
    Nature: "1-2 days",
    Spiritual: "1-2 days",
    Wildlife: "2 days"
  };
  return durations[category] || "2 days";
}

function bestTimeFor(category, region) {
  if (region === "Islands" || category === "Beach") return "October to March";
  if (category === "Mountain" || category === "Adventure") return "March to June and September to November";
  if (category === "Wildlife") return "November to April";
  return "October to March";
}

function summaryFor(place, state, category, highlights) {
  return `${place} in ${state} is a ${category.toLowerCase()} destination known for ${highlights.join(", ").toLowerCase()}.`;
}

const PREFETCHED_IMAGES = {
  "jammu-jammu-and-kashmir": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hari_niwas.jpg/330px-Hari_niwas.jpg",
  "spiti-valley-himachal-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg/330px-Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg",
  "visakhapatnam-andhra-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/What_is_Shipyard.jpg/330px-What_is_Shipyard.jpg",
  "varanasi-uttar-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg/330px-Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg",
  "french-quarter-puducherry": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/French_Quarter%2C_looking_north_with_Mississippi_River_to_the_right_2011.jpg/330px-French_Quarter%2C_looking_north_with_Mississippi_River_to_the_right_2011.jpg",
  "lucknow-uttar-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Gomti_Nagar.jpg/330px-Gomti_Nagar.jpg",
  "reiek-mizoram": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Reiek.JPG/330px-Reiek.JPG",
  "kolkata-west-bengal": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kolkata_maidan.jpg/330px-Kolkata_maidan.jpg",
  "ooty-tamil-nadu": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ooty_lake.jpg/330px-Ooty_lake.jpg",
  "sukhna-lake-chandigarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sukhna_Lake_Chandigarh_India.jpg/330px-Sukhna_Lake_Chandigarh_India.jpg",
  "puri-odisha": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shri_Jagannatha_Temple.jpg/330px-Shri_Jagannatha_Temple.jpg",
  "lachung-sikkim": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lachung_Town.jpg/330px-Lachung_Town.jpg",
  "mokokchung-nagaland": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mokokchung.jpg/330px-Mokokchung.jpg",
  "amritsar-punjab": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Golden_Temple_Amritsar_Gurudwara_%28cropped%29.jpg/330px-Golden_Temple_Amritsar_Gurudwara_%28cropped%29.jpg",
  "sanchi-madhya-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG/330px-East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG",
  "jim-corbett-national-park-uttarakhand": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg/330px-Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg",
  "rishikesh-uttarakhand": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Trayambakeshwar_Temple_VK.jpg/330px-Trayambakeshwar_Temple_VK.jpg",
  "warangal-telangana": "https://upload.wikimedia.org/wikipedia/commons/6/6e/WarangalMontage.jpg",
  "vantawng-falls-mizoram": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Vantawng_Khawhthla.jpg/330px-Vantawng_Khawhthla.jpg",
  "mysuru-karnataka": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mysuru_Montage.jpg/330px-Mysuru_Montage.jpg",
  "pinjore-gardens-haryana": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pinjore_Garden_Panchkula.jpg/330px-Pinjore_Garden_Panchkula.jpg",
  "pelling-sikkim": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sunrise_over_Kangchenjunga.jpg/330px-Sunrise_over_Kangchenjunga.jpg",
  "qutub-minar-delhi": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Qutb_Minar_2022.jpg/330px-Qutb_Minar_2022.jpg",
  "minicoy-island-lakshadweep": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Minicoy_Island%2C_Lakshadweep.jpg/330px-Minicoy_Island%2C_Lakshadweep.jpg",
  "srinagar-jammu-and-kashmir": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Red_and_Yellow_Tulips.JPG/330px-Red_and_Yellow_Tulips.JPG",
  "baga-beach-goa": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Baga_Beach%2C_Calangute%2C_Goa.jpg/330px-Baga_Beach%2C_Calangute%2C_Goa.jpg",
  "munnar-kerala": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Munnar_Overview.jpg/330px-Munnar_Overview.jpg",
  "bhopal-madhya-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Deewali_New_market.jpg/330px-Deewali_New_market.jpg",
  "majuli-assam": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Doriya_River_of_Majuli.jpg/330px-Doriya_River_of_Majuli.jpg",
  "kanha-national-park-madhya-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Tiger_Kanha_National_Park.jpg/330px-Tiger_Kanha_National_Park.jpg",
  "port-blair-andaman-and-nicobar-islands": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/View_from_South_Point%2C_%28Port_Blair%2C_India%29.jpg/330px-View_from_South_Point%2C_%28Port_Blair%2C_India%29.jpg",
  "moirang-manipur": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/INA_Memorial%2C_Moirang%2C_Manipur_%2812%29.jpeg/330px-INA_Memorial%2C_Moirang%2C_Manipur_%2812%29.jpeg",
  "tadoba-national-park-maharashtra": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Panthera_tigris_tigris_Tidoba_20150306.jpg/330px-Panthera_tigris_tigris_Tidoba_20150306.jpg",
  "madurai-tamil-nadu": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Meenakshi_Amman_West_Tower.jpg/330px-Meenakshi_Amman_West_Tower.jpg",
  "ananthagiri-hills-telangana": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ananthagiri_Hills.JPG/330px-Ananthagiri_Hills.JPG",
  "raipur-chhattisgarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sri_Ram_Mandir_raipur_.jpg/330px-Sri_Ram_Mandir_raipur_.jpg",
  "kaziranga-national-park-assam": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Beauty_of_Kaziranga_National_Park.jpg/330px-Beauty_of_Kaziranga_National_Park.jpg",
  "shillong-meghalaya": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Elephant_Falls_II%2C_Shillong.jpg/330px-Elephant_Falls_II%2C_Shillong.jpg",
  "bodh-gaya-bihar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Mahabodhi_temple_at_Bodhgaya_in_Bihar_21.jpg/330px-Mahabodhi_temple_at_Bodhgaya_in_Bihar_21.jpg",
  "dwarka-gujarat": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Dwarakadheesh_Temple%2C_2014.jpg/330px-Dwarakadheesh_Temple%2C_2014.jpg",
  "unakoti-tripura": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Unakoti_3.jpg/330px-Unakoti_3.jpg",
  "dudhsagar-falls-goa": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Doodhsagar_Fall.jpg/330px-Doodhsagar_Fall.jpg",
  "red-fort-delhi": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/330px-Delhi_fort.jpg",
  "kavaratti-lakshadweep": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kavaratii.jpg/330px-Kavaratii.jpg",
  "kurukshetra-haryana": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kurukshetra_junction_kkde.jpg/330px-Kurukshetra_junction_kkde.jpg",
  "jaipur-rajasthan": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/330px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
  "silvassa-dadra-and-nagar-haveli-and-daman-and-diu": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Dadra_and_Nagar_Haveli_Silvassa_3.jpg/330px-Dadra_and_Nagar_Haveli_Silvassa_3.jpg",
  "agartala-tripura": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tripura_State_Museum_Agartala_Tripura_India.jpg/330px-Tripura_State_Museum_Agartala_Tripura_India.jpg",
  "patna-bihar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Patna_high_court1.jpg/330px-Patna_high_court1.jpg",
  "morni-hills-haryana": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mornihills.jpg/330px-Mornihills.jpg",
  "india-gate-delhi": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/India_Gate_%28All_India_War_Memorial%29.jpg/330px-India_Gate_%28All_India_War_Memorial%29.jpg",
  "tsomgo-lake-sikkim": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tsongmo_Lake_or_Changu_Lake_-_East_Sikkim.jpg/330px-Tsongmo_Lake_or_Changu_Lake_-_East_Sikkim.jpg",
  "bhubaneswar-odisha": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Bhubaneswar_skyline_121224.jpg/330px-Bhubaneswar_skyline_121224.jpg",
  "pahalgam-jammu-and-kashmir": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/LiddarRiverJhelum.jpeg/330px-LiddarRiverJhelum.jpeg",
  "lepakshi-andhra-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Front_side_of_Veerabhadra_Temple%2C_Lepakshi.jpg/330px-Front_side_of_Veerabhadra_Temple%2C_Lepakshi.jpg",
  "auroville-puducherry": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Town_Hall_of_Auroville.jpg/330px-Town_Hall_of_Auroville.jpg",
  "mahabalipuram-tamil-nadu": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg/330px-A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg",
  "sundarbans-west-bengal": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Save_the_sundarbans_20.jpg/330px-Save_the_sundarbans_20.jpg",
  "khajuraho-madhya-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/1_Khajuraho.jpg/330px-1_Khajuraho.jpg",
  "mawlynnong-meghalaya": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mawlynnong_-_Cleanest_village_of_Asia.jpg/330px-Mawlynnong_-_Cleanest_village_of_Asia.jpg",
  "gangtok-sikkim": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kangch-Goechala.jpg/330px-Kangch-Goechala.jpg",
  "srisailam-andhra-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Srisailam.jpg/330px-Srisailam.jpg",
  "digha-west-bengal": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Digha_Tourist_Lodge_front_yard_1.jpg/330px-Digha_Tourist_Lodge_front_yard_1.jpg",
  "udaipur-rajasthan": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/330px-Evening_view%2C_City_Palace%2C_Udaipur.jpg",
  "paradise-beach-puducherry": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Paradise_beach.JPG/330px-Paradise_beach.JPG",
  "mahabaleshwar-maharashtra": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/MAHABALESWAR_LANDSCAPE.jpg/330px-MAHABALESWAR_LANDSCAPE.jpg",
  "baratang-island-andaman-and-nicobar-islands": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Baratang_I_locale.png/330px-Baratang_I_locale.png",
  "namdapha-national-park-arunachal-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Forest_snow_Namdapha_IMG_3373_04.jpg/330px-Forest_snow_Namdapha_IMG_3373_04.jpg",
  "netarhat-jharkhand": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Pine_trees_of_Netarhat_Hill_station.jpg/330px-Pine_trees_of_Netarhat_Hill_station.jpg",
  "hampi-karnataka": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/330px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg",
  "sivasagar-assam": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sivasagar_Night_View.jpg/330px-Sivasagar_Night_View.jpg",
  "jodhpur-rajasthan": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mehrangarh_Fort_sanhita.jpg/330px-Mehrangarh_Fort_sanhita.jpg",
  "rann-of-kutch-gujarat": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Rann_of_Kutch_-_White_Desert.jpg/330px-Rann_of_Kutch_-_White_Desert.jpg",
  "neermahal-tripura": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Neer_Mahal%2C_the_water_palace_of_Tripura_02.jpg/330px-Neer_Mahal%2C_the_water_palace_of_Tripura_02.jpg",
  "manali-himachal-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/960px-Manali_City.jpg",
  "daman-dadra-and-nagar-haveli-and-daman-and-diu": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Vanganga_Garden%2C_Silvassa_%2832345632184%29.jpg/960px-Vanganga_Garden%2C_Silvassa_%2832345632184%29.jpg",
  "bangaram-island-lakshadweep": null,
  "nubra-valley-ladakh": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/5_Nubra_valley.jpg/330px-5_Nubra_valley.jpg",
  "sultanpur-national-park-haryana": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sultanpur_Bird_Sanctuary%2C_Gurgaon.jpg/330px-Sultanpur_Bird_Sanctuary%2C_Gurgaon.jpg",
  "dharamshala-himachal-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dharamshala_03_%28Cropped%29.jpg/330px-Dharamshala_03_%28Cropped%29.jpg",
  "agatti-island-lakshadweep": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Agatti_Airstrip.jpg/330px-Agatti_Airstrip.jpg",
  "mumbai-maharashtra": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mumbai_Bandra-Worli_Sea_Link.jpg/330px-Mumbai_Bandra-Worli_Sea_Link.jpg",
  "konark-odisha": null,
  "rose-garden-chandigarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rose_Garden_%2CChandigarh%2CIndia.jpg/960px-Rose_Garden_%2CChandigarh%2CIndia.jpg",
  "kochi-kerala": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kochi_Skyline.jpg/330px-Kochi_Skyline.jpg",
  "havelock-island-andaman-and-nicobar-islands": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Havelock%2C_Andaman_%26_Nicobar_Islands.JPG/330px-Havelock%2C_Andaman_%26_Nicobar_Islands.JPG",
  "mon-nagaland": null,
  "statue-of-unity-gujarat": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/330px-Statue_of_Unity.jpg",
  "tawang-arunachal-pradesh": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/The_buddist_monastry.jpg/330px-The_buddist_monastry.jpg",
  "sirpur-chhattisgarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/7th_-_9th_century_Surang_tila_mandapa_before_shrines%2C_Sirpur_monuments_Chhattisgarh.jpg/960px-7th_-_9th_century_Surang_tila_mandapa_before_shrines%2C_Sirpur_monuments_Chhattisgarh.jpg",
  "loktak-lake-manipur": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/The_Loktak_Lake.jpg/330px-The_Loktak_Lake.jpg",
  "gulmarg-jammu-and-kashmir": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ancient_Temple%2C_Gulmarg.jpg/330px-Ancient_Temple%2C_Gulmarg.jpg",
  "nalanda-bihar": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg/330px-Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg",
  "ajanta-and-ellora-maharashtra": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ajanta_%2863%29.jpg/960px-Ajanta_%2863%29.jpg",
  "dassam-falls-jharkhand": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Dassam_falls.jpg/330px-Dassam_falls.jpg",
  "dzukou-valley-nagaland": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dzuko_Valley_Guest_House.jpg/330px-Dzuko_Valley_Guest_House.jpg",
  "chitrakote-falls-chhattisgarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chitrakot_waterfalls.JPG/330px-Chitrakot_waterfalls.JPG",
  "nagarjuna-sagar-telangana": null,
  "leh-ladakh": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Leh_City_seen_from_Shanti_Stupa.JPG/330px-Leh_City_seen_from_Shanti_Stupa.JPG",
  "champhai-mizoram": null,
  "barnawapara-wildlife-sanctuary-chhattisgarh": null,
  "kohima-nagaland": null,
  "rameswaram-tamil-nadu": null,
  "jampui-hills-tripura": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/A_view_of_Jampui_Hills_in_the_East_from_the_plains_of_Kanchanpur.jpg/330px-A_view_of_Jampui_Hills_in_the_East_from_the_plains_of_Kanchanpur.jpg",
  "diu-dadra-and-nagar-haveli-and-daman-and-diu": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/IN-DD.svg/960px-IN-DD.svg.png",
  "betla-national-park-jharkhand": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Entrance_of_Betla_national_park.jpg/330px-Entrance_of_Betla_national_park.jpg",
  "imphal-manipur": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Imphal_At_Dusk.jpg/330px-Imphal_At_Dusk.jpg",
  "alleppey-backwaters-kerala": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/House_Boat_DSW.jpg/960px-House_Boat_DSW.jpg",
  "wayanad-kerala": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/330px-Blue%2C_Green_%26_White.jpg",
  "bomdila-arunachal-pradesh": null,
  "gokarna-karnataka": null,
  "taj-mahal-uttar-pradesh": null,
  "araku-valley-andhra-pradesh": null,
  "dawki-meghalaya": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Umngot_river%2C_Dawki.jpg/330px-Umngot_river%2C_Dawki.jpg",
  "hyderabad-telangana": null,
  "patiala-punjab": null,
  "khanvel-dadra-and-nagar-haveli-and-daman-and-diu": null,
  "chandigarh-rock-garden-punjab": null,
  "promenade-beach-puducherry": null,
  "nainital-uttarakhand": null,
  "ukhrul-manipur": null,
  "gir-national-park-gujarat": null,
  "coorg-karnataka": null,
  "guwahati-assam": null,
  "chilika-lake-odisha": null,
  "anandpur-sahib-punjab": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/1_Sri_Kesgarh_Takhat_Anandpur_Sahib_Khalsa_birthplace_Punjab_India.jpg/330px-1_Sri_Kesgarh_Takhat_Anandpur_Sahib_Khalsa_birthplace_Punjab_India.jpg",
  "shimla-himachal-pradesh": null,
  "neil-island-andaman-and-nicobar-islands": null,
  "fontainhas-goa": null,
  "jaisalmer-rajasthan": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jaisalmer_Fort.jpg/330px-Jaisalmer_Fort.jpg",
  "auli-uttarakhand": null,
  "aizawl-mizoram": null,
  "darjeeling-west-bengal": null,
  "zanskar-valley-ladakh": null,
  "pangong-lake-ladakh": null,
  "rock-garden-chandigarh": null,
  "lotus-temple-delhi": null,
  "rajgir-bihar": null,
  "deoghar-jharkhand": null,
  "old-goa-goa": null,
  "cherrapunji-meghalaya": null,
  "ziro-valley-arunachal-pradesh": null,
  "capitol-complex-chandigarh": null,
  "mathura-and-vrindavan-uttar-pradesh": null
};

function imageFor(place, state, category) {
  const id = slugify(place + "-" + state);
  if (PREFETCHED_IMAGES[id]) {
    return PREFETCHED_IMAGES[id];
  }
  const keyword = place.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `https://loremflickr.com/900/650/india,${keyword}/all`;
}

const TRAVELLER_DESTINATIONS = STATE_DESTINATION_GROUPS.flatMap((group) =>
  group.places.map(([name, category, highlights]) => ({
    id: `${slugify(group.state)}-${slugify(name)}`,
    name,
    state: group.state,
    region: group.region,
    category,
    duration: durationFor(category),
    image: imageFor(name, group.state, category),
    summary: summaryFor(name, group.state, category, highlights),
    highlights,
    bestTime: bestTimeFor(category, group.region)
  }))
);
