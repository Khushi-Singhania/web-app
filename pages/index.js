require("linqjs")
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'
import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Board from "../components/board";
import Locations from "./data.json"
const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for calculating crop yield
app.get('/calculate-crop-yield', (req, res) => {
  // Read the field area and crop yield per hectare from the query parameters
  const fieldArea = parseFloat(req.query.fieldArea);
  const cropYieldPerHectare = parseFloat(req.query.cropYieldPerHectare);

  // Perform the calculation
  const cropYield = fieldArea * cropYieldPerHectare;

  // Return the calculated crop yield as the response
  res.json({ cropYield });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});