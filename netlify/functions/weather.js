import axios from 'axios';

exports.handler = async function(event, context) {
  const { data } = await axios.get('https://weather.gc.ca/rss/city/ab-39_e.xml');

  return {
      body: data,
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
  };
}
