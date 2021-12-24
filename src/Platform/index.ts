export const UA = window.navigator.userAgent.toLowerCase();

/** 是不是微信 */
export const isWeChat: boolean = Boolean(UA) && UA.indexOf('micromessenger') > 0;

/** 是不是企业微信 */
export const isWeCom: boolean = Boolean(UA) && UA.indexOf('wxwork') > 0;

/** 是不是支付宝 */
export const isAlipay: boolean = Boolean(UA) && UA.indexOf('alipay') > 0;

/** 是不是钉钉 */
export const isDingTalk: boolean = Boolean(UA) && UA.indexOf('dingtalk') > 0;
