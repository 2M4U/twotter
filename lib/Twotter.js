const twit = require("twit");
const path = require("path");
const { existsSync, writeFileSync } = require("fs");
const twitter = path.join(process.cwd(), '/settings/twitter.json');

if (!existsSync(twitter)) {
    writeFileSync(path.join(process.cwd(), 'settings', `twitter.json`), JSON.stringify({
        "consumer_key": "",
        "consumer_secret": "",
        "access_token": "",
        "access_token_secret": ""
    }, null, 4));
}

const config = require("../../settings/twitter.json");

if (config.consumer_key == "" || config.consumer_secret == "" || config.access_token == "" || config.access_token_secret == "") {
    console.error(`Please fill out the twitter.json configuration file. \nYour configuration file can be found here: ${path.join(process.cwd(), '/settings/twitter.json')}`);
    process.exit(1);
}

const twot = new twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
});

class Twotter {

    /**
     * 
     * @param {String} msg REQUIRED - Message to post to twotter
     */
    postTweet(msg) {
        if (!msg) return;
        return new Promise(async(resolve, reject) => {
            try {
                twot.post("statuses/update", {
                        status: msg
                    },
                    function(err, data, res) {
                        resolve(data);
                    });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * 
     * @param {Number} id REQUIRED - Twot ID from post
     */
    deleteTweet(id) {
        if (!id) return;
        return new Promise(async(resolve, reject) => {
            try {
                twot.post("statuses/destroy/:id", {
                        id: id
                    },
                    function(err, data, res) {
                        resolve(data);
                    });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * 
     * @param {String} screen_name REQUIRED - username eg: LolDongs
     */
    getFollowers(screen_name) {
        if (!screen_name) return;
        return new Promise(async(resolve, reject) => {
            try {
                twot.get("followers/ids", {
                        screen_name: screen_name
                    },
                    function(err, data, res) {
                        resolve(data);
                    });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * 
     * @param {Number} id REQUIRED - Twot ID from post
     */
    retweet(id) {
        if (!id) return;
        return new Promise(async(resolve, reject) => {
            try {
                twot.post("statuses/retweet/:id", {
                        id: id
                    },
                    function(err, data, res) {
                        resolve(data);
                    });
            } catch (e) {
                reject(e);
            }
        });
    };
};

module.exports = new Twotter();