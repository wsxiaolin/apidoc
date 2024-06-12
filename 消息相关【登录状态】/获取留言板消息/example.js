function getMessages() {
  const Token = ''; //在此填入自己的token
  const AuthCode = '';
  const msgs = await axios.post('https://physics-api-cn.turtlesim.com:443/Messages/GetComments', {
    "TargetID": "6666ff550b5f97d6e49d12d7",
    "TargetType": "User",
    "CommentID": null,
    "Take": 16,
    "Skip": 0
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': 'zh-CN',
      'x-API-Token': Token,
      'x-API-AuthCode': AuthCode,
      'x-API-Version': '2411'
    }
  });
  console.log(msgs.data);
}
