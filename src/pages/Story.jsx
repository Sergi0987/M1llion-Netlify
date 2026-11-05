import { useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle.jsx';

// The story runs as an edition: numbered chapters, a reading measure that never
// widens, and three kinds of break between them — a figure beside the text, a
// full-width plate, and a single line held on its own ground.
const STORY = [
  {
    kind: 'chapter',
    n: '01',
    title: 'It started with me.',
    figure: 'right',
    caption: 'Fig. 1 — The first membership',
    paras: [
      'At 18 years old, fitness was never something I imagined turning into a career.',
      'I wasn’t thinking about coaching people, building a business, or becoming a professional athlete.',
      'I honestly just needed something to do.',
      'I didn’t have friends, I wasn’t in college, and I didn’t have a job at the time. I felt like I needed an escape from the life I was living, and the most affordable option I could think of was a Planet Fitness membership.',
      'So that’s where I started.',
      'What I didn’t expect was to discover just how physically weak I actually was.',
      'And for some reason, that bothered me enough to do something about it.',
      'I wanted to become strong. Not necessarily to look a certain way, but to know I could physically take care of myself and defend myself if I ever needed to.',
      'That desire kept bringing me back.',
      'Eventually, I started meeting people who introduced me to different gyms, different training styles, and a world I hadn’t experienced before.',
      'Planet Fitness led to LA Fitness. LA Fitness eventually led to a bodybuilding gym.',
      'And that changed everything about the way I viewed training.',
    ],
  },
  {
    kind: 'chapter',
    n: '02',
    title: 'Strength became a pursuit.',
    paras: [
      'Walking into a bodybuilding gym exposed me to a completely different world.',
      'I saw physiques, levels of strength, and physical development I didn’t even know were possible.',
      'Suddenly, I wanted to see what my own body was capable of.',
      'I found a coach, started learning more, and eventually competed in bodybuilding and powerlifting.',
      'During that season, I was also working nine- to ten-hour shifts at an office job.',
      'And the best part of my day?',
      'Going to the gym at eight or nine o’clock at night.',
      'For years, my routine was practically the same.',
      'Work. Gym. Rest. Repeat.',
      'And I loved it.',
      'Training was the one thing I genuinely looked forward to. It gave me something to pursue, something to improve, and something I could measure through my own effort.',
      'But here’s what people might find surprising.',
      'I had absolutely no desire to become a coach.',
      'People would ask me how I trained, how I achieved certain results, or whether I could help them do the same.',
      'I’d answer their questions. I’d share what I knew.',
      'But I always made one thing clear.',
      'I didn’t want to be their coach.',
      'I was happy to help someone understand something, but I wasn’t interested in taking responsibility for guiding them continuously.',
      'At least, not yet.',
    ],
  },
  { kind: 'plate', caption: 'Pl. A — Work. Gym. Rest. Repeat.' },
  {
    kind: 'chapter',
    n: '03',
    title: 'An opportunity I didn’t plan for.',
    figure: 'left',
    caption: 'Fig. 2 — The first room',
    paras: [
      'In 2020, a gym approached me about coaching group fitness classes.',
      'The timing couldn’t have been better.',
      'I had already reached a point where I was mentally ready to leave my office job. I just didn’t know what I wanted to do next.',
      'So when the opportunity came, I thought, why not?',
      'I took it.',
      'And to my surprise, I loved it.',
      'It was completely different from the work environment I’d known for years.',
      'I enjoyed the energy of group classes, the movement, the interaction, and the experience of teaching something I naturally understood.',
      'Eventually, the gym encouraged me to start personal training as well.',
      'I wasn’t especially excited about that part, but I accepted the assignment.',
      'And this is where I’m going to be transparent.',
      'At first, coaching was not some grand passion of mine.',
      'I realized that the knowledge I’d developed over the years could genuinely help people who didn’t know where to begin.',
      'And I also realized I could make good money doing it.',
      'So yes, initially, I pursued coaching because I saw the financial opportunity.',
      'I’m not going to rewrite my story to make it sound more noble than it was.',
      'But something began changing as I worked with more people.',
    ],
  },
  { kind: 'statement', text: 'I’m not going to rewrite my story to make it sound more noble than it was.' },
  {
    kind: 'chapter',
    n: '04',
    title: 'I started seeing what they couldn’t.',
    paras: [
      'One thing about me is that I genuinely struggle with watching people waste their potential.',
      'I would meet people who were capable of far more than they believed, but something was preventing them from pursuing it.',
      'Sometimes it was a lack of knowledge.',
      'Sometimes it was fear, inconsistency, or the habits they’d become comfortable with.',
      'Other times, they genuinely didn’t recognize what they were capable of.',
      'And I found myself becoming increasingly invested in helping them see it.',
      'At first, I was showing people how to move, train, and build strength.',
      'But then I started watching something else happen.',
      'People became more confident.',
      'They began doing things they previously believed they couldn’t do.',
      'They started understanding their bodies, developing discipline, and realizing they were capable of learning something unfamiliar.',
      'And that brought me a different kind of satisfaction.',
      'I was no longer excited only about what I was earning.',
      'I was excited about what people were becoming capable of doing for themselves.',
      'But there was another reason I recognized these patterns so easily.',
      'Because I had been confronting them in my own life for years.',
    ],
  },
  {
    kind: 'chapter',
    n: '05',
    title: 'I always knew there was more.',
    figure: 'right',
    caption: 'Fig. 3 — The gap',
    paras: [
      'For as long as I can remember, I’ve carried this burning feeling that I was meant for more.',
      'Not necessarily more money, more recognition, or more accomplishments.',
      'Just more.',
      'I knew I had potential.',
      'And throughout my life, other people recognized it, too.',
      'They would tell me they saw something in me. That I was capable. That I could do great things.',
      'And I believed them.',
      'That wasn’t the problem.',
      'The problem was that I couldn’t figure out how to bridge the gap between the potential I recognized and the life I was actually living.',
      'It’s one thing for someone to tell you that you’re capable of more.',
      'It’s another thing entirely to understand how to get there.',
      'I could recognize the distance between where I was and where I wanted to be, but I couldn’t always identify what needed to change.',
      'Years passed.',
      'I kept growing in certain areas, achieving things, and developing skills.',
      'Yet that same underlying pattern kept showing up.',
      'And eventually I became desperate to understand why.',
      'Why did I continue finding myself in situations that didn’t reflect what I knew I was capable of?',
      'Why could I be so disciplined in one area of life and still struggle in another?',
      'What was I missing?',
      'I didn’t want another motivational speech.',
      'I wanted answers.',
    ],
  },
  { kind: 'plate', caption: 'Pl. B — 2024' },
  {
    kind: 'chapter',
    n: '06',
    title: 'Then I started reading the Bible differently.',
    paras: [
      'In 2024, I came to faith.',
      'Someone mentioned to me that the Bible was a manuscript for life.',
      'And I took that literally.',
      'I started reading Scripture because I wanted to understand how life actually works according to God.',
      'I wanted to know who He was.',
      'Why He did what He did.',
      'What His intentions were for humanity.',
      'What His promises actually meant.',
      'Why people repeat destructive patterns.',
      'Whether the things I’d believed about success, struggle, provision, and purpose were actually biblical.',
      'I had questions. A lot of them.',
      'And I wasn’t interested in accepting an answer simply because it sounded comforting.',
      'I wanted to understand what was true.',
      'Even today, I rarely open my Bible simply hoping to feel better about my circumstances.',
      'I open it looking for understanding.',
      'I want to learn God’s character, examine His Word in context, and understand what that means for the decisions I make.',
      'One of the biggest things that changed my perspective was realizing that God doesn’t meet us in our mess simply to affirm everything that keeps us there.',
      'He meets us where we are, but His desire is to transform us.',
      'To deliver us from what holds us captive.',
      'To renew our minds.',
      'To teach us who He is so we can learn to live according to His truth.',
      'And I began understanding something else.',
      'God is faithful to His Word.',
      'He doesn’t change His character to accommodate our preferences.',
      'That made me want to study His promises even more carefully, to understand what He has actually said, to whom, and what it means to trust Him.',
      'I didn’t suddenly have every answer.',
      'I still don’t.',
      'But studying Scripture began challenging patterns in my thinking that physical discipline alone had never addressed.',
      'For years, I had focused on developing physical strength.',
      'Now I was learning to examine the beliefs, decisions, and habits shaping the rest of my life.',
    ],
  },
  { kind: 'statement', text: 'He meets us where we are, but His desire is to transform us.' },
  {
    kind: 'chapter',
    n: '07',
    title: 'Transformation starts with understanding.',
    figure: 'left',
    caption: 'Fig. 4 — On the floor',
    paras: [
      'This changed the way I viewed coaching.',
      'Because here’s something I’ve learned through years of training myself and working with others:',
      'You can give someone the best workout program.',
      'You can tell them what to eat.',
      'You can teach them every exercise, explain every technique, and create the perfect schedule.',
      'But if they never understand why those things matter, how to apply them, and how to take responsibility for their choices, what happens when the program ends?',
      'What happens when the coach is no longer there?',
      'What happens when life gets difficult?',
      'Information alone doesn’t guarantee transformation.',
      'And physical progress doesn’t necessarily mean someone has developed the understanding to sustain it.',
      'True, lasting transformation requires a renewed mind.',
      'That’s why I care so much about education.',
      'I don’t want people simply following instructions because I told them to.',
      'I want them to understand what they’re doing.',
      'Why they’re doing it.',
      'How it affects them.',
      'And how to apply that knowledge long after our time working together has ended.',
      'One of my favorite experiences as a coach is having someone return years later and tell me they’re still applying something I taught them.',
      'But you know what makes me even happier?',
      'When they tell me they taught it to someone else.',
      'Because that means the impact didn’t stop with them.',
      'It multiplied.',
    ],
  },
  {
    kind: 'chapter',
    n: '08',
    title: 'From one to many.',
    paras: [
      'That’s what M1LLION means to me.',
      'It started with one person trying to become stronger.',
      'Me.',
      'Then I began learning things that helped other people.',
      'Those people began applying what they learned, developing their own confidence, and eventually sharing their knowledge with others.',
      'One person became many.',
      'And somewhere along the way, I began recognizing that this principle extends far beyond fitness.',
      'There are people walking through life with enormous potential who lack the knowledge, resources, relationships, or direction to act on it.',
      'There are people fighting battles within their minds that no one else can see.',
      'There are people who have achieved tremendous success and still recognize that there’s another level of growth, responsibility, or purpose ahead of them.',
      'And there are people who simply need someone to show them what’s possible and help them understand how to take the next step.',
      'I know what it’s like to recognize your potential and still struggle to move toward it.',
      'That’s why I care.',
      'But I also believe that growth requires personal responsibility.',
      'I can share knowledge.',
      'I can provide guidance.',
      'I can create opportunities and connect people with resources.',
      'I can encourage, challenge, and teach.',
      'But I cannot live someone else’s life for them.',
      'And I don’t want to.',
      'My goal has never been to make people dependent on me. It’s to help equip them to move forward without needing me forever.',
    ],
  },
  { kind: 'plate', caption: 'Pl. C — One person became many' },
  {
    kind: 'chapter',
    n: '09',
    title: 'The vision is bigger than fitness.',
    figure: 'right',
    caption: 'Fig. 5 — What is being built',
    paras: [
      'Today, M1LLION Fitness is where this mission is taking shape.',
      'Through training, nutrition education, discipline, and community, I get to help people build practical skills that serve them far beyond the gym.',
      'But my vision doesn’t stop there.',
      'I want M1LLION to grow into something much bigger.',
      'A place where people can find resources.',
      'Where knowledge is shared.',
      'Where connections are made.',
      'Where opportunities are created.',
      'Where people are equipped to develop what God has placed in their hands.',
      'Not a place built around handouts or dependence, but one that helps people gain the tools, understanding, and support to take ownership of their growth.',
      'I want the impact to reach people I may never personally meet.',
      'And I want the people who benefit from what we’re building to eventually become resources for someone else.',
      'Because I believe that’s how meaningful impact multiplies.',
    ],
  },
  {
    kind: 'chapter',
    n: '10',
    title: 'And I’m still growing.',
    paras: [
      'I don’t share any of this because I’ve mastered life.',
      'I haven’t.',
      'I’m still learning.',
      'I’m still confronting patterns, developing discipline, studying Scripture, and working to become more responsible with what God has entrusted to me.',
      'My perspective has changed throughout the years, and I expect it to continue growing as I learn.',
      'But one thing has become increasingly clear.',
      'My life was never meant to be measured only by what I accomplish for myself.',
      'It’s also about what I can contribute, what I can teach, what I can cultivate, and what others can carry forward because of it.',
      'I started this journey wanting to become stronger so I could take care of myself.',
      'Today, I want to use what I’ve learned to help others become equipped to do the same in their own lives.',
      'I don’t want to be the destination. I want to help people move toward theirs.',
      'And if something that began with me can eventually help someone I’ll never meet, then the mission is doing exactly what it was meant to do.',
    ],
  },
];

const ringLight =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-obsidian focus-visible:ring-offset-bone';
const ringDark =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-taupe focus-visible:ring-offset-obsidian';

export default function Story({ theme, setTheme }) {
  const year = new Date().getFullYear();
  const isDark = theme === 'dark';
  const focusRing = isDark ? ringDark : ringLight;

  // The edition carries its own name in the tab and in a shared link.
  useEffect(() => {
    const previous = document.title;
    document.title = 'I never planned any of this — M1LLION';

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

  // Photographs are still being chosen. The slots are drawn so the edition reads
  // as laid out rather than broken; each one becomes an <img> when a file lands.
  function Slot({ caption, ratio }) {
    return (
      <figure>
        <div className={`flex items-center justify-center border ${rule} ${ratio}`}>
          <p className={`px-6 text-center text-[0.62rem] uppercase tracking-[0.28em] ${inkSoft}`}>
            Photograph to come
          </p>
        </div>
        <figcaption className={`mt-3 font-serif text-sm italic ${inkSoft}`}>{caption}</figcaption>
      </figure>
    );
  }

  return (
    <div className={`m1 min-h-screen ${ground}`}>
      <a
        href="#story"
        className={`sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:px-4 focus:py-2 ${ground} ${focusRing}`}
      >
        Skip to the story
      </a>

      <header className={`sticky top-0 z-50 border-b ${rule} ${isDark ? 'bg-obsidian/95' : 'bg-bone/95'} backdrop-blur-[2px]`}>
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

      <main id="story">
        {/* -----------------------------------------------------------------
            Masthead
            ----------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden bg-obsidian text-bone">
          <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 sm:px-8">
            <div className="flex items-baseline justify-between gap-6 border-b border-bone/25 py-4 text-[0.62rem] uppercase tracking-[0.28em] text-taupe">
              <span>M1LLION</span>
              <span>The story</span>
            </div>

            <div className="max-w-[52rem] py-20 sm:py-28">
              <h1 className="font-display text-[clamp(2.4rem,7vw,5rem)] uppercase leading-[0.94]">
                I never planned
                <br />
                any of this
              </h1>

              <p className="mt-8 max-w-[46ch] font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] font-light italic leading-[1.45] text-taupe">
                The story behind Carolina Garcia and M1LLION Fitness.
              </p>

              <p className="mt-10 border-t border-bone/20 pt-6 text-[0.62rem] uppercase tracking-[0.28em] text-taupe">
                Written by Carolina Garcia
              </p>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------
            The chapters
            ----------------------------------------------------------------- */}
        {STORY.map((block) => {
          if (block.kind === 'statement') {
            return (
              <section key={block.text} className="relative isolate overflow-hidden bg-charcoal text-bone">
                <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 py-16 sm:px-8 sm:py-24">
                  <p className="max-w-[24ch] font-display text-[clamp(1.8rem,5vw,3.25rem)] uppercase leading-[1.05]">
                    {block.text}
                  </p>
                </div>
              </section>
            );
          }

          if (block.kind === 'plate') {
            return (
              <section key={block.caption} className="relative isolate">
                <div className="mx-auto max-w-[86rem] px-5 py-12 sm:px-8 sm:py-16">
                  <Slot caption={block.caption} ratio="aspect-[16/5]" />
                </div>
              </section>
            );
          }

          const hasFigure = Boolean(block.figure);
          const figureFirst = block.figure === 'left';

          return (
            <section key={block.n} id={`ch-${block.n}`} className="relative isolate scroll-mt-16">
              <div className="m1-grain relative mx-auto max-w-[86rem] px-5 sm:px-8">
                <div className={`flex items-baseline justify-between gap-6 border-b py-4 text-[0.62rem] uppercase tracking-[0.28em] ${rule} ${inkSoft}`}>
                  <span>Ch. {block.n}</span>
                  <span>The story</span>
                </div>

                <div className="grid gap-8 py-16 sm:py-24 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-0">
                  <div className="hidden lg:block">
                    <div className={`sticky top-28 border-l pl-4 ${rule}`}>
                      <p className={`font-serif text-2xl italic leading-none ${inkSoft}`}>{block.n}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className={`max-w-[18ch] font-display text-[clamp(1.9rem,5vw,3.4rem)] uppercase leading-[0.98] ${ink}`}>
                      {block.title}
                    </h2>

                    <div
                      className={`mt-10 grid gap-10 ${
                        hasFigure ? 'lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-14' : ''
                      }`}
                    >
                      {hasFigure && figureFirst ? (
                        <div className="lg:order-2">
                          <div className="lg:sticky lg:top-28">
                            <Slot caption={block.caption} ratio="aspect-[4/5]" />
                          </div>
                        </div>
                      ) : null}

                      <div className={figureFirst ? 'lg:order-1' : undefined}>
                        {block.paras.map((para) => (
                          <p key={para} className={`mt-5 max-w-[62ch] text-[1rem] leading-[1.85] first:mt-0 ${inkBody}`}>
                            {para}
                          </p>
                        ))}
                      </div>

                      {hasFigure && !figureFirst ? (
                        <div>
                          <div className="lg:sticky lg:top-28">
                            <Slot caption={block.caption} ratio="aspect-[4/5]" />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* -----------------------------------------------------------------
            Colophon
            ----------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden bg-obsidian text-bone">
          <div className="m1-grain m1-grain-light relative mx-auto max-w-[86rem] px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="font-display text-[clamp(2rem,6vw,4rem)] uppercase leading-[0.98]">From one to many.</p>

            <p className="mt-8 font-serif text-xl italic text-taupe">— Carolina Garcia</p>

            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.3em] text-taupe">
              John 12:24 &nbsp;|&nbsp; 2 Timothy 2:2 &nbsp;|&nbsp; Romans 12:2
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="/#next-step"
                className={`${btnBase} bg-bone text-obsidian hover:bg-taupe ${ringDark}`}
              >
                Take the next step
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/"
                className={`${btnBase} border border-bone/45 text-bone hover:border-bone hover:bg-bone/10 ${ringDark}`}
              >
                Back to M1LLION
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
