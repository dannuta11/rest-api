import express, { Request, Response, Router } from "express";
import nodemailer from "nodemailer";

import { ContactModel } from "../models/Contact";

export const contactRouter = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: "dany.condurari@gmail.com",
    pass: "duuzvugjbcogoetx",
  },
});

contactRouter.post("/", async (req: Request, res: Response) => {
  const contactForm = new ContactModel({
    name: req.body.nume,
    prenume: req.body.prenume,
    email: req.body.email,
    tel: req.body.tel,
    message: req.body.message,
  });

  try {
    const contact = await contactForm.save();

    const html = `
  <table style="border: 1px solid black; width: 50%;">
  <thead style="font-weight: bold">
    <tr>
     <td style="border: 1px solid black">Nume</td>
     <td style="border: 1px solid black">Prenume</td>
     <td style="border: 1px solid black">Email</td>
     <td style="border: 1px solid black">Telefon</td>
     <td style="border: 1px solid black">Messaj</td>
    </tr>
  </thead>

  <tbody>
  <tr>
   <td style="border: 1px solid black">${contact.name}</td>
   <td style="border: 1px solid black">${contact.prenume}</td>
   <td style="border: 1px solid black">${contact.email}</td>
   <td style="border: 1px solid black">${contact.tel}</td>
   <td style="border: 1px solid black">${contact.message}</td>
  </tr>
</tbody>
  </table>
`;
    const info = await transport.sendMail({
      from: `${contact.email}`,
      to: "dany.condurari@gmail.com",
      subject: "Nou contact",
      html: html,
    });
    res.send(info);
  } catch (e) {
    res.json({ message: e });
  }
});
