import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const customerEmail = searchParams.get("customerEmail");
  const orderCode = searchParams.get("orderCode");
  const amount = searchParams.get("amount");

  if (status === "PAID" && customerEmail) {
    // Gửi email sau khi thanh toán thành công
    try {
      const emailResponse = await fetch("https://exe-201-71jh.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: customerEmail,
          subject: "Xác nhận thanh toán thành công",
          html: `
            <h2>Thanh toán thành công!</h2>
            <p>Cảm ơn bạn đã hoàn tất đơn hàng với mã: <strong>${orderCode}</strong>.</p>
            <p>Số tiền đã thanh toán: ${amount} VND.</p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
      }

      return NextResponse.json({ message: "Payment confirmed and email sent successfully!" });
    } catch (error) {
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Payment not confirmed or missing email." }, { status: 400 });
  }
}
