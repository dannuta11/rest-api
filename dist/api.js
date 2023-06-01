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
const app = (0, express_1.default)();
const authorRoute = express_1.default.Router();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Home page");
});
authorRoute.get("/author", (req, res) => {
    res.json({
        name: `dan`,
        prenume: `nuta`,
    });
});
app.use("/posts", posts_js_1.router);
mongoose_1.default.connect("mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net");
app.use("/.netlify/functions/api", posts_js_1.router);
exports.handler = (0, serverless_http_1.default)(app);
