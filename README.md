# 🚀 Zemenay Website

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js) ![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-green?style=for-the-badge&logo=tailwind-css) ![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.23.12-purple?style=for-the-badge)

> A **modern, responsive, and interactive frontend** built with **Next.js**, **Tailwind CSS**, **Shadcn/UI**, and **Framer Motion**. Features sleek dual-theme support, orbital logo animations, glassmorphism, and smooth micro-interactions for a polished UI/UX experience.

---

## Demo Video

<video width="600" controls>
  <source src="public/Zemenay - Revolutionize Your Digital Experience - Google Chrome 2025-08-13 19-52-25.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## ✨ Features

- **Dual Theme System**: Seamless dark/light mode with intelligent color transitions  
- **Glassmorphism Effects**: Modern frosted glass navigation and components  
- **Orbital Logo Animation**: Mesmerizing client logo carousel with physics-based movement  
- **Gradient Mastery**: Sophisticated color gradients that adapt to theme changes  
- **Micro-interactions**: Subtle hover effects and smooth transitions throughout  
- **Staggered Entrances**: Elements animate in sequence for visual hierarchy  
- **Fully Responsive Layouts**: Perfect on mobile, tablet, and desktop  

---

## 🛠 Tech Stack

| **Frontend** | Next.js 15, React 18, TypeScript 5.0 |
| ------------ | ----------------------------------- |
| **Styling**  | Tailwind CSS v4, CSS Variables, Glassmorphism |
| **Components** | Shadcn/UI, Radix UI, Lucide Icons |
| **Animation** | Framer Motion, CSS Transforms & Keyframes, Smooth Transitions |
| **Development Tools** | ESLint, Prettier, Git, VS Code |

---

## ⚡ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/zemenay-frontend.git
cd zemenay-frontend
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Run the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
```
Open http://localhost:3000 to view your project in the browser.

🎨 Framer Motion Animations
Framer Motion powers smooth, interactive animations across the site:

tsx
Copy
Edit
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  Welcome to Zemenay!
</motion.div>
Orbital Client Logos with physics-based circular motion

Glassmorphism Navigation with backdrop blur

Hover micro-interactions and staggered entrances for a professional feel

📁 Project Structure
csharp
Copy
Edit
frontend/
├─ components/       # Reusable UI components
├─ pages/            # Next.js pages
├─ public/           # Static assets & media
├─ styles/           # Tailwind & global styles
├─ hooks/            # Custom React hooks
├─ utils/            # Helper functions
├─ animations/       # Framer Motion variants
└─ package.json
💡 Contribution
Contributions are welcome! Follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

📄 License
This project is MIT Licensed.
