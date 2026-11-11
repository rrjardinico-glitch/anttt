
import {
  GraduationCap,
  Award,
  BookOpen,
  Leaf,
} from "lucide-react";

const educationList = [
  {
    degree: "College Education",
    institution: "Naga College Foundation, Inc.",
    period: "2023 - Present",
    description:
      "Currently pursuing my studies and developing my knowledge in technology, programming, and computer science.",
    achievements: [
      "Learning web development",
      "Improving technical skills",
      "Exploring new technologies",
    ],
  },
  {
    degree: "Senior High School",
    institution: "Sta Cruz National High School",
    period: "2021 - 2023",
    description:
      "Completed senior high school while developing academic knowledge and personal skills.",
    achievements: [
      "Completed senior high school",
      "Developed communication skills",
    ],
  },
  {
    degree: "Junior High School",
    institution: "Sta Cruz National High School",
    period: "2017 - 2021",
    description:
      "Built a strong educational foundation and discovered new interests and passions.",
    achievements: [
      "Completed junior high school",
      "Participated in school activities",
    ],
  },
];

export default function Education() {
  return (
    <main className="min-h-screen bg-[#fffbfd] px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fce7ef] px-5 py-2 text-sm font-medium text-[#bd7894]">
            <BookOpen size={16} />
            MY LEARNING JOURNEY
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#456344]">
            My <span className="text-[#e99bb7]">Education.</span>
          </h1>

          <p className="text-[#82917c] max-w-xl mx-auto leading-7">
            Every step of my education has helped shape who I am
            and inspired me to keep learning and growing.
          </p>
        </section>

        {/* Education Cards */}
        <section className="space-y-6">
          {educationList.map((item, index) => (
            <div
              key={item.degree}
              className="group rounded-[2rem] border border-[#f2dce5] bg-white p-7 md:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e99bb7]/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">

                <div className="flex gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                    index % 2 === 0
                      ? "bg-[#fce7ef] text-[#d98da9]"
                      : "bg-[#e3efdf] text-[#78966e]"
                  }`}>
                    <GraduationCap size={28} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#456344]">
                      {item.degree}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-[#bd91a3]">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <span className="w-fit rounded-full bg-[#e3efdf] px-4 py-2 text-xs font-semibold text-[#66805f]">
                  {item.period}
                </span>
              </div>

              <p className="mt-6 leading-7 text-[#82917c]">
                {item.description}
              </p>

              <div className="mt-6 border-t border-[#f4e8ec] pt-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#54734d]">
                  <Award size={17} className="text-[#e99bb7]" />
                  Key Highlights
                </h3>

                <ul className="space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-center gap-2 text-sm text-[#82917c]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#e99bb7]" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Quote */}
        <section className="rounded-[2rem] bg-gradient-to-r from-[#fce7ef] to-[#e3efdf] p-10 text-center">
          <Leaf size={30} className="mx-auto mb-4 text-[#78966e]" />

          <h2 className="text-2xl font-bold text-[#456344]">
            Dream big, grow at your own pace, and never stop believing in the person you're becoming..
          </h2>

          <p className="mt-3 text-sm text-[#82917c]">
            — A Reminder to Keep Going ♡
          </p>
        </section>

      </div>
    </main>
  );
}
