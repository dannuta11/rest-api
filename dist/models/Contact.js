"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    message: { type: String },
});
exports.ContactModel = (0, mongoose_1.model)("Contact", ContactSchema);
