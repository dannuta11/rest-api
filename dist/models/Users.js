"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const mongoose_1 = require("mongoose");
const UsersSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    prenume: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
    id: { type: Number, required: true },
});
exports.UsersModel = (0, mongoose_1.model)("Users", UsersSchema);
