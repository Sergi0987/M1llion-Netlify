import React, { useEffect, useState } from "react";

const products = [
  {
    id: "shirt",
    name: "Performance Tee",
    price: "$28.00",
    stripeUrl: "https://buy.stripe.com/your_perf_tee_link",
    image: "https://picsum.photos/600/600?random=1",
    imageAlt: "Black performance tee",
  },
  {
    id: "leggings",
    name: "Seamless Leggings",
    price: "$45.00",
    stripeUrl: "https://buy.stripe.com/your_leggings_link",
    image: "https://picsum.photos/600/600?random=2",
    imageAlt: "High-waisted seamless leggings",
  },
  {
    id: "hoodie",
    name: "Cropped Hoodie",
    price: "$52.00",
    stripeUrl: "https://buy.stripe.com/your_hoodie_link",
    image: "https://picsum.photos/600/600?random=3",
    imageAlt: "Cropped gym hoodie",
  },
];

// Reusable focus styles (consistent, AA-friendly)
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

export default function App() {
  const year = new Date().getFullYear();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const scriptId = "elfsight-platform-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Close mobile menu when clicking an anchor link
  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div className="bg-white text-slate-900">
      {/* Skip link (keyboard users) */}
      <a
        href="#main"
        className={`sr-only focus:not-sr-only fixed top-3 left-3 z-[9999] bg-white border rounded-xl px-4 py-2 shadow ${focusRing}`}
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <a
            href="#top"
            className={`flex items-center ${focusRing}`}
            aria-label="M1llion Fitness home"
          >
            <img
              src="/logoCropped.png"
              alt="M1llion Fitness"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#coaching" className={`hover:opacity-70 ${focusRing}`}>
              Coaching
            </a>
            <a href="#shop" className={`hover:opacity-70 ${focusRing}`}>
              Shop
            </a>
            <a href="#about" className={`hover:opacity-70 ${focusRing}`}>
              About
            </a>
            <a href="#instagram" className={`hover:opacity-70 ${focusRing}`}>
              Instagram
            </a>
            <a href="#contact" className={`hover:opacity-70 ${focusRing}`}>
              Contact
            </a>
          </nav>

          {/* Mobile nav button */}
          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium ${focusRing}`}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {/* Mobile nav panel */}
        <nav
          id="mobile-nav"
          aria-label="Mobile primary"
          className={`md:hidden border-t bg-white ${mobileNavOpen ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm font-medium">
            <a href="#coaching" onClick={closeMobileNav} className={`py-2 ${focusRing}`}>
              Coaching
            </a>
            <a href="#shop" onClick={closeMobileNav} className={`py-2 ${focusRing}`}>
              Shop
            </a>
            <a href="#about" onClick={closeMobileNav} className={`py-2 ${focusRing}`}>
              About
            </a>
            <a href="#instagram" onClick={closeMobileNav} className={`py-2 ${focusRing}`}>
              Instagram
            </a>
            <a href="#contact" onClick={closeMobileNav} className={`py-2 ${focusRing}`}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main id="main">
        {/* Hero */}
        <section
          id="top" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-14 md:py-20">

          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
            {/* Logo FIRST on mobile, SECOND on desktop */}
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 w-full max-w-sm mx-auto sm:max-w-md md:max-w-none">
                <img
                  src="/C14.png"
                  alt="M1llion Fitness logo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Text SECOND on mobile, FIRST on desktop */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Train with Confidence. Wear with Purpose.
              </h1>

              <p className="mt-4 text-slate-700 text-lg">
                Programs that get results—and apparel built for the grind.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#coaching"
                  className={`px-6 py-3 rounded-xl bg-black text-white ${focusRing}`}
                >
                  Start Coaching
                </a>
                <a
                  href="#shop"
                  className={`px-6 py-3 rounded-xl border ${focusRing}`}
                >
                  Shop Apparel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching */}
        <section id="coaching" className="scroll-mt-24 bg-slate-50 border-y">
          <div className="max-w-6xl mx-auto px-4 py-14 space-y-8">
            <h2 className="text-center md:text-left text-3xl font-bold">Coaching</h2>
            <p className="text-center md:text-left text-slate-700 text-sm md:text-base max-w-2xl">
              Whether you want fully personalized 1:1 support or to train in a
              group setting, you can work with Carolina in the way that fits your
              life best.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 1:1 Coaching (Kahunas) */}
              <article className="rounded-2xl bg-white p-6 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">1:1 Online Coaching</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Custom training plans, macros, and weekly check-ins delivered
                    through Kahunas. Built for women who want structure,
                    accountability, and real progress.
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-slate-800 space-y-1 text-sm">
                    <li>Personalized training &amp; nutrition</li>
                    <li>Weekly check-ins &amp; form feedback</li>
                    <li>Habit tracking &amp; performance focus</li>
                  </ul>
                </div>

                <a
                  href="https://kahunas.io/coach/packages/list/a13e6be5-d737-47e0-b37e-8e8efbcf2c4c"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Book 1:1 on Kahunas (opens in a new tab)"
                  className={`mt-6 inline-block px-5 py-3 rounded-xl bg-black text-white text-sm text-center hover:bg-gray-900 ${focusRing}`}
                >
                  Book 1:1 on Kahunas
                </a>
              </article>

              {/* Group Classes (Setmore) */}
              <article className="rounded-2xl bg-white p-6 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Group Classes</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    High-energy classes designed to push you, support you, and make
                    training fun. Perfect if you love community and coaching in
                    person.
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-slate-800 space-y-1 text-sm">
                    <li>Strength &amp; conditioning style workouts</li>
                    <li>Supportive, women-focused environment</li>
                    <li>Book single sessions or packs</li>
                  </ul>
                </div>

                <a
                  href="https://m1llionfitness.setmore.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Book classes on Setmore (opens in a new tab)"
                  className={`mt-6 inline-block px-5 py-3 rounded-xl bg-black text-white text-sm text-center hover:bg-gray-900 ${focusRing}`}
                >
                  Book Classes on Setmore
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Shop */}
        <section id="shop" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-center md:text-left text-3xl font-bold">Featured Apparel</h2>
          <p className="text-center md:text-left mt-2 text-slate-700">Secure checkout via Stripe.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="border rounded-2xl p-4 bg-white shadow-sm"
              >
                <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-3 font-semibold">{product.name}</h3>
                <p className="text-slate-700">{product.price}</p>

                <a
                  href={product.stripeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Buy ${product.name} with Stripe (opens in a new tab)`}
                  className={`mt-3 inline-block px-4 py-2 rounded-xl bg-black text-white text-sm hover:bg-gray-900 ${focusRing}`}
                >
                  Buy with Stripe
                </a>
              </article>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Shipping &amp; returns info at checkout.
          </p>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 bg-slate-50 border-y">
          <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 items-stretch">
            
            {/* Image column */}
            <div className="order-2 md:order-1 w-full flex justify-center md:justify-start">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-black min-h-[480px] max-h-[680px]">
                <img
                  src="/headshot.png"
                  alt="Carolina training clients in a gym"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text column */}
            <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-3xl font-bold">Meet Carolina</h2>
              <p className="mt-3 text-slate-700">
                Certified trainer helping clients build strength and confidence,
                on and off the gym floor.
              </p>
            </div>

          </div>
        </section>


        {/* Instagram */}
        <section id="instagram" className="scroll-mt-24 bg-slate-50 border-y">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <div className="mb-6 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold">Instagram</h2>
                <p className="mt-1 text-slate-700 text-sm md:text-base">
                  Latest posts from Carolina&apos;s feed.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              {/* Widget region label + fallback */}
                <div className="elfsight-app-17c86385-c4ee-440f-bab3-a003bbe60d01">
                </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-14">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">Questions? Let’s talk.</h2>

            <form
              action="https://formspree.io/f/xzzjagqp"
              method="POST"
              className="mt-6 grid gap-3 w-full max-w-md text-left"
              acceptCharset="UTF-8"
              aria-describedby="contact-help"
            >
              <input
                type="hidden"
                name="_subject"
                value="New contact from M1llion site"
              />

              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label className="sr-only" htmlFor="contact-name">
                  Your name
                </label>
                <input
                  id="contact-name"
                  className={`w-full border rounded-xl px-4 py-3 ${focusRing}`}
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-email">
                  Email address
                </label>
                <input
                  id="contact-email"
                  className={`w-full border rounded-xl px-4 py-3 ${focusRing}`}
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  inputMode="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className={`w-full border rounded-xl px-4 py-3 ${focusRing}`}
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className={`px-5 py-3 rounded-xl bg-black text-white text-sm ${focusRing}`}
              >
                Send
              </button>

              <p id="contact-help" className="text-center text-xs text-slate-600">
                We’ll respond as soon as possible.
              </p>
            </form>

            <p className="mt-4 text-xs text-slate-600 max-w-md">
              By submitting, you agree to our{" "}
              <a className={`underline ${focusRing}`} href="/privacy.html">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-wrap gap-4 justify-between">
          <span>
            © <span>{year}</span> M1llion. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a className={`underline ${focusRing}`} href="/privacy">
              Privacy
            </a>
            <a className={`underline ${focusRing}`} href="/terms">
              Terms of use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
