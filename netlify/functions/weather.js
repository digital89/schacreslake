const axios = require('axios');
const xml2json = require('xml2json');

exports.handler = async function(event, context) {
  const { data } = await axios.get('https://dd.weather.gc.ca/citypage_weather/xml/AB/s0000297_e.xml');
  const json = xml2json.toJson(data);

  return {
      body: json,
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
  };
}
