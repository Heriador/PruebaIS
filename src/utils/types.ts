export type Message = {
  role: 'user' | 'developer' | 'assistant',
  content: string,
  isError: boolean,
}
