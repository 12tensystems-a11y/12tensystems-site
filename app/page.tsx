'use client';
 
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Calendar,
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
  const [form, setForm] = useState({ name: '', phone: '', email: '', needs: '' });
  const [reviewTab, setReviewTab] = useState<'trades' | 'cafe'>('trades');
 
  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`New 12TenSystems enquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nWhat they need help with:\n${form.needs}`
    );
    return `mailto:hello@12tensystems.com?subject=${subject}&body=${body}`;
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
    { icon: MessagesSquare, title: 'Customer Handling', text: 'Instant responses, better first impressions, less missed demand.' },
    { icon: Workflow, title: 'Business Automation', text: 'Smart workflows that move leads, support, and tasks automatically.' },
    { icon: ShieldCheck, title: 'Structured Systems', text: 'Built to feel modern, look credible, and actually support growth.' },
  ];
 
  const caseStudies = [
    {
      tag: 'AI ASSISTANT',
      client: 'Norton Barrie',
      result: 'Customer queries handled 24/7 — without the team lifting a finger',
      desc: 'Built a fully custom AI assistant embedded into their website, trained on their products, policies, and team handoff process. Handles the entire customer journey from first question to resolution.',
      pills: ['Customer enquiries', 'FAQ handling', 'Product help', 'Order tracking', 'Refund support', 'Team handoff'],
      visual: 'chat',
    },
    {
      tag: 'WEBSITE REDESIGN',
      client: 'AWL Construction',
      result: 'Dated site transformed into a premium, trust-building presence',
      desc: 'Took an outdated, text-heavy website and rebuilt it from the ground up — stronger visual hierarchy, cleaner project showcase, and a more premium direction that matches the quality of their actual work.',
      pills: ['Full redesign', 'Stronger brand positioning', 'Conversion structure'],
      visual: 'beforeafter',
    },
    {
      tag: 'BRAND + WEBSITE BUILD',
      client: 'McDonald Insulation',
      result: 'Zero to fully operational online presence, built entirely from scratch',
      desc: 'Started with nothing — no website, no brand identity, no digital footprint. Built their entire online presence from the ground up, giving them a professional platform to win new business and compete properly in their market.',
      pills: ['Brand identity', 'Website from scratch', 'Market positioning'],
      visual: 'brand',
    },
  ];
 
  return (
    <div className="min-h-screen overflow-hidden bg-[#03060d] text-white">
      <BackgroundGlow />
 
      {/* NAV */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#03060d]/78 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#03060d]/62">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <div className="relative flex items-baseline gap-1.5">
              <span className="text-[1.2rem] font-semibold tracking-[0.16em] text-cyan-300 transition duration-300 group-hover:text-cyan-200" style={{ fontFamily: 'Space Grotesk, sans-serif', textShadow: '0 0 18px rgba(34,211,238,0.35)' }}>12</span>
              <span className="text-[1.05rem] font-medium tracking-[0.22em] text-white/95 transition duration-300 group-hover:text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>TENSYSTEMS</span>
            </div>
          </a>
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 md:flex">
            {[['Work', '#casestudies'], ['Services', '#services'], ['Systems', '#systems'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition duration-200 hover:bg-cyan-400/10 hover:text-cyan-300">{label}</a>
            ))}
          </nav>
          <a href="#contact" className="inline-flex h-11 items-center rounded-full bg-cyan-400 px-5 text-sm font-medium text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">Book a Call</a>
        </div>
      </header>
 
      <main id="top" className="pt-24">
 
        {/* ── HERO ── */}
        <section className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Currently taking on new clients
            </motion.div>
 
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              We Build AI Systems{' '}
              <span className="text-cyan-300">So You Can Focus</span>{' '}
              On What Actually Grows Your Business.
            </motion.h1>
 
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Custom AI assistants, automated workflows, and conversion-focused websites — built for UK businesses ready to stop leaving money on the table.
            </motion.p>
 
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#casestudies" className="inline-flex h-14 items-center justify-center rounded-2xl bg-cyan-400 px-7 text-base font-medium text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]">
                See Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 text-base text-white transition duration-300 hover:border-cyan-400/20 hover:bg-white/10">
                Book a Free Call
              </a>
            </motion.div>
 
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-12 flex gap-10 border-t border-white/8 pt-10">
              {[['£2M+', 'Revenue brands supported'], ['3', 'Live systems deployed'], ['24/7', 'AI handling for clients']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{num}</div>
                  <div className="mt-1 text-xs text-white/35 tracking-wide">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
 
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative z-10">
            <HeroVisual />
          </motion.div>
 
          <a href="#services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-white/45 lg:flex">
            Scroll to explore <ChevronDown className="h-4 w-4" />
          </a>
        </section>
 
        {/* ── PROVEN POSITIONING BANNER ── */}
        <section className="relative mx-auto max-w-7xl px-6 pb-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_35px_rgba(34,211,238,0.06)] backdrop-blur-xl lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%)]" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Proven Positioning</p>
              <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Systems Already Supporting <span className="text-cyan-300">£2M+ Revenue Brands</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Built and deployed customer-facing AI systems designed to reduce workload, improve customer handling, and create stronger online conversion opportunities.
              </p>
            </div>
          </motion.div>
        </section>
 
        {/* ── SERVICES ── */}
        <section id="services" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionIntro eyebrow="What We Build" title="Three Systems. One Agency." text="Everything we build is designed to reduce your workload and increase what you earn." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: index * 0.08 }}>
                  <div className="group h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(34,211,238,0.09)]">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"><Icon className="h-5 w-5" /></div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">{service.label}</span>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/60">{service.copy}</p>
                    <div className="mt-8">{service.preview}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
 
        {/* ── PAIN POINTS ── */}
        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionIntro eyebrow="Sound Familiar?" title="The Problems Costing Your Business Money Right Now." text="Most business owners don't realise how much they're losing to slow responses, missed enquiries, and a weak online presence — until they fix it." />
 
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                industry: 'Trades & Construction',
                headline: '"People visit my website and just... leave."',
                body: 'No way to get a quick quote. No one to answer their question at 9pm. They move on to someone who does. That job was yours to lose.',
                fix: 'An AI that qualifies leads, gives rough quotes, and books jobs into your calendar — automatically.',
              },
              {
                industry: 'E-commerce & Retail',
                headline: '"My team spends half the day answering the same questions."',
                body: "Where's my order? What's your returns policy? Do you have this in stock? Hours lost every week to questions your website should already be answering.",
                fix: 'An AI trained on your products and policies that handles it all — so your team does the work only they can do.',
              },
              {
                industry: 'Local Services',
                headline: '"We don\'t really have an online presence."',
                body: "Your competitors show up on Google. They look professional. They have reviews. You have a Facebook page you haven't posted on in six months.",
                fix: 'A proper website, built from scratch, that positions you as the obvious choice in your area.',
              },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                  <div className="text-xs uppercase tracking-[0.1em] text-white/30 mb-4">{item.industry}</div>
                  <h3 className="text-lg font-semibold text-white/85 leading-snug mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.headline}</h3>
                  <p className="text-sm leading-7 text-white/50 mb-6">{item.body}</p>
                  <div className="border-t border-white/8 pt-5">
                    <div className="text-xs text-cyan-300 mb-1 uppercase tracking-widest">The fix</div>
                    <p className="text-sm leading-6 text-cyan-50/70">{item.fix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
 
        {/* ── SCENARIO: QUOTE + BOOKING ── */}
        <section className="relative mx-auto max-w-7xl px-6 py-12 pb-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">See It In Action</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              A bathroom fitter. A £3,600 job. <span className="text-cyan-300">Zero phone calls.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/55 leading-7">
              This is what happens when a trades business runs a 12TenSystems AI — from first message to confirmed appointment, without the owner touching a thing.
            </p>
          </motion.div>
 
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_0_50px_rgba(34,211,238,0.06)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/8 px-6 py-4">
              <div>
                <div className="text-xs uppercase tracking-[0.1em] text-white/30 mb-1">Live system demo — trades</div>
                <div className="text-base font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI Quote + Booking System</div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span className="text-xs text-cyan-300 tracking-wider">LIVE</span>
              </div>
            </div>
 
            {/* Body: chat + booking panel */}
            <div className="grid lg:grid-cols-2">
              {/* Chat */}
              <div className="border-b border-white/8 p-6 lg:border-b-0 lg:border-r">
                <div className="space-y-4">
                  <ChatMsg who="SARAH" type="user" text="Hi, I'm looking to get my bathroom fully renovated — new tiles, shower, vanity unit. How much would something like that cost?" />
                  <ChatMsg who="AI ASSISTANT" type="ai" text="Hi Sarah! A full bathroom renovation like that typically runs between £3,200 and £4,500 depending on fixtures and the size of the space. Based on what you've described, you're likely looking at around £3,400–£3,900. Would you like someone to come and give you an accurate quote?" />
                  <ChatMsg who="SARAH" type="user" text="Yes please, that sounds about right for my budget." />
                  <ChatMsg who="AI ASSISTANT" type="ai" text="Perfect. I've pulled up the team's available slots this week — pick whichever works best and I'll get it booked in straight away." />
                  <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-300/70">
                    Google Calendar synced — showing live availability.
                  </div>
                </div>
              </div>
 
              {/* Booking panel */}
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.1em] text-white/30 mb-5">Booking confirmed</div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Customer details</div>
                    {[['Name', 'Sarah Bee'], ['Phone', '07700 900 412'], ['Address', '14 Maple Close, Leeds'], ['Job type', 'Full bathroom renovation'], ['Est. quote', '£3,400 – £3,900']].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-1.5 text-sm border-b border-white/5 last:border-0">
                        <span className="text-white/40">{k}</span>
                        <span className={k === 'Est. quote' ? 'text-cyan-300 font-medium' : 'text-white/75'}>{v}</span>
                      </div>
                    ))}
                  </div>
 
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Available slots</div>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { day: 'Mon', time: '9am', state: 'taken' },
                        { day: 'Mon', time: '2pm', state: 'taken' },
                        { day: 'Tue', time: '10am', state: 'free' },
                        { day: 'Tue', time: '2pm', state: 'booked' },
                        { day: 'Wed', time: '9am', state: 'free' },
                        { day: 'Wed', time: '1pm', state: 'taken' },
                        { day: 'Thu', time: '11am', state: 'free' },
                        { day: 'Fri', time: '10am', state: 'taken' },
                      ].map((slot, i) => (
                        <div key={i} className={`rounded-xl p-2 text-center text-[10px] border ${
                          slot.state === 'booked' ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-300' :
                          slot.state === 'taken' ? 'bg-white/2 border-white/5 text-white/20' :
                          'bg-white/[0.04] border-white/10 text-white/50'
                        }`}>
                          <div className="font-medium">{slot.day}</div>
                          <div>{slot.time}</div>
                          {slot.state === 'booked' && <div className="mt-1 text-[8px]">✓</div>}
                        </div>
                      ))}
                    </div>
                  </div>
 
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-cyan-300" />
                      <span className="text-xs text-cyan-300 uppercase tracking-wider">Appointment confirmed</span>
                    </div>
                    <p className="text-sm text-white/60 leading-6">Tuesday, 2:00pm — survey visit booked for Sarah Bee. Full details, address, and estimated quote sent to the team automatically.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
 
        {/* ── CASE STUDIES ── */}
        <section id="casestudies" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionIntro eyebrow="Real Work" title="Three Clients. Three Results." text="Not concepts. Not mockups. Systems and sites that are live right now." />
 
          <div className="mt-12 space-y-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.client} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-cyan-400/20">
                  <div className="grid lg:grid-cols-[260px_1fr]">
                    {/* Visual panel */}
                    <div className="border-b border-white/8 bg-white/[0.02] flex items-center justify-center p-8 lg:border-b-0 lg:border-r">
                      {cs.visual === 'chat' && (
                        <div className="w-full space-y-3">
                          <div className="text-[10px] uppercase tracking-widest text-cyan-300 mb-4">AI Assistant — Live</div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/60">Where's my order? I placed it 3 days ago.</div>
                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2.5 text-xs text-cyan-50/85">Let me pull that up for you — can I grab your order number?</div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/60">Sure it's #NB-4821</div>
                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2.5 text-xs text-cyan-50/85">Got it — your order is out for delivery today. You'll get a tracking link shortly.</div>
                        </div>
                      )}
                      {cs.visual === 'beforeafter' && (
                        <div className="w-full">
                          <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Before / After</div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-white/8 bg-red-500/5 p-3">
                              <div className="text-[9px] text-red-400/60 mb-2 uppercase tracking-wider">Before</div>
                              <div className="space-y-1.5">
                                {[70, 50, 62, 38, 55].map((w, j) => <div key={j} className="h-1.5 rounded-full bg-white/10" style={{ width: `${w}%` }} />)}
                              </div>
                            </div>
                            <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-3">
                              <div className="text-[9px] text-cyan-400/60 mb-2 uppercase tracking-wider">After</div>
                              <div className="space-y-1.5">
                                {[70, 55, 65, 44, 58].map((w, j) => <div key={j} className="h-1.5 rounded-full bg-cyan-400/35" style={{ width: `${w}%` }} />)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {cs.visual === 'brand' && (
                        <div className="w-full text-center">
                          <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Brand + Website</div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-white/5 bg-white/2 p-4 flex flex-col items-center justify-center gap-2">
                              <div className="text-[9px] text-white/20 uppercase tracking-wider">Before</div>
                              <div className="text-[10px] text-white/20 leading-5 text-center">No website.<br />No brand.<br />No presence.</div>
                            </div>
                            <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-3">
                              <div className="text-[9px] text-cyan-400/60 mb-2 uppercase tracking-wider">After</div>
                              <div className="space-y-1.5">
                                {[68, 52, 60, 42, 56].map((w, j) => <div key={j} className="h-1.5 rounded-full bg-cyan-400/30" style={{ width: `${w}%` }} />)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
 
                    {/* Text panel */}
                    <div className="p-7 lg:p-8">
                      <div className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/40 mb-4">{cs.tag}</div>
                      <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{cs.client}</h3>
                      <div className="text-sm text-cyan-300/80 mb-4 font-medium">↑ {cs.result}</div>
                      <p className="text-sm leading-7 text-white/50 mb-5">{cs.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.pills.map(p => (
                          <span key={p} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/45">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
 
        {/* ── REVIEW AUTOMATION ── */}
        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionIntro
            eyebrow="Review Automation"
            title="Your Best Customers Aren't Leaving Reviews. They Would — If You Just Asked."
            text="Most businesses finish a job and never follow up. Our automated system does it for you — every time, without fail, while you focus on the next job."
          />
 
          {/* Tabs */}
          <div className="mt-10 flex gap-3">
            {(['trades', 'cafe'] as const).map((tab) => (
              <button key={tab} onClick={() => setReviewTab(tab)} className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 border ${
                reviewTab === tab
                  ? 'bg-cyan-400 text-slate-950 border-cyan-400'
                  : 'border-white/10 bg-white/5 text-white/55 hover:border-cyan-400/20 hover:text-white/80'
              }`}>
                {tab === 'trades' ? 'Trades & Construction' : 'Cafes & Hospitality'}
              </button>
            ))}
          </div>
 
          <motion.div key={reviewTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
            {/* Flow header */}
            <div className="flex items-center justify-between border-b border-white/8 px-6 py-4">
              <div>
                <div className="text-base font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {reviewTab === 'trades' ? 'Post-job review flow — trades' : 'WiFi-triggered review flow — hospitality'}
                </div>
                <div className="text-xs text-white/35 mt-1">
                  {reviewTab === 'trades' ? 'Triggered automatically when a job is marked complete' : 'Triggered when a customer connects to your guest WiFi'}
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span className="text-xs text-cyan-300 tracking-wider">AUTOMATED</span>
              </div>
            </div>
 
            <div className="p-6 lg:p-8">
              <div className="space-y-0">
                {(reviewTab === 'trades' ? tradesSteps : cafeSteps).map((step, i) => (
                  <FlowStep key={i} step={step} isLast={i === (reviewTab === 'trades' ? tradesSteps : cafeSteps).length - 1} />
                ))}
              </div>
 
              {/* Result strip */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {(reviewTab === 'trades' ? [
                  ['100%', 'Of jobs followed up — every time, automatically'],
                  ['0 mins', 'Of your time spent chasing reviews'],
                  ['3–5×', 'More reviews than asking manually'],
                ] : [
                  ['Daily', 'New review requests sent without lifting a finger'],
                  ['0', 'Bad reviews reaching Google publicly'],
                  ['+List', 'Growing customer base for future promotions'],
                ]).map(([num, label]) => (
                  <div key={num} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{num}</div>
                    <div className="mt-2 text-xs text-white/35 leading-5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
 
        {/* ── SYSTEMS ── */}
        <section id="systems" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionIntro eyebrow="System Experience" title="Designed To Look Advanced. Built To Actually Do The Work." text="From the first click to the first enquiry, every layer should feel smarter, sharper, and easier to trust." align="left" />
              <div className="mt-10 space-y-4">
                {stack.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"><Icon className="h-5 w-5" /></div>
                          <div>
                            <h3 className="text-lg font-medium text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="relative">
              <SystemsPanel />
            </motion.div>
          </div>
        </section>
 
        {/* ── BEFORE / AFTER ── */}
        <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Transformation Example</h2>
            <p className="mt-4 text-lg text-cyan-300/90">Out with the old. In with the new.</p>
            <p className="mt-4 max-w-2xl mx-auto text-white/60 sm:text-lg">A concept redesign showing how stronger structure, clearer messaging, and a more premium visual presence can reposition a construction business online.</p>
          </div>
          <div className="mt-16"><BeforeAfterBoard /></div>
        </section>
 
        {/* ── CONTACT ── */}
        <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionIntro eyebrow="Contact" title="Ready To Build Something That Actually Looks And Feels Current?" text="Tell us what you need and start the conversation properly." align="left" />
              <div className="mt-10 space-y-4 text-sm text-white/60">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  hello@12tensystems.com
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                  <Bot className="h-4 w-4 text-cyan-300" />
                  Built to position businesses properly online with smarter systems
                </div>
              </div>
            </div>
 
            <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(34,211,238,0.06)] lg:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <FieldLabel icon={User} label="Name">
                  <input value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Your name" className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30" />
                </FieldLabel>
                <FieldLabel icon={Phone} label="Phone">
                  <input value={form.phone} onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="Phone number" className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30" />
                </FieldLabel>
              </div>
              <div className="mt-4">
                <FieldLabel icon={Mail} label="Email">
                  <input type="email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} placeholder="Email address" className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30" />
                </FieldLabel>
              </div>
              <div className="mt-4">
                <FieldLabel icon={MessageSquare} label="What do you need help with?">
                  <textarea value={form.needs} onChange={(e) => setForm(p => ({ ...p, needs: e.target.value }))} placeholder="Tell us what you are looking to build" className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/30" />
                </FieldLabel>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={mailtoLink} className="inline-flex h-12 items-center justify-center rounded-2xl bg-cyan-400 px-6 text-sm font-medium text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.22)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]">Send Enquiry</a>
                <a href="mailto:hello@12tensystems.com?subject=Book%20a%20Call%20-%2012TenSystems" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-sm text-white transition duration-300 hover:border-cyan-400/20 hover:bg-white/10">Book a Call</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
 
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div style={{ fontFamily: 'Space Grotesk, sans-serif' }}>12TenSystems</div>
          <div>© 2026 All rights reserved.</div>
          <div>hello@12tensystems.com</div>
        </div>
      </footer>
    </div>
  );
}
 
// ── Flow step data ─────────────────────────────────────────────────────────────
 
const tradesSteps = [
  { num: '1', type: 'trigger', tag: 'Trigger', name: 'Job marked complete', desc: 'When you mark a job done in your system or calendar, the flow fires automatically. Customer name and number are already stored from when the job was booked.' },
  { num: '2', type: 'action', tag: 'Day 1 — Automated message', name: 'Review request sent', desc: 'A personalised message goes out — "Hi Dave, hope you\'re happy with the bathroom — would love to hear how it went." Feels human, not spammy.' },
  { num: '3', type: 'fork', tag: 'Customer responds', name: 'Sentiment detected — routed automatically', desc: null },
  { num: '4', type: 'followup', tag: 'No reply — Follow-up sequence', name: 'Customisable chase flow', desc: 'If there\'s no response the system follows up automatically. You choose how many times and how often — then it stops. No spam.' },
];
 
const cafeSteps = [
  { num: '1', type: 'trigger', tag: 'Trigger', name: 'Customer connects to WiFi', desc: 'Customer joins your guest network — their name and number captured at login. Added to your contact list automatically with their visit date logged.' },
  { num: '2', type: 'action', tag: '24 hours later — Automated message', name: 'Experience check sent', desc: 'Next day they get a friendly message — "Hi Emma, thanks for visiting us yesterday — how was your experience?" Timely, personal, not pushy.' },
  { num: '3', type: 'fork', tag: 'Response routing', name: 'Positive or negative — handled differently', desc: null },
  { num: '4', type: 'followup', tag: 'Bonus — Promotional use', name: 'Your customer list becomes an asset', desc: 'Every WiFi visitor is now in your contacts. Send promotions, event announcements, or loyalty offers directly to people who already like you.' },
];
 
function FlowStep({ step, isLast }: { step: typeof tradesSteps[0]; isLast: boolean }) {
  return (
    <div className="relative grid grid-cols-[32px_1fr] gap-4">
      {!isLast && <div className="absolute left-4 top-8 bottom-0 w-px bg-white/8" />}
      <div className={`relative z-10 h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5 ${
        step.type === 'trigger' ? 'bg-cyan-400/15 border border-cyan-400/30 text-cyan-300' :
        step.type === 'followup' ? 'bg-amber-400/10 border border-amber-400/20 text-amber-300' :
        'bg-white/8 border border-white/15 text-white/50'
      }`}>{step.num}</div>
      <div className="pb-6">
        <div className="text-[10px] uppercase tracking-wider text-white/30 mb-1">{step.tag}</div>
        <div className="text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.name}</div>
        {step.desc && <p className="text-xs text-white/40 leading-6">{step.desc}</p>}
        {step.type === 'fork' && (
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-green-400/20 bg-green-400/[0.06] p-4">
              <div className="text-[9px] uppercase tracking-wider text-green-400/60 mb-2 font-semibold">Positive response</div>
              <p className="text-xs text-green-100/60 leading-5">Sent straight to your Google review page — one tap and they're leaving a 5-star review while the experience is fresh.</p>
            </div>
            <div className="rounded-xl border border-red-400/15 bg-red-400/[0.05] p-4">
              <div className="text-[9px] uppercase tracking-wider text-red-400/55 mb-2 font-semibold">Negative response</div>
              <p className="text-xs text-red-100/55 leading-5">Redirected privately to you or your team — keeps bad feedback off Google and gives you a chance to make it right.</p>
            </div>
          </div>
        )}
        {step.type === 'followup' && (
          <div className="mt-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.05] p-4 space-y-2">
            {[['Day 1', 'First message sent'], ['Day 3', 'One gentle reminder'], ['Day 7', 'Final message — then stop']].map(([day, label]) => (
              <div key={day} className="flex items-center gap-3 text-xs">
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-amber-300 text-[10px] whitespace-nowrap">{day}</span>
                <span className="text-white/40">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
 
// ── Shared components ──────────────────────────────────────────────────────────
 
function ChatMsg({ who, type, text }: { who: string; type: 'user' | 'ai'; text: string }) {
  return (
    <div className={`flex flex-col ${type === 'user' ? 'items-end' : 'items-start'}`}>
      <div className="text-[9px] uppercase tracking-wider text-white/25 mb-1.5">{who}</div>
      <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
        type === 'user' ? 'rounded-br-sm border border-white/10 bg-white/[0.06] text-white/70' :
        'rounded-bl-sm border border-cyan-400/20 bg-cyan-400/10 text-cyan-50/85'
      }`}>{text}</div>
    </div>
  );
}
 
function SectionIntro({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: string; text: string; align?: 'center' | 'left' }) {
  const cls = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  return (
    <div className={`flex flex-col ${cls}`}>
      <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">{eyebrow}</div>
      <h2 className="mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">{text}</p>
    </div>
  );
}
 
function FieldLabel({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-3 flex items-center gap-2 text-sm text-white/75"><Icon className="h-4 w-4 text-cyan-300" />{label}</div>
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
              <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>System Preview</div>
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
                <div className="ml-auto w-[82%] rounded-2xl rounded-br-sm border border-cyan-400/20 bg-cyan-400/12 px-4 py-3 text-sm text-cyan-50/90">Need help choosing the right system?</div>
                <div className="w-[88%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/75">I can help with AI chat, websites, or automated review flows.</div>
                <div className="ml-auto w-[76%] rounded-2xl rounded-br-sm border border-cyan-400/20 bg-cyan-400/12 px-4 py-3 text-sm text-cyan-50/90">Let's build something more current.</div>
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
                  {[['Lead Capture', 'Active'], ['AI Routing', 'Online'], ['Review Flow', 'Running']].map(([name, status]) => (
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
        <div className="ml-auto w-[78%] rounded-2xl rounded-br-sm bg-cyan-400/15 px-3 py-2 text-xs text-cyan-50/90">Need help with your order?</div>
        <div className="w-[84%] rounded-2xl rounded-bl-sm bg-white/6 px-3 py-2 text-xs text-white/70">I can help with products, support, and customer questions instantly.</div>
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
        <div className="rounded-2xl bg-cyan-400/15 px-3 py-2 text-xs text-cyan-50/90">Positive response routed into review request</div>
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
          <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Always On</div>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm text-cyan-50/90">Enquiries collected cleanly</div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white/65">Visitors routed into better actions</div>
          </div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-[#07101d] p-5">
          <div className="text-sm text-white/50">Response Layer</div>
          <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI Driven</div>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white/65">Handles customer questions faster</div>
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm text-cyan-50/90">Feels smarter from first interaction</div>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-[24px] border border-white/10 bg-[#07101d] p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-white/50">System Architecture</div>
            <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Built To Support Growth</div>
          </div>
          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Scalable</div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {['Website', 'AI Assistant', 'Automation'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm text-white/70">
              <div className="mb-3 flex justify-center"><div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" /></div>
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
          <WebsiteBoardCard label="Before" title="The old site" image={BEFORE_IMAGE} accent="neutral" />
          <WebsiteBoardCard label="After" title="The redesigned direction" image={AFTER_IMAGE} accent="cyan" />
        </div>
        <div className="relative mt-8 grid gap-6 rounded-[28px] border border-white/10 bg-[#07101d]/70 p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AWL Construction Concept Redesign</p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/58">From a dated, text-heavy site to a more structured, premium digital presence with clearer hierarchy, stronger project presentation, and a more intentional visual direction.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">Before</div>
              <div className="mt-2 text-sm leading-6 text-white/72">Text-heavy, dated, less structured, weaker first impression.</div>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/85">After</div>
              <div className="mt-2 text-sm leading-6 text-white/82">Cleaner hierarchy, stronger hero, more premium visual direction.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
function WebsiteBoardCard({ label, title, image, accent }: { label: string; title: string; image: string; accent: 'neutral' | 'cyan' }) {
  const outerBorder = accent === 'cyan' ? 'border-cyan-400/20 shadow-[0_0_55px_rgba(34,211,238,0.08)]' : 'border-white/10';
  const labelClasses = accent === 'cyan' ? 'border-cyan-400/20 bg-cyan-400/12 text-cyan-200' : 'border-white/10 bg-black/35 text-white/85';
  return (
    <div className={`group rounded-[30px] border bg-[#06101d] p-6 transition duration-300 hover:-translate-y-1 ${outerBorder}`}>
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#09111e] shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-white/45">Design Board</div>
        </div>
        <div className="relative overflow-hidden rounded-b-[24px] bg-[#0b1220] p-3">
          <div className="overflow-hidden rounded-[18px] border border-white/10 bg-black">
            <img src={image} alt={title} className="block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01]" />
          </div>
          <div className="pointer-events-none absolute inset-x-3 bottom-3 h-40 rounded-b-[18px] bg-[linear-gradient(to_top,rgba(6,16,29,0.78),rgba(6,16,29,0.18)_42%,transparent_100%)]" />
          <div className={`absolute left-8 top-8 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] backdrop-blur-md ${labelClasses}`}>{label}</div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/55 backdrop-blur-md">Homepage Direction</div>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
