class Twitter {
    constructor() {
        this.user = new Map();
        this.tweets = [];
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweets.push({ userId, tweetId, tweetsTime: this.time++ });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let recentTweets = [];
        let users = this.user.get(userId)
        for (let i = this.tweets.length-1; i >= 0 && recentTweets.length < 10; i--) {
            if(this.tweets[i].userId === userId  || (users && users.has(this.tweets[i].userId ) )){
                recentTweets.push(this.tweets[i].tweetId);
            }
        }
        return recentTweets;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.user.has(followerId)) {
            this.user.set(followerId, new Set());
        }
        this.user.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.user.has(followerId)) {
            this.user.get(followerId).delete(followeeId);
        }
    }
}
