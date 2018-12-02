"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertArrayToObject(input, key) {
    var neworders = {};
    if (Array.isArray(input)) {
        input.forEach(function (item, i) {
            neworders[item[key || i]] = item;
        });
    }
    else {
        neworders = input;
    }
    return neworders;
}
exports.default = convertArrayToObject;
;
