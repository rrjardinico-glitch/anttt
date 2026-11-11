import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Code2,
  Leaf,
  Sparkles,
  Palette,
  Monitor,
  Heart,
} from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Development",
    description: "Building modern and functional websites with clean code.",
    color: "bg-[#FCE7EF]",
    iconColor: "text-[#D982A2]",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Creating beautiful interfaces with thoughtful details.",
    color: "bg-[#E3EFDF]",
    iconColor: "text-[#78966E]",
  },
  {
    icon: Monitor,
    title: "Technology",
    description: "Exploring new technologies and learning new skills.",
    color: "bg-[#FCE7EF]",
    iconColor: "text-[#D982A2]",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#FFFAFC]">

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center px-6 py-20">

        {/* Background Decorations */}
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#FCE7EF] opacity-60 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#E3EFDF] opacity-70 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

          {/* Left Content */}
          <div className="space-y-7">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#F4B8CC] bg-white/80 px-4 py-2 text-sm text-[#66845E] shadow-sm">
              <Leaf size={16} />
              <span>WELCOME TO MY PERSONAL PORTFOLIO</span>
              <Sparkles size={14} className="text-[#D982A2]" />
            </div>

            <div className="space-y-3">
              <p className="text-lg font-medium text-[#C77E99]">
                Hello there! I'm
              </p>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-[#293E2E] md:text-7xl">
                Remy Rose
                <span className="block text-[#D982A2]">
                  Jardinico.
                </span>
              </h1>

              <h2 className="text-xl font-medium text-[#657E5E] md:text-2xl">
                Aspiring Web Developer
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-[#788775] md:text-lg">
              Welcome to my little corner of the internet! I'm passionate
              about technology, creativity, and building meaningful digital
              experiences. I love learning, exploring ideas, and turning
              concepts into reality through code.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about"
                className="group flex items-center gap-2 rounded-full bg-[#91AD83] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#91AD83]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#718F67]"
              >
                Discover More
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-[#F4B8CC] bg-white px-7 py-3.5 font-semibold text-[#C77E99] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FCE7EF]"
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-5 pt-5">
              <span className="text-sm text-[#91A18B]">
                FIND ME ON
              </span>

              <Link
                href="/contact"
                aria-label="Contact"
                className="text-[#78966E] transition hover:scale-125 hover:text-[#D982A2]"
              >
                <Mail size={21} />
              </Link>
            </div>
          </div>

          {/* Right Profile Design */}
          <div className="relative flex items-center justify-center">

            {/* Decorative Circles */}
            <div className="absolute h-[340px] w-[340px] rounded-full border border-[#F4B8CC] md:h-[430px] md:w-[430px]" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-[#B8CDAE] md:h-[370px] md:w-[370px]" />

            {/* Floating Icon */}
            <div className="absolute right-4 top-8 z-20 rotate-12 rounded-2xl bg-white p-4 shadow-lg shadow-[#E9A9C0]/10 md:right-8">
              <Code2 className="text-[#91AD83]" size={27} />
            </div>

            <div className="absolute bottom-10 left-2 z-20 -rotate-12 rounded-2xl bg-white p-4 shadow-lg shadow-[#E9A9C0]/10 md:left-8">
              <Leaf className="text-[#D982A2]" size={27} />
            </div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-sm rounded-[2rem] border border-[#F4B8CC]/60 bg-white/90 p-8 text-center shadow-2xl shadow-[#E9A9C0]/15 backdrop-blur-sm md:p-10">

      

<div className="relative mx-auto mb-7 flex h-44 w-44 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FCE7EF] via-[#E3EFDF] to-[#91AD83] p-3 shadow-lg">

  <div className="flex h-full w-full items-center justify-center rounded-xl border-4 border-white bg-[#FFFAFC] p-1">
    <Image
      src="/images/pf.jpg"
      alt="Remy Profile Picture"
      width={300}
      height={300}
      priority
      className="h-full w-full rounded-lg object-cover"
    />
  </div>

  <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full border-4 border-white bg-[#D982A2]" />
</div>


            

              <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#D982A2]">
                GET TO KNOW ME
              </p>

              <h3 className="text-2xl font-bold text-[#354D36]">
                A Little About Me
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#83917D]">
                A dreamer, learner, and aspiring developer who believes
                every great idea starts with curiosity.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {["Creative", "Curious", "Dedicated"].map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full px-4 py-2 text-xs font-medium ${
                      index === 1
                        ? "bg-[#E3EFDF] text-[#66845E]"
                        : "bg-[#FCE7EF] text-[#C77E99]"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-[#F4B8CC]/50 pt-5">
                <p className="flex items-center justify-center gap-2 text-sm text-[#8C9B85]">
                  Made with
                  <Heart size={14} className="fill-[#D982A2] text-[#D982A2]" />
                  and creativity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="relative bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#D982A2]">
              WHAT I LOVE
            </p>

            <h2 className="text-3xl font-bold text-[#304732] md:text-4xl">
              Passion Beyond Coding
            </h2>

            <p className="mt-4 text-[#899687]">
              A few things that inspire me to learn and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {interests.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#F4B8CC]/70 bg-[#FFFAFC] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D9E8D2] hover:shadow-xl hover:shadow-[#E9A9C0]/10"
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} ${item.iconColor} transition-transform group-hover:rotate-6`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-[#405B40]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#84917E]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#FCE7EF] to-[#E3EFDF] px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <Leaf className="mx-auto mb-5 text-[#78966E]" size={34} />

          <h2 className="text-3xl font-bold text-[#354E36] md:text-4xl">
            Let's Create Something Great!
          </h2>

          <p className="mt-4 leading-7 text-[#758A70]">
            Have a project, idea, or just want to connect?
            I'd love to hear from you.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#91AD83] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#91AD83]/20 transition hover:-translate-y-1 hover:bg-[#718F67]"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#F4B8CC]/60 bg-[#FFFAFC] px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

          <p className="text-sm font-semibold text-[#54734D]">
            <Leaf size={15} className="mr-2 inline text-[#91AD83]" />
            MyPortfolio
          </p>

          <p className="text-xs text-[#91A18B]">
            © 2026 Fritzgerald Enric T. Imperial. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
