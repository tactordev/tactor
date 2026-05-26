import {
  MapPin,
  Clock
} from "lucide-react"



// avatar: https://i.ibb.co/SXNKT7SY/image.png
// avatar decoration: https://cdn.discordapp.com/media/v1/collectibles-shop/1343751617345749012/animated

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col w-full h-full section px-8 py-6 rounded-md shadow-lg ${className || ''} overflow-y-auto`}>
      {children}
    </div>
  )
}

function ExperienceTree(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className="flex flex-col justify-center items-start w-full py-4 px-2">
      {
        Object.entries(experienceTree).map(([key, value]) => (
          <div key={key} className="flex flex-row items-start">
            <div className="flex flex-row items-center h-full justify-center first:mt-2">
                <svg height="50" width="25" xmlns="http://www.w3.org/2000/svg" className="flex h-full ">
                  <circle cx="11.4" cy="8" r="6" stroke="#5E5E5E" strokeWidth="2" fill="none" />
                  <line x1="11.4" y1="14" x2="11.4" y2="300000" stroke="#5E5E5E" strokeWidth="2" />
                </svg>
            </div>
            <div className="flex flex-col items-start w-full justify-center ml-4 pb-24">
              <h1 className="text-lg font-semibold">{value.title}</h1>
              <h2 className="text-sm text-[#5E5E5E] flex items-center justify-center"><Clock className="w-4 h-4 inline mr-1" /> {value.duration}</h2>
              <h2 className="text-sm text-[#5E5E5E] flex items-center justify-center"><MapPin className="w-4 h-4 inline mr-1" /> {value.location}</h2>
              <p className="text-sm mt-1">{value.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const experienceTree = {
  "WHISP": {
    title: "Lead Frontend Web Developer",
    duration: "August 2024 - Present",
    location: "Remote, United Kingdom",
    description: "Leading web developer for the discord bot WHISP. It provides integration into games such as FiveM.",
    technologies: ["Typescript", "Next.js", "Tailwind CSS"]
  },
  "LCU": {
    title: "Lead Backend Engineer",
    duration: "August 2023 - May 2024",
    location: "Remote, United Kingdom",
    description: "Lead backend engineer for Liberty County Uitilites, a discord bot. Amassed 3000 discord servers. Maintained backend features and data storage.",
    technologies: ["Python", "MongoDB", "Sentry"]
  }
}
export default function Home() {
  return (
    <main className="grid grid-cols-6 grid-rows-6 h-screen w-screen p-8 gap-4 overflow-y-hidden overflow-x-hidden scrollbar-hide">
      <Section className="col-span-2 row-span-2 relative">
        <div className="flex flex-row items-center gap-4">
          <img src="https://i.ibb.co/SXNKT7SY/image.png" alt="avatar" className="rounded-full w-16 h-16" />
          <div>
            <h1 className="text-2xl font-semibold">👋 Hey, I&apos;m <span className="font-bold">Tactor</span></h1>
            <h2>&nbsp;Student, software engineer.</h2>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-row gap-4 items-center mr-1">
            <a href="https://github.com/tactordev/">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-github text-[#5E5E5E] hover:text-black" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/talha-a-4207972bb/">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-linkedin text-[#5E5E5E] hover:text-black" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
          </div>
        </div>
      </Section>
      <Section className="col-span-4 row-span-4">
        <h1 className="text-xl font-bold tex-[#ccc]">Projects</h1>
      </Section>
      <Section className="col-span-2 row-span-4">
        <h1 className="text-xl font-bold">Experience</h1>
        <ExperienceTree >
          <p>Hey</p>
        </ExperienceTree>
      </Section>
      <Section className="col-span-2 row-span-2">
        <h1 className="text-xl font-bold">Education</h1>
      </Section>
      <Section className="col-span-2 row-span-2">
        <h1 className="text-xl font-bold">Testimonials</h1>
      </Section>
      <p></p>
    </main>
  );
}