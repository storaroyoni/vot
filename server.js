const express = require('express');
const app = express();
const path = require('path');

// sample champion data
const champions = [
  {
    name: 'Ahri',
    description: 'Ahri is a charismatic champion with magical abilities.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/Ahri.png'
  },
  {
    name: 'Ezreal',
    description: 'Ezreal is an adventurous explorer armed with arcane abilities.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/Ezreal.png'
  }
  // add more champion data as needed
];

// serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.html'));
});

// serve champion data as JSON
app.get('/api/champions', (req, res) => {
  res.json(champions);
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
