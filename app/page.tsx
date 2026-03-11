import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-between overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
