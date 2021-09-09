"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var rabbitmq_routes_1 = __importDefault(require("../rabbitmq/rabbitmq-routes"));
var data_routes_1 = __importDefault(require("./data.routes"));
var routes = express_1.Router();
routes.get("/", function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, "..", "public", "index.html"));
});
routes.use("/rabbit", rabbitmq_routes_1.default);
routes.use("/data", data_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map