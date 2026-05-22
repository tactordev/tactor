"use client";
import {
  Search,
  Calendar1,
  Siren
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// avatar: https://i.ibb.co/SXNKT7SY/image.png
// avatar decoration: https://cdn.discordapp.com/media/v1/collectibles-shop/1343751617345749012/animated

function Shortcut({ className, url, icon, name }: { className?: string; url: string; icon: React.ReactNode; name: string }) {
  const router = useRouter();

  return (
    <div title={name} className={`group hover:cursor-pointer flex flex-col justify-center items-center w-full h-full section px-2 py-2 rounded-md shadow-lg ${className || ''} transition-all duration-200 hover:-translate-y-[0.5px] overflow-hidden`} onClick={() => { router.push(url) }}>
      {icon}
    </div>
  )
}

function encodeURIComponent(str: string) {
  return str.replace(/ /g, '+');
}
export default function Home() {
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const router = useRouter();

  function searchFocus(val: boolean) {
    return setSearchFocused(val);
  }
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      console.log("keydown", e.key, searchFocused);
      if (!searchFocused) return;
      if (e.key === "Enter") {
        const searchInput = document.getElementById("search-input");
        const query = (searchInput as HTMLInputElement)?.value;
        router.push(`https://www.google.com/search?q=${encodeURIComponent(query || "")}`);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchFocused]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row bg-white px-2 py-1 rounded-2xl items-center justify-center group">
        <Search className="text-gray-500 mt-0.5" size={15} />
        <input autoComplete="off" type="text" className="text-base pr-4 pl-2 focus:group-bg-blue-200 focus:outline-none" placeholder="Search anything..." id="search-input" onFocus={() => {searchFocus(true)}} onBlur={() => { console.log("blurring..."); searchFocus(false)}} />
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <Shortcut url={"https://calendar.google.com/calendar/u/0/r/week"} icon={<Calendar1 size={20} className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />} name="Calendar" />
        <Shortcut url={"https://docs.google.com/document/d/1zIQiN5CP4gy-PXSuN_ipuA1aXX9pDPg000GPT44WoLQ/edit?usp=sharing"} icon={<Siren size={20} className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />} name="NEA" />
      </div>
    </main>
  );
}
 