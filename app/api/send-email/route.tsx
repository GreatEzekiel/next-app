import WelcomeTemplate from "@/emails/WelsomeTemplate";import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: "...",
        to: "...",
        subject: "Welcome to Resend!",
        react: <WelcomeTemplate name="John Doe" />,
    });

    return NextResponse.json({});

}