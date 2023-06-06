"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
const express_1 = __importDefault(require("express"));
const Posts_js_1 = require("../models/Posts.js");
exports.authorRouter = express_1.default.Router();
exports.authorRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nume = req.body.name;
        const prenume = req.body.prenume;
        const allBlogs = yield Posts_js_1.Posts.find({
            author: {
                name: `${nume}`,
            },
        });
        res.json(allBlogs);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
