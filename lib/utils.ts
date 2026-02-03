import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomInterviewCover() {
  const covers = [
    "/covers/skype.jpg",
    "/covers/spotify.jpg",
    "/covers/telegram.jpg",
    "/covers/default.jpg", // fixed folder consistency
  ]

  const randomIndex = Math.floor(Math.random() * covers.length)
  return covers[randomIndex]
}

export function getTechLogos(techStack: string[] = []) {
  const logoMap: Record<string, string> = {
    javascript: "/icons/javascript.svg",
    typescript: "/icons/typescript.svg",
    python: "/icons/python.svg",
    react: "/icons/react.svg",
    nextjs: "/icons/nextjs.svg",
    nodejs: "/icons/nodejs.svg",
    java: "/icons/java.svg",
    html: "/icons/html.svg",
    css: "/icons/css.svg",
    tailwind: "/icons/tailwind.svg",
    firebase: "/icons/firebase.svg",
    openai: "/icons/openai.svg",
  }

  return techStack.map(
    (tech) => logoMap[tech.toLowerCase()] || "/icons/default.svg"
  )
}
