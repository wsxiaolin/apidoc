## 用户认证

该API用于用户匿名登录，所得到的token可用但有限制，具体限制不明

### 接口URL

- POST http://physics-api-cn.turtlesim.com/Users/Authenticate

### 请求头部

- **Content-Type**: application/json
- **Accept**: application/json
- **Accept-Language**: zh-CN


### 请求体参数说明

- **Login**: null
- **Password**: null
- **Version**: integer，客户端应用版本号。
- **Device.ID**: string，设备ID。
- **Device.Identifier**: string，设备标识符。
- **Device.Platform**: string，设备操作系统平台。
- **Device.Model**: string，设备型号。
- **Device.System**: string，操作系统及版本。
- **Device.CPU**: string，CPU信息。
- **Device.GPU**: string，GPU信息。
- **Device.SystemMemory**: integer，系统内存大小（MB）。
- **Device.GraphicMemory**: integer，显存大小（MB）。
- **Device.ScreenWidth**: integer，屏幕宽度（像素）。
- **Device.ScreenHeight**: integer，屏幕高度（像素）。
- **Device.ScreenDPI**: integer，屏幕密度（DPI）。
- **Device.ScreenSize**: float，屏幕尺寸（英寸）。
- **Device.Timezone**: string，设备所在时区。
- **Device.Language**: string，设备语言设置。
- **Statistic**: object，统计信息，留空，不可少。