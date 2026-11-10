import { useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle.jsx';

// The manual is set the way the printed edition is set: a divider leaf carrying
// a plate and a title, then the leaf of argument that follows it, with the
// running head and the foot rule repeating on every page.
const SCRIPTURE_TOP = [
  [
    'Jesus said, “Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.” (John 12:24)',
    'The way of lasting impact is not self-preservation, but surrender — dying to what is comfortable so that greater fruit can come for the glory of God.',
  ],
  [
    'And what you have heard from me in the presence of many witnesses, entrust to faithful people who will be able to teach others also. (2 Timothy 2:2)',
    'This is a generational mission — receive, live, and pass on the truth, from one to many, equipping a multiplying people.',
  ],
  [
    'Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. (Romans 12:2)',
    'Our foundation is transformation, not conformity — shaped by God’s truth, not the world’s patterns, so we can build, lead, and create with eternal purpose.',
  ],
];

const SCRIPTURE_FOOT = [
  [
    'For he chose us in him before the foundation of the world, that we should be holy and blameless before him. (Ephesians 1:4)',
    'M1LLION is not a random idea, but a purposeful assignment — we are part of God’s plan from the foundation, chosen to represent Him in all we do.',
  ],
  [
    'As each has received a gift, use it to serve one another, as good stewards of God’s varied grace. (1 Peter 4:10)',
    'We believe in stewardship — utilizing the gifts, resources, influence, and opportunities God has given us to serve people, strengthen the body, and advance His Kingdom.',
  ],
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

const LEAVES = [
  {
    kind: 'content',
    folio: '02',
    foot: 'Welcome to M1LLION',
    title: 'You belong here.',
    paras: [
      'Whether you share my faith, are curious about it, or don’t identify as a Christian at all, you are genuinely welcome here.',
      'M1LLION was built on faith in Christ, and that foundation will always remain. But our commitment to serving people with excellence, dignity, and care is not limited by their beliefs, background, or where they currently stand in life.',
      'Whether you’re rebuilding, growing, or already thriving, there is always more to learn, develop, and steward.',
      'My hope is that whatever brings you here, you leave with something greater than what you came with.',
    ],
    close: 'Knowledge to carry. Strength to build. Purpose to pursue.',
  },
  { kind: 'divider', folio: '03', foot: 'M1LLION Foundations', title: 'A letter before we begin.', plate: '/foundations/letter.jpg', focal: '50% 30%' },
  {
    kind: 'content',
    folio: '04',
    foot: 'The letter',
    paras: [
      'Before M1LLION became what it is today, I found myself questioning whether I even wanted to continue in fitness.',
      'What started as something I loved had become a career. And when the opportunities I once relied on began slowing down, I had to confront something I hadn’t considered before.',
    ],
    aside: 'Was this truly what I wanted to do, or simply the only thing I knew how to do?',
    more: [
      'Around that same time, my journey with Christ began challenging the way I understood my identity, purpose, and responsibility.',
      'I began realizing that fitness was never meant to be my destination. It was one of the environments where I’d been learning discipline, stewardship, and the importance of understanding what we do and why it matters.',
      'What I once viewed primarily as a career, I began seeing as a resource that could serve a much greater purpose.',
    ],
    close: 'M1LLION is still growing, and so am I.',
    tail: [
      'But the foundation remains the same: to faithfully steward what God has entrusted to us, equip others with knowledge and opportunities, and allow what begins in one life to reach many.',
      'This manual exists to establish and protect that foundation. If M1LLION ever loses that, then it has lost everything that matters.',
    ],
    signature: '— Carolina Garcia',
    link: { href: '/my-story', label: 'Read my full story' },
  },
  {
    kind: 'statement',
    folio: '05',
    foot: 'From one to many',
    title: 'Fitness was never the destination.',
    sub: 'It was one of the places where I learned to practice stewardship.',
  },
  { kind: 'divider', folio: '06', foot: 'M1LLION Foundations', title: 'Why M1LLION exists.', plate: '/foundations/mission.jpg', focal: '50% 58%' },
  {
    kind: 'content',
    folio: '07',
    foot: 'The mission',
    paras: [
      'M1LLION exists to equip people with the knowledge, resources, community, and opportunities to recognize their potential, renew their minds, and faithfully steward what God has entrusted to them.',
      'We believe transformation is not limited to physical results, personal achievements, or a single season of life.',
    ],
    aside: 'Fitness was our starting point, but it was never meant to be our limitation.',
    more: [
      'Through education, discipline, meaningful connections, and intentional action, our mission is to help people develop the understanding and confidence to continue growing independently.',
      'Because what we receive should never have to end with us.',
      'As we grow, we become equipped to serve, lead, and pass forward the knowledge, wisdom, and opportunities we’ve been given.',
    ],
    stamp: 'From one to many.',
    refs: 'John 12:24 | 2 Timothy 2:2',
  },
  {
    kind: 'quiet',
    folio: '08',
    foot: 'From one to many',
    text: 'Steward what God has entrusted to you, so others may discover what He has entrusted to them.',
  },
  { kind: 'divider', folio: '09', foot: 'M1LLION Foundations', title: 'The heart behind M1LLION.', plate: '/foundations/heart.jpg', focal: '50% 45%' },
  {
    kind: 'content',
    folio: '10',
    foot: 'The heart',
    aside: 'Everyone carries a story.',
    more: [
      'Some are searching for direction. Others have already accomplished more than they once imagined. Some are rebuilding. Others are growing, leading, and creating opportunities for those around them.',
      'Different journeys. Different seasons. Different starting points.',
      'But one thing remains true. No matter how far we’ve come, there is always more to learn, more to steward, and more we can contribute.',
    ],
  },
  {
    kind: 'statement',
    folio: '11',
    foot: 'The heart',
    title: 'Potential alone does not produce transformation.',
    sub: 'Whether we’re overcoming limitations or learning to steward greater opportunities, growth requires understanding, intentional decisions, and consistent action.',
  },
  {
    kind: 'content',
    folio: '12',
    foot: 'The heart',
    title: 'The heart behind the mission.',
    paras: [
      'We believe people deserve more than temporary solutions.',
      'They deserve access to knowledge they can understand, resources they can apply, and opportunities that help them grow beyond their current circumstances.',
      'Our desire is not to create dependency, but to equip people to take responsibility for what they’ve been entrusted with.',
      'We want the person rebuilding their life to discover hope. The person pursuing success to develop wisdom. The person leading others to recognize the responsibility of their influence. And the person who has learned something valuable to become willing to pass it forward.',
      'Because M1LLION was never meant to be a place where growth ends with the individual.',
      'It’s a place where what we learn can become a resource for someone else.',
    ],
    stamp: 'From one to many.',
  },
  {
    kind: 'divider',
    folio: '13',
    foot: 'Prayer',
    title: 'Prayer.',
    sub: 'For everyone who encounters M1LLION.',
    plate: '/foundations/prayer.jpg', focal: '50% 45%',
  },
  { kind: 'prayer', folio: '14', foot: 'Prayer' },
  { kind: 'divider', folio: '15', foot: 'M1LLION Foundations', title: 'What we hope people say.', plate: '/foundations/impact.jpg', focal: '50% 35%' },
  { kind: 'hopes', folio: '16', foot: 'The impact' },
  {
    kind: 'divider',
    folio: '17',
    foot: 'M1LLION Foundations',
    title: 'The problem M1LLION exists to solve.',
    plate: '/foundations/problem.jpg', focal: '50% 40%',
  },
  {
    kind: 'content',
    folio: '18',
    foot: 'From one to many',
    paras: [
      'We live in a world that often teaches us to measure our worth by what we achieve, possess, or how others perceive us.',
      'Appearance. Wealth. Relationships. Recognition. Performance.',
      'None of these things are inherently wrong. But when they become the foundation of our identity, our sense of worth becomes dependent on things that can change.',
      'And even when we recognize our potential, we may lack the knowledge, direction, or understanding to develop it.',
    ],
    aside: 'Potential without understanding can remain potential for a lifetime.',
    more: [
      'M1LLION exists to help bridge that gap.',
      'To point people toward an identity rooted in Christ, equip them with practical knowledge and resources, and encourage faithful stewardship of what they’ve been given.',
      'Because transformation is not simply about achieving more. It’s about understanding who we are, what we’ve been entrusted with, and what we’re responsible for doing with it.',
    ],
    refs: 'Romans 12:2 | Ephesians 2:10',
  },
  { kind: 'divider', folio: '19', foot: 'M1LLION Foundations', title: 'Definition of success.', plate: '/foundations/success.jpg', focal: '50% 40%' },
  {
    kind: 'content',
    folio: '20',
    foot: 'From one to many',
    paras: [
      'We believe success is more than what can be measured on paper.',
      'Revenue. Recognition. Growth. Achievements.',
      'These things matter. They can reflect diligence, create opportunities, and provide the resources necessary to build something sustainable.',
      'But they are not the ultimate measure of our purpose.',
      'At M1LLION, success is also measured by what continues beyond us. The knowledge someone applies years later. The confidence developed through understanding. The opportunities created for others. The discipline carried into everyday life. The wisdom passed from one person to another.',
    ],
    aside: 'We do not measure success only by what we build, but by what others become equipped to build because of it.',
    more: [
      'Our responsibility is to remain faithful with what we’ve been entrusted with, whether the impact reaches one person or one million.',
    ],
  },
  { kind: 'divider', folio: '21', foot: 'M1LLION Foundations', title: 'The journey of M1LLION.', plate: '/foundations/journey.jpg', focal: '50% 60%' },
  {
    kind: 'content',
    folio: '22',
    foot: 'The journey',
    paras: [
      'Every person begins from a different place.',
      'Some are searching for direction. Some are rebuilding after difficult seasons. Some are pursuing new goals.',
      'Others have already achieved tremendous success and recognize there is still more to learn, develop, and contribute.',
      'Different starting points. One continuous opportunity for growth.',
      'At M1LLION, we believe transformation is a lifelong process shaped by four foundational principles.',
    ],
    aside: 'Because what begins in one life was never meant to end there.',
  },
  { kind: 'journey', folio: '23', foot: 'The journey' },
  { kind: 'divider', folio: '24', foot: 'M1LLION Foundations', title: 'M1LLION is different.', plate: '/foundations/difference.jpg', focal: '50% 50%' },
  {
    kind: 'content',
    folio: '25',
    foot: 'The difference',
    title: 'More than what we build.',
    paras: [
      'M1LLION was never intended to be defined by a single service, program, product, or industry. Fitness was where it began, but the mission has always been greater than physical transformation.',
      'We believe knowledge should produce understanding. Understanding should lead to intentional action. And what we learn should become something we can carry, apply, and eventually pass on.',
      'We are committed to building resources, experiences, and opportunities that encourage people to take responsibility for their growth without making them dependent on us.',
      'Not everyone will begin in the same place, pursue the same goals, or share the same beliefs. But everyone who encounters M1LLION deserves to be treated with dignity, served with excellence, and equipped with something of lasting value.',
      'We don’t exist simply to help people achieve more. We exist to encourage faithful stewardship of what they’ve already been given.',
      'Because the greatest impact isn’t always what happens while someone is with us.',
    ],
    aside: 'It’s what continues after.',
  },
];

const ringDark =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-taupe focus-visible:ring-offset-obsidian';
const ringLight =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-obsidian focus-visible:ring-offset-bone';

// The running head and the foot rule that repeat on every leaf of the edition.
function Leaf({ folio, foot, dark, mark, rule, inkSoft, className = '', children }) {
  return (
    <section className={`relative isolate scroll-mt-16 ${className}`}>
      <div className={`${dark ? 'm1-grain m1-grain-light' : 'm1-grain'} relative mx-auto flex min-h-[32rem] max-w-[86rem] flex-col px-5 sm:px-8`}>
        <p className={`pt-5 text-[0.58rem] uppercase tracking-[0.28em] ${inkSoft}`}>M1LLION Foundations / {folio}</p>

        <div className="flex-1 py-14 sm:py-20">{children}</div>

        <div className={`flex items-end justify-between gap-6 border-t pb-6 pt-4 ${rule}`}>
          <p className={`text-[0.58rem] uppercase tracking-[0.28em] ${inkSoft}`}>{foot}</p>
          <img src={mark} alt="" aria-hidden="true" className="h-5 w-auto opacity-40" />
        </div>
      </div>
    </section>
  );
}

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
  const mark = isDark ? '/favicon-dark.png' : '/favicon.png';
  const ground = isDark ? 'bg-obsidian text-bone' : 'bg-bone text-obsidian';
  const ink = isDark ? 'text-bone' : 'text-obsidian';
  const inkSoft = isDark ? 'text-taupe' : 'text-stone';
  const inkBody = isDark ? 'text-taupe' : 'text-charcoal';
  const rule = isDark ? 'border-bone/20' : 'border-obsidian/15';

  const btnBase =
    'inline-flex items-center justify-center gap-3 whitespace-nowrap px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] transition-colors';

  // The measure the printed page keeps: one narrow column, indented from the
  // running head rather than filling the sheet.
  const measure = 'max-w-[62ch] lg:ml-[14%]';
  const body = `mt-5 text-[0.95rem] leading-[1.85] first:mt-0 ${inkBody}`;

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
            The cover
            ----------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden bg-obsidian text-bone">
          <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-center text-[0.62rem] uppercase tracking-[0.42em] text-taupe">From one to many</p>

            <div className="mx-auto mt-10 max-w-[46rem]">
              {SCRIPTURE_TOP.map(([verse, note]) => (
                <p key={verse} className="mt-4 text-[0.8rem] leading-[1.75] text-taupe first:mt-0">
                  <span className="text-bone">{verse}</span> {note}
                </p>
              ))}
            </div>

            <p className="mt-12 text-center text-[0.62rem] uppercase tracking-[0.34em] text-taupe">
              The foundation of M1LLION
            </p>

            <h1 className="mt-6 text-center font-display text-[clamp(3.5rem,16vw,11rem)] uppercase leading-[0.84] tracking-[-0.02em]">
              M1LLION
            </h1>

            <div className="mx-auto mt-12 max-w-[46rem]">
              {SCRIPTURE_FOOT.map(([verse, note]) => (
                <p key={verse} className="mt-4 text-[0.8rem] leading-[1.75] text-taupe first:mt-0">
                  <span className="text-bone">{verse}</span> {note}
                </p>
              ))}
            </div>

            <p className="mt-14 text-center font-serif text-lg italic tracking-[0.1em] text-taupe">
              A Kingdom business by M1LLION Fitness
            </p>
            <p className="mt-3 text-center text-[0.58rem] uppercase tracking-[0.34em] text-taupe">First edition</p>
          </div>
        </section>

        {/* -----------------------------------------------------------------
            The leaves
            ----------------------------------------------------------------- */}
        {LEAVES.map((leaf) => {
          if (leaf.kind === 'divider') {
            return (
              <section key={leaf.folio} className="relative isolate overflow-hidden bg-obsidian text-bone">
                {/* Full bleed, as it is on the printed leaf. The plates are tall and
                    the band is wide, so the band is given a height that scales with
                    its own width — a steady 4:3 — and each plate carries the focal
                    point that keeps its subject in frame. */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={leaf.plate}
                    alt=""
                    aria-hidden="true"
                    style={{ objectPosition: leaf.focal }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-obsidian/70" />
                  <div className="absolute inset-0 bg-gradient-to-b from-obsidian/65 via-obsidian/25 to-obsidian/90" />
                </div>

                <div className="m1-grain m1-grain-light relative z-10 mx-auto flex min-h-[max(28rem,88svh)] max-w-[86rem] flex-col px-5 sm:min-h-[max(34rem,88svh,75vw)] sm:px-8">
                  <p className="pt-5 text-[0.58rem] uppercase tracking-[0.28em] text-taupe">
                    M1LLION Foundations / {leaf.folio}
                  </p>

                  <div className="flex flex-1 flex-col justify-end py-16 sm:py-20">
                    <h2 className="max-w-[20ch] font-display text-[clamp(1.9rem,5.5vw,3.6rem)] uppercase leading-[0.98]">
                      {leaf.title}
                    </h2>
                    {leaf.sub ? (
                      <p className="mt-4 max-w-[44ch] font-serif text-lg font-light italic text-taupe">{leaf.sub}</p>
                    ) : null}
                    <span aria-hidden="true" className="mt-6 block h-px w-16 bg-bone/50" />
                  </div>

                  <div className="flex items-end justify-between gap-6 border-t border-bone/20 pb-6 pt-4">
                    <p className="text-[0.58rem] uppercase tracking-[0.28em] text-taupe">{leaf.foot}</p>
                    <img src="/favicon-dark.png" alt="" aria-hidden="true" className="h-5 w-auto opacity-40" />
                  </div>
                </div>
              </section>
            );
          }

          if (leaf.kind === 'statement') {
            return (
              <Leaf
                key={leaf.folio}
                folio={leaf.folio}
                foot={leaf.foot}
                dark
                mark="/favicon-dark.png"
                rule="border-bone/20"
                inkSoft="text-taupe"
                className="overflow-hidden bg-charcoal text-bone"
              >
                <div className="flex h-full flex-col justify-center">
                  <h2 className="max-w-[22ch] font-display text-[clamp(1.7rem,4.6vw,3rem)] uppercase leading-[1.04]">
                    {leaf.title}
                  </h2>
                  {leaf.sub ? (
                    <p className="mt-5 max-w-[58ch] text-[0.95rem] leading-[1.8] text-taupe">{leaf.sub}</p>
                  ) : null}
                </div>
              </Leaf>
            );
          }

          if (leaf.kind === 'quiet') {
            return (
              <Leaf
                key={leaf.folio}
                folio={leaf.folio}
                foot={leaf.foot}
                mark="/favicon.png"
                rule="border-obsidian/20"
                inkSoft="text-stone"
                className="overflow-hidden bg-taupe text-obsidian"
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="max-w-[40ch] text-[clamp(1rem,2.1vw,1.3rem)] leading-[1.6]">{leaf.text}</p>
                  <span aria-hidden="true" className="mt-6 block h-px w-24 bg-obsidian/35" />
                </div>
              </Leaf>
            );
          }

          if (leaf.kind === 'prayer') {
            return (
              <Leaf key={leaf.folio} folio={leaf.folio} foot={leaf.foot} mark={mark} rule={rule} inkSoft={inkSoft}>
                <div className={measure}>
                  <p className={`font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light italic ${ink}`}>
                    Heavenly Father,
                  </p>
                  <span aria-hidden="true" className={`mt-6 block border-t ${rule}`} />

                  <p className={`mt-6 text-[0.95rem] leading-[1.9] ${inkBody}`}>
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
                  <p className={`mt-5 text-[0.95rem] leading-[1.9] ${inkBody}`}>
                    I pray, Lord, that all who come to You walk in Your truth, love and boldness. I thank you, Lord
                    and I praise You in advance for all the lives that will be encountered and transformed through
                    our mission. Many are called, but few are chosen. May they choose to accept the invitation.
                  </p>

                  <span aria-hidden="true" className={`mt-8 block border-t ${rule}`} />
                  <p className={`mt-6 font-serif text-lg italic ${ink}`}>Amen. Amen. Amen!</p>
                </div>
              </Leaf>
            );
          }

          if (leaf.kind === 'hopes') {
            return (
              <Leaf key={leaf.folio} folio={leaf.folio} foot={leaf.foot} mark={mark} rule={rule} inkSoft={inkSoft}>
                <div className={measure}>
                  <p className={body}>
                    Years from now, when someone speaks about M1LLION, we hope they remember more than a program, a
                    service, or an experience.
                  </p>
                  <p className={body}>We hope they say…</p>

                  <ul className="mt-7">
                    {HOPES.map((line) => (
                      <li
                        key={line}
                        className={`mt-4 font-serif text-[clamp(1.02rem,1.8vw,1.28rem)] font-light italic leading-[1.5] first:mt-0 ${ink}`}
                      >
                        “{line}”
                      </li>
                    ))}
                  </ul>

                  <p className={`mt-8 text-[0.95rem] leading-[1.85] ${inkBody}`}>
                    Because the greatest impact isn’t measured by how long someone needs us. It’s measured by what
                    continues long after they’ve left.
                  </p>

                  <p className={`mt-7 font-display text-[clamp(1.1rem,2.2vw,1.5rem)] uppercase leading-[1] ${ink}`}>
                    From one to many.
                  </p>
                </div>
              </Leaf>
            );
          }

          if (leaf.kind === 'journey') {
            return (
              <Leaf key={leaf.folio} folio={leaf.folio} foot={leaf.foot} mark={mark} rule={rule} inkSoft={inkSoft}>
                <div className={measure}>
                  <ol>
                    {JOURNEY.map(([n, term, detail], index) => (
                      <li key={n} className={index % 2 === 0 ? '' : 'mt-8'}>
                        {index === 2 ? <span aria-hidden="true" className={`mb-8 block border-t ${rule}`} /> : null}
                        <p className={`text-[0.8rem] tracking-[0.1em] ${inkSoft}`}>{n}</p>
                        <h3 className={`mt-1 font-display text-[clamp(1.2rem,2.4vw,1.7rem)] uppercase leading-[1] ${ink}`}>
                          {term}
                        </h3>
                        <p className={`mt-1.5 text-[0.95rem] leading-[1.7] ${inkBody}`}>{detail}</p>
                      </li>
                    ))}
                  </ol>

                  <span aria-hidden="true" className={`mt-10 block border-t ${rule}`} />

                  <p className={`mt-6 text-[0.78rem] uppercase tracking-[0.12em] ${ink}`}>
                    Identity → Stewardship → Becoming → Impact
                  </p>
                  <p className={`mt-3 font-serif text-base italic ${inkSoft}`}>
                    A framework to revisit throughout life, not a destination to complete once.
                  </p>
                </div>
              </Leaf>
            );
          }

          return (
            <Leaf key={leaf.folio} folio={leaf.folio} foot={leaf.foot} mark={mark} rule={rule} inkSoft={inkSoft}>
              <div className={measure}>
                {leaf.title ? (
                  <>
                    <h2 className={`font-display text-[clamp(1.7rem,4.4vw,2.9rem)] uppercase leading-[1] ${ink}`}>
                      {leaf.title}
                    </h2>
                    <span aria-hidden="true" className={`mb-8 mt-6 block border-t ${rule}`} />
                  </>
                ) : null}

                {leaf.paras ? leaf.paras.map((para) => <p key={para} className={body}>{para}</p>) : null}

                {leaf.aside ? (
                  <p
                    className={`mt-7 font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light italic leading-[1.5] ${ink}`}
                  >
                    {leaf.aside}
                  </p>
                ) : null}

                {leaf.more ? leaf.more.map((para) => <p key={para} className={`mt-5 text-[0.95rem] leading-[1.85] ${inkBody}`}>{para}</p>) : null}

                {leaf.close ? (
                  <>
                    <span aria-hidden="true" className={`mt-8 block border-t ${rule}`} />
                    <p className={`mt-6 font-serif text-[clamp(1.05rem,1.9vw,1.3rem)] font-light italic ${ink}`}>
                      {leaf.close}
                    </p>
                  </>
                ) : null}

                {leaf.tail ? leaf.tail.map((para) => <p key={para} className={`mt-5 text-[0.95rem] leading-[1.85] ${inkBody}`}>{para}</p>) : null}

                {leaf.signature ? <p className={`mt-7 text-[0.95rem] ${inkBody}`}>{leaf.signature}</p> : null}

                {leaf.stamp ? (
                  <p className={`mt-8 font-display text-[clamp(1.1rem,2.2vw,1.5rem)] uppercase leading-[1] ${ink}`}>
                    {leaf.stamp}
                  </p>
                ) : null}

                {leaf.refs ? (
                  <p className={`mt-2 text-[0.8rem] ${inkSoft}`}>{leaf.refs}</p>
                ) : null}

                {leaf.link ? (
                  <a
                    href={leaf.link.href}
                    className={`mt-8 inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.12em] underline underline-offset-[6px] transition-colors hover:text-stone ${ink} ${focusRing}`}
                  >
                    {leaf.link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </Leaf>
          );
        })}

        {/* -----------------------------------------------------------------
            The closing leaf
            ----------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden bg-obsidian text-bone">
          <div className="absolute inset-0 z-0">
            <img
              src="/foundations/closing.jpg"
              alt=""
              aria-hidden="true"
              style={{ objectPosition: '50% 45%' }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/80" />
          </div>

          <div className="m1-grain m1-grain-light relative z-10 mx-auto flex min-h-[max(28rem,88svh)] max-w-[86rem] flex-col px-5 sm:min-h-[max(34rem,88svh,70vw)] sm:px-8">
            <p className="pt-5 text-[0.58rem] uppercase tracking-[0.28em] text-taupe">
              The foundation of M1LLION / {year}
            </p>

            <div className="flex flex-1 flex-col items-center justify-center py-16 text-center sm:py-24">
              <h2 className="max-w-[24ch] font-display text-[clamp(1.6rem,4.4vw,3rem)] uppercase leading-[1.08]">
                May M1LLION remain faithful to the One who designed it.
              </h2>

              <p className="mt-7 max-w-[40ch] font-serif text-lg font-light italic leading-[1.5] text-taupe">
                And may what begins with one continue to reach many.
              </p>

              <p className="mt-10 font-display text-[clamp(1.2rem,2.6vw,1.8rem)] uppercase leading-[1]">
                From one to many.
              </p>
              <span aria-hidden="true" className="mt-5 block h-px w-24 bg-bone/40" />

              <p className="mt-6 text-[0.58rem] uppercase tracking-[0.3em] text-taupe">Thank you for reading</p>
              <p className="mt-2 text-[0.58rem] uppercase tracking-[0.3em] text-taupe">m1llionfitness.com</p>

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

            <div className="flex items-end justify-between gap-6 border-t border-bone/20 pb-6 pt-4">
              <p className="text-[0.58rem] uppercase tracking-[0.28em] text-taupe">From one to many</p>
              <img src="/favicon-dark.png" alt="" aria-hidden="true" className="h-5 w-auto opacity-40" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
