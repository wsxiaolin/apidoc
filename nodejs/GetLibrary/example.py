def get_library(token: str, auto_code: str) -> Optional[dict]:
    ''' 获取社区作品列表 '''
    if not isinstance(token, str) or not isinstance(auto_code, str):
        raise TypeError

    response = requests.post(
        "https://physics-api-cn.turtlesim.com/Contents/GetLibrary",
        json={"Identifier": "Discussions", "Language": "Chinese"},
        headers={
            "Content-Type": "application/json",
            "x-API-Token": token,
            "x-API-AuthCode": auto_code,
            "x-API-Version": "2411"
        }
    )

    if response.status_code == 200:
        return response.json()
    return None
