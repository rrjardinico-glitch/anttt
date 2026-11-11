
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Leaf,
  MessageCircle,
  Clock,
  ArrowRight,
  Heart,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Address",
    value: "rrjardinico@gbox.ncf.edu.ph",
    link: "mailto:rrjardinico@gbox.ncf.edu.ph",
    color: "bg-[#FCE7EF] text-[#D982A2]",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+1 (555) 000-0000",
    link: "tel:+15550000000",
    color: "bg-[#E3EFDF] text-[#78966E]",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Canaman Camarines Sur Brgy Del Rosario, Philippines",
    link: null,
    color: "bg-[#FCE7EF] text-[#D982A2]",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#FFFAFC] px-6 py-16">
      <div className="mx-auto max-w-5xl space-y-14">

        {/* Header */}
        <section className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F4B8CC] bg-[#FCE7EF] px-5 py-2 text-sm font-medium text-[#66845E]">
            <Leaf size={16} />
            LET'S CONNECT
            <Heart size={14} className="text-[#D982A2]" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#304732] md:text-5xl">
            Get In <span className="text-[#E9A9C0]">Touch.</span>
          </h1>

          <p className="mx-auto max-w-xl leading-7 text-[#82917C]">
            Have a question, collaboration idea, or just want to say hello?
            I'd love to hear from you. Feel free to send me a message!
          </p>
        </section>

        {/* Contact Content */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-5">

          {/* Left Side */}
          <div className="space-y-6 md:col-span-2">

            <div className="rounded-[2rem] border border-[#F4B8CC] bg-gradient-to-br from-[#E9A9C0] via-[#DDAFC0] to-[#91AD83] p-8 text-white shadow-xl shadow-[#E9A9C0]/20">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                <MessageCircle size={28} />
              </div>

              <h2 className="mb-3 text-2xl font-bold">
                Let's Talk!
              </h2>

              <p className="text-sm leading-7 text-white/90">
                I'm always open to discussing new projects,
                creative ideas, and opportunities to learn
                and collaborate with others.
              </p>

              <div className="mt-8 border-t border-white/30 pt-6">
                <p className="text-sm text-white/80">
                  Looking forward to hearing from you!
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm font-medium">
                  <Leaf size={16} />
                  Let's grow together.
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#405B40]">
                Contact Information
              </h3>

              {contactInfo.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-[#F4B8CC] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#E9A9C0]/10">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#91A18B]">
                        {item.title}
                      </p>

                      <p className="mt-1 break-words text-sm font-semibold text-[#405B40]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={item.title} href={item.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:col-span-3">
            <div className="h-full rounded-[2rem] border border-[#F4B8CC] bg-white p-7 shadow-sm md:p-10">

              <div className="mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3EFDF] text-[#78966E]">
                  <Send size={23} />
                </div>

                <h2 className="text-2xl font-bold text-[#405B40]">
                  Send Me a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#91A18B]">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form
                action="mailto:fimperial@ncf.edu.ph"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-[#54734D]"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-[#F4B8CC] bg-[#FFFAFC] px-4 py-3 text-sm text-[#405B40] outline-none transition placeholder:text-[#A5B19F] focus:border-[#91AD83] focus:ring-2 focus:ring-[#91AD83]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-[#54734D]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="Email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-xl border border-[#F4B8CC] bg-[#FFFAFC] px-4 py-3 text-sm text-[#405B40] outline-none transition placeholder:text-[#A5B19F] focus:border-[#91AD83] focus:ring-2 focus:ring-[#91AD83]/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-[#54734D]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="Subject"
                    type="text"
                    placeholder="What is this about?"
                    required
                    className="w-full rounded-xl border border-[#F4B8CC] bg-[#FFFAFC] px-4 py-3 text-sm text-[#405B40] outline-none transition placeholder:text-[#A5B19F] focus:border-[#91AD83] focus:ring-2 focus:ring-[#91AD83]/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[#54734D]"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="Message"
                    rows={6}
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-none rounded-xl border border-[#F4B8CC] bg-[#FFFAFC] px-4 py-3 text-sm text-[#405B40] outline-none transition placeholder:text-[#A5B19F] focus:border-[#91AD83] focus:ring-2 focus:ring-[#91AD83]/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#91AD83] px-7 py-4 font-semibold text-white shadow-lg shadow-[#91AD83]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#718F67]"
                >
                  Send Message

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs text-[#A0AD99]">
                  <Clock size={13} className="mr-1 inline" />
                  Thank you for taking the time to reach out!
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom Quote */}
        <section className="rounded-[2rem] border border-[#F4B8CC] bg-gradient-to-r from-[#FCE7EF] to-[#E3EFDF] px-6 py-12 text-center">
          <Leaf size={30} className="mx-auto mb-4 text-[#78966E]" />

          <h2 className="text-2xl font-bold text-[#405B40]">
            Every expert was once a beginner. Keep learning, keep creating, and trust the process. Your growth is your greatest achievement...
          </h2>

        </section>
      </div>
    </main>
  );
}
