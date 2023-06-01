"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const posts_js_1 = require("./routes/posts.js");
const author_js_1 = require("./routes/author.js");
mongoose_1.default.connect("mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/.netlify/functions/api/posts", posts_js_1.postRouter);
app.use("/.netlify/functions/api/author", author_js_1.authorRouter);
exports.handler = (0, serverless_http_1.default)(app);
