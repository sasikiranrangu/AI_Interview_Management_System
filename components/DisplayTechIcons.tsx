"use client"; // ✅ ensures component runs on the client

import Image from "next/image";
import { cn, getTechLogos } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TechIconProps {
  techStack: string[];
}

interface TechIcon {
  tech: string;
  url: string;
}

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const [techIcons, setTechIcons] = useState<TechIcon[]>([]);

  useEffect(() => {
    const fetchIcons = async () => {
      const icons = await getTechLogos(techStack);
      setTechIcons(icons || []);
    };
    fetchIcons();
  }, [techStack]);

  return (
    <div className="flex flex-row items-center">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => {
        const safeUrl =
          url && url.trim() !== "" ? url : "/images/default-tech.png";
        const uniqueKey = `${tech}-${index}`;

        return (
          <div
            key={uniqueKey}
            className={cn(
              "relative group bg-dark-300 rounded-full p-2 flex items-center justify-center transition-transform hover:scale-105",
              index >= 1 && "-ml-3"
            )}
          >
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {tech}
            </span>

            <Image
              src={safeUrl}
              alt={tech || "Tech icon"}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTechIcons;
