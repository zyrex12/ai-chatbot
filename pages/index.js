import Head from 'next/head';
import ChatUI from '../components/ChatUI';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Chatbot</title>
        <meta name="description" content="AI Chatbot with custom personality" />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold text-center mb-6">AI Chatbot</h1>
        <ChatUI />
      </main>
    </>
  );
}
