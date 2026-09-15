import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Dribbble, Instagram, Linkedin, Mail, Menu, Phone, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const projects = [
  {
    number: '01',
    year: '2024',
    name: '[Project name]',
    type: '[Product / brand / platform]',
    description: 'A clearer digital home for a team doing ambitious, useful work.',
    className: 'project-art-one',
    style: { background: '#d9ddd8' },
  },
  {
    number: '02',
    year: '2023',
    name: '[Project name]',
    type: '[Identity / experience]',
    description: 'A visual system with enough structure to move quickly and enough character to be remembered.',
    className: 'project-art-two',
    style: { background: '#b4c8cf' },
  },
  {
    number: '03',
    year: '2023',
    name: '[Project name]',
    type: '[Digital / editorial]',
    description: 'A calm, expressive interface for a more human kind of everyday tool.',
    className: 'project-art-three',
    style: { background: '#ded7cd' },
  },
];

const services = [
  { index: '01', title: 'Brand direction', text: 'Positioning, naming, identity systems, and the visual rules that make good work feel like yours.' },
  { index: '02', title: 'Digital experiences', text: 'Websites and products that bring a point of view to every interaction, from first click to last detail.' },
  { index: '03', title: 'Creative partnership', text: 'A flexible senior pair of hands for teams who need clarity, momentum, and a sharper outside perspective.' },
];

const experience = [
  { period: '2022—now', company: '[Studio / company]', role: '[Role title]', detail: '[Selected contribution]' },
  { period: '2020—22', company: '[Studio / company]', role: '[Role title]', detail: '[Selected contribution]' },
  { period: '2018—20', company: '[Studio / company]', role: '[Role title]', detail: '[Selected contribution]' },
];

function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2" data-testid="link-home">
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#4a8b5d]" aria-hidden="true" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[.18em]">Krish</span>
    </a>
  );
}

function AvailabilityPill() {
  return (
    <span className="availability-pill" data-testid="status-available">
      <span className="h-2 w-2 rounded-full bg-[#4a8b5d]" aria-hidden="true" />
      Available for New Project
    </span>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="overflow-hidden">
      <header className="nav-wrap fixed left-0 top-0 z-50 w-full">
        <div className="site-shell nav-shell flex h-[62px] items-center justify-between">
          <AvailabilityPill />
          <nav className="nav-links hidden items-center gap-1 md:flex" aria-label="Main navigation">
            <a href="#work" className="nav-link" data-testid="link-nav-work">Work <span>[03]</span></a>
            <a href="#services" className="nav-link" data-testid="link-nav-services">Service <span>[03]</span></a>
            <a href="#experience" className="nav-link" data-testid="link-nav-experience">Experience <span>[X+]</span></a>
            <a href="#contact" className="nav-link" data-testid="link-nav-contact">Contact</a>
            <a href="#contact" className="talk-button" data-testid="link-nav-talk">Let&apos;s Talk <ArrowUpRight size={14} strokeWidth={1.5} /></a>
          </nav>
          <button
            type="button"
            className="nav-menu-button flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            data-testid="button-menu"
          >
            {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="menu-panel site-shell pb-5 pt-4 md:hidden" aria-label="Mobile navigation">
            <a href="#work" onClick={closeMenu} className="mobile-nav-link" data-testid="link-mobile-work">Work <span>[03]</span></a>
            <a href="#services" onClick={closeMenu} className="mobile-nav-link" data-testid="link-mobile-services">Service <span>[03]</span></a>
            <a href="#experience" onClick={closeMenu} className="mobile-nav-link" data-testid="link-mobile-experience">Experience <span>[X+]</span></a>
            <a href="#contact" onClick={closeMenu} className="mobile-nav-link" data-testid="link-mobile-contact">Contact</a>
            <a href="#contact" onClick={closeMenu} className="talk-button mt-3 inline-flex" data-testid="link-mobile-talk">Let&apos;s Talk <ArrowUpRight size={14} strokeWidth={1.5} /></a>
          </nav>
        )}
      </header>

      <section className="site-shell relative flex min-h-[800px] flex-col justify-end pb-16 pt-32 md:min-h-[920px] md:pb-24" aria-labelledby="hero-title">
        <div className="absolute right-[4%] top-[32%] hidden w-[160px] text-right md:block">
          <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[.15em] text-[#171716]/50">Independent<br />designer / developer</span>
          <span className="mt-4 ml-auto block h-2 w-2 rounded-full bg-[#4a8b5d]" />
        </div>
        <div className="reveal">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[.18em] text-[#171716]/55 md:mb-10">Based in Pundri, Haryana · Working worldwide</p>
          <h1 id="hero-title" className="hero-title max-w-[1120px] text-[#171716]">
            <span className="hero-outline">Krish</span>
          </h1>
        </div>
        <div className="reveal delay-2 mt-12 flex items-end justify-between gap-5 md:mt-16">
          <p className="max-w-[390px] text-lg leading-[1.18] tracking-[-.035em] text-[#171716]/75 md:text-[22px]">
            AI-assisted developer making thoughtful digital things for people with something to say.
          </p>
          <a href="#work" className="group hidden shrink-0 items-center gap-3 pb-1 font-mono text-[10px] uppercase tracking-[.16em] md:flex" data-testid="link-hero-work">
            Scroll to explore <ArrowDownRight size={16} strokeWidth={1.4} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>
      </section>

      <div className="border-y border-[#171716]/10 py-4">
        <div className="site-shell flex items-center justify-between gap-5">
          <p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#171716]/50">Selected work</p>
          <p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#171716]/50">01—03</p>
        </div>
      </div>

      <section id="work" className="site-shell relative py-28 md:py-44" aria-labelledby="work-title">
        <div className="pointer-events-none absolute -left-8 top-20 overflow-hidden md:-left-16">
          <span className="ghost-word">work</span>
        </div>
        <div className="relative">
          <div className="reveal mb-16 flex items-start justify-between gap-5 md:mb-24">
            <div>
              <p className="section-kicker">/SELECTED WORK</p>
              <h2 id="work-title" className="section-title mt-5">Selected<br />work<span className="text-[#4a8b5d]">.</span></h2>
            </div>
            <span className="font-mono pt-2 text-[10px] uppercase tracking-[.14em] text-[#171716]/50">A small edit<br />of recent work</span>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.number} className={`project-card reveal delay-${index + 1} group`} data-testid={`card-project-${index + 1}`}>
                <a href="#contact" className="block" data-testid={`link-project-${index + 1}`}>
                  <div className={`project-art ${project.className} relative`} style={project.style}>
                    {index === 0 && (
                      <>
                        <div className="absolute left-[13%] top-[17%] h-[54%] w-[63%] -rotate-[7deg] bg-[#f4f4f4] shadow-[20px_24px_0_rgba(23,23,22,.12)] transition-transform duration-500 group-hover:rotate-[-3deg] group-hover:scale-[1.02]" />
                        <div className="absolute left-[22%] top-[27%] h-[5px] w-[27%] bg-[#171716]/75" />
                        <div className="absolute left-[22%] top-[37%] h-[5px] w-[43%] bg-[#171716]/20" />
                        <div className="absolute left-[22%] top-[44%] h-[5px] w-[34%] bg-[#171716]/20" />
                        <div className="absolute bottom-[22%] right-[18%] h-[70px] w-[70px] rounded-full border-[10px] border-[#4a8b5d]/70" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="absolute left-[14%] top-[13%] h-[74%] w-[74%] rounded-[50%_50%_8%_8%] border-[1px] border-[#171716]/45 transition-transform duration-500 group-hover:rotate-6" />
                        <div className="absolute left-[22%] top-[23%] h-[54%] w-[58%] rounded-[50%] border-[1px] border-[#171716]/35" />
                        <div className="absolute left-[48%] top-[17%] h-[68%] w-[1px] rotate-[29deg] bg-[#171716]/35" />
                        <div className="absolute left-[31%] top-[51%] h-3 w-3 rounded-full bg-[#4a8b5d]" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="absolute right-[12%] top-[13%] h-[120px] w-[120px] rounded-full bg-[#4a8b5d]/85 transition-transform duration-500 group-hover:translate-x-2" />
                        <div className="absolute bottom-[10%] left-[9%] h-[65%] w-[66%] rotate-[12deg] border-[1px] border-[#171716]/50" />
                        <div className="absolute bottom-[19%] left-[19%] h-[45%] w-[48%] rotate-[12deg] bg-[#f4f4f4]/75" />
                        <div className="absolute left-[14%] top-[24%] font-mono text-[9px] uppercase tracking-[.18em] text-[#171716]/65">Issue 04 / 24</div>
                      </>
                    )}
                    <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f4] opacity-0 transition-opacity duration-300 group-hover:opacity-100"><ArrowUpRight size={16} strokeWidth={1.4} /></span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-[#171716]/20 py-5">
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-.04em]">{project.name}</h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[.14em] text-[#171716]/50">{project.type}</p>
                    </div>
                    <span className="font-mono text-[10px] text-[#171716]/50">{project.year}</span>
                  </div>
                  <p className="mt-4 max-w-[330px] text-sm leading-relaxed text-[#171716]/60">{project.description}</p>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-[#171716]/10 py-28 md:py-40" aria-labelledby="services-title">
        <div className="site-shell relative">
          <div className="pointer-events-none absolute -right-4 top-0 overflow-hidden md:right-0">
            <span className="ghost-word">offer</span>
          </div>
          <div className="reveal relative mb-16 flex items-end justify-between md:mb-28">
            <div>
              <p className="section-kicker">/SERVICE</p>
              <h2 id="services-title" className="section-title mt-5">What I<br />do<span className="text-[#4a8b5d]">.</span></h2>
            </div>
            <span className="max-w-[150px] pb-2 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[.14em] text-[#171716]/50">Strategy with<br />a point of view</span>
          </div>
          <div className="relative">
            {services.map((service, index) => (
              <article key={service.index} className={`service-row reveal delay-${index + 1} ${index === 0 ? 'service-row-primary' : ''}`} data-testid={`service-${index + 1}`}>
                <span className="font-mono text-[10px] text-[#171716]/50">{service.index}</span>
                <h3 className="text-2xl font-semibold tracking-[-.055em] md:text-4xl">{service.title}</h3>
                <p className="service-copy">{service.text}</p>
                <ArrowUpRight className="service-arrow" size={19} strokeWidth={1.3} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="site-shell py-28 md:py-44" aria-labelledby="about-title">
        <div className="grid items-start gap-14 md:grid-cols-[.72fr_1.28fr] md:gap-24">
          <div className="reveal">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[.16em] text-[#171716]/50">A little context</p>
            <h2 id="about-title" className="text-5xl font-semibold leading-[.9] tracking-[-.075em] md:text-7xl">Make it<br />matter<span className="text-[#4a8b5d]">.</span></h2>
          </div>
          <div className="reveal delay-2 max-w-[680px]">
            <p className="text-3xl leading-[1.05] tracking-[-.065em] md:text-5xl">Good design is not decoration. It is the useful bit between a good idea and someone choosing to care.</p>
            <p className="mt-10 max-w-[470px] text-base leading-relaxed text-[#171716]/60 md:ml-[22%]">I’m Krish, an AI-assisted developer working across digital products and the spaces where people meet technology. I like clear questions, generous collaboration, and details that reward a second look.</p>
            <a href="#contact" className="group mt-10 inline-flex items-center gap-3 border-b border-[#171716]/35 pb-2 font-mono text-[10px] uppercase tracking-[.16em]" data-testid="link-about-contact">Start a conversation <ArrowUpRight size={15} strokeWidth={1.4} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-block site-shell py-28 text-[#f4f4f4] md:py-40" aria-labelledby="experience-title">
          <div className="experience-grid">
            <div className="reveal">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[.16em] text-[#f4f4f4]/55">/EXPERIENCE</p>
              <h2 id="experience-title" className="text-5xl font-semibold leading-[.88] tracking-[-.075em] md:text-7xl">Experience<br />so far<span className="text-[#80b88b]">.</span></h2>
            </div>
            <div>
              <div className="reveal mb-14 flex items-start justify-between gap-6 md:ml-[17%]">
                <p className="max-w-[360px] text-lg leading-relaxed text-[#f4f4f4]/65">A handful of places, people, and problems that have shaped how I work.</p>
                <span className="shrink-0 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[.14em] text-[#f4f4f4]/55">[X+ years]<br />of experience</span>
              </div>
              <div>
                {experience.map((item, index) => (
                  <div key={item.period} className={`experience-row reveal delay-${index + 1} border-t border-[#f4f4f4]/20 py-5`} data-testid={`experience-${index + 1}`}>
                    <span className="period font-mono text-[10px] text-[#f4f4f4]/45">{item.period}</span>
                    <span className="company text-lg tracking-[-.03em]">{item.company}</span>
                    <span className="role font-mono text-[10px] uppercase tracking-[.12em] text-[#f4f4f4]/50">{item.role}</span>
                    <ArrowUpRight className="arrow text-[#80b88b]" size={17} strokeWidth={1.3} />
                  </div>
                ))}
              </div>
              <a href="#contact" className="group mt-10 inline-flex items-center gap-3 border-b border-[#f4f4f4]/25 pb-2 font-mono text-[10px] uppercase tracking-[.16em] text-[#f4f4f4]/70" data-testid="link-experience-contact">Ask for the full story <ArrowUpRight size={15} strokeWidth={1.3} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            </div>
          </div>
      </section>

      <section id="contact" className="site-shell py-32 md:py-52" aria-labelledby="contact-title">
        <div className="reveal">
          <AvailabilityPill />
          <h2 id="contact-title" className="contact-display mt-10 max-w-[1100px] font-semibold">Have a project<br /><span className="ml-[.38em]">in mind<span className="text-[#4a8b5d]">?</span></span></h2>
          <div className="mt-16 flex flex-col items-start justify-between gap-10 border-t border-[#171716]/20 pt-7 md:flex-row md:items-end">
            <div className="flex flex-col items-start gap-4">
              <a href="mailto:krrishai0916@gmail.com" className="group flex items-center gap-3 text-xl tracking-[-.04em] md:text-2xl" data-testid="link-email">
                <Mail size={18} strokeWidth={1.4} /> krrishai0916@gmail.com <ArrowUpRight size={17} strokeWidth={1.4} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="tel:+919306091154" className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.14em] text-[#171716]/60" data-testid="link-phone">
                <Phone size={16} strokeWidth={1.4} /> +91 93060 91154 <ArrowUpRight size={15} strokeWidth={1.4} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="max-w-[230px] text-sm leading-relaxed text-[#171716]/55 md:text-right">Available for selected freelance projects and thoughtful collaborations.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#171716]/10 py-7">
        <div className="site-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <BrandMark />
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-[#171716]/55 transition-colors hover:text-[#171716]" aria-label="LinkedIn" data-testid="link-social-linkedin"><Linkedin size={16} strokeWidth={1.5} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-[#171716]/55 transition-colors hover:text-[#171716]" aria-label="Instagram" data-testid="link-social-instagram"><Instagram size={16} strokeWidth={1.5} /></a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-[#171716]/55 transition-colors hover:text-[#171716]" aria-label="Dribbble" data-testid="link-social-dribbble"><Dribbble size={16} strokeWidth={1.5} /></a>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[.12em] text-[#171716]/45">© [Year] · All rights reserved</span>
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;