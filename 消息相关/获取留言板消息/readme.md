## 用户认证

该API用于用户获取自己或他人留言板消息

### 接口URL

- POST http://physics-api-cn.turtlesim.com:443/Messages/GetComments

### 请求体

```JSON
{
    "TargetID": "6666ff550b5f97d6e49d12d7",
    "TargetType": "User",
    "CommentID": "6666ff550b5f97d6e49d12d7",
    "Take": 16,
    "Skip": 0
}
```


### 请求体参数说明

- **TargetID**: string，被留言人的序列号
- **Take**: intege，获取的条数
- 其余不明，跳过条数疑似与留言总数