import { useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle.jsx';

// The manual, set as an edition: the scriptures it stands on, then the sections
// in the order they are argued, with single lines held on their own ground.
const SCRIPTURE = [
  {
    quote:
      'Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.',
    ref: 'John 12:24',
    body: 'The way of lasting impact is not self-preservation, but surrender — dying to what is comfortable so that greater fruit can come for the glory of God.',
  },
  {
    quote:
      'And what you have heard from me in the presence of many witnesses, entrust to faithful people who will be able to teach others also.',
    ref: '2 Timothy 2:2',
    body: 'This is a generational mission — receive, live, and pass on the truth, from one to many, equipping a multiplying people.',
  },
  {
    quote:
      'Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.',
    ref: 'Romans 12:2',
    body: 'Our foundation is transformation, not conformity — shaped by God’s truth, not the world’s patterns, so we can build, lead, and create with eternal purpose.',
  },
  {
    quote:
      'For he chose us in him before the foundation of the world, that we should be holy and blameless before him.',
    ref: 'Ephesians 1:4',
    body: 'M1LLION is not a random idea, but a purposeful assignment — we are part of God’s plan from the foundation, chosen to represent Him in all we do.',
  },
  {
    quote: 'As each has received a gift, use it to serve one another, as good stewards of God’s varied grace.',
    ref: '1 Peter 4:10',
    body: 'We believe in stewardship — utilizing the gifts, resources, influence, and opportunities God has given us to serve people, strengthen the body, and advance His Kingdom.',
  },
];

const JOURNEY = [
  ['01', 'Identity', 'Know who you are.'],
  ['02', 'Stewardship', 'Honor what you’ve been given.'],
  ['03', 'Becoming', 'Put understanding into action.'],
  ['04', 'Impact', 'Carry it beyond yourself.'],
];

const HOPES = [
  'I learned to recognize my worth beyond my accomplishments.',
  'I developed discipline rooted in understanding, not just motivation.',
  'I learned to steward what God has entrusted to me.',
  'I gained knowledge and resources I can carry for a lifetime.',
  'I became equipped to do things I once depended on others to do for me.',
  'And what I learned, I was able to pass on to someone else.',
];

const SECTIONS = [
  {
    kind: 'section',
    n: '01',
    rail: 'Welcome',
    title: 'You belong here.',
    paras: [
      'Whether you share my faith, are curious about it, or don’t identify as a Christian at all, you are genuinely welcome here.',
      'M1LLION was built on faith in Christ, and that foundation will always remain. But our commitment to serving people with excellence, dignity, and care is not limited by their beliefs, background, or where they currently stand in life.',
      'Whether you’re rebuilding, growing, or already thriving, there is always more to learn, develop, and steward.',
      'My hope is that whatever brings you here, you leave with something greater than what you came with.',
    ],
    close: 'Knowledge to carry. Strength to build. Purpose to pursue.',
  },
  {
    kind: 'section',
    n: '02',
    rail: 'The letter',
    title: 'A letter before we begin.',
    paras: [
      'Before M1LLION became what it is today, I found myself questioning whether I even wanted to continue in fitness.',
      'What started as something I loved had become a career. And when the opportunities I once relied on began slowing down, I had to confront something I hadn’t considered before.',
      'Was this truly what I wanted to do, or simply the only thing I knew how to do?',
      'Around that same time, my journey with Christ began challenging the way I understood my identity, purpose, and responsibility.',
      'I began realizing that fitness was never meant to be my destination. It was one of the environments where I’d been learning discipline, stewardship, and the importance of understanding what we do and why it matters.',
      'What I once viewed primarily as a career, I began seeing as a resource that could serve a much greater purpose.',
      'M1LLION is still growing, and so am I.',
      'But the foundation remains the same: to faithfully steward what God has entrusted to us, equip others with knowledge and opportunities, and allow what begins in one life to reach many.',
      'This manual exists to establish and protect that foundation. If M1LLION ever loses that, then it has lost everything that matters.',
    ],
    signature: '— Carolina Garcia',
    link: { href: '/my-story', label: 'Read my full story' },
  },
  {
    kind: 'statement',
    text: 'Fitness was never the destination.',
    sub: 'It was one of the places where I learned to practice stewardship.',
  },
  {
    kind: 'section',
    n: '03',
    rail: 'The mission',
    title: 'Why M1LLION exists.',
    lead: 'M1LLION exists to equip people with the knowledge, resources, community, and opportunities to recognize their potential, renew their minds, and faithfully steward what God has entrusted to them.',
    paras: [
      'We believe transformation is not limited to physical results, personal achievements, or a single season of life.',
      'Fitness was our starting point, but it was never meant to be our limitation.',
      'Through education, discipline, meaningful connections, and intentional action, our mission is to help people develop the understanding and confidence to continue growing independently.',
      'Because what we receive should never have to end with us.',
      'As we grow, we become equipped to serve, lead, and pass forward the knowledge, wisdom, and opportunities we’ve been given.',
    ],
    close: 'From one to many.',
    refs: 'John 12:24 | 2 Timothy 2:2',
  },
  {
    kind: 'statement',
    text: 'Steward what God has entrusted to you, so others may discover what He has entrusted to them.',
  },
  {
    kind: 'section',
    n: '04',
    rail: 'The heart',
    title: 'The heart behind M1LLION.',
    lead: 'Everyone carries a story.',
    paras: [
      'Some are searching for direction. Others have already accomplished more than they once imagined. Some are rebuilding. Others are growing, leading, and creating opportunities for those around them.',
      'Different journeys. Different seasons. Different starting points.',
      'But one thing remains true. No matter how far we’ve come, there is always more to learn, more to steward, and more we can contribute.',
    ],
  },
  {
    kind: 'statement',
    text: 'Potential alone does not produce transformation.',
    sub: 'Whether we’re overcoming limitations or learning to steward greater opportunities, growth requires understanding, intentional decisions, and consistent action.',
  },
  {
    kind: 'section',
    n: '05',
    rail: 'The heart',
    title: 'The heart behind the mission.',
    paras: [
      'We believe people deserve more than temporary solutions.',
      'They deserve access to knowledge they can understand, resources they can apply, and opportunities that help them grow beyond their current circumstances.',
      'Our desire is not to create dependency, but to equip people to take responsibility for what they’ve been entrusted with.',
      'We want the person rebuilding their life to discover hope. The person pursuing success to develop wisdom. The person leading others to recognize the responsibility of their influence. And the person who has learned something valuable to become willing to pass it forward.',
      'Because M1LLION was never meant to be a place where growth ends with the individual.',
      'It’s a place where what we learn can become a resource for someone else.',
    ],
    close: 'From one to many.',
  },
  { kind: 'prayer' },
  { kind: 'hopes' },
  {
    kind: 'section',
    n: '07',
    rail: 'The problem',
    title: 'The problem M1LLION exists to solve.',
    paras: [
      'We live in a world that often teaches us to measure our worth by what we achieve, possess, or how others perceive us.',
      'Appearance. Wealth. Relationships. Recognition. Performance.',
      'None of these things are inherently wrong. But when they become the foundation of our identity, our sense of worth becomes dependent on things that can change.',
      'And even when we recognize our potential, we may lack the knowledge, direction, or understanding to develop it.',
      'Potential without understanding can remain potential for a lifetime.',
      'M1LLION exists to help bridge that gap.',
      'To point people toward an identity rooted in Christ, equip them with practical knowledge and resources, and encourage faithful stewardship of what they’ve been given.',
      'Because transformation is not simply about achieving more. It’s about understanding who we are, what we’ve been entrusted with, and what we’re responsible for doing with it.',
    ],
    refs: 'Romans 12:2 | Ephesians 2:10',
  },
  {
    kind: 'section',
    n: '08',
    rail: 'Success',
    title: 'Definition of success.',
    paras: [
      'We believe success is more than what can be measured on paper.',
      'Revenue. Recognition. Growth. Achievements.',
      'These things matter. They can reflect diligence, create opportunities, and provide the resources necessary to build something sustainable.',
      'But they are not the ultimate measure of our purpose.',
      'At M1LLION, success is also measured by what continues beyond us. The knowledge someone applies years later. The confidence developed through understanding. The opportunities created for others. The discipline carried into everyday life. The wisdom passed from one person to another.',
    ],
    close: 'We do not measure success only by what we build, but by what others become equipped to build because of it.',
    tail: 'Our responsibility is to remain faithful with what we’ve been entrusted with, whether the impact reaches one person or one million.',
  },
  { kind: 'journey' },
  {
    kind: 'section',
    n: '10',
    rail: 'The difference',
    title: 'More than what we build.',
    paras: [
      'M1LLION was never intended to be defined by a single service, program, product, or industry. Fitness was where it began, but the mission has always been greater than physical transformation.',
      'We believe knowledge should produce understanding. Understanding should lead to intentional action. And what we learn should become something we can carry, apply, and eventually pass on.',
      'We are committed to building resources, experiences, and opportunities that encourage people to take responsibility for their growth without making them dependent on us.',
      'Not everyone will begin in the same place, pursue the same goals, or share the same beliefs. But everyone who encounters M1LLION deserves to be treated with dignity, served with excellence, and equipped with something of lasting value.',
      'We don’t exist simply to help people achieve more. We exist to encourage faithful stewardship of what they’ve already been given.',
      'Because the greatest impact isn’t always what happens while someone is with us.',
    ],
    close: 'It’s what continues after.',
  },
];

// Every numbered section shares one shell: a running head, a margin rail on
// wide screens, then the argument at a fixed reading measure.
function Shell({ n, rail, title, rule, ink, inkSoft, children }) {
  return (
    <section id={n ? `s-${n}` : undefined} className="relative isolate scroll-mt-16">
      <div className="m1-grain relative mx-auto max-w-[86rem] px-5 sm:px-8">
        <div
          className={`flex items-baseline justify-between gap-6 border-b py-4 text-[0.62rem] uppercase tracking-[0.28em] ${rule} ${inkSoft}`}
        >
          <span>{n ? `§ ${n}` : 'M1LLION'}</span>
          <span>{rail}</span>
        </div>

        <div className="grid gap-8 py-16 sm:py-24 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-0">
          <div className="hidden lg:block">
            <div className={`sticky top-28 border-l pl-4 ${rule}`}>
              <p className={`font-serif text-2xl italic leading-none ${inkSoft}`}>{n || '\u2014'}</p>
            </div>
          </div>

          <div>
            <h2 className={`max-w-[20ch] font-display text-[clamp(1.9rem,5vw,3.4rem)] uppercase leading-[0.98] ${ink}`}>
              {title}
            </h2>
            <div className="mt-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ringLight =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-obsidian focus-visible:ring-offset-bone';
const ringDark =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-taupe focus-visible:ring-offset-obsidian';

export default function Foundations({ theme, setTheme }) {
  const year = new Date().getFullYear();
  const isDark = theme === 'dark';
  const focusRing = isDark ? ringDark : ringLight;

  useEffect(() => {
    const previous = document.title;
    document.title = 'The Foundation of M1LLION';

    return () => {
      document.title = previous;
    };
  }, []);

  const logo = isDark ? '/logoWhite.png' : '/logoBlack.png';
  const ground = isDark ? 'bg-obsidian text-bone' : 'bg-bone text-obsidian';
  const ink = isDark ? 'text-bone' : 'text-obsidian';
  const inkSoft = isDark ? 'text-taupe' : 'text-stone';
  const inkBody = isDark ? 'text-taupe' : 'text-charcoal';
  const rule = isDark ? 'border-bone/25' : 'border-obsidian/20';
  const ruleFaint = isDark ? 'border-bone/12' : 'border-obsidian/10';

  const btnBase =
    'inline-flex items-center justify-center gap-3 whitespace-nowrap px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] transition-colors';
  const btnOutline = `${btnBase} border ${rule} ${
    isDark ? 'hover:border-bone hover:bg-bone/10' : 'hover:border-obsidian hover:bg-obsidian/5'
  } ${focusRing}`;

  return (
    <div className={`m1 min-h-screen ${ground}`}>
      <a
        href="#manual"
        className={`sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:px-4 focus:py-2 ${ground} ${focusRing}`}
      >
        Skip to the manual
      </a>

      <header
        className={`sticky top-0 z-50 border-b ${rule} ${isDark ? 'bg-obsidian/95' : 'bg-bone/95'} backdrop-blur-[2px]`}
      >
        <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <a href="/" className={`flex items-center ${focusRing}`} aria-label="M1LLION home">
            <img src={logo} alt="M1LLION" className="h-7 w-auto md:h-8" />
          </a>

          <div className="flex items-center gap-5">
            <a
              href="/"
              className={`text-[0.66rem] uppercase tracking-[0.18em] transition-colors hover:text-stone ${focusRing}`}
            >
              ← Back
            </a>
            <ThemeToggle theme={theme} setTheme={setTheme} variant="plate" />
          </div>
        </div>
      </header>

      <main id="manual">
        {/* -----------------------------------------------------------------
            Title page
            ----------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden bg-obsidian text-bone">
          <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 sm:px-8">
            <div className="flex items-baseline justify-between gap-6 border-b border-bone/25 py-4 text-[0.62rem] uppercase tracking-[0.28em] text-taupe">
              <span>M1LLION Foundations</span>
              <span>First edition</span>
            </div>

            <div className="max-w-[52rem] py-20 sm:py-28">
              <p className="text-[0.62rem] uppercase tracking-[0.42em] text-taupe">From one to many</p>

              <h1 className="mt-6 font-display text-[clamp(2.4rem,7vw,5rem)] uppercase leading-[0.94]">
                The foundation
                <br />
                of M1LLION
              </h1>

              <p className="mt-8 max-w-[44ch] font-serif text-[clamp(1.2rem,2.2vw,1.6rem)] font-light italic leading-[1.45] text-taupe">
                A Kingdom business by M1LLION Fitness.
              </p>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------
            What it stands on
            ----------------------------------------------------------------- */}
        <Shell rule={rule} ink={ink} inkSoft={inkSoft} rail="The scriptures" title="What this is built on.">
          <dl>
            {SCRIPTURE.map((item) => (
              <div key={item.ref} className={`border-t py-8 first:border-t-0 first:pt-0 ${ruleFaint}`}>
                <dt
                  className={`max-w-[56ch] font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light italic leading-[1.5] ${ink}`}
                >
                  “{item.quote}”
                </dt>
                <dd className={`mt-3 text-[0.62rem] uppercase tracking-[0.28em] ${inkSoft}`}>{item.ref}</dd>
                <dd className={`mt-4 max-w-[62ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>{item.body}</dd>
              </div>
            ))}
          </dl>
        </Shell>

        {/* -----------------------------------------------------------------
            The manual
            ----------------------------------------------------------------- */}
        {SECTIONS.map((block, index) => {
          if (block.kind === 'statement') {
            return (
              <section key={block.text} className="relative isolate overflow-hidden bg-charcoal text-bone">
                <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 py-16 sm:px-8 sm:py-24">
                  <p className="max-w-[24ch] font-display text-[clamp(1.8rem,5vw,3.25rem)] uppercase leading-[1.05]">
                    {block.text}
                  </p>
                  {block.sub ? (
                    <p className="mt-6 max-w-[58ch] text-[0.95rem] leading-[1.8] text-taupe">{block.sub}</p>
                  ) : null}
                </div>
              </section>
            );
          }

          if (block.kind === 'prayer') {
            return (
              <Shell key="prayer" rule={rule} ink={ink} inkSoft={inkSoft} n="06" rail="Prayer" title="For everyone who encounters M1LLION.">
                <blockquote className={`border-l pl-6 sm:pl-8 ${rule}`}>
                  <p className={`font-serif text-[clamp(1.15rem,2vw,1.45rem)] font-light italic ${ink}`}>
                    Heavenly Father,
                  </p>
                  <p className={`mt-5 max-w-[62ch] text-[0.95rem] leading-[1.9] ${inkBody}`}>
                    May the Holy Spirit go before me and place this in the hands of whom you have chosen. I pray the
                    Holy Spirit fills every person that encounters this prayer. This is not a random chance but a
                    strategic assignment by your will for them. Give them the ears to hear and open their hearts so
                    they may receive anything you wish to minister to them through M1LLION. May they know that you
                    have created them for a purpose far greater than they can ever imagine and that they belong and
                    come to know their God-given identity. I pray that minds are renewed and receive the knowledge
                    to understand how to properly steward everything you have entrusted to them. I pray that whoever
                    reads this grows in confidence and understanding of the calling you have on their life. May they
                    become bold in closing the gap between where they are now and where you have called them to be.
                    I pray that every person who encounters M1LLION, no matter the length of time, leaves with
                    greater hope than before.
                  </p>
                  <p className={`mt-5 max-w-[62ch] text-[0.95rem] leading-[1.9] ${inkBody}`}>
                    I pray, Lord, that all who come to You walk in Your truth, love and boldness. I thank you, Lord
                    and I praise You in advance for all the lives that will be encountered and transformed through
                    our mission. Many are called, but few are chosen. May they choose to accept the invitation.
                  </p>
                  <p className={`mt-7 text-[0.72rem] uppercase tracking-[0.3em] ${inkSoft}`}>Amen. Amen. Amen.</p>
                </blockquote>
              </Shell>
            );
          }

          if (block.kind === 'hopes') {
            return (
              <Shell key="hopes" rule={rule} ink={ink} inkSoft={inkSoft} n="07" rail="The impact" title="What we hope people say.">
                <p className={`max-w-[62ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                  Years from now, when someone speaks about M1LLION, we hope they remember more than a program, a
                  service, or an experience. We hope they say…
                </p>

                <ul className="mt-8">
                  {HOPES.map((line) => (
                    <li
                      key={line}
                      className={`border-t py-4 font-serif text-[clamp(1.05rem,1.8vw,1.35rem)] font-light italic leading-[1.5] first:border-t-0 first:pt-0 ${ruleFaint} ${ink}`}
                    >
                      “{line}”
                    </li>
                  ))}
                </ul>

                <p className={`mt-8 max-w-[62ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                  Because the greatest impact isn’t measured by how long someone needs us. It’s measured by what
                  continues long after they’ve left.
                </p>

                <p className={`mt-6 text-[0.72rem] uppercase tracking-[0.2em] ${inkSoft}`}>From one to many.</p>
              </Shell>
            );
          }

          if (block.kind === 'journey') {
            return (
              <Shell key="journey" rule={rule} ink={ink} inkSoft={inkSoft} n="09" rail="The journey" title="The journey of M1LLION.">
                <p className={`max-w-[62ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                  Every person begins from a different place. Some are searching for direction. Some are rebuilding
                  after difficult seasons. Some are pursuing new goals. Others have already achieved tremendous
                  success and recognize there is still more to learn, develop, and contribute.
                </p>

                <p className={`mt-5 max-w-[62ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                  Different starting points. One continuous opportunity for growth. At M1LLION, we believe
                  transformation is a lifelong process shaped by four foundational principles.
                </p>

                <ol className="mt-10 grid gap-px sm:grid-cols-2">
                  {JOURNEY.map(([n, term, detail]) => (
                    <li key={n} className={`border p-6 sm:p-8 ${rule}`}>
                      <p className={`font-serif text-2xl italic leading-none ${inkSoft}`}>{n}</p>
                      <h3 className={`mt-4 font-display text-[clamp(1.3rem,2.6vw,1.9rem)] uppercase leading-[1] ${ink}`}>
                        {term}
                      </h3>
                      <p className={`mt-2 text-[0.95rem] leading-[1.7] ${inkBody}`}>{detail}</p>
                    </li>
                  ))}
                </ol>

                <p className={`mt-8 text-[0.62rem] uppercase tracking-[0.28em] ${inkSoft}`}>
                  Identity → Stewardship → Becoming → Impact
                </p>

                <p className={`mt-4 max-w-[62ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>
                  This is not a formula for perfection. It is a framework for growth — a way to return to what
                  matters, revisit what God has entrusted to you, and continue becoming more faithful with it over
                  time. Because what begins in one life was never meant to end there.
                </p>
              </Shell>
            );
          }

          return (
            <Shell key={block.n || index} rule={rule} ink={ink} inkSoft={inkSoft} n={block.n} rail={block.rail} title={block.title}>
              {block.lead ? (
                <p
                  className={`max-w-[52ch] font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.55] ${ink}`}
                >
                  {block.lead}
                </p>
              ) : null}

              <div className={block.lead ? 'mt-7' : undefined}>
                {block.paras.map((para) => (
                  <p key={para} className={`mt-5 max-w-[62ch] text-[0.95rem] leading-[1.85] first:mt-0 ${inkBody}`}>
                    {para}
                  </p>
                ))}
              </div>

              {block.close ? (
                <p
                  className={`mt-8 max-w-[52ch] border-t pt-6 font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light italic leading-[1.5] ${rule} ${ink}`}
                >
                  {block.close}
                </p>
              ) : null}

              {block.tail ? (
                <p className={`mt-5 max-w-[62ch] text-[0.95rem] leading-[1.8] ${inkBody}`}>{block.tail}</p>
              ) : null}

              {block.signature ? (
                <p className={`mt-8 font-serif text-lg italic ${inkSoft}`}>{block.signature}</p>
              ) : null}

              {block.refs ? (
                <p className={`mt-6 text-[0.62rem] uppercase tracking-[0.28em] ${inkSoft}`}>{block.refs}</p>
              ) : null}

              {block.link ? (
                <a href={block.link.href} className={`mt-7 ${btnOutline}`}>
                  {block.link.label}
                  <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </Shell>
          );
        })}

        {/* -----------------------------------------------------------------
            Colophon
            ----------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden bg-obsidian text-bone">
          <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="mx-auto max-w-[30ch] font-display text-[clamp(1.6rem,4.5vw,3rem)] uppercase leading-[1.05]">
              May M1LLION remain faithful to the One who designed it.
            </p>

            <p className="mx-auto mt-8 max-w-[44ch] font-serif text-xl font-light italic leading-[1.5] text-taupe">
              And may what begins with one continue to reach many.
            </p>

            <p className="mt-10 text-[0.62rem] uppercase tracking-[0.34em] text-taupe">From one to many.</p>
            <p className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-taupe">
              The foundation of M1LLION &nbsp;/&nbsp; {year}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="/my-story" className={`${btnBase} bg-bone text-obsidian hover:bg-taupe ${ringDark}`}>
                Read my story
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/#next-step"
                className={`${btnBase} border border-bone/45 text-bone hover:border-bone hover:bg-bone/10 ${ringDark}`}
              >
                Take the next step
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t ${rule}`}>
        <div className="mx-auto max-w-[86rem] px-5 py-12 sm:px-8">
          <div
            className={`flex flex-col gap-4 border-t pt-6 text-[0.68rem] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between ${ruleFaint} ${inkSoft}`}
          >
            <span>© {year} M1LLION</span>
            <div className="flex flex-wrap gap-6">
              <a href="/terms" className={`transition-colors hover:text-stone ${focusRing}`}>
                Terms
              </a>
              <a
                href="https://www.instagram.com/m1llionfitness/"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors hover:text-stone ${focusRing}`}
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
