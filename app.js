/**
 * Created by UO on 2015/4/23 14:36.
 */

var target = "http://weixin.sogou.com/weixin?query=%E4%B8%89%E6%98%9F&_asf=&_ast=1429773596&ie=utf8&dp=1&cid=&type=2&sst0=1429773596084&lkt=3,1429773596084,1429773596084&repp=1";

var proxies = require("./proxies")
    , _ = require("lodash")._
    , req = require("request")
    , async = require("async");

async.map(proxies, function (proxy, callback) {
    console.log("start proxy: %s", proxy);
    req({
        url: target,
        proxy: proxy,
        headers:{
            "user-agent": "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36",
        },
        timeout: 15000
    }, function (err, reqponse, body) {
        if (err) {
            console.log("err: %s", err.code);
            callback(null, err.code);
        } else {
            console.log(body);
            callback(null, proxy);
        }

    })
}, function (err, results) {
    console.log(results);
    console.log("done");
});

