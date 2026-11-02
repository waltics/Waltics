
const features = [
  {
    number: "01",
    title: "AI-powered creation",
    description:
      "Turn your ideas into a professional website with intelligent tools that help you build faster.",
  },
  {
    number: "02",
    title: "Complete creative control",
    description:
      "Customize your website, refine your content and make every detail feel like your brand.",
  },
  {
    number: "03",
    title: "Built to grow",
    description:
      "Start with a simple website and expand your online presence as your business grows.",
  },
];

const steps = [
  ["01", "Start with an idea", "Tell WALTICS what you want to create."],
  ["02", "Build your website", "Customize your design and content."],
  ["03", "Launch your vision", "Get your website ready for the world."],
];

const plans = [
  {
    name: "Starter",
    description: "Everything you need to get started.",
    price: "Free",
    features: ["Website creation", "Essential editing tools", "Basic templates"],
  },
  {
    name: "Pro",
    description: "More control and intelligent tools.",
    price: "Coming soon",
    features: ["Everything in Starter", "AI-powered assistance", "Advanced customization"],
    featured: true,
  },
  {
    name: "Business",
    description: "More possibilities for growing teams.",
    price: "Coming soon",
    features: ["Everything in Pro", "Business-focused tools", "Expanded capabilities"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#" aria-label="WALTICS home">
          WALTICS<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <a className="login-link" href="/login">Log in</a>
          <a className="button button-dark nav-button" href="/signup">
            Get started <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="about">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            THE FUTURE OF WEBSITE CREATION
          </div>

          <h1>
            Your vision.
            <br />
            <span>Your website.</span>
          </h1>

          <p className="hero-description">
            A smarter way to bring your ideas online. Create, customize and
            build professional websites with WALTICS.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="/signup">
              Start building <span>↗</span>
            </a>
            <a className="button button-light" href="#features">
              Explore features
            </a>
          </div>

          <p className="hero-note">A new way to build your online presence.</p>
        </div>

        <div className="hero-visual">
          <div className="visual-top">
            <span>WALTICS STUDIO</span>
            <span>WEBSITE PREVIEW ↗</span>
          </div>

          <div className="preview-window">
            <div className="preview-toolbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>yourwebsite.com</span>
              <span>↗</span>
            </div>

            <div className="preview-content">
              <div className="preview-brand">YOUR BRAND.</div>
              <div className="preview-heading">
                Make your
                <br />
                mark online.
              </div>
              <div className="preview-line" />
              <div className="preview-button">DISCOVER MORE ↗</div>
              <div className="preview-footer">DESIGNED TO BE DIFFERENT.</div>
            </div>
          </div>

          <div className="visual-caption">
            <span>01 — YOUR IDEAS, REIMAGINED</span>
            <span>MADE WITH WALTICS</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <span>THINK BIGGER.</span>
        <span>BUILD SMARTER.</span>
        <span>GO FURTHER.</span>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / WHAT WE OFFER</p>
            <h2>Everything starts<br />with an idea.</h2>
          </div>
          <p className="section-intro">
            The tools to turn your ideas into something real. One platform,
            more possibilities.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="card-number">{feature.number}</span>
              <div className="feature-icon">↗</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="section">
          <p className="eyebrow">02 / THE PROCESS</p>
          <div className="how-heading">
            <h2>Three steps.<br />One big idea.</h2>
            <p>From the first thought to a website you're proud to share.</p>
          </div>

          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article className="step-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / SIMPLE PLANS</p>
            <h2>Room to grow.</h2>
          </div>
          <p className="section-intro">
            Start simple. Unlock more possibilities as your needs grow.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`}
              key={plan.name}
            >
              <div className="plan-top">
                <span>{plan.name}</span>
                {plan.featured && <span className="plan-label">POPULAR</span>}
              </div>
              <p>{plan.description}</p>
              <h3>{plan.price}</h3>
              <div className="plan-divider" />
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><span>✓</span> {feature}</li>
                ))}
              </ul>
              <a className={`button ${plan.featured ? "button-dark" : "button-light"}`} href="/signup">
                Get started <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section faq-inner">
          <div>
            <p className="eyebrow">04 / QUESTIONS</p>
            <h2>Good questions.<br />Clear answers.</h2>
          </div>

          <div className="faq-list">
            <details>
              <summary>What is WALTICS?<span>+</span></summary>
              <p>WALTICS is a website-building platform designed to help people create professional websites with intelligent tools.</p>
            </details>
            <details>
              <summary>Do I need coding experience?<span>+</span></summary>
              <p>Our goal is to make website creation accessible, even if you have never written code.</p>
            </details>
            <details>
              <summary>Can I upgrade my plan?<span>+</span></summary>
              <p>We plan to offer different plans as the platform develops.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>Make something<br />worth seeing.</h2>
        <a className="button button-white" href="/signup">
          Get started with WALTICS <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#">WALTICS<span>.</span></a>
        <p>Build your vision. Bring it online.</p>
        <div className="footer-bottom">
          <span>© 2026 WALTICS. All rights reserved.</span>
          <div><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#about">About</a></div>
        </div>
      </footer>
    </main>
  );
}
