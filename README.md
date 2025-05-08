# AI Chatbot - Next.js + OpenAI + Vercel

Website chatbot AI yang dapat diakses melalui domain sendiri (`ai.rians.xyz`), dengan tampilan modern dan kepribadian yang bisa diatur sesuka hati.

## Fitur

- Ditenagai oleh OpenAI GPT-4 / GPT-3.5
- UI modern dan responsif (Next.js + TailwindCSS)
- Bisa di-deploy ke Vercel secara gratis
- Mudah dikustomisasi kepribadian bot-nya

---

## Deploy Langsung ke Vercel

1. **Clone atau Upload ke GitHub**
   - Buat repository baru di GitHub
   - Upload semua file project ke repo tersebut

2. **Login ke Vercel**
   - Masuk ke [https://vercel.com](https://vercel.com)
   - Klik `Add New Project` → Pilih repo `ai-chatbot`
   - Framework: **Next.js** (terdeteksi otomatis)
   - Klik `Deploy`

3. **Tambahkan API Key**
   - Masuk ke Vercel dashboard → Project → `Settings` → `Environment Variables`
   - Tambahkan:
     ```
     OPENAI_API_KEY=sk-xxxxx
     ```

4. **Hubungkan Domain `ai.rians.xyz`**
   - Di halaman project Vercel → `Settings` → `Domains`
   - Tambahkan domain: `ai.rians.xyz`
   - Ikuti instruksi DNS dan tunggu propagasi

---

## Struktur File

