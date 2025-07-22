"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputHandler = void 0;
var readline = require("readline");
var UserInputHandler = /** @class */ (function () {
    function UserInputHandler() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    UserInputHandler.prototype.askQuestion = function (question) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.rl.question(question, function (answer) {
                resolve(answer);
            });
        });
    };
    UserInputHandler.prototype.closeInterface = function () {
        this.rl.close();
    };
    return UserInputHandler;
}());
exports.UserInputHandler = UserInputHandler;
