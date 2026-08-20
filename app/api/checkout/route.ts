import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const response = await fetch("https://chaithutej.app.n8n.cloud/webhook/contact-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error("n8n error response:", errorText)
            return NextResponse.json(
                { error: "Failed to send request to n8n" },
                { status: response.status }
            )
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("API route error:", error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
