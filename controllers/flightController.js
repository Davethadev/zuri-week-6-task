const { Flights } = require("../models/Flight");

const getAllFlight = (req, res) => {
  res.status(200).json(Flights);
};

const bookFlight = (req, res) => {
  if (!req.body.title || !req.body.time || !req.body.price || !req.body.date) {
    res.status(400).json({ msg: "Invalid flight ticket" });
  } else if (
    req.body.title === "" ||
    req.body.time === "" ||
    req.body.price === "" ||
    req.body.date === ""
  ) {
    res.status(400).json({ msg: "All fields are required" });
  } else {
    const flightID = Flights.length + 1;
    req.body.id = flightID;
    Flights.push(req.body);
    res.status(201).json(Flights);
  }
};

const getById = (req, res) => {
  const { id: flightID } = req.params;
  let theFlight;
  Flights.forEach((flight) => {
    if (flight.id === parseInt(flightID)) {
      theFlight = flight;
    }
  });
  if (theFlight === undefined) {
    res.status(404).json({ msg: "Flight record not found" });
  }
  res.status(200).json(theFlight);
};

const deleteFlight = (req, res) => {
  const { id: flightID } = req.params;
  Flights.forEach((flight) => {
    if (flight.id === parseInt(flightID)) {
      Flights.splice(flight, 1);
    }
  });
  if (theFlight === undefined) {
    res.status(404).json({ msg: "Flight record not found" });
  }
  res.status(200).json(Flights);
};

const updateFlight = (req, res) => {
  const { id: flightID } = req.params;

  if (!req.body.title || !req.body.time || !req.body.price || !req.body.date) {
    res.status(400).json({ msg: "Invalid flight ticket" });
  } else if (
    req.body.title === "" ||
    req.body.time === "" ||
    req.body.price === "" ||
    req.body.date === ""
  ) {
    res.status(400).json({ msg: "All fields are required" });
  } else {
    let theFlight;
    Flights.forEach((flight) => {
      if (flight.id === parseInt(flightID)) {
        flight.title = req.body.title;
        flight.time = req.body.time;
        flight.price = req.body.price;
        flight.date = req.body.date;

        theFlight = flight
      }
    });

    if (theFlight === undefined) {
      res.status(404).json({ msg: "Flight record not found" });
    }
    res.status(200).json(theFlight);
  }
};

module.exports = {
  getAllFlight,
  bookFlight,
  getById,
  deleteFlight,
  updateFlight,
};
