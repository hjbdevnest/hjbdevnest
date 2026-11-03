
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header class="site-header">
      <div class="container nav-wrap">

        <a class="brand" href="#home" aria-label="HJB DevNest home">
          <span class="brand-mark">HJB</span>
          <span class="brand-copy">
            <strong>HJB DevNest</strong>
            <small>INDEPENDENT SOFTWARE DEVELOPER</small>
          </span>
        </a>

        <button
          class="menu-toggle"
          type="button"
          (click)="menuOpen = !menuOpen"
          [attr.aria-expanded]="menuOpen"
          aria-controls="main-navigation"
          aria-label="Toggle navigation">
          ☰
        </button>

        <nav
          id="main-navigation"
          [class.open]="menuOpen"
          aria-label="Main navigation">

          <a href="#services" (click)="scrollToSection('services')">Services</a>
          <a href="#about" (click)="scrollToSection('about')">About</a>
          <a href="#expertise" (click)="scrollToSection('expertise')">Expertise</a>
          <a href="#process" (click)="scrollToSection('process')">Process</a>

          <a
            class="nav-cta"
            href="#contact"
            (click)="scrollToSection('contact')">
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>

      </div>
    </header>

    <main>

      <!-- Hero Section -->
      <section class="hero section" id="home" aria-labelledby="hero-title">

        <div class="hero-glow glow-one" aria-hidden="true"></div>
        <div class="hero-glow glow-two" aria-hidden="true"></div>

        <div class="container hero-grid">

          <div class="hero-content">

            <div class="eyebrow">
              <span class="status-dot" aria-hidden="true"></span>
              AVAILABLE FOR SELECT PROJECTS
            </div>

            <h1 id="hero-title">
              Custom Software & Web Application Development
              <span>That Helps Businesses Move Forward.</span>
            </h1>

            <p class="hero-lead">
              I'm Brijesh Patel, an independent full-stack software developer
              with 7 years of experience. I build custom software, business
              applications and scalable web solutions that help businesses
              simplify operations and achieve their goals.
            </p>

            <div class="hero-actions">

              <a
                class="button button-primary"
                href="#contact"
                (click)="scrollToSection('contact')">
                Discuss your project <span aria-hidden="true">↗</span>
              </a>

              <a class="button button-ghost" href="#services">
                Explore services <span aria-hidden="true">↓</span>
              </a>

            </div>

            <div class="hero-proof">
              <div>
                <strong>7 years</strong>
                <span>Development experience</span>
              </div>

              <div class="proof-divider" aria-hidden="true"></div>

              <div>
                <strong>Full-stack</strong>
                <span>From UI to database</span>
              </div>

              <div class="proof-divider" aria-hidden="true"></div>

              <div>
                <strong>Direct</strong>
                <span>Developer communication</span>
              </div>
            </div>

          </div>

          <div
            class="visual-wrap"
            role="img"
            aria-label="Illustration representing software development using Angular, ASP.NET Core and SQL Server">

            <div class="visual-orbit orbit-a" aria-hidden="true"></div>
            <div class="visual-orbit orbit-b" aria-hidden="true"></div>

            <div class="code-card">

              <div class="code-top">
                <div class="window-dots" aria-hidden="true">
                  <i></i><i></i><i></i>
                </div>
                <span>solution.ts</span>
                <span class="code-status">● live idea</span>
              </div>

              <div class="code-body">
                <div><b>01</b><span class="code-purple">const</span> <span class="code-blue">businessGoal</span> = <span class="code-green">'your idea'</span>;</div>
                <div><b>02</b><span class="code-purple">const</span> <span class="code-blue">solution</span> = buildSoftware(</div>
                <div><b>03</b>&nbsp;&nbsp;businessGoal,</div>
                <div><b>04</b>&nbsp;&nbsp; thoughtfulEngineering</div>
                <div><b>05</b>);</div>
                <div class="code-spacer"></div>
                <div><b>06</b><span class="code-purple">return</span> <span class="code-green">'business growth'</span>;</div>
              </div>

              <div class="code-bottom">
                <span><i></i> Thoughtful engineering</span>
                <span>HJB DevNest</span>
              </div>

            </div>

            <div class="float-chip chip-angular">
              <span class="chip-icon orange">A</span>
              <span><strong>Angular</strong><small>Frontend</small></span>
            </div>

            <div class="float-chip chip-dotnet">
              <span class="chip-icon violet">.N</span>
              <span><strong>ASP.NET Core</strong><small>Backend</small></span>
            </div>

            <div class="float-chip chip-data">
              <span class="chip-icon teal">▤</span>
              <span><strong>SQL Server</strong><small>Data layer</small></span>
            </div>

            <div class="visual-caption">
              <span class="caption-line"></span>
              IDEAS INTO DIGITAL PRODUCTS
            </div>

          </div>

        </div>
      </section>

      <!-- Trust Section -->
      <section class="trust-strip" aria-label="Development values">
        <div class="container trust-inner">
          <span>BUILDING WITH A FOCUS ON</span>
          <strong>Clarity</strong>
          <i aria-hidden="true"></i>
          <strong>Reliability</strong>
          <i aria-hidden="true"></i>
          <strong>Maintainability</strong>
          <i aria-hidden="true"></i>
          <strong>Business value</strong>
        </div>
      </section>

      <!-- Services Section -->
      <section
        class="section services-section"
        id="services"
        aria-labelledby="services-title">

        <div class="container">

          <div class="section-heading">
            <div>
              <span class="section-kicker">WHAT I DO</span>
              <h2 id="services-title">
                Custom Software Development Services
                <span>For Real Business Needs.</span>
              </h2>
            </div>

            <p>
              From custom business applications to connected software
              platforms, I provide web development and software engineering
              solutions designed around your business requirements.
            </p>
          </div>

          <div class="service-grid">

            <article class="service-card">
              <span class="service-number">01</span>
              <div class="service-icon blue-icon" aria-hidden="true">⌘</div>
              <h3>Custom Software Development</h3>
              <p>
                Custom-built software solutions designed around your
                workflows, business rules and operational goals.
              </p>
              <a href="#contact">
                Discuss custom software development <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article class="service-card">
              <span class="service-number">02</span>
              <div class="service-icon purple-icon" aria-hidden="true">▣</div>
              <h3>Web Application Development</h3>
              <p>
                Responsive, secure and maintainable web applications
                built to support your business processes.
              </p>
              <a href="#contact">
                Discuss web application development <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article class="service-card">
              <span class="service-number">03</span>
              <div class="service-icon teal-icon" aria-hidden="true">◫</div>
              <h3>CRM & ERP Development</h3>
              <p>
                Business management systems that organize customer data,
                streamline operations and connect your teams.
              </p>
              <a href="#contact">
                Discuss CRM and ERP development <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article class="service-card">
              <span class="service-number">04</span>
              <div class="service-icon orange-icon" aria-hidden="true">◇</div>
              <h3>SaaS Application Development</h3>
              <p>
                Scalable SaaS applications with reliable architecture,
                practical features and room for future growth.
              </p>
              <a href="#contact">
                Discuss SaaS application development <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article class="service-card">
              <span class="service-number">05</span>
              <div class="service-icon pink-icon" aria-hidden="true">⌁</div>
              <h3>API Development & Integration</h3>
              <p>
                Secure REST API development and system integrations
                that allow your applications to exchange data reliably.
              </p>
              <a href="#contact">
                Discuss API development and integration <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article class="service-card">
              <span class="service-number">06</span>
              <div class="service-icon green-icon" aria-hidden="true">⟨/⟩</div>
              <h3>Frontend & Backend Development</h3>
              <p>
                End-to-end application development using Angular,
                ASP.NET Core, SQL Server and modern web technologies.
              </p>
              <a href="#contact">
                Discuss frontend and backend development <span aria-hidden="true">↗</span>
              </a>
            </article>

          </div>
        </div>
      </section>

      <!-- About Section -->
      <section
        class="section about-section"
        id="about"
        aria-labelledby="about-title">

        <div class="container about-grid">

          <div class="about-visual">

            <div class="about-card">
              <div class="about-monogram">BP<span>.</span></div>

              <div class="about-card-bottom">
                <span>BRIJESH PATEL</span>
                <small>FULL-STACK SOFTWARE DEVELOPER</small>
              </div>

              <div class="about-decoration" aria-hidden="true">
                BUILD<br>WITH<br>PURPOSE.
              </div>
            </div>

            <div class="experience-tag">
              <strong>7+</strong>
              <span>Years of<br>experience</span>
            </div>

          </div>

          <div class="about-copy">

            <span class="section-kicker">ABOUT THE DEVELOPER</span>

            <h2 id="about-title">
              Experienced Software Developer.
              <span>End-to-End Project Ownership.</span>
            </h2>

            <p class="about-intro">
              I'm Brijesh Patel, an independent full-stack software
              developer with 7 years of professional experience
              building custom software and web-based business solutions.
            </p>

            <p>
              My expertise covers frontend development with Angular,
              backend development using ASP.NET Core, database design
              with SQL Server and MySQL, and REST API integrations.
            </p>

            <p>
              I work directly with clients to understand their requirements
              and convert business challenges into practical, maintainable
              software solutions — from initial planning through development,
              testing and delivery.
            </p>

            <div class="about-points">
              <span>✓ Direct communication</span>
              <span>✓ Practical problem-solving</span>
              <span>✓ Maintainable development</span>
              <span>✓ Clear project updates</span>
            </div>

            <a class="text-link" href="#contact">
              Let's discuss your software project <span aria-hidden="true">↗</span>
            </a>

          </div>
        </div>
      </section>

      <!-- Expertise Section -->
      <section
        class="section expertise-section"
        id="expertise"
        aria-labelledby="expertise-title">

        <div class="container">

          <div class="section-heading">
            <div>
              <span class="section-kicker">TECHNICAL EXPERTISE</span>
              <h2 id="expertise-title">
                Technologies I Use
                <span>To Build Reliable Software.</span>
              </h2>
            </div>

            <p>
              I select technologies based on project requirements,
              focusing on dependable architecture, application
              performance and long-term maintainability.
            </p>
          </div>

          <div class="tech-panel">

            <div class="tech-item">
              <span class="tech-symbol angular-symbol" aria-hidden="true">A</span>
              <div>
                <strong>Angular</strong>
                <small>Frontend application development</small>
              </div>
            </div>

            <div class="tech-item">
              <span class="tech-symbol dotnet-symbol" aria-hidden="true">.N</span>
              <div>
                <strong>ASP.NET Core</strong>
                <small>Backend development and web APIs</small>
              </div>
            </div>

            <div class="tech-item">
              <span class="tech-symbol sql-symbol" aria-hidden="true">▤</span>
              <div>
                <strong>SQL Server</strong>
                <small>Relational database development</small>
              </div>
            </div>

            <div class="tech-item">
              <span class="tech-symbol mysql-symbol" aria-hidden="true">◈</span>
              <div>
                <strong>MySQL</strong>
                <small>Database design and development</small>
              </div>
            </div>

            <div class="tech-item">
              <span class="tech-symbol api-symbol" aria-hidden="true">&#123; &#125;</span>
              <div>
                <strong>REST APIs</strong>
                <small>API development and system integration</small>
              </div>
            </div>

            <div class="tech-item">
              <span class="tech-symbol git-symbol" aria-hidden="true">⑂</span>
              <div>
                <strong>Git</strong>
                <small>Version control and collaboration</small>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section
        class="section process-section"
        id="process"
        aria-labelledby="process-title">

        <div class="container">

          <div class="center-heading">
            <span class="section-kicker">HOW I WORK</span>

            <h2 id="process-title">
              A Clear Software Development Process.
              <span>No Unnecessary Complexity.</span>
            </h2>

            <p>
              Good collaboration makes better software. Here's how I take
              your idea from initial discussion to a working solution.
            </p>
          </div>

          <div class="process-grid">

            <article>
              <span class="process-step">01</span>
              <h3>Understand Requirements</h3>
              <p>
                Understand your business goals, users, challenges
                and software requirements.
              </p>
            </article>

            <article>
              <span class="process-step">02</span>
              <h3>Plan the Solution</h3>
              <p>
                Define project scope, technical approach, milestones
                and development direction.
              </p>
            </article>

            <article>
              <span class="process-step">03</span>
              <h3>Develop the Application</h3>
              <p>
                Build the software in focused iterations and
                share progress throughout development.
              </p>
            </article>

            <article>
              <span class="process-step">04</span>
              <h3>Test & Deliver</h3>
              <p>
                Validate the application, prepare deployment
                and complete a clear project handover.
              </p>
            </article>

          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section
        class="section contact-section"
        id="contact"
        aria-labelledby="contact-title">

        <div class="container contact-box">

          <div>
            <span class="section-kicker">HAVE A PROJECT IN MIND?</span>

            <h2 id="contact-title">
              Let's Turn Your Idea
              <span>Into Something Real.</span>
            </h2>

            <p>
              Tell me about your software project, business requirements
              or the challenge you want to solve. Let's discuss how
              the right software solution can help your business.
            </p>
          </div>

          <div class="contact-actions">

            <a
              class="button button-light"
              href="mailto:hjbdevnest@gmail.com?subject=Project%20Enquiry%20-%20HJB%20DevNest">
              Email me about your project <span aria-hidden="true">↗</span>
            </a>

            <a
              class="contact-email"
              href="mailto:hjbdevnest@gmail.com">
              hjbdevnest@gmail.com
            </a>

          </div>

        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="site-footer">

      <div class="container footer-top">

        <a class="brand footer-brand" href="#home" aria-label="HJB DevNest home">

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
  `
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
