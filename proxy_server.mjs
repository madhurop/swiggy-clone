import express from 'express';
import request from 'request';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  request(
    { url: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0644917&lng=72.8637579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error ? error.message : 'Failed to fetch data' });
      }

      const responseData = JSON.parse(body);
      const foodTypes = responseData.data.cards[0].card.card.imageGridCards.info;
      
      res.json(foodTypes);
    }
  );
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
