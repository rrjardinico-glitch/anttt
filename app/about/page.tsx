
import {
  UserRound,
  Code2,
  Sparkles,
  Heart,
  Leaf,
  GraduationCap,
  Laptop,
} from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "Git & GitHub",
  "REST APIs",
  "Shadcn UI",
];

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description: "Building functional and user-friendly web experiences.",
    color: "bg-[#FCE7EF]",
    iconColor: "text-[#D982A2]",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always exploring new technologies and improving my skills.",
    color: "bg-[#E3EFDF]",
    iconColor: "text-[#78966E]",
  },
  {
    icon: Heart,
    title: "Creativity",
    description: "Turning ideas into meaningful digital experiences.",
    color: "bg-[#FCE7EF]",
    iconColor: "text-[#D982A2]",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#FFFAFC] px-6 py-16">
      <div className="mx-auto max-w-5xl space-y-16">

        {/* Header */}
        <section className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F4B8CC] bg-[#FCE7EF] px-5 py-2 text-sm font-medium text-[#456344]">
            <Leaf size={16} />
            GET TO KNOW ME
            <Heart size={14} className="text-[#D982A2]" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#304732] md:text-5xl">
            About <span className="text-[#E9A9C0]">Me.</span>
          </h1>

          <p className="mx-auto max-w-xl leading-7 text-[#82917C]">
            A little introduction about who I am, what I do,
            and what inspires me to keep growing.
          </p>
        </section>

        {/* Personal Introduction */}
        <section className="grid items-stretch gap-8 md:grid-cols-5">

          {/* Profile Card */}
          <div className="flex flex-col items-center justify-center rounded-[2rem] border border-[#F4B8CC] bg-gradient-to-br from-[#FCE7EF] via-[#F8EDF0] to-[#E3EFDF] p-8 text-center shadow-lg shadow-[#E9A9C0]/10 md:col-span-2">
            <div className="mb-6 flex h-36 w-36 items-center justify-center rounded-full border-4 border-white bg-white shadow-md">
              <UserRound size={65} className="text-[#91AD83]" />
            </div>

            <h2 className="text-2xl font-bold text-[#405B40]">
                Remy Rose Jardinico
            </h2>

            <p className="mt-2 font-medium text-[#78966E]">
              Aspiring Web Developer
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Creative", "Curious", "Passionate"].map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full px-4 py-2 text-xs font-medium ${
                    index === 1
                      ? "bg-[#E3EFDF] text-[#66845E]"
                      : "bg-white/90 text-[#C77E99]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* My Story */}
          <div className="rounded-[2rem] border border-[#F4B8CC] bg-white p-8 shadow-sm md:col-span-3 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-[#FCE7EF] p-3 text-[#D982A2]">
                <Sparkles size={23} />
              </div>

              <h2 className="text-2xl font-bold text-[#405B40]">
                My Story
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-[#82917C]">
              <p>
                Hello! I'm Remy Rose, an aspiring web developer
                with an interest in technology, programming, and creative
                design. I enjoy exploring how websites work and discovering
                new ways to create meaningful digital experiences.
              </p>

              <p>
                I believe that learning is a continuous journey. Every
                project gives me an opportunity to improve my skills,
                solve problems, and turn creative ideas into reality.
              </p>

              <p>
                My goal is to continue growing as a developer while
                creating websites that are not only visually appealing
                but also useful and accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#D982A2]">
              MY INTERESTS
            </p>

            <h2 className="text-3xl font-bold text-[#304732]">
              What Defines Me
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#F4B8CC] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#E9A9C0]/10"
                >
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} ${item.iconColor}`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[#405B40]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#82917C]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section className="rounded-[2rem] border border-[#F4B8CC] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-xl bg-[#E3EFDF] p-3 text-[#78966E]">
              <Laptop size={24} />
            </div>

            <h2 className="text-2xl font-bold text-[#405B40]">
              Skills & Technologies
            </h2>
          </div>

          <p className="mb-8 text-[#82917C]">
            Technologies and tools I enjoy exploring and working with.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:text-white ${
                  index % 2 === 0
                    ? "border-[#F4B8CC] bg-[#FCE7EF] text-[#C77E99] hover:bg-[#D982A2]"
                    : "border-[#DCE8D5] bg-[#E3EFDF] text-[#66845E] hover:bg-[#78966E]"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="rounded-[2rem] bg-gradient-to-r from-[#FCE7EF] to-[#E3EFDF] px-6 py-12 text-center">
          <Leaf size={30} className="mx-auto mb-5 text-[#78966E]" />

          <h2 className="text-2xl font-semibold italic text-[#54734D] md:text-3xl">
            "Growing, learning, and creating one step at a time."
          </h2>

          <p className="mt-4 text-sm text-[#91A18B]">
            — My Personal Journey
          </p>
        </section>

      </div>
    </main>
  );
}
