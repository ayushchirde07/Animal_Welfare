import React from 'react'
import './App.css'


function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      {title ? (
        <div className="sectionHeading">
          <h2>{title}</h2>
        </div>
      ) : null}
      <div className="container">{children}</div>
    </section>
  )
}

function FAQItem({ q, a }) {
  return (
    <details className="faqItem">
      <summary>{q}</summary>
      <p>{a}</p>
    </details>
  )
}

export default function App() {
  return (
    <div className="appRoot">
      <a className="skipLink" href="#contact">
        Skip to contact
      </a>

      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand" aria-label="Brand">
            <span className="brandMark" aria-hidden="true">
              🐾
            </span>
            <span className="brandName">RescueLink</span>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#partners">NGO Partners</a>
            <a href="#faq">FAQ</a>

          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="container heroInner">
          <div className="heroCopy">
            <p className="heroKicker">Fast help for injured or sick animals</p>
            <h1>Together We Save Lives</h1>
            <p className="heroSub">
              Report injured or sick animals instantly and connect with NGOs, volunteers and veterinary hospitals for faster rescue.
            </p>

            <div className="heroCtas">
              <a className="btn btnPrimary" href="#contact">
                Report Animal
              </a>
              <a className="btn btnSecondary" href="#volunteer">
                Become Volunteer
              </a>
            </div>

            <div className="heroQuickPoints" role="list">
              <div className="quickPoint" role="listitem">
                <div className="quickTitle">Instant reporting</div>
                <div className="quickDesc">Share location + brief details</div>
              </div>
              <div className="quickPoint" role="listitem">
                <div className="quickTitle">Real responders</div>
                <div className="quickDesc">NGOs & vetted volunteers</div>
              </div>
              <div className="quickPoint" role="listitem">
                <div className="quickTitle">Hospital routing</div>
                <div className="quickDesc">Connect to nearby vet care</div>
              </div>
            </div>
          </div>

          
          <div className="heroVisual" aria-label="Illustration">
            <div className="heroImgPlaceholder" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <Section id="features" title="Features">
        <div className="grid3">
          <div className="card">
            <h3>One-minute reports</h3>
            <p>Tell us what happened and where it is. The system routes the request to the right responders.</p>
          </div>
          <div className="card">
            <h3>NGO + volunteer matching</h3>
            <p>Get connected with NGOs and volunteers who can respond based on location and availability.</p>
          </div>
          <div className="card">
            <h3>Clear updates</h3>
            <p>Receive status updates so you know who is handling the rescue and what to expect next.</p>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works" title="How It Works" className="sectionAlt">
        <div className="steps">
          <div className="step">
            <div className="stepNum">1</div>
            <div className="stepBody">
              <h3>Report</h3>
              <p>Submit the animal’s condition and location for immediate routing.</p>
            </div>
          </div>
          <div className="step">
            <div className="stepNum">2</div>
            <div className="stepBody">
              <h3>Connect</h3>
              <p>We connect you with NGOs, volunteers and veterinary hospitals nearby.</p>
            </div>
          </div>
          <div className="step">
            <div className="stepNum">3</div>
            <div className="stepBody">
              <h3>Rescue</h3>
              <p>Responders coordinate the next steps—care, transport, and follow-ups.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* STATISTICS */}
      <section className="section" aria-label="Statistics">
        <div className="container">
          <div className="statsGrid">
            <div className="statCard">
              <div className="statValue">12,480+</div>
              <div className="statLabel">Animals Rescued</div>
            </div>
            <div className="statCard">
              <div className="statValue">180+</div>
              <div className="statLabel">NGOs Connected</div>
            </div>
            <div className="statCard">
              <div className="statValue">2,600+</div>
              <div className="statLabel">Active Volunteers</div>
            </div>
            <div className="statCard">
              <div className="statValue">92%</div>
              <div className="statLabel">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* NGO PARTNERS */}
      <Section id="partners" title="NGO Partners" className="sectionAlt">
        <div className="logos" aria-label="Partner list">
          {[
            'City Animal Rescue',
            'Paws for Care',
            'Street Vet Support',
            'Hope Shelter Network',
            'Rescue & Rehome',
            'Veteran Volunteers Trust',
          ].map((name) => (
            <div key={name} className="logoPill" role="listitem">
              {name}
            </div>
          ))}
        </div>
      </Section>

      {/* SUCCESS STORIES */}
      <Section id="stories" title="Success Stories">
        <div className="grid3">
          <div className="card cardStory">
            <h3>Quick rescue near the railway</h3>
            <p>A passerby reported an injured dog. A nearby volunteer team reached within minutes and connected with a vet hospital.</p>
          </div>
          <div className="card cardStory">
            <h3>Calf saved after heavy rain</h3>
            <p>Report received during monsoon hours. NGO responders provided first aid and arranged safe transport.</p>
          </div>
          <div className="card cardStory">
            <h3>Cat recovered with follow-up care</h3>
            <p>Matched to a local shelter for medication and monitoring, ensuring recovery and rehabilitation.</p>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" title="Testimonials" className="sectionAlt">
        <div className="grid2">
          <div className="testimonial">
            <p className="quote">“The report was simple, and the response was immediate. The animal got help faster than we expected.”</p>
            <div className="who">— Riya, Volunteer</div>
          </div>
          <div className="testimonial">
            <p className="quote">“This platform connects us to the right partners. Updates make coordination much easier for NGOs.”</p>
            <div className="who">— Ahmed, NGO Coordinator</div>
          </div>
          <div className="testimonial">
            <p className="quote">“We received clear details and location. That saved critical time during triage.”</p>
            <div className="who">— Dr. Menon, Veterinary Hospital</div>
          </div>
          <div className="testimonial">
            <p className="quote">“I reported a struggling dog and within hours the rescue plan was in motion.”</p>
            <div className="who">— Sara, Community Member</div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ">
        <div className="faqGrid">
          <FAQItem q="How fast can someone respond?" a="Response speed depends on location and availability, but reports are routed to nearby NGOs and active volunteers for the fastest possible help." />
          <FAQItem q="What details should I include in a report?" a="Include the animal’s condition, approximate location, any visible injuries, and—if possible—time of sighting." />
          <FAQItem q="Is my report anonymous?" a="You can choose how much contact information to share. For best coordination, sharing a way to reach you is helpful when safe." />
          <FAQItem q="Do veterinary hospitals participate?" a="Yes. We connect reports to participating veterinary hospitals when the case needs clinical support." />
          <FAQItem q="How can I become a volunteer?" a="Use the “Become Volunteer” button and submit your details. Volunteers are verified to ensure safe rescues." />
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="section sectionContact" aria-label="Contact">
        <div className="container contactInner">
          <div className="contactCopy">
            <h2>Contact & Reporting</h2>
            <p>
              Use this section as a simple starting form. In a real app, it would connect to your backend and responder network.
            </p>

            <div className="contactList" role="list">
              <div className="contactItem" role="listitem">
                <div className="contactTitle">Need help now?</div>
                <div className="contactDesc">Report the incident and share a safe, accurate location.</div>
              </div>
              <div className="contactItem" role="listitem">
                <div className="contactTitle">Volunteer inquiries</div>
                <div className="contactDesc">Submit your details and availability to get verified.</div>
              </div>
            </div>

            <div id="volunteer" className="volunteerNote">
              <h3>Become a Volunteer</h3>
              <p>After verification, you can receive rescue requests based on your area.</p>
            </div>
          </div>

          <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
            <div className="formRow">
              <label>
                Your Name
                <input type="text" name="name" placeholder="e.g., Alex" required />
              </label>
              <label>
                Phone / Email
                <input type="text" name="contact" placeholder="e.g., +91... or name@email.com" required />
              </label>
            </div>

            <div className="formRow">
              <label>
                Type of Animal
                <select name="animal" defaultValue="dog">
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Severity
                <select name="severity" defaultValue="injured">
                  <option value="injured">Injured / Sick</option>
                  <option value="severe">Severe (urgent)</option>
                  <option value="unknown">Unknown</option>
                </select>
              </label>
            </div>

            <label className="full">
              Location Details
              <input type="text" name="location" placeholder="Landmark, area, city" required />
            </label>

            <label className="full">
              Brief Description
              <textarea name="details" rows="4" placeholder="What did you observe? Any visible injuries?" required />
            </label>

            <button className="btn btnPrimary" type="submit">
              Submit Report
            </button>
            <p className="formHint">This demo form does not submit data.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" aria-label="Footer">
        <div className="container footerInner">
          <div className="footerBrand">
            <div className="brand" aria-label="Brand">
              <span className="brandMark" aria-hidden="true">
                🐾
              </span>
              <span className="brandName">RescueLink</span>
            </div>
            <p className="footerText">Helping communities coordinate faster rescues for injured and sick animals.</p>
          </div>

          <div className="footerCols">
            <div className="footerCol">
              <div className="footerTitle">Explore</div>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#partners">NGO Partners</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footerCol">
              <div className="footerTitle">Get involved</div>
              <a href="#volunteer">Volunteer</a>
              <a href="#contact">Report an animal</a>

            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="container footerBottomInner">© {new Date().getFullYear()} RescueLink. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}



