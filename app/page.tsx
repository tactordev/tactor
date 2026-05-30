import {
  MapPin,
  Clock
} from "lucide-react"



// avatar: https://i.ibb.co/SXNKT7SY/image.png


const experienceTree: tree = {
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

const educationTree: tree = {
  "King's College School": {
    title: "GCSEs & A-Levels",
    description: <p><span className="font-bold">A-Levels:</span> FM, Maths, CS, and Physics. <br /> <span className="font-bold">GCSE Results:</span> 99999999987</p>,
    location: "Wimbledon, London, United Kingdom",
    duration: "September 2020 - Present",
    technologies: ["Python"]
  }
}

type ProjectR = {
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  github: string;
  demo?: string;
}

const projects: Record<string, ProjectR> = {
  "Tactor Cards": {
    title: "Tactor Cards",
    description: "A web app that allows you to play specialised card games. Currently, it only support Kiki and single player against an automated opponent. In future, I plan to add support for more game, a 3D atmosphere and multiplayer.",
    technologies: ["Next.js", "Typescript", "ThreeJS", "Tailwind CSS"],
    thumbnail: "/cards-bg.jpg",
    github: "https://github.com/tactordev/cards",
    demo: "https://cards.tactor.dev/"
  }
}

// brandfetch.com
const techToIcon: Record<string, React.ReactNode> = {
  "Next.js": <svg xmlns="http://www.w3.org/2000/svg" data-testid="geist-icon" height="20" strokeLinejoin="round" fill="" viewBox="0 0 16 16" width="20">
              <g clipPath="url(#clip0_53_108)">
                <circle cx="8" cy="8" r="7.375" fill="#424242" stroke="var(--ds-gray-1000)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.63 11V5" stroke="url(#paint0_linear_53_108vsxrmxu21)" strokeWidth="1.25" strokeMiterlimit="1.41421"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_53_108vsxrmxu21)"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_53_108vsxrmxu21" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ccc"/>
                  <stop offset="0.609375" stopColor="#ccc" stopOpacity="0.57"/>
                  <stop offset="0.796875" stopColor="#ccc" stopOpacity="0"/>
                  <stop offset="1" stopColor="#ccc" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_53_108vsxrmxu21" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ccc"/>
                  <stop offset="1" stopColor="#ccc" stopOpacity="0"/>
                </linearGradient>
                <clipPath id="clip0_53_108">
                  <rect width="16" height="16" fill="red"/>
                </clipPath>
              </defs>
            </svg>,
  "Typescript": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 260 260">
	                <path d="m9.75 0h240.5c5.385 0 9.75 4.3652 9.75 9.75v240.5c0 5.385-4.365 9.75-9.75 9.75h-240.5c-5.3848 0-9.75-4.365-9.75-9.75v-240.5c0-5.3848 4.3652-9.75 9.75-9.75z" fill="#ccc"/>
	                <path d="m9.75 0h240.5c5.385 0 9.75 4.3652 9.75 9.75v240.5c0 5.385-4.365 9.75-9.75 9.75h-240.5c-5.3848 0-9.75-4.365-9.75-9.75v-240.5c0-5.3848 4.3652-9.75 9.75-9.75zm134.78 138.32v-21.324h-92.532v21.324h33.036v94.946h26.298v-94.946zm10.485 92.439c4.241 2.162 9.257 3.784 15.048 4.865 5.79 1.081 11.893 1.622 18.309 1.622 6.253 0 12.193-0.595 17.82-1.784 5.628-1.189 10.562-3.149 14.803-5.879s7.598-6.297 10.072-10.703 3.711-9.852 3.711-16.339c0-4.703-0.707-8.824-2.12-12.365-1.414-3.541-3.453-6.69-6.117-9.447s-5.859-5.23-9.583-7.419c-3.725-2.189-7.925-4.257-12.601-6.203-3.425-1.406-6.497-2.771-9.216-4.095-2.718-1.324-5.029-2.676-6.932-4.054-1.903-1.379-3.371-2.838-4.404-4.379-1.033-1.54-1.55-3.284-1.55-5.23 0-1.784 0.463-3.392 1.387-4.824 0.924-1.433 2.229-2.663 3.915-3.69 1.685-1.027 3.751-1.824 6.198-2.392 2.447-0.567 5.165-0.851 8.156-0.851 2.174 0 4.472 0.162 6.891 0.486 2.42 0.325 4.853 0.825 7.299 1.5 2.447 0.676 4.826 1.527 7.137 2.555 2.311 1.027 4.445 2.216 6.402 3.567v-24.244c-3.969-1.514-8.305-2.636-13.008-3.365-4.704-0.73-10.1-1.095-16.189-1.095-6.199 0-12.071 0.662-17.617 1.987-5.546 1.324-10.425 3.392-14.639 6.203s-7.544 6.392-9.991 10.743c-2.447 4.352-3.67 9.555-3.67 15.609 0 7.731 2.243 14.326 6.729 19.785 4.485 5.46 11.295 10.082 20.43 13.866 3.588 1.46 6.932 2.892 10.031 4.298 3.099 1.405 5.777 2.865 8.033 4.378 2.257 1.514 4.037 3.162 5.342 4.946s1.958 3.811 1.958 6.082c0 1.676-0.408 3.23-1.224 4.662-0.815 1.433-2.052 2.676-3.71 3.73-1.659 1.054-3.725 1.879-6.199 2.473-2.474 0.595-5.369 0.892-8.686 0.892-5.654 0-11.254-0.986-16.8-2.959s-10.684-4.933-15.415-8.879z" fill="#424242"/>
                </svg>,
  "Tailwind CSS": <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 137.5 82" fillRule="evenodd" clipRule="evenodd" fill="#424242" width="20px" height="20px">
                    <g>
                      <path d="M68.7,0C50.4,0,39,9.1,34.4,27.3c6.9-9.1,14.9-12.5,24.1-10.3c5.2,1.3,9,5.1,13.1,9.2   C78.3,33.1,86.1,41,103.1,41c18.3,0,29.8-9.1,34.4-27.3c-6.9,9.1-14.9,12.5-24,10.2c-5.2-1.3-9-5.1-13.1-9.2   C93.6,7.9,85.8,0,68.7,0L68.7,0z M34.4,41C16,41,4.6,50.1,0,68.3c6.9-9.1,14.9-12.5,24.1-10.3c5.2,1.3,9,5.1,13.1,9.2   C43.9,74.1,51.7,82,68.7,82c18.3,0,29.8-9.1,34.4-27.3c-6.9,9.1-14.9,12.5-24.1,10.2c-5.2-1.3-9-5.1-13.1-9.2   C59.2,48.9,51.4,41,34.4,41L34.4,41z M34.4,41">
                      </path>
                    </g>
                  </svg>,
  "Python": <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="20px" height="20px" viewBox="0.21 -0.077 110 110" enableBackground="new 0.21 -0.077 110 110"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="63.8159" y1="56.6829" x2="118.4934" y2="1.8225" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"> <stop offset="0" stopColor="#424242"/> <stop offset="1" stopColor="#212121"/></linearGradient><path fill="url(#SVGID_1_)" d="M55.023-0.077c-25.971,0-26.25,10.081-26.25,12.156c0,3.148,0,12.594,0,12.594h26.75v3.781 c0,0-27.852,0-37.375,0c-7.949,0-17.938,4.833-17.938,26.25c0,19.673,7.792,27.281,15.656,27.281c2.335,0,9.344,0,9.344,0 s0-9.765,0-13.125c0-5.491,2.721-15.656,15.406-15.656c15.91,0,19.971,0,26.531,0c3.902,0,14.906-1.696,14.906-14.406 c0-13.452,0-17.89,0-24.219C82.054,11.426,81.515-0.077,55.023-0.077z M40.273,8.392c2.662,0,4.813,2.15,4.813,4.813 c0,2.661-2.151,4.813-4.813,4.813s-4.813-2.151-4.813-4.813C35.46,10.542,37.611,8.392,40.273,8.392z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="97.0444" y1="21.6321" x2="155.6665" y2="-34.5308" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"> <stop offset="0" stopColor="#6d6d6d"/> <stop offset="1" stopColor="#6d6d6d"/></linearGradient><path fill="url(#SVGID_2_)" d="M55.397,109.923c25.959,0,26.282-10.271,26.282-12.156c0-3.148,0-12.594,0-12.594H54.897v-3.781 c0,0,28.032,0,37.375,0c8.009,0,17.938-4.954,17.938-26.25c0-23.322-10.538-27.281-15.656-27.281c-2.336,0-9.344,0-9.344,0 s0,10.216,0,13.125c0,5.491-2.631,15.656-15.406,15.656c-15.91,0-19.476,0-26.532,0c-3.892,0-14.906,1.896-14.906,14.406 c0,14.475,0,18.265,0,24.219C28.366,100.497,31.562,109.923,55.397,109.923z M70.148,101.454c-2.662,0-4.813-2.151-4.813-4.813 s2.15-4.813,4.813-4.813c2.661,0,4.813,2.151,4.813,4.813S72.809,101.454,70.148,101.454z"/></svg>,
  "MongoDB": <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 120 257" fill="#424242" width="20px" height="20px">
              <g>
                <path d="M82.3,28.6C71.5,15.9,62.2,2.8,60.4,0.2c-0.2-0.2-0.5-0.2-0.7,0c-1.9,2.7-11.2,15.7-22,28.5   c-92.6,118.1,14.6,197.8,14.6,197.8l0.9,0.6c0.8,12.3,2.8,30,2.8,30h4h4c0,0,2-17.6,2.8-30l0.9-0.7   C67.7,226.4,174.9,146.8,82.3,28.6z M60,224.7c0,0-4.8-4.1-6.1-6.2v-0.2l5.8-128.6c0-0.4,0.6-0.4,0.6,0L66,218.2v0.2   C64.7,220.6,60,224.7,60,224.7z">
                </path>
              </g>
            </svg>,
  "Sentry": <svg xmlns="http://www.w3.org/2000/svg" className="css-15xgryy e10nushx5" viewBox="0 0 72 66" width="20px" height="20px"><path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z" fill="#424242" transform="translate(11, 11)"></path></svg>,
  "ThreeJS": <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="square" strokeMiterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" width="20px" height="20px">
              <g transform="translate(8.964 4.2527)" fillRule="evenodd" stroke="#424242" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="8">
                <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
              </g>
            </svg>
}


function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col w-full h-full section px-8 py-4 rounded-md shadow-lg ${className || ''} overflow-y-auto`}>
      {children}
    </div>
  )
}

type tree = Record<string, {
  title: string;
  description: string | React.ReactNode;
  location: string;
  duration: string;
  technologies: string[];
}>

function Tree(
  { tree }: { tree: tree }
) {
  return (
    <div className="flex flex-col justify-center items-start w-full py-4 px-2 mb-4">
      {
        Object.entries(tree).map(([key, value]) => (
          <div key={key} className="flex flex-row items-start">
            <div className="flex flex-row items-center h-full justify-center first:mt-2">
                <svg height="50" width="25" xmlns="http://www.w3.org/2000/svg" className="flex h-full">
                  <circle cx="11.4" cy="8" r="6" stroke="gray" strokeWidth="2" fill="none" />
                  <line x1="11.4" y1="14" x2="11.4" y2="300000" stroke="gray" strokeWidth="2" />
                </svg>
            </div>
            <div className="flex flex-col items-start w-full justify-center ml-4 pb-24">
              <h1 className="text-lg font-semibold text-gray-900">{value.title}</h1>
              <h2 className="text-sm text-gray-500 flex items-center justify-center"><Clock className="w-4 h-4 inline mr-1" /> {value.duration}</h2>
              <h2 className="text-sm text-gray-500 flex items-center justify-center"><MapPin className="w-4 h-4 inline mr-1" /> {value.location}</h2>
              {
                typeof value.description === "string" ? (
                  <p className="text-sm mt-1">{value.description}</p>
                ) : (
                  value.description
                )
              }
              <div className="flex flex-row gap-4 mt-2">
                {
                  value.technologies.map((tech) => (
                    <Tag key={tech} name={tech} icon={techToIcon[tech]} className="section shadow-lg" />
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

function Project(
  {
    project
  }: {
    project: ProjectR
  }
) {
  return  (
    <div className="flex flex-col w-fit h-fit rounded-md shadow-sm bg-gray-100/50 border-1 border-gray-300">
      <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="w-full h-32 object-cover rounded-t-md -p-1 border-1 border-gray-400" />
      <div className="flex flex-col px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-700">{project.title}</h1>
        <p className="text-xs text-gray-500 mt-1 max-w-48">{project.description}</p>
        <div className="flex flex-row gap-4 mt-3 mb-2 flex-wrap max-w-48">
          {
            project.technologies.map((tech) => (
              <Tag key={tech} name={tech} icon={techToIcon[tech] || <span className="text-xs">{tech}</span>} className="section shadow-lg" />
            ))
          }
        </div>
      </div>
    </div>
  );
}

function Tag({ name, icon, className }: { name: string; icon: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative text-xs bg-gray-800/10 px-2 py-2 rounded-md shadow-md backdrop-blur-lg hover:cursor-pointer hover:-translate-y-[0.125vw] transition-transform duration-200`}>
      {icon}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-300 text-xs py-1 px-2 rounded shadow-md whitespace-nowrap text-gray-800">
        {name}
      </span>
    </div>
  )
}

export default function Home() {
  return (
    <main className="grid grid-cols-6 grid-rows-6 h-screen w-screen p-8 gap-4 overflow-y-hidden overflow-x-hidden scrollbar-hide">
      <Section className="col-span-2 row-span-2 relative">
        <div className="flex flex-row items-center gap-4">
          <img src="https://i.ibb.co/SXNKT7SY/image.png" alt="avatar" className="rounded-full w-16 h-16" />
          <div>
            <h1 className="text-2xl font-semibold">👋 Hey, I&apos;m <span className="font-bold text-gray-900">Tactor</span></h1>
            <h2>&nbsp;Student, software engineer.</h2>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-row gap-4 items-center mr-1.5 transition-colors duration-300">
            <a href="https://github.com/tactordev/">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-github text-gray-500 hover:text-gray-800 transition-colors duration-300" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/talha-a-4207972bb/">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-linkedin text-gray-500 hover:text-gray-800 transition-colors duration-300" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
          </div>
        </div>
      </Section>
      <Section className="col-span-4 row-span-4 pb-0 overflow-y-auto scrb">
        <h1 className="text-xl font-bold text-gray-800 sticky -top-2 rounded-md px-4 py-2 backdrop-blur-sm shadow-sm">Projects</h1>
        <div className="flex flex-row items-start justify-start w-full h-full gap-4 mt-4 pb-4">
          {
            Object.entries(projects).map(([key, value]) => (
              <Project key={key} project={value} />
            ))
          }
        </div>
      </Section>
      <Section className="col-span-2 row-span-4 pb-0 overflow-y-auto scrb">
        <h1 className="text-xl font-bold text-gray-800 sticky -top-2 rounded-md px-4 py-2 backdrop-blur-sm shadow-sm">Experience</h1>
        <Tree tree={experienceTree} />
      </Section>
      <Section className="col-span-2 row-span-2 pb-0 overflow-y-auto scrb">
        <h1 className="text-xl font-bold text-gray-800 sticky -top-2 rounded-md px-4 py-2 backdrop-blur-sm shadow-sm">Education</h1>
        <Tree tree={educationTree} />
      </Section>
      <Section className="col-span-2 row-span-2 pb-0 overflow-y-auto scrb">
        <h1 className="text-xl font-bold text-gray-800 sticky -top-2 rounded-md px-4 py-2 backdrop-blur-sm shadow-sm">Testimonials</h1>
      </Section>
      <p></p>
    </main>
  );
}