const { fetchData } = require('/fetchdata.js');

fetchData({
  method: 'post',
  url: 'https://physics-api-cn.turtlesim.com/Contents/GetLibrary',
  data: {
    Identifier: 'Discussions',
    Language: 'Chinese'
  },
  headers: {
    'Content-Type': 'application/json',
    'x-API-Token': 'eTF***jD42',
    'x-API-AuthCode': 'l***3J',
    'x-API-Version': '2411'
  },
  folderPath: './discussions'
});