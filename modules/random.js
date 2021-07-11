var operation = {
    getRandomNum: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },    
    getRandom: function(li, len) {
        var num = operation.getRandomNum(0, len);
        return li[num];
    }
}

module.exports = operation;