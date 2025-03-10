import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center justify-between px-2 w-full">
      <Image
          className="dark:invert p-4"
          src="/endava.svg"
          alt="Endava logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex items-center gap-2 justify-between font-[family-name:var(--font-geist-mono)] text-2xl">
          <p>
            AM & Infra Discipline
          </p>
          <div className="text-2xl text-[#FF5733]">&bull;</div>
          <p>
            DevOps Community
          </p>
        </div>
      </header>
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-3 justify-between font-[family-name:var(--font-geist-mono)]">
          <div className="flex items-center gap-1 justify-between text-6xl font-[family-name:var(--font-geist-mono)] font-bold">
            <div >&lt;</div>
            <div className="text-[#FF5733]">DevOps Week 2025</div>
            <div >&gt;</div>
          </div>
          <div className="flex gap-2">
            <p className="text-4xl">
              Share<span className="text-[#FF5733]">.</span>
            </p>
            <p className="text-4xl">
              Learn<span className="text-[#FF5733]">.</span>
            </p>
            <p className="text-4xl">
              Grow<span className="text-[#FF5733]">.</span>
            </p>
            
          </div>
        </div>
        
        <ol className="list-inside list-decimal text-xl gap-3 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-4">
            {/* {" "} */}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            Date: 
            </code>
            {" "} March 10-14 (Mon - Fri)
          </li>
          <li className="mb-4">
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Location:
            </code>
            {" "} Floor G. Training Room - Online</li>
          <li>
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              For:
            </code>
            {" "} Anyone ready to dive into DevOps</li>
        </ol>

        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.endava.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/endava_icon.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Vist us now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.endava.com/who-we-are/locations"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Endava →
        </a>
      </footer>
    </div>
  );
}
