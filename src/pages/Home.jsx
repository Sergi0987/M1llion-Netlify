import { useEffect, useRef, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle.jsx';
import Plate from '../components/Plate.jsx';
import PlateStudy from '../components/PlateStudy.jsx';

// Focus has to clear 3:1 against whichever ground it lands on, so the ring is
// picked per theme rather than shared.
const ringLight =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-charcoal focus-visible:ring-offset-bone';
const ringDark =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-butter focus-visible:ring-offset-charcoal';

// Everything transactional lives on Kahunas and Setmore: packages are bought on
// Kahunas, intake is answered on Kahunas, and classes are booked on Setmore.
const KAHUNAS_URL = 'https://kahunas.io/coach/packages/list/a13e6be5-d737-47e0-b37e-8e8efbcf2c4c';
const KAHUNAS_INTAKE_URL = 'https://kahunas.io/contact/person_info/2f00daa6-9b9c-4981-a866-37e60fa49b7f';
const CLASS_URL = 'https://m1llionfitness.setmore.com/';
const BOOTY_CLASS_URL =
  'https://m1llionfitness.setmore.com/?instant_experiences_enabled=true&utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3';

// No client portal yet on this site — training/portal launches later. Nav is
// section anchors, plus the one booking link that has to stay reachable from
// every screen. A third entry marks a link that leaves the site.
const NAV = [
  ['#coaching', 'Coaching'],
  ['#coach', 'The Coach'],
  [BOOTY_CLASS_URL, 'Booty Class', true],
  ['#instagram', 'Feed'],
  ['#inquire', 'Inquire'],
];

// The legend for Plate II. Numbers key to the marginal ticks on the figure.
const ONE_TO_ONE = [
  ['Programming', 'Training built around your schedule, equipment, and history — not a template with your name on it.'],
  ['Nutrition', 'Macros set against how you actually eat, reviewed as your training load changes.'],
  ['Weekly check-in', 'Weight, notes, and progress photos logged in the portal. Read every week, answered every week.'],
  ['Form review', 'Send video. Get correction on the lifts that carry the most risk and the most return.'],
  ['The portal', 'Your program, history, and check-ins in one private login — not scattered across a chat thread.'],
];

const CLASSES = [
  ['Strength and conditioning', 'Barbell and conditioning work programmed for a room, scaled to the person.'],
  ['A women-focused room', 'Built to be supportive without being soft on the work.'],
  ['Single sessions or packs', 'Come once or commit to a block.'],
];

export default function Home({ theme, setTheme }) {
  const year = new Date().getFullYear();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [heroSrc, setHeroSrc] = useState('/editorial-01.jpg');
  const [studySrc, setStudySrc] = useState('/editorial-02.jpg');
  const [feedArmed, setFeedArmed] = useState(() => typeof IntersectionObserver === 'undefined');
  const mobileNavRef = useRef(null);
  const mobileBtnRef = useRef(null);
  const feedRef = useRef(null);
  const isDark = theme === 'dark';
  const focusRing = isDark ? ringDark : ringLight;

  const logo = isDark ? '/logoWhite.png' : '/logoBlack.png';

  // Ground / ink pairs. Light is bone paper, dark is the charcoal plate.
  const ground = isDark ? 'bg-charcoal text-bone' : 'bg-bone text-charcoal';
  const ink = isDark ? 'text-bone' : 'text-charcoal';
  // Olive and sage are accents — they carry numbering, captions, and labels.
  // Running copy stays on a neutral so the 5-10% accent budget holds.
  const inkSoft = isDark ? 'text-sage' : 'text-olive';
  const inkBody = isDark ? 'text-sand' : 'text-graphite';
  const rule = isDark ? 'border-bone/25' : 'border-charcoal/20';
  const ruleFaint = isDark ? 'border-bone/12' : 'border-charcoal/10';

  useEffect(() => {
    if (!mobileNavOpen) {
      return undefined;
    }

    function onPointerDown(event) {
      const nav = mobileNavRef.current;
      const button = mobileBtnRef.current;

      if (!nav || !button) {
        return;
      }

      if (!nav.contains(event.target) && !button.contains(event.target)) {
        setMobileNavOpen(false);
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMobileNavOpen(false);
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileNavOpen]);

  // The Instagram widget is third-party and heavy; it only loads once the reader
  // has actually reached the feed.
  useEffect(() => {
    const node = feedRef.current;

    if (!node || feedArmed) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setFeedArmed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [feedArmed]);

  useEffect(() => {
    if (!feedArmed) {
      return;
    }

    const scriptId = 'elfsight-platform-script';

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, [feedArmed]);

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  return (
    <div className={`m1 min-h-screen ${ground}`}>
      <a
        href="#main"
        className={`sr-only fixed left-4 top-4 z-[9999] border px-4 py-2 text-xs uppercase tracking-[0.18em] focus:not-sr-only ${rule} ${
          isDark ? 'bg-charcoal' : 'bg-bone'
        } ${focusRing}`}
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 border-b ${rule} ${
          isDark ? 'bg-charcoal/95' : 'bg-bone/95'
        } backdrop-blur-[2px]`}
      >
        <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <a href="#top" className={`flex items-center ${focusRing}`} aria-label="M1LLION home">
            <img src={logo} alt="M1LLION" className="h-7 w-auto md:h-8" />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 text-[0.68rem] uppercase tracking-[0.2em] md:flex"
          >
            {NAV.map(([href, label, external]) => (
              <a
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className={`transition-colors hover:text-olive ${focusRing}`}
              >
                {label}
                {external ? <span aria-hidden="true"> ↗</span> : null}
              </a>
            ))}
            <ThemeToggle theme={theme} setTheme={setTheme} variant="plate" />
          </nav>

          <button
            ref={mobileBtnRef}
            type="button"
            className={`border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] md:hidden ${rule} ${focusRing}`}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileNavOpen((value) => !value)}
          >
            {mobileNavOpen ? 'Close' : 'Index'}
          </button>
        </div>

        <nav
          id="mobile-nav"
          ref={mobileNavRef}
          aria-label="Mobile primary"
          className={`border-t md:hidden ${rule} ${isDark ? 'bg-charcoal' : 'bg-bone'} ${
            mobileNavOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="mx-auto grid max-w-[86rem] px-5 py-2 text-[0.72rem] uppercase tracking-[0.2em] sm:px-8">
            {NAV.map(([href, label, external]) => (
              <a
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                onClick={closeMobileNav}
                className={`border-b py-3 ${ruleFaint} ${focusRing}`}
              >
                {label}
                {external ? <span aria-hidden="true"> ↗</span> : null}
              </a>
            ))}
            <div className="py-3">
              <ThemeToggle theme={theme} setTheme={setTheme} variant="plate" />
            </div>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* ---------------------------------------------------------------
            Frontispiece
            --------------------------------------------------------------- */}
        <section id="top" className="relative isolate overflow-hidden bg-charcoal text-bone">
          {/* Full-bleed and dimmed — the photograph is atmosphere here, not a
              portrait. Anchored to the top so the head stays in frame on wide
              screens, where a portrait image otherwise crops to a mid-body band. */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroSrc}
              onError={() => setHeroSrc('/C14.jpeg')}
              alt="Carolina training"
              className="m1-photo h-full w-full object-cover object-top opacity-80"
            />
            {/* Light at the top so the head reads, deepening to solid charcoal at
                the baseline; the left wash is what carries the type. */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/25 via-charcoal/45 to-charcoal" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/35 to-transparent" />
          </div>

          <div className="m1-grain m1-grain-light relative z-10 mx-auto flex min-h-[max(34rem,88svh)] max-w-[86rem] flex-col justify-end px-5 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-24">
            {/* Registration marks — the plate's own corner furniture, holding the
                top of the sheet without putting a label above the headline. */}
            <div aria-hidden="true" className="pointer-events-none absolute left-5 top-8 sm:left-8 sm:top-12">
              <span className="absolute h-px w-8 bg-bone/45" />
              <span className="absolute h-8 w-px bg-bone/45" />
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute right-5 top-8 sm:right-8 sm:top-12">
              <span className="absolute right-0 h-px w-8 bg-bone/45" />
              <span className="absolute right-0 h-8 w-px bg-bone/45" />
            </div>
            <div className="max-w-4xl py-14 sm:py-20">
              <h1 className="font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.92] tracking-[-0.005em]">
                Strength is
                <br />
                stewardship
              </h1>

              <p className="mt-7 max-w-[46ch] font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-light italic leading-[1.45] text-sand">
                Train the body. Renew the mind. Serve the King.
              </p>

              <p className="mt-6 max-w-[62ch] text-[0.95rem] leading-[1.75] text-sage">
                One-to-one online coaching and group classes with Carolina — programming, nutrition, and weekly
                review delivered through a private client portal.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={KAHUNAS_INTAKE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-3 bg-bone px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-butter ${ringDark}`}
                >
                  Apply for coaching
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={KAHUNAS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-3 border border-bone/45 px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone hover:bg-bone/10 ${ringDark}`}
                >
                  Sign up online
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className={`flex items-end justify-between gap-6 border-t border-bone/20 pt-4`}>
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-sage">From one to many</p>
              <p className="font-serif text-sm italic text-sand">Pl. I — Frontispiece</p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Plate II — the study
            --------------------------------------------------------------- */}
        <Plate
          id="coaching"
          plate="Pl. II"
          caption="The study"
          heading="What one-to-one actually includes"
          isDark={isDark}
        >
          <p className={`max-w-[66ch] font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.55] ${ink}`}>
            Coaching is not a plan you are handed and left with. It is a structure you are held to, reviewed every
            week, and corrected as your body and your week change.
          </p>

          <div className="mt-12">
            <PlateStudy
              src={studySrc}
              onError={() => setStudySrc('/C14.jpeg')}
              alt="Strength work in progress"
              figure="Fig. 1 — 1:1 Online Coaching"
              items={ONE_TO_ONE}
              isDark={isDark}
              ctaHref={KAHUNAS_INTAKE_URL}
              ctaLabel="Apply for 1:1 coaching"
              ctaExternal
            />
          </div>

          <div className={`mt-16 border-t pt-10 ${rule}`}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14">
              <div>
                <h3 className={`font-display text-[clamp(1.6rem,3.5vw,2.5rem)] uppercase leading-[1] ${ink}`}>
                  Group classes
                </h3>
                <p className={`mt-4 font-serif text-lg italic ${inkSoft}`}>Fig. 2 — In the room</p>

                <figure className="mt-6">
                  <div className={`overflow-hidden border ${rule}`}>
                    <img
                      src="/group-class.jpg"
                      alt="A M1LLION group class together after a session"
                      loading="lazy"
                      className="m1-photo aspect-[3/4] w-full object-cover object-center"
                    />
                  </div>
                  <figcaption className={`mt-3 font-serif text-sm italic ${inkSoft}`}>
                    Fig. 2a — The room, after the work
                  </figcaption>
                </figure>
              </div>

              <div>
                <dl>
                  {CLASSES.map(([term, detail]) => (
                    <div key={term} className={`border-t py-4 first:border-t-0 first:pt-0 ${ruleFaint}`}>
                      <dt className={`text-[0.74rem] uppercase tracking-[0.2em] ${ink}`}>{term}</dt>
                      <dd className={`mt-1.5 max-w-[52ch] text-[0.95rem] leading-[1.7] ${inkBody}`}>{detail}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href={BOOTY_CLASS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                      isDark ? 'bg-bone text-charcoal hover:bg-butter' : 'bg-charcoal text-bone hover:bg-darkolive'
                    } ${focusRing}`}
                  >
                    Book the booty class
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={CLASS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-3 border px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${rule} ${
                      isDark ? 'hover:border-bone' : 'hover:border-charcoal'
                    } ${focusRing}`}
                  >
                    All classes
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Plate>

        {/* ---------------------------------------------------------------
            Commentary
            --------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden bg-forest text-bone">
          <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-[54rem]">
              <p className="font-serif text-[clamp(1.9rem,5vw,3.5rem)] font-light leading-[1.25]">
                The body matters. The soul matters more.{' '}
                <span className="text-butter">The order matters.</span>
              </p>

              <div className="mt-10 grid gap-8 border-t border-bone/25 pt-8 sm:grid-cols-2">
                <p className="max-w-[46ch] text-[0.95rem] leading-[1.8] text-sage">
                  Discipline here is not punishment and training is not vanity. The body is on loan, it is worth
                  keeping well, and the work of keeping it well is worth doing carefully.
                </p>
                <p className="max-w-[46ch] text-[0.95rem] leading-[1.8] text-sage">
                  That is the whole reason for the structure: programming that respects your limits, review that
                  keeps you honest, and progress measured over seasons rather than weeks.
                </p>
              </div>

              <p className="mt-10 text-[0.62rem] uppercase tracking-[0.34em] text-butter">
                Work. Worship. Witness.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Plate III — the coach
            --------------------------------------------------------------- */}
        <Plate id="coach" plate="Pl. III" caption="The coach" heading="Carolina" isDark={isDark}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <figure className="relative">
              <div className={`relative overflow-hidden border ${rule}`}>
                <img
                  src="/headshot.png"
                  alt="Carolina coaching in the gym"
                  loading="lazy"
                  className="m1-photo aspect-[4/5] w-full object-cover object-center"
                />
              </div>
              <figcaption className={`mt-3 font-serif text-sm italic ${inkSoft}`}>
                Fig. 3 — Carolina, on the floor
              </figcaption>
            </figure>

            <div className="lg:pt-2">
              <p className={`max-w-[56ch] font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.55] ${ink}`}>
                A certified trainer helping women build strength and confidence, on and off the gym floor.
              </p>

              <p className={`mt-6 max-w-[58ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                Carolina coaches the way she trains — attentive to detail, unhurried about results, and more
                interested in what you can still do in twenty years than in what a single week looks like. Clients
                work with her online through the portal or in person in class.
              </p>

              <div className={`mt-8 border-t pt-8 ${rule}`}>
                <p className={`max-w-[58ch] font-serif text-[clamp(1.1rem,1.9vw,1.4rem)] font-light italic leading-[1.55] ${ink}`}>
                  At M1LLION Fitness, my goal is to build more than strong bodies.
                </p>

                <p className={`mt-5 max-w-[58ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                  Through movement, education, and intentional coaching, I help you become stronger, move with
                  confidence, and understand the why behind what you do, so you’re equipped to carry it beyond the
                  gym.
                </p>

                <p className={`mt-5 max-w-[58ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                  Because strength isn’t just physical. It’s how you show up, what you believe about yourself, and
                  what you pour into others.
                </p>

                <p className={`mt-7 max-w-[46ch] text-[0.72rem] uppercase leading-[2] tracking-[0.2em] ${inkSoft}`}>
                  Build the body. Strengthen the soul. Renew the mind. Equip the person.
                </p>

                <p className={`mt-3 font-serif text-lg italic ${inkSoft}`}>From one to many.</p>
              </div>

              <dl className={`mt-9 border-t ${rule}`}>
                {[
                  ['Practice', 'Strength, conditioning, and nutrition coaching'],
                  ['Format', '1:1 online and in-person group classes'],
                  ['Focus', 'Longevity, technique, and habits that survive a real week'],
                ].map(([term, detail]) => (
                  <div key={term} className={`grid gap-1 border-b py-4 sm:grid-cols-[9rem_1fr] sm:gap-4 ${ruleFaint}`}>
                    <dt className={`text-[0.68rem] uppercase tracking-[0.2em] ${inkSoft}`}>{term}</dt>
                    <dd className={`text-[0.95rem] leading-[1.7] ${ink}`}>{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Plate>

        {/* ---------------------------------------------------------------
            Feed + apparel note
            --------------------------------------------------------------- */}
        <Plate id="instagram" plate="Pl. IV" caption="The feed" heading="From the floor" isDark={isDark}>
          <div ref={feedRef} className={`min-h-[20rem] overflow-hidden border ${rule}`}>
            {feedArmed ? (
              <div className="elfsight-app-17c86385-c4ee-440f-bab3-a003bbe60d01" />
            ) : (
              <div className={`flex min-h-[20rem] items-center justify-center px-6 ${inkSoft}`}>
                <p className="font-serif text-lg italic">The feed loads as you reach it.</p>
              </div>
            )}
          </div>

          <div className={`mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-baseline sm:justify-between ${rule}`}>
            <p className={`font-serif text-lg italic ${inkSoft}`}>Fig. 4 — @m1llionfitness</p>
            <a
              href="https://www.instagram.com/m1llionfitness/"
              target="_blank"
              rel="noreferrer"
              className={`text-[0.7rem] uppercase tracking-[0.2em] underline underline-offset-[6px] transition-colors hover:text-olive ${focusRing}`}
            >
              Follow on Instagram ↗
            </a>
          </div>
        </Plate>

        {/* ---------------------------------------------------------------
            Pl. V — apparel, honestly marked as unfinished
            --------------------------------------------------------------- */}
        <Plate id="apparel" plate="Pl. V" caption="In preparation" heading="Apparel" isDark={isDark}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <p className={`max-w-[52ch] font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.55] ${ink}`}>
              Wear with purpose.
            </p>
            <div>
              <p className={`max-w-[54ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                M1LLION apparel is still to come — fewer words, stronger theology, treated like archival
                institutional graphics rather than gym merchandise. Nothing is for sale yet.
              </p>
              <a
                href="https://www.instagram.com/m1llionfitness/"
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center gap-3 border px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] transition-colors ${rule} ${
                  isDark ? 'hover:border-bone' : 'hover:border-charcoal'
                } ${focusRing}`}
              >
                Ask to be told first
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Plate>

        {/* ---------------------------------------------------------------
            Inquire
            --------------------------------------------------------------- */}
        <section id="inquire" className="relative isolate overflow-hidden bg-charcoal text-bone">
          <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 sm:px-8">
            <div className="flex items-baseline justify-between gap-6 border-b border-bone/25 py-4 text-[0.62rem] uppercase tracking-[0.28em] text-sage">
              <span>Pl. VI</span>
              <span>Inquire</span>
            </div>

            <div className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <h2 className="font-display text-[clamp(2.2rem,6vw,4rem)] uppercase leading-[0.95]">
                  Start the
                  <br />
                  conversation
                </h2>
                <p className="mt-6 max-w-[48ch] font-serif text-xl font-light italic leading-[1.5] text-sand">
                  Tell Carolina what you are training for.
                </p>
                <p className="mt-6 max-w-[52ch] text-[0.95rem] leading-[1.8] text-sage">
                  1:1 coaching starts with the intake form. Say where you are now, what you want, and what your week
                  actually looks like — the more honest the picture, the better the programming.
                </p>
              </div>

              <div className="lg:pt-2">
                <p className="max-w-[52ch] text-[0.95rem] leading-[1.8] text-sage">
                  The form lives on Kahunas, the same place your programming, check-ins, and history will live once
                  you start. It opens in a new tab.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href={KAHUNAS_INTAKE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-3 bg-bone px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-butter ${ringDark}`}
                  >
                    Open the intake form
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={KAHUNAS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-3 border border-bone/45 px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone hover:bg-bone/10 ${ringDark}`}
                  >
                    See the packages
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <p className="mt-8 border-t border-bone/20 pt-6 text-[0.95rem] leading-[1.8] text-sage">
                  Booking a class instead?{' '}
                  <a
                    href={BOOTY_CLASS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-bone underline underline-offset-4 transition-colors hover:text-butter ${ringDark}`}
                  >
                    Book the booty class ↗
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t ${rule}`}>
        <div className="mx-auto max-w-[86rem] px-5 py-12 sm:px-8">
          <p className={`font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] font-light italic ${inkSoft}`}>
            From one to many.
          </p>

          <div
            className={`mt-8 flex flex-col gap-4 border-t pt-6 text-[0.68rem] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between ${ruleFaint} ${inkSoft}`}
          >
            <span>© {year} M1LLION</span>
            <div className="flex flex-wrap gap-6">
              <a href="/terms" className={`transition-colors hover:text-olive ${focusRing}`}>
                Terms
              </a>
              <a
                href="https://www.instagram.com/m1llionfitness/"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors hover:text-olive ${focusRing}`}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
