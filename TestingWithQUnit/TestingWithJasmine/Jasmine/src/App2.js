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