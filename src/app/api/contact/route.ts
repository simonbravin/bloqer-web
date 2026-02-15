import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    // Log to console (replace with your email service later)
    console.log("=== Nuevo mensaje de contacto ===");
    console.log(`Nombre: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Empresa: ${company || "No especificada"}`);
    console.log(`Mensaje: ${message}`);
    console.log("=================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
