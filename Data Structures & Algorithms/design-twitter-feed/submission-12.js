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
     let users = this.user.get(userId);
    let heap = new MaxPriorityQueue(x => x.tweetsTime);
      let recentTweets =[];
    for(let i=0; i<this.tweets.length; i++){
        if(this.tweets[i].userId === userId  || (users && users.has(this.tweets[i].userId ) )){
        heap.enqueue(this.tweets[i])
        }
    }

    while(!heap.isEmpty() &&  recentTweets.length < 10){
        recentTweets.push(heap.dequeue().tweetId)
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
