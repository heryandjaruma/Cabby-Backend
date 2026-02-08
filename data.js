const restaurants = [
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
  }
]


module.exports = { restaurants, dentists };