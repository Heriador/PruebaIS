// Type definitions for the message object used in the chat history.
export type Message = {
  role: 'user' | 'developer' | 'assistant',
  content: string,
  isError?: boolean,
}
