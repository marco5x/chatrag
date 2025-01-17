# PDF Knowledge Base ChatBot 🤖

A Next.js application that creates an AI-powered chatbot from your PDF documents. Built with LangChain, Pinecone, and OpenAI.

![ChatBot Demo](https://utfs.io/f/HLxTbDBCDLwfYxrlp38lLu9zkwAF6dOo2sqBEVRh37ycjQPD)


## ✨ Features

- 📁 PDF file upload and processing
- 🔍 Advanced RAG (Retrieval Augmented Generation)
- 💬 Interactive chat interface
- 🔄 Real-time streaming responses
- 📚 Context-aware conversations
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [LangChain](https://js.langchain.com/)
- [Pinecone](https://www.pinecone.io/)
- [OpenAI](https://openai.com/)
- [Tailwind CSS](https://tailwindcss.com/).
- [Uploadthing](https://uploadthing.com)/)


## Setting (.env)
```bash
# Required from externals tools.
OPENAI_API_KEY=
PINECONE_API_KEY=
UPLOADTHING_TOKEN=

# Usually for free pinecone account env is "us-west4-gcp-free"
PINECONE_ENVIRONMENT='us-west4-gcp-free'

# The index can be created directly or will
# be created when you run prepare-data npm command
PINECONE_INDEX_NAME=
```
