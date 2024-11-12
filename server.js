const express = require("express");
const app = express();
const PORT = 3000;

const countries = require("./data/countries.json");

app.get("/api/countries", (req, res) => {
	res.json(countries);
});

app.get("/api/countries/:id", (req, res) => {
	const countryId = Number.parseInt(req.params.id, 10);
	const country = countries.find((c) => c.id === countryId);

	if (country) {
		res.json(country);
	} else {
		res.status(404).json({ error: "Country not found" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
