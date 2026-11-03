import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="#home" aria-label="HJB DevNest home">
          <span class="brand-mark">HJB</span>
          <span class="brand-copy"><strong>HJB DevNest</strong><small>INDEPENDENT SOFTWARE DEVELOPER</small></span>
        </a>
        <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Toggle navigation">☰</button>
        <!-- <nav [class.open]="menuOpen" aria-label="Main navigation">
          <a href="#services" (click)="menuOpen = false">Services</a>
          <a href="#about" (click)="menuOpen = false">About</a>
          <a href="#expertise" (click)="menuOpen = false">Expertise</a>
          <a href="#process" (click)="menuOpen = false">Process</a>
          <a class="nav-cta" href="#contact" (click)="menuOpen = false">Let's talk <span>↗</span></a>
        </nav> -->
        <nav [class.open]="menuOpen" aria-label="Main navigation">
          <a href="#services" (click)="scrollToSection('services')">Services</a>
          <a href="#about" (click)="scrollToSection('about')">About</a>
          <a href="#expertise" (click)="scrollToSection('expertise')">Expertise</a>
          <a href="#process" (click)="scrollToSection('process')">Process</a>
          <a class="nav-cta" href="#contact" (click)="scrollToSection('contact')">
            Let's talk <span>↗</span>
          </a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero section" id="home">
        <div class="hero-glow glow-one"></div><div class="hero-glow glow-two"></div>
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="eyebrow"><span class="status-dot"></span> AVAILABLE FOR SELECT PROJECTS</div>
            <h1>I build software that helps <span>businesses move forward.</span></h1>
            <p class="hero-lead">I'm Brijesh Patel, an independent full-stack software developer. I turn business ideas and complex requirements into reliable web applications and custom software.</p>
            <div class="hero-actions">
              <a class="button button-primary"
                 href="#contact"
                 (click)="scrollToSection('contact')">
                Discuss your project <span>↗</span>
              </a>
              <a class="button button-ghost" href="#services">Explore services <span>↓</span></a>
            </div>
            <div class="hero-proof">
              <div><strong>7 years</strong><span>Development experience</span></div>
              <div class="proof-divider"></div>
              <div><strong>Full-stack</strong><span>From UI to database</span></div>
              <div class="proof-divider"></div>
              <div><strong>Direct</strong><span>Developer communication</span></div>
            </div>
          </div>
          <div class="visual-wrap" aria-label="Abstract software development illustration">
            <div class="visual-orbit orbit-a"></div><div class="visual-orbit orbit-b"></div>
            <div class="code-card">
              <div class="code-top"><div class="window-dots"><i></i><i></i><i></i></div><span>solution.ts</span><span class="code-status">● live idea</span></div>
              <div class="code-body">
                <div><b>01</b><span class="code-purple">const</span> <span class="code-blue">businessGoal</span> = <span class="code-green">'your idea'</span>;</div>
                <div><b>02</b><span class="code-purple">const</span> <span class="code-blue">solution</span> = buildSoftware(</div>
                <div><b>03</b>&nbsp;&nbsp;businessGoal,</div>
                <div><b>04</b>&nbsp;&nbsp; thoughtfulEngineering</div>
                <div><b>05</b>);</div>
                <div class="code-spacer"></div>
                <div><b>06</b><span class="code-purple">return</span> <span class="code-green">'business growth'</span>;</div>
              </div>
              <div class="code-bottom"><span><i></i> Thoughtful engineering</span><span>HJB DevNest</span></div>
            </div>
            <div class="float-chip chip-angular"><span class="chip-icon orange">A</span><span><strong>Angular</strong><small>Frontend</small></span></div>
            <div class="float-chip chip-dotnet"><span class="chip-icon violet">.N</span><span><strong>ASP.NET Core</strong><small>Backend</small></span></div>
            <div class="float-chip chip-data"><span class="chip-icon teal">▤</span><span><strong>SQL Server</strong><small>Data layer</small></span></div>
            <div class="visual-caption"><span class="caption-line"></span> IDEAS INTO DIGITAL PRODUCTS</div>
          </div>
        </div>
      </section>

      <section class="trust-strip">
        <div class="container trust-inner"><span>BUILDING WITH A FOCUS ON</span><strong>Clarity</strong><i></i><strong>Reliability</strong><i></i><strong>Maintainability</strong><i></i><strong>Business value</strong></div>
      </section>

      <section class="section services-section" id="services">
        <div class="container">
          <div class="section-heading">
            <div><span class="section-kicker">WHAT I DO</span><h2>Software solutions for<br><span>real business needs.</span></h2></div>
            <p>From a focused business application to a connected software platform, I help shape, build and improve digital products.</p>
          </div>
          <div class="service-grid">
            <article class="service-card"><span class="service-number">01</span><div class="service-icon blue-icon">⌘</div><h3>Custom Software Development</h3><p>Purpose-built software that fits your workflows, business rules and operational goals.</p><a href="#contact">Discuss a solution <span>↗</span></a></article>
            <article class="service-card"><span class="service-number">02</span><div class="service-icon purple-icon">▣</div><h3>Web Application Development</h3><p>Responsive, secure and maintainable web applications built for everyday use.</p><a href="#contact">Discuss a solution <span>↗</span></a></article>
            <article class="service-card"><span class="service-number">03</span><div class="service-icon teal-icon">◫</div><h3>CRM & ERP Development</h3><p>Business systems that bring customer data, processes and teams into one place.</p><a href="#contact">Discuss a solution <span>↗</span></a></article>
            <article class="service-card"><span class="service-number">04</span><div class="service-icon orange-icon">◇</div><h3>SaaS Application Development</h3><p>Scalable software products with thoughtful architecture and room to grow.</p><a href="#contact">Discuss a solution <span>↗</span></a></article>
            <article class="service-card"><span class="service-number">05</span><div class="service-icon pink-icon">⌁</div><h3>API Development & Integration</h3><p>Reliable APIs and integrations that help systems exchange data securely.</p><a href="#contact">Discuss a solution <span>↗</span></a></article>
            <article class="service-card"><span class="service-number">06</span><div class="service-icon green-icon">⟨/⟩</div><h3>Frontend & Backend Engineering</h3><p>End-to-end development using Angular, ASP.NET Core and relational databases.</p><a href="#contact">Discuss a solution <span>↗</span></a></article>
          </div>
        </div>
      </section>

      <section class="section about-section" id="about">
        <div class="container about-grid">
          <div class="about-visual">
            <div class="about-card">
              <div class="about-monogram">BP<span>.</span></div>
              <div class="about-card-bottom"><span>BRIJESH PATEL</span><small>FULL-STACK SOFTWARE DEVELOPER</small></div>
              <div class="about-decoration">BUILD<br>WITH<br>PURPOSE.</div>
            </div>
            <div class="experience-tag"><strong>7+</strong><span>Years of<br>experience</span></div>
          </div>
          <div class="about-copy"><span class="section-kicker">A LITTLE ABOUT ME</span><h2>One developer.<br><span>End-to-end ownership.</span></h2>
            <p class="about-intro">I'm Brijesh Patel, a full-stack software developer with 7 years of professional experience building web-based business solutions.</p>
            <p>I work across frontend interfaces, backend services, database design and API integrations. I believe good software starts with understanding the people and processes behind the requirement.</p>
            <p>When you work with me, you communicate directly with the developer working on your project — from understanding the requirement through development, testing and delivery.</p>
            <div class="about-points"><span>✓ Direct communication</span><span>✓ Practical problem-solving</span><span>✓ Maintainable development</span><span>✓ Clear project updates</span></div>
            <a class="text-link" href="#contact">Let's discuss what you have in mind <span>↗</span></a>
          </div>
        </div>
      </section>

      <section class="section expertise-section" id="expertise">
        <div class="container">
          <div class="section-heading"><div><span class="section-kicker">TECHNICAL EXPERTISE</span><h2>The right tools for<br><span>the right solution.</span></h2></div><p>I choose technologies based on the needs of the project, with an emphasis on dependable architecture and long-term maintainability.</p></div>
          <div class="tech-panel">
            <div class="tech-item"><span class="tech-symbol angular-symbol">A</span><div><strong>Angular</strong><small>Modern frontend applications</small></div></div>
            <div class="tech-item"><span class="tech-symbol dotnet-symbol">.N</span><div><strong>ASP.NET Core</strong><small>Backend & web APIs</small></div></div>
            <div class="tech-item"><span class="tech-symbol sql-symbol">▤</span><div><strong>SQL Server</strong><small>Relational database design</small></div></div>
            <div class="tech-item"><span class="tech-symbol mysql-symbol">◈</span><div><strong>MySQL</strong><small>Database development</small></div></div>
            <div class="tech-item">
              <span class="tech-symbol api-symbol">&#123; &#125;</span>
              <div>
                <strong>REST APIs</strong>
                <small>System integration</small>
              </div>
            </div>
            <div class="tech-item"><span class="tech-symbol git-symbol">⑂</span><div><strong>Git</strong><small>Version control & collaboration</small></div></div>
          </div>
        </div>
      </section>

      <section class="section process-section" id="process">
        <div class="container">
          <div class="center-heading"><span class="section-kicker">HOW I WORK</span><h2>A clear process.<br><span>No unnecessary complexity.</span></h2><p>Good collaboration makes better software. Here's how I take an idea from conversation to delivery.</p></div>
          <div class="process-grid">
            <article><span class="process-step">01</span><h3>Understand</h3><p>Discuss your goals, users, challenges and requirements.</p></article>
            <article><span class="process-step">02</span><h3>Plan</h3><p>Define scope, approach, milestones and technical direction.</p></article>
            <article><span class="process-step">03</span><h3>Develop</h3><p>Build in focused iterations and share progress regularly.</p></article>
            <article><span class="process-step">04</span><h3>Test & Deliver</h3><p>Validate the solution, prepare deployment and hand over clearly.</p></article>
          </div>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="container contact-box">
          <div><span class="section-kicker">HAVE A PROJECT IN MIND?</span><h2>Let's turn your idea<br>into <span>something real.</span></h2><p>Tell me what you're planning, what challenge you're trying to solve, or what you'd like to improve. We'll take it from there.</p></div>
          <div class="contact-actions"><a class="button button-light" href="mailto:hjbdevnest@gmail.com?subject=Project%20Enquiry%20-%20HJB%20DevNest">Email me about your project <span>↗</span></a><a class="contact-email" href="mailto:hjbdevnest@gmail.com">hjbdevnest@gmail.com</a></div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-top">
        <a class="brand footer-brand" href="#home">
          <span class="brand-mark">HJB</span>

          <span class="brand-copy">
            <strong>HJB DevNest</strong>
            <small>YOUR IDEAS. OUR DEVELOPMENT.</small>
          </span>
        </a>

        <p>Independent software development by Brijesh Patel.</p>

        <a href="mailto:hjbdevnest@gmail.com">
          hjbdevnest@gmail.com
        </a>
      </div>

      <div class="container footer-bottom">
        <span>
          &copy; {{ currentYear }} HJB DevNest. All rights reserved.
        </span>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  `,
})
export class AppComponent {
  menuOpen = false;
  currentYear = new Date().getFullYear();

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    this.menuOpen = false;
  }
}