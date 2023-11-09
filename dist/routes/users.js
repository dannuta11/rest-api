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
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
exports.usersRouter = express_1.default.Router();
exports.usersRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = new models_1.UsersModel({
        name: req.body.name,
        prenume: req.body.prenume,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password,
        rol: req.body.rol,
    });
    try {
        const saveUser = yield post.save();
        res.json(saveUser);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
exports.usersRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const users = yield models_1.UsersModel.updateOne({ _id: data._id }, Object.assign({}, data));
        res.json(users);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
exports.usersRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield models_1.UsersModel.find();
        res.json(users);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
exports.usersRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield models_1.UsersModel.findById(id);
        res.json(user);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
exports.usersRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseDeleteUser = yield models_1.UsersModel.deleteOne({
            _id: req.params.id,
        });
        res.json(responseDeleteUser);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
