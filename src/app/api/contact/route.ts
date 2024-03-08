import { NextResponse } from "next/server";

const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Phone: ${body.phone}\r\n
  Price: ${body.price}\r\n
  Order: ${body.order}\r\n

`;

  const data = {
    to: "andreiev.viacheslav@gmail.com",
    from: "andreiev.viacheslav@gmail.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  return NextResponse.json({ body });
}
