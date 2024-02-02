import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function GET({ params, request }) {
    return new Response(JSON.stringify("helo there"))
}