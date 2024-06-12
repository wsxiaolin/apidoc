## 用户认证

该API用于用户发送消息到特定用户留言板

### 接口URL

- POST https://Usephysics-api-cn.turtlesim.com:443/Messages/PostComment



### 请求体-简化版

```JSON
{
  "TargetID": "6666ff550b5f97d6e49d12d7",
  "TargetType": "User",
  "Language": "Chinese",
  "ReplyID": "",
  "Content": "消息内容",
  "Special": null
}
```


### 请求体参数说明

- **TargetID**: string，被留言人的序列号
- 其余不明