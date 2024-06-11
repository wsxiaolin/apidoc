const axios = require('axios');

// 固定的设备信息
const deviceInfo = {
  "ID": null,
  "Identifier": "7db01528cf13e2199e141c402d79190e", // 可随机生成
  "Platform": "Android", // 可以乱填
  "Model": "HONOR ROD-W09",
  "System": "Android OS 12 / API-31 (HONORROD-W09/7.0.0.186C00)",
  "CPU": "ARM64 FP ASIMD AES",
  "GPU": "Mali-G610 MC6",
  "SystemMemory": 7691,
  "GraphicMemory": 2048,
  "ScreenWidth": 2560,
  "ScreenHeight": 1600,
  "ScreenDPI": 360,
  "ScreenSize": 8.4,
  "Timezone": "Local",
  "Language": "Chinese"
};

const version = 2411; 

/**
 * 发送用户认证请求到指定API
 * @param {string} username - 用户名（邮箱）
 * @param {string} password - 密码
 * @returns {Promise<Object>} - 返回 API 响应数据的 Promise
 */
module.exports = async function login(username, password) {
  try {
    const requestBody = {
      Login: username,
      Password: password,
      Version: version,
      Device: deviceInfo,
      Statistic: null
    };

    console.log('正在发送请求', username, '@', password);

    const response = await axios.post('http://physics-api-cn.turtlesim.com/Users/Authenticate', requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Language': 'zh-CN'
      }
    });

    return response.data; 
  } catch (error) {
    throw error; 
  }
};
