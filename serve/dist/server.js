"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var routes_1 = __importDefault(require("./routes"));
require("./db/connection");
var app = express_1.default();
app.use(express_1.default.json());
app.use(celebrate_1.errors());
app.use(routes_1.default);
app.listen(3000, function () {
    console.log("Server started in port 3000");
});
//# sourceMappingURL=server.js.map