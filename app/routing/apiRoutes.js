
const friends = require("../data/friends");
const express = require("express");
const apiRouter = express.Router();
 
apiRouter.get('/api/friends', function(req, res){
    res.json(friends);
});

    
apiRouter.post("/api/friends", function(req, res){
    
    const scores = [...req.body.scores];
    const matchArray = [];

    friends.forEach(friend => {
        
        let scoreIter = 0;
        let diffVal = 0;
        scores.forEach(score => {
        
            diffVal  += Math.abs( parseInt(friend.scores[scoreIter]) - parseInt(score)) ;
            scoreIter++;
        });

        matchArray.push({"name": friend.name, "photo": friend.photo , "matchVal": diffVal});
    });


    matchArray.sort((x , y) => x.matchVal - y.matchVal);
    res.json(matchArray[0]);
    //console.log("Winner is: " + JSON.stringify(matchArray[0], null, 2));
    //console.log(matchArray);
    //const friendRedudeScore = friends.map(x => x.scores.reduce( (a, b) => a + b ));
    //const friendRedudeScore = friends.map(x => x.scores);
    //console.log(friendRedudeScore);
}); 

module.exports = apiRouter;



