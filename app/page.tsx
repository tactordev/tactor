import Image from "next/image";

// avatar: https://i.ibb.co/SXNKT7SY/image.png
// avatar decoration: https://cdn.discordapp.com/media/v1/collectibles-shop/1343751617345749012/animated

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col w-full h-full section px-8 py-6 rounded-md shadow-lg ${className || ''}`}>
      {children}
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
            <h1 className="text-2xl font-semibold">👋 Hey, I&apos;m <span className="font-bold">Tactor</span></h1>
            <h2>&nbsp;An aspiring student and software engineer.</h2>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-row gap-4 items-center">
            <a href="https://github.com/tactordev" target="_blank" rel="noopener noreferrer" >
              <svg height="32" aria-hidden="true" data-component="Octicon" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github fill-[#272727]">
                  <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"></path>
              </svg>
            </a>
            <a href="mailto:tactor@proton.me" target="_blank" rel="noopener noreferrer" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            </a>
          </div>
        </div>
      </Section>
      <Section className="col-span-4 row-span-4">
        <h1 className="text-xl font-bold">Projects</h1>
      </Section>
      <Section className="col-span-2 row-span-4">
        <h1 className="text-xl font-bold">Experience</h1>
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
