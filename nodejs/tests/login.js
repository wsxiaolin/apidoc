const login = require('../models/login.js');

const username = null;
const password = null;

login(username, password).then((response) => {
    console.log("用户认证成功:", response.User, ":", response.Token);
})