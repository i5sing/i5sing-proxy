# i5sing-proxy

Provides 5sing HTTPS API for Wechat APP.

## Usage

JSON:
```diff
// source api:
- http://mobileapi.5sing.kugou.com/go/GetSongListSquareRecommended?index=1&version=6.8.20

// proxy api:
+ https://proxy.i5sing.com/go/GetSongListSquareRecommended?index=1&version=6.8.20
```

MP3:
```diff
// source api
- http://wsaudio.bssdlbig.kugou.com/1907241806/utoz19yvtyAmi9msb4libw/1564049171/bss/extname/wsaudio/163c9a68227567ac7ac315ad40e0b1df.mp3

+ https://proxy.i5sing.com/stream?url=http:%2F%2Fwsaudio.bssdlbig.kugou.com%2F1907241806%2Futoz19yvtyAmi9msb4libw%2F1564049171%2Fbss%2Fextname%2Fwsaudio%2F163c9a68227567ac7ac315ad40e0b1df.mp3
```
