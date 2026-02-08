const restaurants = [

    {
        "place_id": "kelowna_restaurant_006",
        "name": "Lakeshore Grill & Co.",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8878, "lng": -119.4985 } },
        "formatted_address": "145 Lakeshore Rd, Kelowna, BC V1Y 1X6, Canada",
        "formatted_phone_number": "+1 250-555-7206",
        "website": "https://lakeshoregrill.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 11:00 AM – 9:00 PM",
                "Tuesday: 11:00 AM – 9:00 PM",
                "Wednesday: 11:00 AM – 9:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 10:00 AM – 10:00 PM",
                "Sunday: 10:00 AM – 8:00 PM"
            ]
        },
        "rating": 4.4,
        "user_ratings_total": 182,
        "price_level": 3,
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_restaurant_007",
        "name": "Pandosy Street Pizza",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8625, "lng": -119.4872 } },
        "formatted_address": "312 Pandosy St, Kelowna, BC V1Y 1P4, Canada",
        "formatted_phone_number": "+1 250-555-7207",
        "website": "https://pandosypizza.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 12:00 PM – 10:00 PM",
                "Tuesday: 12:00 PM – 10:00 PM",
                "Wednesday: 12:00 PM – 10:00 PM",
                "Thursday: 12:00 PM – 11:00 PM",
                "Friday: 12:00 PM – 12:00 AM",
                "Saturday: 12:00 PM – 12:00 AM",
                "Sunday: 12:00 PM – 9:00 PM"
            ]
        },
        "rating": 4.1,
        "user_ratings_total": 97,
        "price_level": 2,
        "delivery": true,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_restaurant_008",
        "name": "Bernard Street Sushi",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8894, "lng": -119.4959 } },
        "formatted_address": "702 Bernard Ave, Kelowna, BC V1Y 6P5, Canada",
        "formatted_phone_number": "+1 250-555-7208",
        "website": "https://bernardsushikelowna.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 11:30 AM – 9:30 PM",
                "Tuesday: 11:30 AM – 9:30 PM",
                "Wednesday: 11:30 AM – 9:30 PM",
                "Thursday: 11:30 AM – 10:00 PM",
                "Friday: 11:30 AM – 10:00 PM",
                "Saturday: 12:00 PM – 10:00 PM",
                "Sunday: Closed"
            ]
        },
        "rating": 4.6,
        "user_ratings_total": 241,
        "price_level": 3,
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": false
    },

    {
        "place_id": "kelowna_restaurant_009",
        "name": "Mission Tacos & Tequila",
        "types": ["restaurant", "bar", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8589, "lng": -119.4861 } },
        "formatted_address": "1895 Abbott St, Kelowna, BC V1Y 1B5, Canada",
        "formatted_phone_number": "+1 250-555-7209",
        "website": "https://missiontacos.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 3:00 PM – 10:00 PM",
                "Tuesday: 3:00 PM – 10:00 PM",
                "Wednesday: 3:00 PM – 10:00 PM",
                "Thursday: 3:00 PM – 11:00 PM",
                "Friday: 3:00 PM – 12:00 AM",
                "Saturday: 12:00 PM – 12:00 AM",
                "Sunday: 12:00 PM – 9:00 PM"
            ]
        },
        "rating": 4.3,
        "user_ratings_total": 156,
        "price_level": 2,
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_restaurant_010",
        "name": "Downtown Ramen House",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8881, "lng": -119.4974 } },
        "formatted_address": "421 Ellis St, Kelowna, BC V1Y 1Z9, Canada",
        "formatted_phone_number": "+1 250-555-7210",
        "website": "https://downtownramen.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 11:00 AM – 8:00 PM",
                "Tuesday: 11:00 AM – 8:00 PM",
                "Wednesday: 11:00 AM – 8:00 PM",
                "Thursday: 11:00 AM – 9:00 PM",
                "Friday: 11:00 AM – 9:00 PM",
                "Saturday: 12:00 PM – 9:00 PM",
                "Sunday: Closed"
            ]
        },
        "rating": 4.0,
        "user_ratings_total": 84,
        "price_level": 2,
        "delivery": true,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_restaurant_011",
        "name": "Glenmore Garden Eatery",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.9112, "lng": -119.4715 } },
        "formatted_address": "275 Glenmore Rd, Kelowna, BC V1V 1Z6, Canada",
        "formatted_phone_number": "+1 250-555-7211",
        "website": "https://glenmoregarden.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 8:00 AM – 3:00 PM",
                "Tuesday: 8:00 AM – 3:00 PM",
                "Wednesday: 8:00 AM – 3:00 PM",
                "Thursday: 8:00 AM – 3:00 PM",
                "Friday: 8:00 AM – 3:00 PM",
                "Saturday: 9:00 AM – 3:00 PM",
                "Sunday: Closed"
            ]
        },
        "rating": 4.5,
        "user_ratings_total": 129,
        "price_level": 1,
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_restaurant_012",
        "name": "Rutland BBQ & Grill",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8872, "lng": -119.3895 } },
        "formatted_address": "140 Rutland Rd N, Kelowna, BC V1X 3B2, Canada",
        "formatted_phone_number": "+1 250-555-7212",
        "website": "https://rutlandbbq.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 11:00 AM – 9:00 PM",
                "Tuesday: 11:00 AM – 9:00 PM",
                "Wednesday: 11:00 AM – 9:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 12:00 PM – 10:00 PM",
                "Sunday: 12:00 PM – 8:00 PM"
            ]
        },
        "rating": 4.2,
        "user_ratings_total": 143,
        "price_level": 2,
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": false
    },

    {
        "place_id": "kelowna_restaurant_013",
        "name": "Orchard Park Noodle Co.",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8786, "lng": -119.4432 } },
        "formatted_address": "2271 Harvey Ave, Kelowna, BC V1Y 6H2, Canada",
        "formatted_phone_number": "+1 250-555-7213",
        "website": "https://orchardparknoodle.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 11:00 AM – 8:00 PM",
                "Tuesday: 11:00 AM – 8:00 PM",
                "Wednesday: 11:00 AM – 8:00 PM",
                "Thursday: 11:00 AM – 9:00 PM",
                "Friday: 11:00 AM – 9:00 PM",
                "Saturday: 12:00 PM – 9:00 PM",
                "Sunday: Closed"
            ]
        },
        "rating": 4.1,
        "user_ratings_total": 91,
        "price_level": 2,
        "delivery": true,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_restaurant_014",
        "name": "Landmark Taproom & Kitchen",
        "types": ["restaurant", "bar", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8727, "lng": -119.4546 } },
        "formatted_address": "1100 Landmark Way, Kelowna, BC V1Y 9P8, Canada",
        "formatted_phone_number": "+1 250-555-7214",
        "website": "https://landmarktaproom.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 3:00 PM – 10:00 PM",
                "Tuesday: 3:00 PM – 10:00 PM",
                "Wednesday: 3:00 PM – 10:00 PM",
                "Thursday: 3:00 PM – 11:00 PM",
                "Friday: 3:00 PM – 12:00 AM",
                "Saturday: 12:00 PM – 12:00 AM",
                "Sunday: 12:00 PM – 9:00 PM"
            ]
        },
        "rating": 4.5,
        "user_ratings_total": 204,
        "price_level": 3,
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_restaurant_015",
        "name": "Southridge Cafe & Eatery",
        "types": ["restaurant", "cafe", "food"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8334, "lng": -119.4889 } },
        "formatted_address": "5100 Chute Lake Rd, Kelowna, BC V1W 4M8, Canada",
        "formatted_phone_number": "+1 250-555-7215",
        "website": "https://southridgecafe.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 8:00 AM – 3:00 PM",
                "Tuesday: 8:00 AM – 3:00 PM",
                "Wednesday: 8:00 AM – 3:00 PM",
                "Thursday: 8:00 AM – 3:00 PM",
                "Friday: 8:00 AM – 3:00 PM",
                "Saturday: 9:00 AM – 3:00 PM",
                "Sunday: Closed"
            ]
        },
        "rating": 4.3,
        "user_ratings_total": 112,
        "price_level": 1,
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": true
    }
    ,
    {
        "place_id": "kelowna_place_001",
        "name": "Okanagan Lake Bistro",
        "types": ["restaurant", "food", "point_of_interest"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8865,
                "lng": -119.4960
            }
        },
        "formatted_address": "123 Lakeshore Rd, Kelowna, BC V1Y 1X5, Canada",
        "formatted_phone_number": "+1 250-555-0123",
        "international_phone_number": "+1 250-555-0123",
        "website": "https://okanaganlakebistro.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 11:00 AM – 9:00 PM",
                "Tuesday: 11:00 AM – 9:00 PM",
                "Wednesday: 11:00 AM – 9:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 10:00 AM – 10:00 PM",
                "Sunday: 10:00 AM – 8:00 PM"
            ]
        },
        "rating": 4.5,
        "user_ratings_total": 214,
        "price_level": 3,
        "photos": [
            {
                "photo_reference": "photo_ref_okanagan_1",
                "height": 3024,
                "width": 4032
            }
        ],
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_place_002",
        "name": "Mission Creek Cafe",
        "types": ["restaurant", "cafe", "food"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8629,
                "lng": -119.4878
            }
        },
        "formatted_address": "456 Pandosy St, Kelowna, BC V1Y 1P2, Canada",
        "formatted_phone_number": "+1 250-555-0456",
        "website": "https://missioncreekcafe.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 7:00 AM – 4:00 PM",
                "Tuesday: 7:00 AM – 4:00 PM",
                "Wednesday: 7:00 AM – 4:00 PM",
                "Thursday: 7:00 AM – 4:00 PM",
                "Friday: 7:00 AM – 5:00 PM",
                "Saturday: 8:00 AM – 5:00 PM",
                "Sunday: Closed"
            ]
        },
        "rating": 4.2,
        "user_ratings_total": 98,
        "price_level": 1,
        "photos": [
            {
                "photo_reference": "photo_ref_mission_1",
                "height": 2000,
                "width": 3000
            }
        ],
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_place_003",
        "name": "Sunset Tandoori Kitchen",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8880,
                "lng": -119.4754
            }
        },
        "formatted_address": "789 Bernard Ave, Kelowna, BC V1Y 6N2, Canada",
        "formatted_phone_number": "+1 250-555-0789",
        "website": "https://sunsettandoori.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 11:30 AM – 9:30 PM",
                "Tuesday: 11:30 AM – 9:30 PM",
                "Wednesday: 11:30 AM – 9:30 PM",
                "Thursday: 11:30 AM – 10:00 PM",
                "Friday: 11:30 AM – 10:00 PM",
                "Saturday: 12:00 PM – 10:00 PM",
                "Sunday: 12:00 PM – 9:00 PM"
            ]
        },
        "rating": 4.6,
        "user_ratings_total": 312,
        "price_level": 2,
        "photos": [
            {
                "photo_reference": "photo_ref_tandoori_1",
                "height": 2500,
                "width": 3750
            }
        ],
        "delivery": true,
        "dine_in": true,
        "serves_vegetarian_food": true
    },

    {
        "place_id": "kelowna_place_004",
        "name": "North End Smokehouse",
        "types": ["restaurant", "bar", "food"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8993,
                "lng": -119.4841
            }
        },
        "formatted_address": "321 Richter St, Kelowna, BC V1Y 2L1, Canada",
        "formatted_phone_number": "+1 250-555-0321",
        "website": "https://northendsmokehouse.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 4:00 PM – 10:00 PM",
                "Tuesday: 4:00 PM – 10:00 PM",
                "Wednesday: 4:00 PM – 10:00 PM",
                "Thursday: 4:00 PM – 11:00 PM",
                "Friday: 4:00 PM – 12:00 AM",
                "Saturday: 12:00 PM – 12:00 AM",
                "Sunday: 12:00 PM – 9:00 PM"
            ]
        },
        "rating": 4.3,
        "user_ratings_total": 187,
        "price_level": 3,
        "photos": [
            {
                "photo_reference": "photo_ref_smokehouse_1",
                "height": 2800,
                "width": 4200
            }
        ],
        "delivery": false,
        "dine_in": true,
        "serves_vegetarian_food": false
    },

    {
        "place_id": "kelowna_place_005",
        "name": "Downtown Noodle Bar",
        "types": ["restaurant", "food"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8886,
                "lng": -119.4967
            }
        },
        "formatted_address": "654 Ellis St, Kelowna, BC V1Y 1Z9, Canada",
        "formatted_phone_number": "+1 250-555-0654",
        "website": "https://downtownnoodlebar.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 11:00 AM – 8:00 PM",
                "Tuesday: 11:00 AM – 8:00 PM",
                "Wednesday: 11:00 AM – 8:00 PM",
                "Thursday: 11:00 AM – 9:00 PM",
                "Friday: 11:00 AM – 9:00 PM",
                "Saturday: 12:00 PM – 9:00 PM",
                "Sunday: Closed"
            ]
        },
        "rating": 4.0,
        "user_ratings_total": 76,
        "price_level": 2,
        "photos": [
            {
                "photo_reference": "photo_ref_noodle_1",
                "height": 2100,
                "width": 3150
            }
        ],
        "delivery": true,
        "dine_in": true,
        "serves_vegetarian_food": true
    }
]

dentists = [
    {
        "place_id": "kelowna_dentist_001",
        "name": "Okanagan Family Dental",
        "types": ["dentist", "health", "point_of_interest"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8852,
                "lng": -119.4953
            }
        },
        "formatted_address": "101 Lakeshore Rd, Kelowna, BC V1Y 1X5, Canada",
        "formatted_phone_number": "+1 250-555-1101",
        "international_phone_number": "+1 250-555-1101",
        "website": "https://okanaganfamilydental.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 8:00 AM – 5:00 PM",
                "Tuesday: 8:00 AM – 5:00 PM",
                "Wednesday: 8:00 AM – 5:00 PM",
                "Thursday: 8:00 AM – 6:00 PM",
                "Friday: 8:00 AM – 4:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.6,
        "user_ratings_total": 142,
        "photos": [
            {
                "photo_reference": "photo_ref_dental_okanagan_1",
                "height": 3000,
                "width": 4000
            }
        ],
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_002",
        "name": "Mission Creek Dental Clinic",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8618,
                "lng": -119.4869
            }
        },
        "formatted_address": "234 Pandosy St, Kelowna, BC V1Y 1P2, Canada",
        "formatted_phone_number": "+1 250-555-2234",
        "website": "https://missioncreekdental.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 9:00 AM – 5:00 PM",
                "Tuesday: 9:00 AM – 5:00 PM",
                "Wednesday: 9:00 AM – 5:00 PM",
                "Thursday: 9:00 AM – 5:00 PM",
                "Friday: 9:00 AM – 3:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.3,
        "user_ratings_total": 89,
        "photos": [
            {
                "photo_reference": "photo_ref_dental_mission_1",
                "height": 2200,
                "width": 3300
            }
        ],
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": false
    },

    {
        "place_id": "kelowna_dentist_003",
        "name": "Downtown Smile Studio",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8891,
                "lng": -119.4962
            }
        },
        "formatted_address": "567 Bernard Ave, Kelowna, BC V1Y 6N2, Canada",
        "formatted_phone_number": "+1 250-555-3567",
        "website": "https://downtownsmilestudio.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 10:00 AM – 7:00 PM",
                "Tuesday: 10:00 AM – 7:00 PM",
                "Wednesday: 10:00 AM – 7:00 PM",
                "Thursday: 10:00 AM – 7:00 PM",
                "Friday: 9:00 AM – 4:00 PM",
                "Saturday: By appointment",
                "Sunday: Closed"
            ]
        },
        "rating": 4.8,
        "user_ratings_total": 201,
        "photos": [
            {
                "photo_reference": "photo_ref_dental_smile_1",
                "height": 2800,
                "width": 4200
            }
        ],
        "wheelchair_accessible_entrance": false,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_004",
        "name": "North End Dental Care",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.9004,
                "lng": -119.4836
            }
        },
        "formatted_address": "890 Richter St, Kelowna, BC V1Y 2L1, Canada",
        "formatted_phone_number": "+1 250-555-4890",
        "website": "https://northenddentalcare.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 8:30 AM – 5:30 PM",
                "Tuesday: 8:30 AM – 5:30 PM",
                "Wednesday: 8:30 AM – 5:30 PM",
                "Thursday: 8:30 AM – 5:30 PM",
                "Friday: 8:30 AM – 3:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.1,
        "user_ratings_total": 67,
        "photos": [
            {
                "photo_reference": "photo_ref_dental_north_1",
                "height": 2400,
                "width": 3600
            }
        ],
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_005",
        "name": "Willow Park Dental Group",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 49.8537,
                "lng": -119.4708
            }
        },
        "formatted_address": "345 Springfield Rd, Kelowna, BC V1X 5M6, Canada",
        "formatted_phone_number": "+1 250-555-5345",
        "website": "https://willowparkdental.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 8:00 AM – 4:30 PM",
                "Tuesday: 8:00 AM – 4:30 PM",
                "Wednesday: 8:00 AM – 4:30 PM",
                "Thursday: 8:00 AM – 4:30 PM",
                "Friday: 8:00 AM – 2:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.4,
        "user_ratings_total": 119,
        "photos": [
            {
                "photo_reference": "photo_ref_dental_willow_1",
                "height": 2600,
                "width": 3900
            }
        ],
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": false
    },

    {
        "place_id": "kelowna_dentist_006",
        "name": "Lakeside Dental Centre",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8874, "lng": -119.4991 } },
        "formatted_address": "112 Water St, Kelowna, BC V1Y 9R9, Canada",
        "formatted_phone_number": "+1 250-555-6106",
        "website": "https://lakesidedental.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 8:30 AM – 5:00 PM",
                "Tuesday: 8:30 AM – 5:00 PM",
                "Wednesday: 8:30 AM – 5:00 PM",
                "Thursday: 8:30 AM – 6:00 PM",
                "Friday: 8:30 AM – 3:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.5,
        "user_ratings_total": 164,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_007",
        "name": "Pandosy Village Dental",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8612, "lng": -119.4884 } },
        "formatted_address": "298 Pandosy St, Kelowna, BC V1Y 1P8, Canada",
        "formatted_phone_number": "+1 250-555-6107",
        "website": "https://pandosyvillagedental.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 9:00 AM – 5:00 PM",
                "Tuesday: 9:00 AM – 5:00 PM",
                "Wednesday: 9:00 AM – 5:00 PM",
                "Thursday: 9:00 AM – 5:00 PM",
                "Friday: 9:00 AM – 2:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.2,
        "user_ratings_total": 73,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": false
    },

    {
        "place_id": "kelowna_dentist_008",
        "name": "Bernard Avenue Dental",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8898, "lng": -119.4956 } },
        "formatted_address": "720 Bernard Ave, Kelowna, BC V1Y 6P5, Canada",
        "formatted_phone_number": "+1 250-555-6108",
        "website": "https://bernardavenuedental.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 10:00 AM – 6:00 PM",
                "Tuesday: 10:00 AM – 6:00 PM",
                "Wednesday: 10:00 AM – 6:00 PM",
                "Thursday: 10:00 AM – 7:00 PM",
                "Friday: 9:00 AM – 3:00 PM",
                "Saturday: By appointment",
                "Sunday: Closed"
            ]
        },
        "rating": 4.7,
        "user_ratings_total": 221,
        "wheelchair_accessible_entrance": false,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_009",
        "name": "Rutland Smiles Dentistry",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8879, "lng": -119.3903 } },
        "formatted_address": "160 Rutland Rd N, Kelowna, BC V1X 3B2, Canada",
        "formatted_phone_number": "+1 250-555-6109",
        "website": "https://rutlandsmiles.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 8:00 AM – 5:00 PM",
                "Tuesday: 8:00 AM – 5:00 PM",
                "Wednesday: 8:00 AM – 5:00 PM",
                "Thursday: 8:00 AM – 6:00 PM",
                "Friday: 8:00 AM – 3:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.0,
        "user_ratings_total": 95,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_010",
        "name": "Springfield Dental Clinic",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8703, "lng": -119.4609 } },
        "formatted_address": "410 Springfield Rd, Kelowna, BC V1X 1E8, Canada",
        "formatted_phone_number": "+1 250-555-6110",
        "website": "https://springfielddental.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 8:30 AM – 4:30 PM",
                "Tuesday: 8:30 AM – 4:30 PM",
                "Wednesday: 8:30 AM – 4:30 PM",
                "Thursday: 8:30 AM – 4:30 PM",
                "Friday: 8:30 AM – 1:30 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.4,
        "user_ratings_total": 132,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": false
    },

    {
        "place_id": "kelowna_dentist_011",
        "name": "Glenmore Valley Dental",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.9124, "lng": -119.4722 } },
        "formatted_address": "305 Glenmore Rd, Kelowna, BC V1V 1Z6, Canada",
        "formatted_phone_number": "+1 250-555-6111",
        "website": "https://glenmoredental.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 9:00 AM – 5:30 PM",
                "Tuesday: 9:00 AM – 5:30 PM",
                "Wednesday: 9:00 AM – 5:30 PM",
                "Thursday: 9:00 AM – 6:30 PM",
                "Friday: 9:00 AM – 3:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.6,
        "user_ratings_total": 158,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_012",
        "name": "Capri Centre Dental",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8806, "lng": -119.4624 } },
        "formatted_address": "1835 Gordon Dr, Kelowna, BC V1Y 3H4, Canada",
        "formatted_phone_number": "+1 250-555-6112",
        "website": "https://capricentredental.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 9:00 AM – 5:00 PM",
                "Tuesday: 9:00 AM – 5:00 PM",
                "Wednesday: 9:00 AM – 5:00 PM",
                "Thursday: 9:00 AM – 6:00 PM",
                "Friday: 9:00 AM – 3:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.1,
        "user_ratings_total": 88,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_013",
        "name": "Orchard Park Dental Care",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8792, "lng": -119.4441 } },
        "formatted_address": "2271 Harvey Ave, Kelowna, BC V1Y 6H2, Canada",
        "formatted_phone_number": "+1 250-555-6113",
        "website": "https://orchardparkdental.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 8:00 AM – 4:30 PM",
                "Tuesday: 8:00 AM – 4:30 PM",
                "Wednesday: 8:00 AM – 4:30 PM",
                "Thursday: 8:00 AM – 5:30 PM",
                "Friday: 8:00 AM – 2:00 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.3,
        "user_ratings_total": 104,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": false
    },

    {
        "place_id": "kelowna_dentist_014",
        "name": "Landmark Dental Studio",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8721, "lng": -119.4553 } },
        "formatted_address": "1100 Landmark Way, Kelowna, BC V1Y 9P8, Canada",
        "formatted_phone_number": "+1 250-555-6114",
        "website": "https://landmarkdental.example",
        "opening_hours": {
            "open_now": true,
            "weekday_text": [
                "Monday: 10:00 AM – 6:00 PM",
                "Tuesday: 10:00 AM – 6:00 PM",
                "Wednesday: 10:00 AM – 6:00 PM",
                "Thursday: 10:00 AM – 7:00 PM",
                "Friday: 9:00 AM – 3:00 PM",
                "Saturday: By appointment",
                "Sunday: Closed"
            ]
        },
        "rating": 4.8,
        "user_ratings_total": 246,
        "wheelchair_accessible_entrance": false,
        "accepts_new_patients": true
    },

    {
        "place_id": "kelowna_dentist_015",
        "name": "Southridge Dental Practice",
        "types": ["dentist", "health"],
        "business_status": "OPERATIONAL",
        "geometry": { "location": { "lat": 49.8329, "lng": -119.4897 } },
        "formatted_address": "5120 Chute Lake Rd, Kelowna, BC V1W 4M8, Canada",
        "formatted_phone_number": "+1 250-555-6115",
        "website": "https://southridgedental.example",
        "opening_hours": {
            "open_now": false,
            "weekday_text": [
                "Monday: 8:30 AM – 4:30 PM",
                "Tuesday: 8:30 AM – 4:30 PM",
                "Wednesday: 8:30 AM – 4:30 PM",
                "Thursday: 8:30 AM – 5:30 PM",
                "Friday: 8:30 AM – 2:30 PM",
                "Saturday: Closed",
                "Sunday: Closed"
            ]
        },
        "rating": 4.2,
        "user_ratings_total": 69,
        "wheelchair_accessible_entrance": true,
        "accepts_new_patients": true
    }

]


module.exports = { restaurants, dentists };