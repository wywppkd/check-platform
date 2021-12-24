---
hero:
  title: check-platform
  desc: 提供了国内常见的平台检测函数(微信, 支付宝...)

footer: Open-source MIT Licensed | Copyright © 2021<br />Powered by [wywppkd](https://github.com/wywppkd)
---

## 轻松上手!

- 想要检查 Android, iOS, iPhone, iPad, Chrome, Safari..., 推荐阅读: TODO

```bash
npm i check-platform
```

```ts
import { isWeChat, isWeCom, isAlipay, isDingTalk } from 'check-platform';

if (isWeChat) {
  // 微信(包括企业微信)
}

if (isWeCom) {
  // 企业微信
}

if (isAlipay) {
  // 支付宝
}

if (isDingTalk) {
  // 钉钉
}
```
