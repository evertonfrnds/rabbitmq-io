"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DataSchema = mongoose_1.model("Data", new mongoose_1.Schema({
    category: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
}));
exports.default = DataSchema;
//# sourceMappingURL=DataSchema.js.map