class Twitter {
    constructor() {
        this.users = new Map();
        this.tweets = [];
        this.time =0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.users.has(userId)){
            this.users.set(userId, new Set());
        }
        this.tweets.push({userId, tweetId, time: this.time++});
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    // [1,2,3,4,5,6,7,8,9,10,11,12]
    getNewsFeed(userId) {
        const user = this.users.get(userId) || new Set();

        let heap = new MinPriorityQueue(X => X.time);

        for(let i=0; i< this.tweets.length; i++){
            if(user.has(this.tweets[i].userId) || this.tweets[i].userId === userId){
                heap.enqueue(this.tweets[i]);
            }
            if(heap.size() > 10){
                heap.dequeue();
            }
        }
        let result= [];
        while(!heap.isEmpty()){
            result.push(heap.dequeue().tweetId)
        }
        // let recentTweet =[];
        // for(let i= this.tweets.length -1; i>=0 && recentTweet.length < 10; i--){
        //     if(user.has(this.tweets[i].userId) || this.tweets[i].userId === userId){
        //         recentTweet.push(this.tweets[i].tweetId)
        //     }
        // }
        return result.reverse();
    }



    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
         if(!this.users.has(followerId)){
            this.users.set(followerId, new Set());
        }
        this.users.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.users.has(followerId)){
            this.users.get(followerId).delete(followeeId)
        }
    }
}


