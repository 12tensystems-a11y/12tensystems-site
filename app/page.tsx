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
 
// Font variables applied via inline style throughout
const D = "'Bricolage Grotesque', sans-serif";   // display / headings
const B = "'DM Sans', sans-serif";               // body
 
const BEFORE_IMAGE = 'https://raw.githubusercontent.com/12tensystems-a11y/12tensystems-site/main/before.png';
const AFTER_IMAGE  = 'https://raw.githubusercontent.com/12tensystems-a11y/12tensystems-site/main/after.png';
 
// ─── Fade-up helper ──────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65, delay }}
    className={className}
  >
    {children}
  </motion.div>
);
 
// ─── Main ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', needs: '' });
  const [reviewTab, setReviewTab] = useState<'trades' | 'cafe'>('trades');
 
  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`New 12TenSystems enquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nWhat they need help with:\n${form.needs}`);
    return `mailto:hello@12tensystems.com?subject=${subject}&body=${body}`;
  }, [form]);
 
  return (
    <div className="min-h-screen overflow-hidden bg-[#030810] text-white" style={{ fontFamily: B }}>
      <BackgroundGlow />
      <Nav />
 
      <main id="top" className="pt-24">
 
        {/* ── 1. HERO ── */}
        <section className="relative mx-auto grid min-h-[94vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/[0.25] bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300" style={{ fontFamily: B }}>
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              Currently taking on new clients
            </motion.div>
 
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }}
              className="text-5xl font-extrabold leading-[1.0] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.5rem]"
              style={{ fontFamily: D }}>
              We Build AI Systems{' '}
              <span className="text-cyan-300">So You Can Focus</span>{' '}
              On What Actually Grows Your Business.
            </motion.h1>
 
            <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg leading-8 text-white/[0.55]" style={{ fontFamily: B }}>
              Custom AI assistants, automated workflows, and conversion-focused websites — built for UK businesses ready to stop leaving money on the table.
            </motion.p>
 
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.22 }}
              className="mt-9 flex flex-wrap gap-3">
              <a href="#casestudies"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#0a0f1a] shadow-[0_0_24px_rgba(34,211,238,0.3)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.5)]"
                style={{ fontFamily: B }}>
                See Our Work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/[0.15] bg-white/[0.05] px-7 py-3.5 text-base text-white transition duration-300 hover:border-cyan-400/[0.25] hover:bg-white/[0.10]"
                style={{ fontFamily: B }}>
                Book a Free Call
              </a>
            </motion.div>
 
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, delay: 0.35 }}
              className="mt-12 flex flex-wrap gap-10 border-t border-white/[0.08] pt-10">
              {[['£2M+', 'Revenue brands supported'], ['3', 'Live systems deployed'], ['24/7', 'AI handling active']].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: D }}>{n}</div>
                  <div className="mt-0.5 text-xs text-white/[0.35] tracking-wide" style={{ fontFamily: B }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
 
          <motion.div initial={{ opacity: 0, scale: 0.97, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.18 }} className="relative z-10">
            <HeroVisual />
          </motion.div>
 
          <a href="#services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-white/[0.35] lg:flex" style={{ fontFamily: B }}>
            Scroll to explore <ChevronDown className="h-4 w-4" />
          </a>
        </section>
 
        {/* ── 2. SOCIAL PROOF BANNER ── */}
        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] px-8 py-8 lg:px-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.1),transparent_50%)]" />
              <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300" style={{ fontFamily: B }}>Proven Positioning</p>
                  <h2 className="mt-2 text-2xl font-bold text-white lg:text-3xl" style={{ fontFamily: D }}>
                    Systems Already Supporting <span className="text-cyan-300">£2M+ Revenue Brands</span>
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-7 text-white/[0.50]" style={{ fontFamily: B }}>
                  Built and deployed customer-facing AI systems designed to reduce workload, improve customer handling, and create stronger online conversion opportunities.
                </p>
              </div>
            </div>
          </FadeUp>
        </section>
 
        {/* ── 3. PAIN POINTS ── */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300" style={{ fontFamily: B }}>Sound Familiar?</span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: D }}>
                The Problems Costing Your<br />Business Money Right Now.
              </h2>
              <p className="mt-4 text-base text-white/[0.45] max-w-xl mx-auto" style={{ fontFamily: B }}>
                Most business owners don't realise how much they're losing — until they fix it.
              </p>
            </div>
          </FadeUp>
 
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                industry: 'Trades & Construction',
                headline: '"People visit my website and just… leave."',
                body: 'No way to get a quick quote. No one to answer at 9pm. They move on to a competitor. That job was yours to lose.',
                fix: 'An AI that qualifies leads, gives rough quotes, and books jobs into your calendar — automatically.',
              },
              {
                industry: 'E-commerce & Retail',
                headline: '"My team spends half the day answering the same questions."',
                body: "Where's my order? What's your returns policy? Hours lost every week to questions your website should already be answering.",
                fix: 'An AI trained on your products and policies — so your team does the work only they can do.',
              },
              {
                industry: 'Local Services',
                headline: '"We don\'t really have an online presence."',
                body: "Your competitors show up on Google. They look professional. They have reviews. You have a Facebook page you haven't posted on in six months.",
                fix: 'A proper website built from scratch that positions you as the obvious choice in your area.',
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/[0.20] hover:bg-white/[0.05]">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/[0.28]" style={{ fontFamily: B }}>{item.industry}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-white/[0.85]" style={{ fontFamily: D }}>{item.headline}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.45] flex-1" style={{ fontFamily: B }}>{item.body}</p>
                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-cyan-400 mb-1.5" style={{ fontFamily: B }}>The fix</p>
                    <p className="text-sm leading-6 text-cyan-50/[0.65]" style={{ fontFamily: B }}>{item.fix}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
 
        {/* ── 4. SERVICES — large cards with embedded UI ── */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300" style={{ fontFamily: B }}>What We Build</span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: D }}>Three Systems. One Agency.</h2>
              <p className="mt-4 text-base text-white/[0.45] max-w-lg mx-auto" style={{ fontFamily: B }}>Everything we build is designed to reduce your workload and increase what you earn.</p>
            </div>
          </FadeUp>
 
          {/* Large featured card — AI assistants */}
          <FadeUp delay={0.05}>
            <div className="mb-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition duration-300 hover:border-cyan-400/[0.20]">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/[0.20] bg-cyan-400/10 text-cyan-300"><Bot className="h-5 w-5" /></div>
                    <span className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs text-white/[0.45]" style={{ fontFamily: B }}>24/7 Handling</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-[-0.03em] text-white" style={{ fontFamily: D }}>AI Customer Assistants</h3>
                  <p className="mt-4 text-base leading-7 text-white/[0.50]" style={{ fontFamily: B }}>
                    Integrated AI systems built for your website, support flow, and customer journey. Trained specifically on your business — handles enquiries, FAQs, order tracking, refunds, and routes complex issues to your team.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Enquiry handling', 'FAQ automation', 'Order tracking', 'Team handoff', 'Refund support'].map(p => (
                      <span key={p} className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs text-white/[0.40]" style={{ fontFamily: B }}>{p}</span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-medium text-cyan-300" style={{ fontFamily: B }}>As seen with Norton Barrie →</p>
                </div>
                <div className="border-t border-white/[0.08] bg-[#061018] p-6 lg:border-l lg:border-t-0">
                  <p className="text-[10px] uppercase tracking-widest text-cyan-300 mb-4" style={{ fontFamily: B }}>Live chat preview</p>
                  <div className="space-y-3">
                    {[
                      { who: 'Customer', msg: "Hi, where's my order? I placed it 3 days ago.", type: 'user' },
                      { who: 'AI Assistant', msg: "Hi! Let me look that up — can I grab your order number?", type: 'ai' },
                      { who: 'Customer', msg: "Sure, it's #NB-4821", type: 'user' },
                      { who: 'AI Assistant', msg: "Got it — your order is out for delivery today. You'll receive a tracking link within the hour. Anything else I can help with?", type: 'ai' },
                    ].map((m, i) => (
                      <div key={i} className={`flex flex-col ${m.type === 'user' ? 'items-end' : 'items-start'}`}>
                        <span className="mb-1 text-[9px] uppercase tracking-wider text-white/[0.22]" style={{ fontFamily: B }}>{m.who}</span>
                        <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.type === 'user' ? 'rounded-br-sm bg-white/[0.07] text-white/[0.65] border border-white/[0.08]' : 'rounded-bl-sm bg-cyan-400/[0.12] text-cyan-50/[0.85] border border-cyan-400/[0.20]'}`} style={{ fontFamily: B }}>{m.msg}</div>
                      </div>
                    ))}
                    <div className="rounded-xl border border-cyan-400/[0.12] bg-cyan-400/5 px-4 py-2.5 text-xs text-cyan-300/[0.60]" style={{ fontFamily: B }}>
                      Handing off to support team — case logged automatically.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
 
          {/* Two smaller cards */}
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Website Dev */}
            <FadeUp delay={0.08}>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition duration-300 hover:border-cyan-400/[0.20]">
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/[0.20] bg-cyan-400/10 text-cyan-300"><Globe className="h-5 w-5" /></div>
                    <span className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs text-white/[0.45]" style={{ fontFamily: B }}>Built To Convert</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-white" style={{ fontFamily: D }}>Website Development</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.50]" style={{ fontFamily: B }}>Modern, conversion-focused websites built to position your business properly online. From full redesigns to brand-new builds from scratch.</p>
                  <p className="mt-4 text-sm font-medium text-cyan-300" style={{ fontFamily: B }}>AWL Construction + McDonald Insulation →</p>
                </div>
                {/* Mini before/after inside card */}
                <div className="border-t border-white/[0.08] bg-[#061018] p-5">
                  <p className="text-[9px] uppercase tracking-widest text-white/[0.25] mb-3" style={{ fontFamily: B }}>Before / After</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-red-400/[0.12] bg-red-400/[0.05] p-3">
                      <p className="text-[8px] text-red-400/[0.55] mb-2 uppercase tracking-wider" style={{ fontFamily: B }}>Before</p>
                      <div className="space-y-1.5">{[72, 52, 62, 40, 56].map((w, j) => <div key={j} className="h-1.5 rounded-full bg-white/[0.10]" style={{ width: `${w}%` }} />)}</div>
                    </div>
                    <div className="rounded-xl border border-cyan-400/[0.15] bg-cyan-400/5 p-3">
                      <p className="text-[8px] text-cyan-400/[0.55] mb-2 uppercase tracking-wider" style={{ fontFamily: B }}>After</p>
                      <div className="space-y-1.5">{[72, 58, 66, 48, 62].map((w, j) => <div key={j} className="h-1.5 rounded-full bg-cyan-400/35" style={{ width: `${w}%` }} />)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
 
            {/* Review Automation */}
            <FadeUp delay={0.13}>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition duration-300 hover:border-cyan-400/[0.20]">
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/[0.20] bg-cyan-400/10 text-cyan-300"><Star className="h-5 w-5" /></div>
                    <span className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs text-white/[0.45]" style={{ fontFamily: B }}>Reputation Growth</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-white" style={{ fontFamily: D }}>Automated Google Reviews</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.50]" style={{ fontFamily: B }}>Review systems that turn happy customers into stronger trust. Triggered post-job or post-visit — routes positive responses to Google, negative ones to you privately.</p>
                </div>
                <div className="border-t border-white/[0.08] bg-[#061018] p-5 space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-white/[0.25] mb-3" style={{ fontFamily: B }}>Review flow</p>
                  <div className="rounded-xl bg-white/[0.05] border border-white/[0.08] px-3 py-2.5 text-xs text-white/[0.55]" style={{ fontFamily: B }}>Job marked complete — message sent automatically</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-green-400/[0.20] bg-green-400/[0.08] px-3 py-2.5 text-xs text-green-300/[0.75]" style={{ fontFamily: B }}>Positive → Google review link</div>
                    <div className="rounded-xl border border-red-400/[0.15] bg-red-400/[0.06] px-3 py-2.5 text-xs text-red-300/[0.65]" style={{ fontFamily: B }}>Negative → Private to you</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
 
        {/* ── 5. LIVE SCENARIO ── */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300 mb-5" style={{ fontFamily: B }}>See It In Action</span>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl" style={{ fontFamily: D }}>
              A bathroom fitter. A £3,600 job. <span className="text-cyan-300">Zero phone calls.</span>
            </h2>
            <p className="mt-4 text-base text-white/[0.45] max-w-2xl" style={{ fontFamily: B }}>
              From first message to confirmed appointment — without the owner touching a thing.
            </p>
          </FadeUp>
 
          <FadeUp delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-6 py-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/[0.28]" style={{ fontFamily: B }}>Live system demo — trades</p>
                  <p className="text-base font-semibold text-white mt-0.5" style={{ fontFamily: D }}>AI Quote + Booking System</p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-cyan-400/[0.20] bg-cyan-400/[0.08] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  <span className="text-xs text-cyan-300 tracking-wider" style={{ fontFamily: B }}>LIVE</span>
                </div>
              </div>
              <div className="grid lg:grid-cols-2">
                {/* Chat */}
                <div className="border-b border-white/[0.08] p-6 lg:border-b-0 lg:border-r">
                  <div className="space-y-4">
                    {[
                      { who: 'Sarah', type: 'user', msg: "Hi, I'm looking to get my bathroom fully renovated — new tiles, shower, vanity unit. How much would something like that cost?" },
                      { who: 'AI Assistant', type: 'ai', msg: "Hi Sarah! A full bathroom renovation like that typically runs between £3,200 and £4,500 depending on fixtures and space. Based on what you've described, you're likely looking at £3,400–£3,900. Would you like someone to come and give you an accurate quote?" },
                      { who: 'Sarah', type: 'user', msg: "Yes please, that sounds about right for my budget." },
                      { who: 'AI Assistant', type: 'ai', msg: "Perfect. I've pulled up the team's available slots — pick whichever works best and I'll get it booked straight away." },
                    ].map((m, i) => (
                      <div key={i} className={`flex flex-col ${m.type === 'user' ? 'items-end' : 'items-start'}`}>
                        <span className="mb-1 text-[9px] uppercase tracking-wider text-white/[0.22]" style={{ fontFamily: B }}>{m.who}</span>
                        <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.type === 'user' ? 'rounded-br-sm bg-white/[0.07] text-white/[0.65] border border-white/[0.08]' : 'rounded-bl-sm bg-cyan-400/[0.12] text-cyan-50/[0.85] border border-cyan-400/[0.20]'}`} style={{ fontFamily: B }}>{m.msg}</div>
                      </div>
                    ))}
                    <div className="rounded-xl border border-cyan-400/[0.12] bg-cyan-400/5 px-4 py-2.5 text-xs text-cyan-300/[0.60]" style={{ fontFamily: B }}>Google Calendar synced — showing live availability.</div>
                  </div>
                </div>
                {/* Booking panel */}
                <div className="bg-[#050e18] p-6">
                  <p className="text-[10px] uppercase tracking-widest text-white/[0.28] mb-5" style={{ fontFamily: B }}>Booking confirmed</p>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-4">
                      <p className="text-[9px] text-white/[0.32] uppercase tracking-wider mb-3" style={{ fontFamily: B }}>Customer details</p>
                      {[['Name','Sarah Bee'],['Phone','07700 900 412'],['Address','14 Maple Close, Leeds'],['Job type','Full bathroom renovation'],['Est. quote','£3,400 – £3,900']].map(([k,v]) => (
                        <div key={k} className="flex justify-between py-1.5 text-sm border-b border-white/[0.05] last:border-0">
                          <span className="text-white/[0.35]" style={{ fontFamily: B }}>{k}</span>
                          <span className={k === 'Est. quote' ? 'text-cyan-300 font-medium' : 'text-white/[0.70]'} style={{ fontFamily: B }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-4">
                      <p className="text-[9px] text-white/[0.32] uppercase tracking-wider mb-3" style={{ fontFamily: B }}>Available slots</p>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[{d:'Mon',t:'9am',s:'taken'},{d:'Mon',t:'2pm',s:'taken'},{d:'Tue',t:'10am',s:'free'},{d:'Tue',t:'2pm',s:'booked'},{d:'Wed',t:'9am',s:'free'},{d:'Wed',t:'1pm',s:'taken'},{d:'Thu',t:'11am',s:'free'},{d:'Fri',t:'10am',s:'taken'}].map((sl,i) => (
                          <div key={i} className={`rounded-lg p-2 text-center text-[10px] border ${sl.s==='booked'?'bg-cyan-400/[0.12] border-cyan-400/[0.30] text-cyan-300':sl.s==='taken'?'bg-white/[0.02] border-white/[0.05] text-white/[0.18]':'bg-white/[0.04] border-white/[0.08] text-white/[0.45]'}`} style={{ fontFamily: B }}>
                            <div className="font-medium">{sl.d}</div>
                            <div>{sl.t}</div>
                            {sl.s==='booked'&&<div className="mt-0.5 text-[8px]">✓</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-cyan-400/[0.20] bg-cyan-400/[0.07] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-cyan-300" />
                        <span className="text-[10px] text-cyan-300 uppercase tracking-wider" style={{ fontFamily: B }}>Appointment confirmed</span>
                      </div>
                      <p className="text-sm text-white/[0.55] leading-6" style={{ fontFamily: B }}>Tuesday, 2:00pm — survey visit booked for Sarah Bee. Full details and estimated quote sent to the team automatically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>
 
        {/* ── 6. CASE STUDIES ── */}
        <section id="casestudies" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300" style={{ fontFamily: B }}>Real Work</span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: D }}>Three Clients. Three Results.</h2>
              <p className="mt-4 text-base text-white/[0.45]" style={{ fontFamily: B }}>Not concepts. Not mockups. Systems and sites that are live right now.</p>
            </div>
          </FadeUp>
 
          <div className="space-y-5">
            {[
              {
                tag: 'AI ASSISTANT', client: 'Norton Barrie',
                result: 'Customer queries handled 24/7 — without the team lifting a finger',
                desc: 'Built a fully custom AI assistant embedded into their website, trained on their products, policies, and team handoff process. Handles the entire customer journey from first question to resolution.',
                pills: ['Customer enquiries','FAQ handling','Product help','Order tracking','Refund support','Team handoff'],
                visual: 'chat',
              },
              {
                tag: 'WEBSITE REDESIGN', client: 'AWL Construction',
                result: 'Dated site transformed into a premium, trust-building presence',
                desc: 'Took an outdated, text-heavy website and rebuilt from the ground up — stronger visual hierarchy, cleaner project showcase, and a more premium direction that matches the quality of their actual work.',
                pills: ['Full redesign','Stronger brand positioning','Conversion structure'],
                visual: 'beforeafter',
              },
              {
                tag: 'BRAND + WEBSITE BUILD', client: 'McDonald Insulation',
                result: 'Zero to fully operational online presence, built entirely from scratch',
                desc: 'Started with nothing — no website, no brand identity, no digital footprint. Built their entire online presence from the ground up, giving them a professional platform to win new business.',
                pills: ['Brand identity','Website from scratch','Market positioning'],
                visual: 'brand',
              },
            ].map((cs, i) => (
              <FadeUp key={cs.client} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition duration-300 hover:border-cyan-400/[0.18]">
                  <div className="grid lg:grid-cols-[240px_1fr]">
                    <div className="flex items-center justify-center border-b border-white/[0.08] bg-[#050e18] p-7 lg:border-b-0 lg:border-r">
                      {cs.visual === 'chat' && (
                        <div className="w-full space-y-2.5">
                          <p className="text-[9px] uppercase tracking-widest text-cyan-300 mb-3" style={{ fontFamily: B }}>AI Assistant — Live</p>
                          <div className="rounded-xl bg-white/[0.05] border border-white/[0.08] px-3 py-2.5 text-xs text-white/[0.55]" style={{ fontFamily: B }}>Where's my order?</div>
                          <div className="rounded-xl bg-cyan-400/[0.12] border border-cyan-400/[0.20] px-3 py-2.5 text-xs text-cyan-50/[0.80]" style={{ fontFamily: B }}>Let me pull that up — can I grab your order number?</div>
                          <div className="rounded-xl bg-white/[0.05] border border-white/[0.08] px-3 py-2.5 text-xs text-white/[0.55]" style={{ fontFamily: B }}>Sure it's #NB-4821</div>
                          <div className="rounded-xl bg-cyan-400/[0.12] border border-cyan-400/[0.20] px-3 py-2.5 text-xs text-cyan-50/[0.80]" style={{ fontFamily: B }}>Got it — out for delivery today. Tracking link incoming.</div>
                        </div>
                      )}
                      {cs.visual === 'beforeafter' && (
                        <div className="w-full">
                          <p className="text-[9px] uppercase tracking-widest text-white/[0.25] mb-3" style={{ fontFamily: B }}>Before / After</p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-xl border border-red-400/[0.12] bg-red-400/[0.05] p-3">
                              <p className="text-[8px] text-red-400/[0.50] mb-2 uppercase" style={{ fontFamily: B }}>Before</p>
                              {[68,50,60,38,54].map((w,j)=><div key={j} className="mb-1.5 h-1.5 rounded-full bg-white/[0.10]" style={{width:`${w}%`}}/>)}
                            </div>
                            <div className="rounded-xl border border-cyan-400/[0.15] bg-cyan-400/5 p-3">
                              <p className="text-[8px] text-cyan-400/[0.55] mb-2 uppercase" style={{ fontFamily: B }}>After</p>
                              {[68,56,64,46,60].map((w,j)=><div key={j} className="mb-1.5 h-1.5 rounded-full bg-cyan-400/35" style={{width:`${w}%`}}/>)}
                            </div>
                          </div>
                        </div>
                      )}
                      {cs.visual === 'brand' && (
                        <div className="w-full">
                          <p className="text-[9px] uppercase tracking-widest text-white/[0.25] mb-3" style={{ fontFamily: B }}>Brand + Website</p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 flex flex-col items-center justify-center gap-2">
                              <p className="text-[8px] text-white/[0.18] uppercase" style={{ fontFamily: B }}>Before</p>
                              <p className="text-[9px] text-white/[0.18] leading-4 text-center" style={{ fontFamily: B }}>No website.<br/>No brand.<br/>No presence.</p>
                            </div>
                            <div className="rounded-xl border border-cyan-400/[0.15] bg-cyan-400/5 p-3">
                              <p className="text-[8px] text-cyan-400/[0.55] mb-2 uppercase" style={{ fontFamily: B }}>After</p>
                              {[64,50,58,40,54].map((w,j)=><div key={j} className="mb-1.5 h-1.5 rounded-full bg-cyan-400/30" style={{width:`${w}%`}}/>)}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-7 lg:p-8">
                      <span className="inline-block rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-wider text-white/[0.35] mb-4" style={{ fontFamily: B }}>{cs.tag}</span>
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: D }}>{cs.client}</h3>
                      <p className="text-sm text-cyan-300/[0.75] font-medium mb-4" style={{ fontFamily: B }}>↑ {cs.result}</p>
                      <p className="text-sm leading-7 text-white/[0.45] mb-5" style={{ fontFamily: B }}>{cs.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.pills.map(p=>(
                          <span key={p} className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs text-white/[0.38]" style={{ fontFamily: B }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
 
        {/* ── 7. REVIEW AUTOMATION ── */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300" style={{ fontFamily: B }}>Review Automation</span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: D }}>
                Your Best Customers Aren't Leaving Reviews.<br />They Would — If You Just Asked.
              </h2>
              <p className="mt-4 text-base text-white/[0.45] max-w-xl mx-auto" style={{ fontFamily: B }}>Most businesses finish a job and never follow up. Our system does it automatically — every time.</p>
            </div>
          </FadeUp>
 
          <FadeUp delay={0.08}>
            <div className="flex gap-3 mb-8">
              {(['trades','cafe'] as const).map(tab => (
                <button key={tab} onClick={() => setReviewTab(tab)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 border ${reviewTab===tab ? 'bg-cyan-400 text-[#0a0f1a] border-cyan-400' : 'border-white/[0.10] bg-white/[0.05] text-white/[0.50] hover:border-cyan-400/[0.20] hover:text-white/[0.75]'}`}
                  style={{ fontFamily: B }}>
                  {tab === 'trades' ? 'Trades & Construction' : 'Cafes & Hospitality'}
                </button>
              ))}
            </div>
          </FadeUp>
 
          <motion.div key={reviewTab} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38 }}
            className="overflow-hidden rounded-2xl border border-white/[0.08]">
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-6 py-4">
              <div>
                <p className="text-base font-semibold text-white" style={{ fontFamily: D }}>
                  {reviewTab === 'trades' ? 'Post-job review flow — trades' : 'WiFi-triggered review flow — hospitality'}
                </p>
                <p className="text-xs text-white/[0.32] mt-0.5" style={{ fontFamily: B }}>
                  {reviewTab === 'trades' ? 'Triggered automatically when a job is marked complete' : 'Triggered when a customer connects to your guest WiFi'}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/[0.20] bg-cyan-400/[0.08] px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span className="text-xs text-cyan-300 tracking-wider" style={{ fontFamily: B }}>AUTOMATED</span>
              </div>
            </div>
 
            <div className="p-6 lg:p-8">
              <ReviewFlow tab={reviewTab} />
              <div className="mt-8 grid grid-cols-3 gap-4">
                {(reviewTab === 'trades' ? [
                  ['100%','Of jobs followed up automatically'],
                  ['0 mins','Your time spent on reviews'],
                  ['3–5×','More reviews than asking manually'],
                ] : [
                  ['Daily','New requests sent without effort'],
                  ['0','Bad reviews reaching Google'],
                  ['+List','Growing customer base for promos'],
                ]).map(([n,l]) => (
                  <div key={n} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center">
                    <div className="text-xl font-bold text-white" style={{ fontFamily: D }}>{n}</div>
                    <div className="mt-1.5 text-xs text-white/[0.32] leading-5" style={{ fontFamily: B }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
 
        {/* ── 8. TESTIMONIALS ── */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300" style={{ fontFamily: B }}>What Clients Say</span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl" style={{ fontFamily: D }}>Real Words. Real Businesses.</h2>
            </div>
          </FadeUp>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              { initials: 'NB', name: 'Blake — Norton Barrie', role: 'AI Customer Assistant Client', quote: "The AI assistant handles questions we used to spend hours on every week. Customers get instant answers on orders, returns, everything — and when it's something complex, it hands straight over to us. It just works." },
              { initials: 'MI', name: 'McDonald Insulation', role: 'Brand + Website Build Client', quote: "We went from having no online presence at all to a website that actually represents what we do. Clients mention it when they call us now — that never used to happen." },
            ].map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/[0.18]">
                  <div className="flex mb-3 gap-1">{[...Array(5)].map((_,j)=><Star key={j} className="h-4 w-4 fill-cyan-400 text-cyan-400" />)}</div>
                  <p className="text-base leading-8 text-white/[0.58] italic mb-6" style={{ fontFamily: B }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/[0.15] text-sm font-semibold text-cyan-300" style={{ fontFamily: D }}>{t.initials}</div>
                    <div>
                      <p className="text-sm font-medium text-white/[0.75]" style={{ fontFamily: B }}>{t.name}</p>
                      <p className="text-xs text-white/[0.32]" style={{ fontFamily: B }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
 
        {/* ── 9. TRANSFORMATION / BEFORE-AFTER ── */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: D }}>Transformation Example</h2>
              <p className="mt-3 text-lg text-cyan-300/[0.80]" style={{ fontFamily: B }}>Out with the old. In with the new.</p>
              <p className="mt-3 max-w-2xl mx-auto text-base text-white/[0.45]" style={{ fontFamily: B }}>
                A concept redesign showing how stronger structure, clearer messaging, and a more premium visual presence can reposition a construction business online.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <BeforeAfterBoard />
          </FadeUp>
        </section>
 
        {/* ── 10. HOW IT WORKS ── */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300" style={{ fontFamily: B }}>How It Works</span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl" style={{ fontFamily: D }}>From Call To Live In Days.</h2>
              <p className="mt-4 text-base text-white/[0.45]" style={{ fontFamily: B }}>No lengthy back-and-forth. We move fast.</p>
            </div>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', name: 'Free call', desc: 'We learn your business, your problems, your goals.' },
              { num: '02', name: 'We scope it', desc: "You get a clear proposal — no jargon, no surprises." },
              { num: '03', name: 'We build it', desc: 'Fast turnaround. You\'re involved but not overwhelmed.' },
              { num: '04', name: 'It goes live', desc: 'Your system is running. We stay available for support.' },
            ].map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/[0.18]">
                  <p className="text-xs font-semibold text-white/20 mb-4" style={{ fontFamily: D }}>{s.num}</p>
                  <p className="text-base font-semibold text-white/[0.80] mb-2" style={{ fontFamily: D }}>{s.name}</p>
                  <p className="text-sm text-white/[0.38] leading-6" style={{ fontFamily: B }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
 
        {/* ── 11. CTA BANNER ── */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/[0.20] bg-cyan-400/[0.06] px-8 py-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: D }}>Your business could be running<br />this system by next week.</h2>
                <p className="mt-4 text-base text-white/[0.45]" style={{ fontFamily: B }}>Book a free 20-minute call. We'll show you exactly what this looks like for your business.</p>
                <a href="#contact"
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-[#0a0f1a] shadow-[0_0_28px_rgba(34,211,238,0.35)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.55)]"
                  style={{ fontFamily: B }}>
                  Book a free call <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeUp>
        </section>
 
        {/* ── 12. CONTACT ── */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <FadeUp>
              <div>
                <span className="inline-flex rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300" style={{ fontFamily: B }}>Contact</span>
                <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white" style={{ fontFamily: D }}>Ready To Build Something That Actually Looks And Feels Current?</h2>
                <p className="mt-4 text-base text-white/[0.45]" style={{ fontFamily: B }}>Tell us what you need and start the conversation properly.</p>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm text-white/[0.50] transition hover:border-cyan-400/[0.18]" style={{ fontFamily: B }}>
                    <Mail className="h-4 w-4 text-cyan-300 flex-shrink-0" />hello@12tensystems.com
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm text-white/[0.50] transition hover:border-cyan-400/[0.18]" style={{ fontFamily: B }}>
                    <Bot className="h-4 w-4 text-cyan-300 flex-shrink-0" />Built to position businesses properly online with smarter systems
                  </div>
                </div>
              </div>
            </FadeUp>
 
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 lg:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field icon={User} label="Name"><input value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} placeholder="Your name" className="h-12 w-full rounded-xl border border-white/[0.10] bg-white/[0.05] px-4 text-white placeholder:text-white/[0.25] outline-none transition focus:border-cyan-400/[0.35]" style={{ fontFamily: B }} /></Field>
                  <Field icon={Phone} label="Phone"><input value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} placeholder="Phone number" className="h-12 w-full rounded-xl border border-white/[0.10] bg-white/[0.05] px-4 text-white placeholder:text-white/[0.25] outline-none transition focus:border-cyan-400/[0.35]" style={{ fontFamily: B }} /></Field>
                </div>
                <div className="mt-4">
                  <Field icon={Mail} label="Email"><input type="email" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} placeholder="Email address" className="h-12 w-full rounded-xl border border-white/[0.10] bg-white/[0.05] px-4 text-white placeholder:text-white/[0.25] outline-none transition focus:border-cyan-400/[0.35]" style={{ fontFamily: B }} /></Field>
                </div>
                <div className="mt-4">
                  <Field icon={MessageSquare} label="What do you need help with?"><textarea value={form.needs} onChange={e=>setForm(p=>({...p,needs:e.target.value}))} placeholder="Tell us what you are looking to build" className="min-h-[130px] w-full rounded-xl border border-white/[0.10] bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/[0.25] outline-none transition focus:border-cyan-400/[0.35]" style={{ fontFamily: B }} /></Field>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a href={mailtoLink} className="inline-flex h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 text-sm font-semibold text-[#0a0f1a] shadow-[0_0_20px_rgba(34,211,238,0.22)] transition hover:bg-cyan-300" style={{ fontFamily: B }}>Send Enquiry</a>
                  <a href="mailto:hello@12tensystems.com?subject=Book%20a%20Call%20-%2012TenSystems" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.05] px-6 text-sm text-white transition hover:border-cyan-400/[0.20] hover:bg-white/[0.10]" style={{ fontFamily: B }}>Book a Call</a>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
 
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-7 text-sm text-white/[0.30] sm:flex-row sm:items-center sm:justify-between lg:px-8" style={{ fontFamily: B }}>
          <span className="font-semibold text-white/[0.45]" style={{ fontFamily: D }}>12TenSystems</span>
          <span>© 2026 All rights reserved.</span>
          <span>hello@12tensystems.com</span>
        </div>
      </footer>
    </div>
  );
}
 
// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const B = "'DM Sans', sans-serif";
  const D = "'Bricolage Grotesque', sans-serif";
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#030810]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="text-[1.15rem] font-bold tracking-[0.14em] text-cyan-300" style={{ fontFamily: D, textShadow: '0 0 16px rgba(34,211,238,0.4)' }}>12</span>
          <span className="text-[1rem] font-semibold tracking-[0.2em] text-white/[0.92]" style={{ fontFamily: D }}>TENSYSTEMS</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.10] bg-white/[0.04] px-2 py-2 md:flex">
          {[['Work','#casestudies'],['Services','#services'],['Contact','#contact']].map(([l,h])=>(
            <a key={l} href={h} className="rounded-full px-4 py-2 text-sm text-white/[0.55] transition hover:bg-cyan-400/10 hover:text-cyan-300" style={{ fontFamily: B }}>{l}</a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex h-10 items-center rounded-full bg-cyan-400 px-5 text-sm font-semibold text-[#0a0f1a] shadow-[0_0_20px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300" style={{ fontFamily: B }}>Book a Call</a>
      </div>
    </header>
  );
}
 
// ─── Hero visual ─────────────────────────────────────────────────────────────
function HeroVisual() {
  const B = "'DM Sans', sans-serif";
  const D = "'Bricolage Grotesque', sans-serif";
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/[0.08] blur-3xl" />
      <div className="relative rounded-3xl border border-white/[0.10] bg-white/[0.04] p-5 shadow-[0_0_60px_rgba(34,211,238,0.07)] backdrop-blur-xl">
        <div className="rounded-2xl border border-white/[0.08] bg-[#06101e] p-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300" style={{ fontFamily: B }}>12TenSystems</p>
              <p className="mt-1.5 text-lg font-bold text-white" style={{ fontFamily: D }}>System Preview</p>
            </div>
            <span className="rounded-full border border-cyan-400/[0.20] bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300" style={{ fontFamily: B }}>Live Interface</span>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-white/[0.45]" style={{ fontFamily: B }}>AI Customer Assistant</p>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
              </div>
              <div className="space-y-2.5">
                <div className="ml-auto w-[82%] rounded-2xl rounded-br-sm border border-cyan-400/[0.20] bg-cyan-400/[0.12] px-3 py-2.5 text-xs text-cyan-50/[0.90]" style={{ fontFamily: B }}>Need help choosing the right system?</div>
                <div className="w-[86%] rounded-2xl rounded-bl-sm border border-white/[0.08] bg-white/[0.05] px-3 py-2.5 text-xs text-white/[0.65]" style={{ fontFamily: B }}>I can help with AI chat, websites, or automated review flows.</div>
                <div className="ml-auto w-[74%] rounded-2xl rounded-br-sm border border-cyan-400/[0.20] bg-cyan-400/[0.12] px-3 py-2.5 text-xs text-cyan-50/[0.90]" style={{ fontFamily: B }}>Let's build something more current.</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3">
                <p className="text-xs text-white/[0.45] mb-3" style={{ fontFamily: B }}>Automation Status</p>
                {[['Lead Capture','Active'],['AI Routing','Online'],['Review Flow','Running']].map(([n,s])=>(
                  <div key={n} className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs mb-1.5 last:mb-0">
                    <span className="text-white/60" style={{ fontFamily: B }}>{n}</span>
                    <span className="text-cyan-300" style={{ fontFamily: B }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
// ─── Review flow ─────────────────────────────────────────────────────────────
function ReviewFlow({ tab }: { tab: 'trades' | 'cafe' }) {
  const B = "'DM Sans', sans-serif";
  const D = "'Bricolage Grotesque', sans-serif";
  const steps = tab === 'trades' ? [
    { num:'1', type:'trigger', tag:'Trigger', name:'Job marked complete', desc:"When you mark a job done, the flow fires automatically. Customer name and number already stored from booking." },
    { num:'2', type:'action',  tag:'Day 1 — Automated message', name:'Review request sent', desc:'A personalised message goes out — Hi Dave, hope you\'re happy with the bathroom — would love to hear how it went. Feels human, not spammy.' },
    { num:'3', type:'fork',    tag:'Customer responds', name:'Sentiment detected — routed automatically', desc: null },
    { num:'4', type:'followup',tag:'No reply — Follow-up sequence', name:'Customisable chase flow', desc:'If there\'s no response the system follows up. You choose how many times and how often — then it stops. No spam.' },
  ] : [
    { num:'1', type:'trigger', tag:'Trigger', name:'Customer connects to WiFi', desc:'Customer joins your guest network — name and number captured at login. Added to your contact list automatically with visit date logged.' },
    { num:'2', type:'action',  tag:'24 hours later', name:'Experience check sent', desc:'Hi Emma, thanks for visiting us yesterday — how was your experience? Timely, personal, not pushy.' },
    { num:'3', type:'fork',    tag:'Response routing', name:'Positive or negative — handled differently', desc: null },
    { num:'4', type:'followup',tag:'Bonus — Promotional use', name:'Your customer list becomes an asset', desc:"Every WiFi visitor is now in your contacts. Send promotions, event announcements, or loyalty offers to people who already like you." },
  ];
 
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="relative grid grid-cols-[32px_1fr] gap-4">
          {i < steps.length - 1 && <div className="absolute left-4 top-8 bottom-0 w-px bg-white/[0.07]" />}
          <div className={`relative z-10 mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
            step.type==='trigger'  ? 'border border-cyan-400/[0.30] bg-cyan-400/[0.15] text-cyan-300' :
            step.type==='followup' ? 'border border-amber-400/[0.25] bg-amber-400/[0.10] text-amber-300' :
            'border border-white/[0.15] bg-white/[0.07] text-white/[0.45]'
          }`} style={{ fontFamily: D }}>{step.num}</div>
          <div className="pb-6">
            <p className="text-[9px] uppercase tracking-wider text-white/[0.25] mb-1" style={{ fontFamily: B }}>{step.tag}</p>
            <p className="text-sm font-semibold text-white/[0.80] mb-1.5" style={{ fontFamily: D }}>{step.name}</p>
            {step.desc && <p className="text-xs text-white/[0.38] leading-6" style={{ fontFamily: B }}>{step.desc}</p>}
            {step.type === 'fork' && (
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-green-400/[0.20] bg-green-400/6 p-4">
                  <p className="text-[9px] uppercase tracking-wider text-green-400/60 mb-2 font-semibold" style={{ fontFamily: B }}>Positive response</p>
                  <p className="text-xs text-green-100/[0.58] leading-5" style={{ fontFamily: B }}>Sent straight to your Google review page — one tap and they're leaving a 5-star review while the experience is fresh.</p>
                </div>
                <div className="rounded-xl border border-red-400/[0.15] bg-red-400/[0.05] p-4">
                  <p className="text-[9px] uppercase tracking-wider text-red-400/[0.55] mb-2 font-semibold" style={{ fontFamily: B }}>Negative response</p>
                  <p className="text-xs text-red-100/[0.52] leading-5" style={{ fontFamily: B }}>Redirected privately to you or your team — keeps bad feedback off Google and gives you a chance to make it right.</p>
                </div>
              </div>
            )}
            {step.type === 'followup' && (
              <div className="mt-3 rounded-xl border border-amber-400/[0.15] bg-amber-400/[0.05] p-4 space-y-2">
                {[['Day 1','First message sent'],['Day 3','One gentle reminder'],['Day 7','Final message — then stop']].map(([d,l])=>(
                  <div key={d} className="flex items-center gap-3 text-xs">
                    <span className="rounded-full border border-amber-400/[0.20] bg-amber-400/[0.10] px-2 py-0.5 text-amber-300 text-[10px] whitespace-nowrap" style={{ fontFamily: B }}>{d}</span>
                    <span className="text-white/[0.35]" style={{ fontFamily: B }}>{l}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
 
// ─── Before/After Board ───────────────────────────────────────────────────────
function BeforeAfterBoard() {
  const B = "'DM Sans', sans-serif";
  const D = "'Bricolage Grotesque', sans-serif";
  return (
    <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative grid gap-6 lg:grid-cols-2">
        {[{label:'Before',title:'The old site',image:BEFORE_IMAGE,accent:'neutral'},{label:'After',title:'The redesigned direction',image:AFTER_IMAGE,accent:'cyan'}].map(ba=>(
          <div key={ba.label} className={`group rounded-2xl border p-5 bg-[#05101d] transition hover:-translate-y-1 ${ba.accent==='cyan'?'border-cyan-400/[0.20] shadow-[0_0_40px_rgba(34,211,238,0.07)]':'border-white/[0.08]'}`}>
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#08131f]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                <div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-[#ff5f57]"/><span className="h-3 w-3 rounded-full bg-[#febc2e]"/><span className="h-3 w-3 rounded-full bg-[#28c840]"/></div>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-0.5 text-[10px] uppercase tracking-widest text-white/[0.35]" style={{ fontFamily: B }}>Design Board</span>
              </div>
              <div className="relative p-3">
                <div className="overflow-hidden rounded-lg border border-white/[0.08]"><img src={ba.image} alt={ba.title} className="block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01]" /></div>
                <div className="pointer-events-none absolute inset-x-3 bottom-3 h-32 rounded-b-lg bg-gradient-to-t from-[#05101d]/80 to-transparent" />
                <span className={`absolute left-6 top-6 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-md ${ba.accent==='cyan'?'border-cyan-400/[0.25] bg-cyan-400/[0.15] text-cyan-200':'border-white/[0.10] bg-black/40 text-white/[0.75]'}`} style={{ fontFamily: B }}>{ba.label}</span>
                <div className="absolute bottom-7 left-6">
                  <p className="text-xl font-bold text-white" style={{ fontFamily: D }}>{ba.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-5 grid gap-5 rounded-xl border border-white/[0.08] bg-[#06101d]/80 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xl font-bold text-white" style={{ fontFamily: D }}>AWL Construction Concept Redesign</p>
          <p className="mt-2 text-sm leading-7 text-white/[0.45]" style={{ fontFamily: B }}>From a dated, text-heavy site to a structured, premium digital presence with clearer hierarchy, stronger project presentation, and a more intentional visual direction.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
            <p className="text-[9px] uppercase tracking-wider text-white/[0.32] mb-2" style={{ fontFamily: B }}>Before</p>
            <p className="text-xs text-white/[0.55] leading-5" style={{ fontFamily: B }}>Text-heavy, dated, less structured, weaker first impression.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/[0.20] bg-cyan-400/[0.07] p-4">
            <p className="text-[9px] uppercase tracking-wider text-cyan-300/65 mb-2" style={{ fontFamily: B }}>After</p>
            <p className="text-xs text-white/[0.70] leading-5" style={{ fontFamily: B }}>Cleaner hierarchy, stronger hero, more premium visual direction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
// ─── Shared utils ─────────────────────────────────────────────────────────────
function Field({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  const B = "'DM Sans', sans-serif";
  return (
    <label className="block">
      <div className="mb-2.5 flex items-center gap-2 text-sm text-white/60" style={{ fontFamily: B }}><Icon className="h-4 w-4 text-cyan-300" />{label}</div>
      {children}
    </label>
  );
}
 
function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-12%] top-[-6%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-[-10%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-blue-500/8 blur-[130px]" />
      <div className="absolute bottom-[-8%] left-[28%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/[0.07] blur-[130px]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:60px_60px]" />
    </div>
  );
}
