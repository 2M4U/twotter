Twotter
=
###### *Twitter Made Simple*
* * *
| Function | What It Does |
| ------ | ------ |
| `postTweet()` | Post to twitter using your account. |
| `deleteTweet()` | Delete a tweet you posted on your account. |
| `getFollowers()`| Get followers of a chosen username you wish to look up. |
| `retweet()` | Retweet something someone or yourself has already tweeted. |
| `lookup()` | Lookup a username and get information about their user |
***
#### Examples

`postTweet()` 
*Post to twitter using your account.*
```js
const twotter = require("twotter").postTweet;
let res = twotter("Hello, World!");
return console.log(res);
```
`deleteTweet()` 
*Delete a tweet you posted on your account (ID based **ONLY**).*
```js
const twotter = require("twotter").deleteTweet;
let res = twotter("192373892684562835");
return console.log(res);
```
`getFollowers()` 
*Get followers of a chosen username you wish to look up.*
```js
const twotter = require("twotter").getFollowers;
let res = twotter("cyber_cdn");
return console.log(res);
```
`retweet()` 
*Retweet something someone or yourself has already tweeted.*
```js
const twotter = require("twotter").retweet;
let res = twotter("192373892684562835");
return console.log(res);
```
`lookup()` 
*Lookup a username and get information about their user.*
```js
const twotter = require("twotter").lookup;
let res = twotter("cyber_cdn");
return console.log(res);
```
[Official Repository](https://github.com/CyberCDN/twotter)

[Twitter Developer Page](http://developer.twitter.com/en/apps)