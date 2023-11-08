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
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const models_1 = require("../models");
exports.contactRouter = express_1.default.Router();
const transport = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
        user: "dany.condurari@gmail.com",
        pass: `duuzvugjbcogoetx`,
    },
});
exports.contactRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactForm = new models_1.ContactModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        message: req.body.message,
    });
    try {
        const contact = yield contactForm.save();
        const html = `
  <table style="border: 1px solid black; width: 50%;">
  <thead style="font-weight: bold">
    <tr>
     <td style="border: 1px solid black">First Name</td>
     <td style="border: 1px solid black">Last Name</td>
     <td style="border: 1px solid black">Email</td>
     <td style="border: 1px solid black">Phone</td>
     <td style="border: 1px solid black">Message</td>
    </tr>
  </thead>

  <tbody>
  <tr>
   <td style="border: 1px solid black">${contact.firstName}</td>
   <td style="border: 1px solid black">${contact.lastName}</td>
   <td style="border: 1px solid black">${contact.email}</td>
   <td style="border: 1px solid black">${contact.tel}</td>
   <td style="border: 1px solid black">${contact.message}</td>
  </tr>
</tbody>
  </table>
`;
        const info = yield transport.sendMail({
            from: `dany.condurari@gmail.com`,
            to: "dany.condurari@gmail.com",
            subject: "Nou contact",
            html: html,
        });
        if (info) {
            res.json("totul este ok");
        }
        else {
            const errorInfoMail = info;
            res.status(500).json({ message: errorInfoMail.response });
        }
    }
    catch (e) {
        if (typeof e === "object" && e !== null) {
            const errorInfoMail = e.toString();
            res.json({ message: errorInfoMail });
        }
        res.json("A aparut o erroare neasteptata");
    }
}));
