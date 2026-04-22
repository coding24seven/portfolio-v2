class ChatBot {
  static async sendPrompt(prompt: string) {
    const response = await fetch(import.meta.env.VITE_CHAT_BOT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: prompt,
        session_id: 'recruiter_1', // todo: remove hardcoded value
      }),
    });

    return response.json();
  }
}

export default ChatBot;
