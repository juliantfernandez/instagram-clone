const path = require('path');

let indexController = {
    feed: (req, res)=>{
        res.render('feed')
    }
}

module.exports = indexController