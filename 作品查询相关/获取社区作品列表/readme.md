## 查询作品（未登录）

该API用于查询物理实验室的公开作品列表，可以搜索指定条件下的作品，仅仅是模拟匿名状态下的请求，所以说不含鉴权或者非公开/隐藏作品等功能

### 接口URL

- 旧版：POST http://physics-api-cn.turtlesim.com:80/Contents/QueryExperiments
- 新版：POST http://physics-api-cn.netlogoweb.org:80/Contents/QueryExperiments

### 请求头部

- **x-API-Token**: API令牌，用于身份验证，登录首页的时候客户端会在请求头内返回。
- **x-API-AuthCode**: API授权码，用于授权访问，同上。
- **x-API-Version**: API版本号。
- **Accept-Encoding**: 接受的编码方式，可使用gzip。
- **Content-Type**: application/json，也可使用gzip

### 请求体

```JavaScript
{
    "Query": {
        "Category": "Discussion",
        "Languages": [],
        "ExcludeLanguages": null,
        "Tags": ["知识库"],
        "ModelTags": null,
        "ExcludeTags": null,
        "ModelID": null,
        "ParentID": null,
        "UserID": null,
        "Special": null,
        "From": null,
        "Skip": 0,
        "Take": 18,
        "Days": 0,
        "Sort": 0,
        "ShowAnnouncement": false
    }
}
```

### 请求体参数说明

- **Category**: string，实验或讨论。
- **Languages**: array，实验内容的语言。
- **ExcludeLanguages**: array，排除的语言。
- **Tags**: array，实验内容的标签。
- **ModelTags**: array，模型标签 - 为了方便与海实共同使用一套代码搞出的东西。
- **ExcludeTags**: array，排除的标签。
- **ModelID**: string，模型ID - 为了方便与海实共同使用一套代码搞出的东西。。
- **ParentID**: string，改编来源作品ID。
- **UserID**: string，用户ID。
- **Special**: string，用于热门排序的筛选。
- **From**: string，查询起始作品ID。
- **Skip**: integer，跳过的条目数，用于一爬到底（）。
- **Take**: integer，返回的结果数量。
- **Days**: integer，查询的天数（n天内的作品）。
- **Sort**: integer，排序方式，热门/史上热门/最新排序，0为最新。其余未知。
- **ShowAnnouncement**: boolean，是否显示公告。
