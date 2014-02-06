var mySUT = {
    callCallBack: function (cb) {
        cb();
    },

    callCallBackWithReturnValue: function (cb) {
        return cb();
    },

    callDependency: function (dep) {
        return dep.someMethod();
    }

}

var myDep = {
    someMethod : function() {
        return 10;
    }
}

function realCallback() {
    return 4;
}


var Combat = function () {

};
Combat.prototype.attack = function (attacker, defender) {
    if (attacker.calculateHit(defender))
        defender.takeDamage(attacker.damage);
}

var Character = function () {

};
Character.prototype.calculateHit = function () {
};

Character.prototype.takeDamage = function () {
};