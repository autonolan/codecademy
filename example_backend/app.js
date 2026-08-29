const express = require('express');
const app = express();
app.set('query parser', 'simple')

const PORT = process.env.PORT || 4001;

const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/currences', (req, res) => {
    res.send(currencies)
})

app.put('/currencies/:name/countries', (req, res, next) => {
  const currency = req.params.name;
  const currencyCountries = req.query;
  console.log(req);
  currencies[currency] = currencyCountries;
  if (currencyCountries == {}) {
    res.send(currencyCountries);
  } else {
    res.status(404).send('Invalid data!');
  }
  
})