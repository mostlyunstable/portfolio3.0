import { NextResponse } from 'next/server';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { capabilities } from '@/data/capabilities';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemMessage = {
      role: 'system',
      content: `You are Mayank Kumar's AI assistant embedded directly into his portfolio website.
      Your goal is to answer questions about Mayank's background, skills, and projects to potential clients and recruiters.
      Keep your answers concise, professional, and slightly conversational. If you don't know the answer, say so, and direct them to the contact form.
      
      Internal Data:
      Name: ${profile.name}
      Role: ${profile.role}
      Bio: ${profile.bio}
      Location: ${profile.location}
      Focus: ${profile.focus}
      Email: ${profile.email}
      
      Experience: ${JSON.stringify(experience)}
      Capabilities: ${JSON.stringify(capabilities)}`
    };

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: "The AI is currently offline. Mayank needs to add his OPENAI_API_KEY to Vercel." },
        { status: 200 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [systemMessage, ...messages],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I encountered an error.";

    return NextResponse.json({ message: reply }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred." }, { status: 500 });
  }
}
