'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Globe,
  Mail,
  MessageSquare,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Workflow,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const BEFORE_IMAGE =
  'https://raw.githubusercontent.com/12tensystems-a11y/12tensystems-site/main/before.png';
const AFTER_IMAGE =
  'https://raw.githubusercontent.com/12tensystems-a11y/12tensystems-site/main/after.png';

export default function HomePage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    needs: '',
  });

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`New 12TenSystems enquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nWhat they need help with:\n${form.needs}`
    );
    return `mailto:12tensystems@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  const services = [
    {
      icon: Bot,
      title: 'AI Customer Assistants',
      copy: 'Integrated AI systems built for your website, support flow, and customer journey.',
      label: '24/7 Handling',
      preview: <MiniChatPreview />,
    },
    {
      icon: Globe,
      title: 'Website Development',
      copy: 'Modern, conversion-focused websites built to position your business properly online.',
      label: 'Built To Convert',
      preview: <MiniWebsitePreview />,
    },
    {
      icon: Star,
      title: 'Automated Google Reviews',
      copy: 'Review systems that turn happy customers into stronger trust and better local visibility.',
      label: 'Reputation Growth',
      preview: <MiniReviewPreview />,
    },
  ];

  const stack = [
    {
      icon: MessagesSquare,
      title: 'Customer Handling',
      text: 'Instant responses, better first impressions, less missed demand.',
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      text: 'Smart workflows that move leads, support, and tasks automatically.',
    },
    {
      icon: ShieldCheck,
      title: 'Structured Systems',
      text: 'Built to feel modern, look credible, and actually support growth.',
    },
  ];

  const results = [
    'Increase conversions',
    'Reduce missed opportunities',
    'Automate customer communication',
    'Build a smarter online presence',
    'Scale without adding complexity',
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#03060d] text-white">
      <BackgroundGlow />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#03060d]/78 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#03060d]/62">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <div className="relative flex items-center">
              <div className="absolute -inset-2 rounded-full bg-cyan-400/10 blur-xl opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex items-baseline gap-1.5">
                <span
                  className="text-[1.2rem] font-semibold tracking-[0.16em] text-cyan-300 transition duration-300 group-hover:text-cyan-200"
                  style={{ fontFamily: 'Space Grotesk, Sora, sans-serif', textShadow: '0 0 18px rgba(34,211,238,0.35)' }}
                >
                  12
                </span>
                <span
                  className="text-[1.05rem] font-medium tracking-[0.22em] text-white/95 transition duration-300 group-hover:text-white"
                  style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
                >
                  TENSYSTEMS
                </span>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 md:flex">
            {[
              ['Services', '#services'],
              ['Systems', '#systems'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition duration-200 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full bg-cyan-400 px-5 text-sm font-medium text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main id="top" className="pt-24">
        <section className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
            >
              <Sparkles className="h-4 w-4" />
              Modern systems for modern businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
            >
              AI Systems Built To <span className="text-cyan-300">Increase Conversions</span> And Scale Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/68"
            >
              Modern websites, integrated AI assistants, and automated systems designed for businesses that want to move properly online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-cyan-400 px-7 text-base font-medium text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 text-base text-white transition duration-300 hover:border-cyan-400/20 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)]"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                ['AI Assistants', 'Website-integrated support systems'],
                ['Smart Websites', 'Built to position and convert'],
                ['Review Automation', 'Turn positive service into trust'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07]"
                >
                  <div className="text-sm font-medium text-cyan-300">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-white/55">{text}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10"
          >
            <HeroVisual />
          </motion.div>

          <a href="#services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-white/45 lg:flex">
            Scroll to explore
            <ChevronDown className="h-4 w-4" />
          </a>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_35px_rgba(34,211,238,0.06)] backdrop-blur-xl lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%)]" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Proven Positioning</p>
              <h2
                className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl"
                style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
              >
                Systems Already Supporting <span className="text-cyan-300">£2M+ Revenue Brands</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Built and deployed customer-facing AI systems designed to reduce workload, improve customer handling,
                and create stronger online conversion opportunities.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="services" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionIntro
            eyebrow="Services"
            title="Integrated AI Systems. Modern Websites. Smarter Online Growth."
            text="Built to look right, handle more, and move businesses forward online."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <div className="group h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(34,211,238,0.09)]">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">{service.label}</span>
                    </div>
                    <h3
                      className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white"
                      style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-white/60">{service.copy}</p>
                    <div className="mt-8">{service.preview}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="systems" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionIntro
                eyebrow="System Experience"
                title="Designed To Look Advanced. Built To Actually Do The Work."
                text="From the first click to the first enquiry, every layer should feel smarter, sharper, and easier to trust."
                align="left"
              />

              <div className="mt-10 space-y-4">
                {stack.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3
                            className="text-lg font-medium text-white"
                            style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
                          >
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <SystemsPanel />
            </motion.div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionIntro
            eyebrow="Value"
            title="Built To Help Businesses Look Better, Respond Faster, And Convert More."
            text="No clutter. No outdated presence. Just modern systems that move the business forward."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {results.map((result, index) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-7 text-center text-sm font-medium leading-6 text-white/85 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]"
              >
                {result}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="text-center">
            <h2
              className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
              style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
            >
              Transformation Example
            </h2>
            <p className="mt-4 text-lg text-cyan-300/90">Out with the old. In with the new.</p>
            <p className="mt-4 max-w-2xl mx-auto text-white/60 sm:text-lg">
              A concept redesign showing how stronger structure, clearer messaging, and a more premium visual presence
              can reposition a construction business online.
            </p>
          </div>

          <div className="mt-16">
            <BeforeAfterBoard />
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionIntro
                eyebrow="Contact"
                title="Ready To Build Something That Actually Looks And Feels Current?"
                text="Tell us what you need and start the conversation properly."
                align="left"
              />

              <div className="mt-10 space-y-4 text-sm text-white/60">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  12tensystems@gmail.com
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                  <Bot className="h-4 w-4 text-cyan-300" />
                  Built to position businesses properly online with smarter systems
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(34,211,238,0.06)] lg:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <FieldLabel icon={User} label="Name">
                  <input
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30"
                  />
                </FieldLabel>
                <FieldLabel icon={Phone} label="Phone">
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Phone number"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30"
                  />
                </FieldLabel>
              </div>

              <div className="mt-4">
                <FieldLabel icon={Mail} label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Email address"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30"
                  />
                </FieldLabel>
              </div>

              <div className="mt-4">
                <FieldLabel icon={MessageSquare} label="What do you need help with?">
                  <textarea
                    value={form.needs}
                    onChange={(e) => setForm((prev) => ({ ...prev, needs: e.target.value }))}
                    placeholder="Tell us what you are looking to build"
                    className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30"
                  />
                </FieldLabel>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailtoLink}
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-cyan-400 px-6 text-sm font-medium text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.22)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]"
                >
                  Send Enquiry
                </a>
                <a
                  href="mailto:12tensystems@gmail.com?subject=Book%20a%20Call%20-%2012TenSystems"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-sm text-white transition duration-300 hover:border-cyan-400/20 hover:bg-white/10"
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>12TenSystems</div>
          <div>© 2026 All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: 'center' | 'left';
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col ${alignment}`}>
      <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">{eyebrow}</div>
      <h2
        className="mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
        style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">{text}</p>
    </div>
  );
}

function FieldLabel({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-3 flex items-center gap-2 text-sm text-white/75">
        <Icon className="h-4 w-4 text-cyan-300" />
        {label}
      </div>
      {children}
    </label>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/12 blur-[120px]" />
      <div className="absolute right-[-8%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[30%] h-[22rem] w-[22rem] rounded-full bg-cyan-400/8 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:56px_56px]" />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />
      <div className="relative rounded-[36px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] backdrop-blur-xl">
        <div className="rounded-[28px] border border-white/10 bg-[#07101f] p-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">12TenSystems</div>
              <div
                className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white"
                style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
              >
                System Preview
              </div>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Live Interface</div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/55">AI Customer Assistant</div>
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="ml-auto w-[82%] rounded-2xl rounded-br-sm border border-cyan-400/20 bg-cyan-400/12 px-4 py-3 text-sm text-cyan-50/90">
                  Need help choosing the right system for your business?
                </div>
                <div className="w-[88%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/75">
                  I can help with AI chat systems, websites, or automated review flows.
                </div>
                <div className="ml-auto w-[76%] rounded-2xl rounded-br-sm border border-cyan-400/20 bg-cyan-400/12 px-4 py-3 text-sm text-cyan-50/90">
                  Let’s build something more current.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                <div className="text-sm text-white/55">Website Layer</div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-[#050b16] p-3">
                  <div className="h-2 w-20 rounded-full bg-cyan-300/70" />
                  <div className="mt-3 h-24 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.02))]" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-lg bg-white/6" />
                    <div className="h-10 rounded-lg bg-white/6" />
                    <div className="h-10 rounded-lg bg-white/6" />
                  </div>
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                <div className="text-sm text-white/55">Automation Status</div>
                <div className="mt-4 space-y-3">
                  {[
                    ['Lead Capture', 'Active'],
                    ['AI Routing', 'Online'],
                    ['Review Flow', 'Running'],
                  ].map(([name, status]) => (
                    <div key={name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm">
                      <span className="text-white/70">{name}</span>
                      <span className="text-cyan-300">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniChatPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#08101d] p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">Chat Preview</div>
      <div className="mt-4 space-y-2">
        <div className="ml-auto w-[78%] rounded-2xl rounded-br-sm bg-cyan-400/15 px-3 py-2 text-xs text-cyan-50/90">
          Need help with your order?
        </div>
        <div className="w-[84%] rounded-2xl rounded-bl-sm bg-white/6 px-3 py-2 text-xs text-white/70">
          I can help with products, support, and customer questions instantly.
        </div>
      </div>
    </div>
  );
}

function MiniWebsitePreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#08101d] p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">Site Preview</div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="h-2 w-16 rounded-full bg-cyan-300/70" />
        <div className="mt-3 h-16 rounded-xl bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.02))]" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-8 rounded-lg bg-white/6" />
          <div className="h-8 rounded-lg bg-white/6" />
        </div>
      </div>
    </div>
  );
}

function MiniReviewPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#08101d] p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">Review Flow</div>
      <div className="mt-4 space-y-2">
        <div className="rounded-2xl bg-white/6 px-3 py-2 text-xs text-white/70">Customer feedback captured</div>
        <div className="rounded-2xl bg-cyan-400/15 px-3 py-2 text-xs text-cyan-50/90">
          Positive response routed into review request
        </div>
      </div>
    </div>
  );
}

function SystemsPanel() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_50px_rgba(34,211,238,0.06)]">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-[#07101d] p-5">
          <div className="text-sm text-white/50">Lead Capture</div>
          <div
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
          >
            Always On
          </div>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm text-cyan-50/90">
              Enquiries collected cleanly
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white/65">
              Visitors routed into better actions
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#07101d] p-5">
          <div className="text-sm text-white/50">Response Layer</div>
          <div
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
          >
            AI Driven
          </div>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white/65">
              Handles customer questions faster
            </div>
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm text-cyan-50/90">
              Feels smarter from first interaction
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-[24px] border border-white/10 bg-[#07101d] p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-white/50">System Architecture</div>
            <div
              className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white"
              style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
            >
              Built To Support Growth
            </div>
          </div>
          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            Scalable
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {['Website', 'AI Assistant', 'Automation'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm text-white/70">
              <div className="mb-3 flex justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeforeAfterBoard() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative rounded-[36px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_70px_rgba(34,211,238,0.07)] backdrop-blur-xl">
        <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_30%)]" />

        <div className="relative grid gap-8 lg:grid-cols-2">
          <WebsiteBoardCard
            label="Before"
            title="The old site"
            image={BEFORE_IMAGE}
            accent="neutral"
          />
          <WebsiteBoardCard
            label="After"
            title="The redesigned direction"
            image={AFTER_IMAGE}
            accent="cyan"
          />
        </div>

        <div className="relative mt-8 grid gap-6 rounded-[28px] border border-white/10 bg-[#07101d]/70 p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p
              className="text-3xl font-semibold tracking-[-0.04em] text-white"
              style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
            >
              AWL Construction Concept Redesign
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/58">
              From a dated, text-heavy site to a more structured, premium digital presence with clearer hierarchy,
              stronger project presentation, and a more intentional visual direction.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">Before</div>
              <div className="mt-2 text-sm leading-6 text-white/72">
                Text-heavy, dated, less structured, weaker first impression.
              </div>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/85">After</div>
              <div className="mt-2 text-sm leading-6 text-white/82">
                Cleaner hierarchy, stronger hero, more premium visual direction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsiteBoardCard({
  label,
  title,
  image,
  accent,
}: {
  label: string;
  title: string;
  image: string;
  accent: 'neutral' | 'cyan';
}) {
  const outerBorder =
    accent === 'cyan'
      ? 'border-cyan-400/20 shadow-[0_0_55px_rgba(34,211,238,0.08)]'
      : 'border-white/10';

  const labelClasses =
    accent === 'cyan'
      ? 'border-cyan-400/20 bg-cyan-400/12 text-cyan-200'
      : 'border-white/10 bg-black/35 text-white/85';

  return (
    <div className={`group rounded-[30px] border bg-[#06101d] p-4 transition duration-300 hover:-translate-y-1 ${outerBorder}`}>
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#09111e]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-white/45">
            Design Board
          </div>
        </div>

        <div className="relative h-[560px] overflow-hidden bg-[#d7d4ca]">
          <img
            src={image}
            alt={title}
            className="w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(6,16,29,0.55),transparent_28%)]" />

          <div className={`absolute left-5 top-5 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] backdrop-blur-md ${labelClasses}`}>
            {label}
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <div className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/55 backdrop-blur-md">
              Homepage Direction
            </div>
            <p
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
              style={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
