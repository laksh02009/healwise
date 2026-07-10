import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const heroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuACgXekr2yjN-Nl25ZLF4aZ96GRe8H6fmOQ8hD_1CRsyXC_RSgea7ySfDI9nZA8mbj2NVoUzzRAdb-IM7oBpVwr0T_bIdtQmYrv32wMByk4ICre_bouf6lClK2Dx6M42ONtLyOKsJb1278_y8uf62Jimws9uqX4Epp4VB-yf5xXLtZDyaJRBj9Aw4d_wzumuYV2MjWIxQQ05PztDX00xz1hjbKI5Lc0mS74jF1_4zKiifvZ3z9M6HB2HndmIU9LOXZUdlI2FgCrRwA";
const aboutImg1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuA6tGKZy8p1yk-OpYbaVyJcrSiPNHHDT1OZrZh1qkZULTiqyOogVl5CX6kG6e8YvapXUKo4PMESvykt77yTk2gKyAaedQ9BOlIo_--aMmedy4BoPsQ_xNqnhP8GjZNYypDpy8jpYF_5e5i3AhjAjSKDy7wXsQ0jbqpdEqj1lu6qDEuepDwGHhHIQPuCLnVikZ2KLeSMxQEus_Kg171Www_NlxmvlPIQNyUUJ9XYavHSqX4OE8nJ6nSPax-Y5UcLnULOUc3s_OJ8vFA";
const aboutImg2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBn5cLxlSkpPpeqyKcQoOt7NFoi054_jfAj4jidBZRxYT6VlzKY37MzFp665ppq-UgUwo9wpyy4O39EkXbhJf8TNTDZi74jYZ0bwc9z6-d5yEJMbRXok7UC_ryD1LdO3KI5xV-jAta0EnpNePMoBSDADjVR_2y8lcCI123MIY3ypKvgtNG9hYcRTFYFR4eHFR5Rulay5IpV3ZwL0vTo1DPulUkmUb-vWIlAVHWKGRVumPkZi0Pspl7ykR4Bmmep_TnAKOZOvuqTFQM";
const svc1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCHMWg6oeuqVCPxwBnJEM6rj3r7I9R1-5Inj-0tctTVFy2wrEVJmn4w6mlXGkkRWE2r9_-0Fi6EVCUxdcHw4JboicexaVH9aW8DAGZpeB_UacLWJLTxNBQGn-qE0FlzR87pm0q0WxLxMxtyWVZG-1NYAxlYE9HbShpo4YeUqjY8r9V13GWbenId4nak-95qDLTYQsgbLLjpLAIBGrTHU-hnY25UNCSiHKKJ8rNg8hocDKKiHTB7H_EE-QnUMev21s9P62Lhv3XXlKI";
const svc2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCtlyvzWEp6xv9kmhOsrEnB2WcJHBOYyL1FTFEgGbJVa7LY2Rd2qdwccjQHN3SjYantPTcwMb5bxWdzv5y69sT_EDiEnzV90acVJepp7wJCCAwjXC4k3fLiHTrWpD0Np61JnST3lHWGSihh7IpUBCXrSfeYtkOxEHLs76nYTHs5S5HosdBGilBvCG6MCTTZYkdtIf7T9At8VfYAG31nlUD9LBkq_TfeuZYuiugUcE8pUR5hk4YaIVBoLL5Vx9iaQDJ16-sDBu9dKXg";
const svc3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCzhODz6K98_0jWgabUsQY3hcGC6R3rRKT4ZBVoPyypZbLEp6y2vEAFZQrTpvvlxsyf8abNmQLKqvE_8eDcqxr4o628ipTCUu89bMNMmnWwir4f390nfRANrBwf_An9lRL1BIRi59eeUUHTHYDW9QZsgHtoukRs9WZUEOHhlsHQJ-UBfd_MW1vaYlK8hKZ0SwQZEBAGwTYlqBURdfcIS0BM2k5HlnkC049TTOp1mXldXYq9PM3804jo_D-KZ-m__JXS8GU7B4FG-9U";

const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

function Index() {
  const audience = [
    { icon: "work_history", title: "Working Professionals", desc: "Relief from postural strain, screen fatigue, and repetitive stress for the modern career woman." },
    { icon: "child_care", title: "Busy Mothers", desc: "Managing physical exhaustion and core strength recovery while navigating the demands of motherhood." },
    { icon: "pregnant_woman", title: "Post-Pregnancy", desc: "Specialized rehabilitation for pelvic health, core restoration, and structural alignment after birth." },
    { icon: "auto_awesome", title: "Women 40+", desc: "Supporting bone health, metabolic changes, and hormonal wellness during important transitions." },
    { icon: "airline_seat_legroom_extra", title: "Knee & Joint Pain", desc: "Targeted therapies to restore mobility and reduce inflammation in weight-bearing joints." },
    { icon: "accessibility_new", title: "Back Care", desc: "Comprehensive spinal health programs to alleviate chronic discomfort and improve posture." },
  ];

  const services = [
    { img: svc1, title: "Weight Management", desc: "Science-driven protocols focusing on metabolic health and sustainable body composition.", feature: "Hormonal balance support", tag: "Suitable for: Post-partum, 40+", highlight: false },
    { img: svc2, title: "Pain Relief (TENS)", desc: "Advanced electro-stimulation therapy for chronic nerve and muscle pain relief.", feature: "Non-invasive & Medication-free", tag: "Suitable for: Knee, Back, Sciatica", highlight: true },
    { img: svc3, title: "Mud Pack Therapy", desc: "Detoxifying heat treatments to improve circulation and soothe deep muscle tension.", feature: "Deep tissue relaxation", tag: "Suitable for: Fibromyalgia, Joint stiffness", highlight: false },
  ];

  const steps = ["Consultation", "Evaluation", "Custom Plan", "Active Care", "Progress Map", "Maintenance"];
  const stepDesc = ["Diagnostic assessment and goal setting.", "Clinical review of musculoskeletal health.", "Bespoke therapy scheduling.", "Hands-on therapy sessions.", "Bi-weekly result tracking.", "Long-term wellness guidance."];

  const testimonials = [
    { quote: "The TENS therapy changed my life. I had lived with chronic lower back pain for 4 years after my second child. Now, I'm finally back to yoga.", initials: "AM", name: "Anita M.", meta: "Age 38 | Post-Pregnancy Recovery", accent: "primary" as const },
    { quote: "HealWise's approach to weight loss isn't just about numbers; it's about vitality. I feel stronger and more energetic than I did in my 30s.", initials: "PK", name: "Priya K.", meta: "Age 45 | Weight Management", accent: "secondary" as const, featured: true },
    { quote: "Professional, clinical, yet incredibly warm. The mud pack therapy sessions are my weekly escape from the stress of my corporate role.", initials: "SL", name: "Sarah L.", meta: "Age 52 | Joint Care", accent: "primary" as const },
  ];

  const faqs = [
    { q: "How long does each session typically last?", a: "Initial consultations are 60 minutes. Standard therapy sessions usually range from 45 to 90 minutes depending on your specific treatment plan." },
    { q: "Are the treatments safe during pregnancy?", a: "We offer specialized prenatal-safe protocols. However, some therapies like TENS are restricted during certain stages of pregnancy. Always discuss your status with our therapists during consultation." },
    { q: "Do I need a doctor's referral?", a: "No, a referral is not required to begin your journey at HealWise. Our in-house therapists conduct a full assessment during your first visit." },
  ];

  return (
    <div className="hero-gradient min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-surface-bright/70 border-b border-primary/5">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Icon name="spa" className="text-white text-xl" />
            </span>
            <span className="font-display text-xl font-semibold text-primary">HealWise</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-on-surface-variant">
            <a href="#who" className="hover:text-primary">Who We Help</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#testimonials" className="hover:text-primary">Stories</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </div>
          <a href="#contact" className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
            Book Now
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-medium tracking-wide mb-6">
                Welcome to Clinical Excellence
              </span>
              <h1 className="text-5xl lg:text-6xl text-primary mb-6 leading-[1.05] font-semibold">
                Relief. Recovery.<br />
                <span className="italic font-normal">Confidence.</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Supporting women through personalized pain relief and weight management programs designed for every stage of life. Experience a sanctuary of professional care.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">Book Consultation</a>
                <a href="#services" className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all">Explore Services</a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="glass-card p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img className="w-full h-[500px] object-cover rounded-[20px]" src={heroImg} alt="Professional women's wellness clinic" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                    <Icon name="verified" className="text-secondary" />
                  </div>
                  <p className="text-sm font-medium">5,000+ Successful Recoveries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section id="who" className="py-24 px-6 lg:px-10 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-primary mb-4 font-semibold">Who We Help</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Tailored wellness journeys for the unique physical challenges women face today.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {audience.map((a) => (
                <div key={a.title} className="glass-card p-8 hover:-translate-y-2 transition-all duration-300">
                  <Icon name={a.icon} className="text-4xl text-primary mb-6" />
                  <h3 className="text-xl mb-3 font-semibold">{a.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[24px] overflow-hidden lavender-shadow">
                  <img className="w-full h-64 object-cover" src={aboutImg1} alt="Empathetic clinical consultation" />
                </div>
                <div className="glass-card p-8 text-center" style={{ background: "color-mix(in oklch, var(--secondary-container) 30%, white)" }}>
                  <h4 className="text-4xl font-bold text-primary">15+</h4>
                  <p className="text-sm font-medium text-on-surface-variant mt-1">Years Experience</p>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="glass-card p-8 text-center" style={{ background: "color-mix(in oklch, var(--primary-container) 30%, white)" }}>
                  <h4 className="text-4xl font-bold text-primary">10k+</h4>
                  <p className="text-sm font-medium text-on-surface-variant mt-1">Care Hours</p>
                </div>
                <div className="rounded-[24px] overflow-hidden lavender-shadow">
                  <img className="w-full h-80 object-cover" src={aboutImg2} alt="Modern women's health consultation room" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl text-primary mb-6 font-semibold">Who We Are</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                HealWise was founded on the belief that women's healthcare should be as nuanced as their lives. We provide a bridge between clinical rigor and empathetic care.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                    <Icon name="target" className="text-on-primary-container" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1 font-semibold">Our Mission</h4>
                    <p className="text-on-surface-variant">To empower women through science-backed, non-invasive therapies that restore physical freedom.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <Icon name="visibility" className="text-on-secondary-container" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1 font-semibold">Our Vision</h4>
                    <p className="text-on-surface-variant">A world where every woman has access to personalized pain management and holistic wellness care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6 lg:px-10 bg-surface-container">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl text-primary mb-4 font-semibold">Our Services</h2>
                <p className="text-on-surface-variant">Discover our range of clinical therapies designed for precision recovery and sustained wellness.</p>
              </div>
              <div className="flex gap-2">
                <button aria-label="Previous" className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-white transition-all"><Icon name="chevron_left" /></button>
                <button aria-label="Next" className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-white transition-all"><Icon name="chevron_right" /></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div key={s.title} className={`glass-card flex flex-col h-full overflow-hidden ${s.highlight ? "border-2 border-primary/20" : ""}`}>
                  <div className="h-48 overflow-hidden">
                    <img className="w-full h-full object-cover" src={s.img} alt={s.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl mb-2 font-semibold">{s.title}</h3>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{s.desc}</p>
                    <div className="mt-auto space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="check_circle" className="text-primary !text-base" />
                        <span>{s.feature}</span>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-secondary-container/60 text-xs font-medium w-fit">
                        {s.tag}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HealWise Bento */}
        <section id="why" className="py-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-primary mb-4 font-semibold">Why Choose HealWise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[200px]">
              <div className="md:col-span-8 md:row-span-2 glass-card p-10 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-10 right-10 text-primary opacity-10 pointer-events-none">
                  <Icon name="medical_services" className="!text-9xl" />
                </div>
                <h3 className="text-3xl mb-4 font-semibold">Personalized Consultation</h3>
                <p className="text-on-surface-variant max-w-lg">Every woman's body tells a different story. We start with a 60-minute deep-dive diagnostic session to map your unique physiology before any treatment begins.</p>
              </div>
              {[
                { icon: "diversity_1", title: "Expert Care", desc: "Certified therapists with specializations in female anatomy." },
                { icon: "spa", title: "Non-Invasive", desc: "Purely therapeutic methods with zero downtime." },
                { icon: "science", title: "Modern Tech", desc: "FDA-cleared diagnostic and therapeutic equipment." },
              ].map((f) => (
                <div key={f.title} className="md:col-span-4 glass-card p-8 flex items-center gap-4">
                  <Icon name={f.icon} className="text-primary !text-3xl" />
                  <div>
                    <h4 className="text-lg font-semibold">{f.title}</h4>
                    <p className="text-sm text-on-surface-variant">{f.desc}</p>
                  </div>
                </div>
              ))}
              <div className="md:col-span-8 glass-card p-10 flex flex-col justify-center">
                <h3 className="text-xl mb-2 font-semibold">Clinical Sanctuary Environment</h3>
                <p className="text-on-surface-variant">Our clinic is designed to be a digital sanctuary—quiet, airy, and focused on your mental and physical calm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6 lg:px-10 bg-surface-container-highest">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl text-primary mb-4 font-semibold">Your Journey to Recovery</h2>
              <p className="text-on-surface-variant">A structured, 6-step clinical pathway designed for results.</p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-primary/10" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {steps.map((s, i) => (
                  <div key={s} className="relative text-center group">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 ${i === 3 ? "bg-primary" : "bg-white border-2 border-primary"}`}>
                      <span className={`font-bold ${i === 3 ? "text-white" : "text-primary"}`}>0{i + 1}</span>
                    </div>
                    <h4 className="font-medium mb-2">{s}</h4>
                    <p className="text-xs text-on-surface-variant">{stepDesc[i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-primary text-center mb-16 font-semibold">Healing Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className={`glass-card p-10 flex flex-col italic text-on-surface-variant ${t.featured ? "bg-primary-container/20" : ""}`}>
                  <div className="flex gap-1 mb-6 text-[#E9B949]">
                    {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" />)}
                  </div>
                  <p className="mb-8 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-auto flex items-center gap-4 not-italic">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${t.accent === "primary" ? "bg-primary-container text-on-primary-container" : "bg-secondary-container text-on-secondary-container"}`}>{t.initials}</div>
                    <div>
                      <h5 className="font-semibold text-on-surface not-italic">{t.name}</h5>
                      <p className="text-xs">{t.meta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 lg:px-10 bg-surface-container-low">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl text-primary text-center mb-12 font-semibold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="glass-card group p-6 cursor-pointer open:bg-white transition-all">
                  <summary className="flex justify-between items-center list-none">
                    <span className="font-semibold text-lg">{f.q}</span>
                    <Icon name="expand_more" className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pt-6 text-on-surface-variant">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card p-1 md:p-2 overflow-hidden lavender-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-4xl text-primary mb-8 font-semibold">Get in Touch</h2>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input className="w-full bg-secondary-container/20 rounded-xl focus:ring-2 focus:ring-primary/40 focus:outline-none p-4" placeholder="Your name" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <input className="w-full bg-secondary-container/20 rounded-xl focus:ring-2 focus:ring-primary/40 focus:outline-none p-4" placeholder="+1 (555) 000-0000" type="tel" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <input className="w-full bg-secondary-container/20 rounded-xl focus:ring-2 focus:ring-primary/40 focus:outline-none p-4" placeholder="email@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Message</label>
                      <textarea className="w-full bg-secondary-container/20 rounded-xl focus:ring-2 focus:ring-primary/40 focus:outline-none p-4" placeholder="Tell us how we can help..." rows={4} />
                    </div>
                    <button className="btn-primary w-full py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform" type="submit">Send Message</button>
                  </form>
                </div>
                <div className="bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between rounded-3xl">
                  <div>
                    <h3 className="text-3xl mb-8 font-semibold">Contact Information</h3>
                    <div className="space-y-8">
                      <div className="flex gap-4"><Icon name="location_on" /><p>123 Wellness Blvd, Suite 400<br />San Francisco, CA 94103</p></div>
                      <div className="flex gap-4"><Icon name="call" /><p>+1 (555) 234-5678</p></div>
                      <div className="flex gap-4"><Icon name="mail" /><p>hello@healwiseclinic.com</p></div>
                      <div className="flex gap-4"><Icon name="schedule" /><p>Mon - Fri: 8:00 AM - 7:00 PM<br />Sat: 9:00 AM - 4:00 PM</p></div>
                    </div>
                  </div>
                  <div className="mt-12 rounded-2xl overflow-hidden h-48 border border-white/20">
                    <div className="w-full h-full bg-white/10 flex items-center justify-center italic text-sm">
                      <Icon name="map" className="mr-2" />
                      Interactive Location Map
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/10 py-10 px-6 lg:px-10 text-center text-sm text-on-surface-variant">
        <p>© {new Date().getFullYear()} HealWise Clinic — Personalized women's wellness.</p>
      </footer>
    </div>
  );
}
