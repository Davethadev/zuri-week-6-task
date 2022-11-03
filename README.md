# Zuri-week-6-booking-flight-api

## Flight Ticket Record Explanation.
Following the emphasis given, "Do not use MongoDB," all flight tickets are saved in an array of object which is located in ```../models/Flights```. Due to no database to save the bookings, all flight records (except the hard coded ones) would be deleted once the application stops running. In other words, when the port is killed.
