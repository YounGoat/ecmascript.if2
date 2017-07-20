
module.exports = function() {
    var ret;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            ret = arguments[i];
            break;
        }
    }
    return ret;
}