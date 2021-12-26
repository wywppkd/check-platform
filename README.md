## 轻松上手!

- 想要检查 Android, iOS, iPhone, iPad, Chrome, Safari..., 推荐阅读: https://juejin.cn/post/7045237897145876488

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
