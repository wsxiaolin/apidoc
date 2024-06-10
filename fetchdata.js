const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

async function createFolderIfNotExists(folderPath) {
  try {
    await fs.mkdir(folderPath, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function fetchData(config) {
  try {
    const { method, url, data, headers, folderPath } = config;

    await createFolderIfNotExists(folderPath);

    const response = await axios({ method, url, data, headers});
    const responseData = response.data;

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const filename = `data_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.json`;
    const filePath = path.join(folderPath, filename);

    await fs.writeFile(filePath, JSON.stringify(responseData, null, 2));

    console.log(`Data saved to ${filePath}`);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

module.exports = { fetchData };