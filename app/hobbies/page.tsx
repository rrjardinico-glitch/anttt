
import {
  Camera,
  Film,
  Gamepad2,
  Music,
  Dumbbell,
  Plane,
  BookOpen,
  Palette,
  Coffee,
  Heart,
  Sparkles,
} from "lucide-react";

const hobbies = [
     {
    title: "Movie",
    icon: Film,
    description: "Watching movies and exploring different genres.",
    color: "pink",
     },
    {
    title: "Music",
    icon: Music,
    description: "Listening to my favorite songs and discovering different music genres.",
    color: "pink",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "Reading interesting books and learning something new every day.",
    color: "green",
  },
  {
    title: "Arts & Design",
    icon: Palette,
    description: "Expressing creativity through colors, layouts, and visual designs.",
    color: "pink",
  },
];

export default function Hobbies() {
  return (
    <main className="min-h-screen bg-[#fffbfd] px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fce7ef] px-5 py-2 text-sm font-medium text-[#bd7894]">
            <Heart size={16} />
            A LITTLE ABOUT MYSELF
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#456344]">
            My Hobbies & <span className="text-[#e99bb7]">Interests.</span>
          </h1>

          <p className="max-w-xl mx-auto text-[#82917c] leading-7">
            Here are some of the little things that make me happy
            and inspire me outside of my studies and coding journey.
          </p>
        </section>

        {/* Hobbies Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            const isPink = hobby.color === "pink";

            return (
              <div
                key={hobby.title}
                className="group rounded-[2rem] border border-[#f2dce5] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#e99bb7]/10"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:rotate-6 ${
                  isPink
                    ? "bg-[#fce7ef] text-[#d98da9]"
                    : "bg-[#e3efdf] text-[#78966e]"
                }`}>
                  <Icon size={27} />
                </div>

                <h2 className="mb-3 text-lg font-bold text-[#456344]">
                  {hobby.title}
                </h2>

                <p className="text-sm leading-7 text-[#82917c]">
                  {hobby.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#bd91a3]">
                  <Sparkles size={14} />
                  Something I enjoy
                </div>
              </div>
            );
          })}
        </section>

        {/* Bottom Section */}
        <section className="rounded-[2rem] bg-gradient-to-r from-[#fce7ef] to-[#e3efdf] px-8 py-12 text-center">
          <Heart size={30} className="mx-auto mb-4 text-[#d98da9]" />

          <h2 className="text-2xl font-bold text-[#456344]">
            Life Beyond the Screen.
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#82917c]">
            Finding inspiration in little things, enjoying new experiences,
            and making every moment meaningful.
          </p>
        </section>

      </div>
    </main>
  );
}
