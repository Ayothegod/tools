// // Outputs: /builtwith.json
// import { Resend } from "resend";

// const resend = new Resend(import.meta.env.RESEND_API_KEY);

// export async function GET({ params, request }) {
//     const send = await resend.emails.send({
//       from: "heyayomideadebisi@gmail.com",
//       to: ["heyayomideadebisi@gmail.com"],
//       subject: "Sample Subject",
//     //   html: "<p>Hi from html</p>",
//       text: "Hi from plain text",
//     });

//     if (send.data) {
//       return new Response(
//         JSON.stringify({
//           message: send.data,
//           status: "OK",
//         }),
//         {
//           status: 200,
//           statusText: "OK",
//         }
//       );
//     } else {
//       return new Response(
//         JSON.stringify({
//           message: send.error,
//           status: "Failed",
//         }),
//         {
//           status: 500,
//           statusText: "OK",
//         }
//       );
//     }
// }
