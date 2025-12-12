import React, { useEffect } from "react";

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


export default function App() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    // Avoid adding the script multiple times on hot reload
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#top" className="text-xl font-bold">M1llion</a>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#coaching" className="hover:opacity-70">Coaching</a>
            <a href="#shop" className="hover:opacity-70">Shop</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#instagram" className="hover:opacity-70">Instagram</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>

          
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Train with Confidence. Wear with Purpose.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Programs that get results—and apparel built for the grind.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#coaching"
              className="px-6 py-3 rounded-xl bg-black text-white"
            >
              Start Coaching
            </a>
            <a
              href="#shop"
              className="px-6 py-3 rounded-xl border"
            >
              Shop Apparel
            </a>
          </div>
        </div>

        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
          <img
            src="../public/M1llionLogo.png"
            alt="Hero placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Coaching */}
      <section id="coaching" className="bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-14 space-y-8">
          <h2 className="text-3xl font-bold">Coaching</h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl">
            Whether you want fully personalized 1:1 support or to train in a
            group setting, you can work with Carolina in the way that fits your
            life best.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1:1 Coaching (Kahunas) */}
            <div className="rounded-2xl bg-white p-6 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">1:1 Online Coaching</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Custom training plans, macros, and weekly check-ins delivered
                  through Kahunas. Built for women who want structure,
                  accountability, and real progress.
                </p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1 text-sm">
                  <li>Personalized training &amp; nutrition</li>
                  <li>Weekly check-ins &amp; form feedback</li>
                  <li>Habit tracking &amp; performance focus</li>
                </ul>
              </div>

              <a
                href="https://kahunas.io/coach/packages/list/a13e6be5-d737-47e0-b37e-8e8efbcf2c4c"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block px-5 py-3 rounded-xl bg-black text-white text-sm text-center hover:bg-gray-900"
              >
                Book 1:1 on Kahunas
              </a>
            </div>

            {/* Group Classes (Setmore) */}
            <div className="rounded-2xl bg-white p-6 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Group Classes</h3>
                <p className="mt-2 text-sm text-slate-600">
                  High-energy classes designed to push you, support you, and make
                  training fun. Perfect if you love community and coaching in
                  person.
                </p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1 text-sm">
                  <li>Strength &amp; conditioning style workouts</li>
                  <li>Supportive, women-focused environment</li>
                  <li>Book single sessions or packs</li>
                </ul>
              </div>

              <a
                href="https://m1llionfitness.setmore.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block px-5 py-3 rounded-xl bg-black text-white text-sm text-center hover:bg-gray-900"
              >
                Book Classes on Setmore
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Shop */}
      <section id="shop" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold">Featured Apparel</h2>
        <p className="mt-2 text-slate-600">Secure checkout via Stripe.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="border rounded-2xl p-4 bg-white shadow-sm"
            >
              <div className="aspect-square bg-slate-100 rounded-xl">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* later: replace the div above with an <img src="..." alt={product.imageAlt} /> */}

              <h3 className="mt-3 font-semibold">{product.name}</h3>
              <p className="text-slate-600">{product.price}</p>

              <a
                href={product.stripeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block px-4 py-2 rounded-xl bg-black text-white text-sm hover:bg-gray-900"
              >
                Buy with Stripe
              </a>
            </article>
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Shipping &amp; returns info at checkout.
        </p>
      </section>


      {/* About */}
      <section id="about" className="bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
            <img
              src="https://picsum.photos/1200/900?grayscale&random=10"
              alt="Hero placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Meet Carolina</h2>
            <p className="mt-3 text-slate-600">
              Certified trainer helping clients build strength and confidence,
              on and off the gym floor.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold">Instagram</h2>
              <p className="mt-1 text-slate-600 text-sm md:text-base">
                Latest posts from Carolina&apos;s feed.
              </p>
            </div>
          </div>

          {/* Elfsight widget container */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
            <div
              className="elfsight-app-17c86385-c4ee-440f-bab3-a003bbe60d01"
            ></div>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">Questions? Let’s talk.</h2>

          <form
            action="https://formspree.io/f/xzzjagqp"
            method="POST"
            className="mt-6 grid gap-3 w-full max-w-md"
            acceptCharset="UTF-8"
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
            />

            <input
              className="border rounded-xl px-4 py-3"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="border rounded-xl px-4 py-3"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="border rounded-xl px-4 py-3"
              name="message"
              rows={4}
              placeholder="How can we help?"
            />

            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-black text-white text-sm"
            >
              Send
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-500 max-w-md">
            By submitting, you agree to our{" "}
            <a className="underline" href="/privacy.html">
              Privacy Policy
            </a>.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-wrap gap-4 justify-between">
          <span>
            © <span>{year}</span> M1llion. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a className="underline" href="/privacy.html">
              Privacy
            </a>
            <a className="underline" href="/terms.html">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
