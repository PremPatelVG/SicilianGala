const TARGET_DATE = new Date("2026-08-01T15:00:00+05:30").getTime();

const FAQS = [
  {
    q: "What is the Sicilian Outbound Gala 2026?",
    text: "first-ever outbound celebration sicilian tribe bni ahmedabad relationships celebrations entertainment recognition meaningful connections",
    a: "<p>The Sicilian Outbound Gala 2026 is the first-ever outbound celebration of the Sicilian Tribe, bringing together BNI Ahmedabad members for an unforgettable experience of relationships, celebrations, entertainment, recognition, and meaningful connections beyond the regular chapter environment.</p><p>Until last year, the Sicilian Gala Night was celebrated as part of the Symposium experience. This year, for the very first time, the Gala takes center stage as a standalone destination event in the beautiful city of Udaipur—creating an even bigger opportunity for members to connect, celebrate, and experience the spirit of the Sicilian Tribe together.</p>",
  },
  {
    q: "When and where is the event taking place?",
    text: "date venue holymont udaipur august",
    a: "<p><strong>Date:</strong> 1st August 2026</p><p><strong>Venue:</strong> Holymont Resort, Udaipur</p>",
  },
  {
    q: "Who can attend the Sicilian Outbound Gala?",
    text: "members spouses partners",
    a: "The event is open to all BNI Ahmedabad members and their spouses/partners.",
  },
  {
    q: "What does the event registration include?",
    text: "registration includes social hours gala after hours high tea rj kunal reema gadani bollyjammers dj jolly monark khatri awards recognitions mocktails networking",
    a: "<p>The registration gives you access to the complete Sicilian Outbound Gala 2026 experience.</p><p><strong>Sicilian Social Hours · 3:30 PM – 5:30 PM</strong><br />High tea, live music, and the kind of conversations that don't happen across a meeting table.</p><p><strong>Featuring:</strong></p><ul><li>RJ Kunal</li><li>Reema Gadani</li></ul><p><strong>The Sicilian Gala · 7:30 PM Onwards</strong><br />Sicilian Awards Night, Sicilian Got Talent Performances, Chapter Celebrations. A Gala Dinner.</p><p><strong>Featuring:</strong></p><ul><li>BollyJammers</li></ul><p>The evening your chapter will talk about for years.</p><p><strong>After Hours · 11:00 PM Onwards</strong><br />The ties come off. The volume goes up.</p><p><strong>Featuring:</strong></p><ul><li>DJ Jolly</li><li>Monark Khatri</li></ul><p><strong>What's Included</strong></p><ul><li>High Tea and Gala Dinner</li><li>Access to Sicilian Outbound Gala</li><li>Chapter Awards &amp; Recognitions</li><li>Sicilians Got Talent</li><li>5+ Artist</li><li>Beer, Wine &amp; Mocktails</li><li>3 separate curated Experiences</li><li>Networking, Celebrations and Fun</li></ul>",
  },
  {
    q: "How do I register for the Sicilian Outbound Gala?",
    text: "register sicilian connect app events fee 4999 gst",
    a: "<p>You can register for the Sicilian Outbound Gala through the Sicilian Connect App.</p><p><strong>Registration Fee:</strong> &#8377;4,999 + GST per person</p><p><strong>To Register:</strong><br />Sicilian Connect App &rarr; Events &rarr; Sicilian Outbound Gala 2026</p>",
  },
  {
    q: "Is my stay included in the Sicilian Outbound Gala registration fee?",
    text: "stay accommodation registration fee 4999 gst packages 7499",
    a: "<p>No. The registration fee of &#8377;4,999 + GST covers only the Sicilian Outbound Gala experience.</p><p>Accommodation can be booked separately through the official travel partners. Packages starting from 7499+GST onwards.</p>",
  },
  {
    q: "I have already registered for the Sicilian Outbound Gala through the Sicilian Connect App. Can I still book my stay?",
    text: "already registered stay accommodation travel partners heena vivek priyanka",
    a: "<p>Absolutely.</p><p>If you have already completed your event registration, you can separately contact the official travel partners and book your preferred accommodation package.</p><ul><li><strong>Heena Poriya</strong> (BNI Helenus) - Universal Travel Planners<br />Contact - 9687077799</li><li><strong>Vivek Parikh</strong> (BNI Mythos) - Travel Trip Online Pvt Ltd<br />Contact - 9099260101</li><li><strong>Priyanka Parikh</strong> (BNI Ganicus) - Travel Trip Online Pvt Ltd<br />Contact - 9712129977</li></ul>",
  },
  {
    q: "Are stay-inclusive packages available for the Sicilian Outbound Gala?",
    text: "stay-inclusive packages accommodation travel partners heena vivek priyanka 7499 gst",
    a: "<p>Yes. Special stay-inclusive packages are available starting from &#8377;7,499 + GST onwards. For these packages, members can directly contact the travel partners.</p><ul><li><strong>Heena Poriya</strong> (BNI Helenus) - Universal Travel Planners<br />Contact - 9687077799</li><li><strong>Vivek Parikh</strong> (BNI Mythos) - Travel Trip Online Pvt Ltd<br />Contact - 9099260101</li><li><strong>Priyanka Parikh</strong> (BNI Ganicus) - Travel Trip Online Pvt Ltd<br />Contact - 9712129977</li></ul>",
  },
  {
    q: "Who are the official travel partners?",
    text: "official travel partners heena poriya vivek parikh priyanka parikh universal travel planners travel trip online",
    a: "<ul><li><strong>Heena Poriya</strong><br />BNI Helenus<br />Universal Travel Planners<br />&#128222; 9687077799</li><li><strong>Vivek Parikh</strong><br />BNI Mythos<br />Travel Trip Online Pvt Ltd<br />&#128222; 9099260101</li><li><strong>Priyanka Parikh</strong><br />BNI Ganicus<br />Travel Trip Online Pvt Ltd<br />&#128222; 9712129977</li></ul>",
  },
  {
    q: "Can I register my spouse or partner?",
    text: "spouse partner registration sicilian connect app stay package",
    a: "<p>Yes.</p><p>Spouses are welcome to join the Sicilian Outbound Gala.</p><p><strong>For Event Registration:</strong><br />Register through the Sicilian Connect App under:<br />Events &rarr; Sicilian Gala 2026 &ndash; Spouse Registration</p><p><strong>For Registration with Stay Package:</strong><br />Stay-inclusive packages are available starting from &#8377;7,499 + GST onwards.</p><p>For these packages, members can directly contact the official travel partners.</p>",
  },
  {
    q: "Can an entire chapter register together?",
    text: "chapter register together sicilian connect app stay-inclusive packages",
    a: "<p>Absolutely.</p><p>In fact, the experience becomes even more memorable when chapters celebrate together.</p><p>Each member can register individually through the Sicilian Connect App under:<br />Events &rarr; Sicilian Outbound Gala 2026</p><p>Or choose one of the stay-inclusive packages through the official travel partners.</p>",
  },
  {
    q: "Can I bring my children to the Sicilian Outbound Gala?",
    text: "children not permitted members spouses partners",
    a: "<p>No. The Sicilian Outbound Gala is exclusively designed for BNI members and their spouses/partners. Children will not be permitted at the event.</p><p>We appreciate your understanding and cooperation.</p>",
  },
  {
    q: "Who are the artists performing at the Sicilian Outbound Gala 2026?",
    text: "artists performers rj kunal reema gadani bollyjammers dj jolly monark khatri",
    a: "<p>We've curated an exciting lineup to make this an unforgettable Sicilian experience.</p><p><strong>RJ Kunal</strong><br />The legendary Mirchi Murga Don, known for his unmatched energy, humour, and audience engagement.</p><p><strong>Reema Gadani</strong><br />One of Gujarat's finest fusion artists, creating magical musical experiences through her powerful live performances. Setting the perfect mood for conversations, connections, and celebrations.</p><p><strong>BollyJammers</strong><br />India's No.1 Live DJ-Based Band, bringing a high-energy performance guaranteed to get the entire tribe on its feet.</p><p><strong>DJ Jolly &amp; Monark Khatri</strong><br />The live-wire performers behind the After Party experience, combining DJ beats with electrifying live percussion.</p>",
  },
  {
    q: "Can I attend only the Gala Night?",
    text: "attend only gala night complete event social hours after hours",
    a: "<p>While registrations are available for the complete event experience, we highly recommend experiencing the entire Sicilian Outbound Gala.</p><p>From Sicilian Social Hours to Gala Night to After Hours, each experience has been carefully curated and together creates what Sicilian Outbound Gala 2026 is truly about. This is one experience you would not want to miss halfway.</p>",
  },
  {
    q: "How do I reach Holymont Resort, Udaipur?",
    text: "reach holymont resort udaipur car chapter travel train flight location link",
    a: "<p>Grab your car, gather your chapter members, and make the journey part of the experience.</p><p>Members can travel by personal vehicle, hired transport, train, or flight to Udaipur and then proceed to Holymont Resort.</p><p>Location Link - <a href=\"https://share.google/YynfnJE3Dc1JadOd4\" target=\"_blank\" rel=\"noopener\">https://share.google/YynfnJE3Dc1JadOd4</a></p>",
  },
  {
    q: "Is transportation included?",
    text: "transportation included",
    a: "<p>No.</p><p>Transportation is not included in the registration fee or stay packages unless specifically communicated by the travel partner.</p>",
  },
  {
    q: "Are food and beverages included?",
    text: "food beverages high tea gala dinner beer wine mocktails",
    a: "<p>Yes.</p><p>The event experience includes:</p><ul><li>High Tea and Gala Dinner</li><li>Beer, Wine &amp; Mocktails during event hours</li></ul>",
  },
  {
    q: "Can I attend the event alone?",
    text: "attend alone solo",
    a: "<p>Absolutely.</p><p>Many members attend independently and find it to be a great opportunity to build deeper relationships across the region.</p>",
  },
  {
    q: "Is there any dress code?",
    text: "dress code wardrobe planner",
    a: "Detailed wardrobe planner will be shared closer to the event.",
  },
  {
    q: "What awards will be presented during the Gala?",
    text: "awards leadership team chapter awards recognition ceremony",
    a: "The Sicilian Outbound Gala will celebrate excellence across the region through a special recognition ceremony featuring Leadership Team Awards and Chapter Awards.",
  },
  {
    q: "What is Sicilian’s Got Talent (SGT)?",
    text: "sicilian got talent sgt chapter singing dancing instrumental comedy skits cultural performances auditions semi finale finale",
    a: "<p>Sicilian Got Talent 2026 is your opportunity to bring your chapter together, discover hidden talent, create unforgettable performances, and compete for chapter pride on one of the biggest stages of the year.</p><p>Whether it's singing, dancing, instrumental music, comedy, skits, cultural performances, band acts, or something completely unique, this is your chance to represent your chapter and create a performance that the entire Sicilian Tribe will remember.</p><ul><li>Auditions – 4th &amp; 5th July (Ahmedabad)</li><li>Semi Finale – 18th July (Ahmedabad)</li><li>Finale – 1st August (Udaipur, Holymont)</li></ul><p><a href=\"https://drive.google.com/file/d/1nRfbBJTw6tSFRW8rTVT8yR_dnUHs1mT_/view?usp=drive_link\" target=\"_blank\" rel=\"noopener noreferrer\">Click here for detailed rules and guidelines.</a></p>",
  },
  {
    q: "How can my chapter participate in Sicilian Got Talent?",
    text: "chapter participate sicilian got talent registration form chapter performances minimum 4 members collaborate",
    a: "<p>To participate, simply register your chapter through the Sicilian Got Talent Registration Form and submit the required performance details.</p><p>This year, Chapter Performances are back!</p><p>A minimum of 4 members can come together and represent their chapter on stage. Chapters with less than 30 members may collaborate with another chapter of similar strength for a joint performance.</p><p><a href=\"https://drive.google.com/file/d/1nRfbBJTw6tSFRW8rTVT8yR_dnUHs1mT_/view?usp=drive_link\" target=\"_blank\" rel=\"noopener noreferrer\">Click here for detailed rules and guidelines.</a></p>",
  },
  {
    q: "What is the cancellation policy?",
    text: "cancellation refund policy",
    a: "No cancellations or refunds will be permitted once registration is complete.",
  },
  {
    q: "Can I transfer my Sicilian Outbound Gala registration to another member?",
    text: "transfer registration non-transferable another member",
    a: "No. Registrations are non-transferable and cannot be transferred to another member under any circumstances.",
  },
];

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

let openFaqIndex = 0;

function getCountdownParts() {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const parts = getCountdownParts();
  qs("#days").textContent = formatNumber(parts.days);
  qs("#hours").textContent = formatNumber(parts.hours);
  qs("#minutes").textContent = formatNumber(parts.minutes);
  qs("#seconds").textContent = formatNumber(parts.seconds);
  qs("#popupDays").textContent = String(parts.days);
}

function renderFaq() {
  const query = qs("#faqSearch").value.trim().toLowerCase();
  const list = qs("#faqList");
  const items = FAQS.map((item, index) => ({ ...item, index })).filter(
    (item) => !query || item.q.toLowerCase().includes(query) || item.text.includes(query),
  );

  if (!items.length) {
    list.innerHTML = `<p class="py-10 text-center text-white/55">No questions match "${escapeHtml(query)}".</p>`;
    return;
  }

  list.innerHTML = items
    .map((item) => {
      const isOpen = item.index === openFaqIndex;
      return `
        <div>
          <button
            type="button"
            class="faq-toggle group flex w-full items-start justify-between gap-6 py-6 text-left"
            data-index="${item.index}"
            aria-expanded="${isOpen}"
          >
            <span class="font-display text-sm uppercase tracking-wide transition sm:text-base ${isOpen ? "text-gold" : "text-white group-hover:text-gold/80"}">${escapeHtml(item.q)}</span>
            <i data-lucide="chevron-down" class="mt-1 h-5 w-5 shrink-0 text-white/45 transition duration-500 ${isOpen ? "rotate-180 text-gold" : ""}"></i>
          </button>
          <div class="${isOpen ? "grid grid-rows-[1fr] opacity-100" : "grid grid-rows-[0fr] opacity-0"} transition-[grid-template-rows,opacity] duration-500">
            <div class="overflow-hidden">
              <div class="faq-answer pb-8 pr-4 sm:pr-10">${item.a}</div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  qsa(".faq-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.dataset.index);
      openFaqIndex = openFaqIndex === nextIndex ? -1 : nextIndex;
      renderFaq();
    });
  });

  refreshIcons();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setupRevealAnimations() {
  const revealItems = qsa(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupSgtSlider() {
  const slider = qs("[data-sgt-slider]");
  if (!slider) {
    return;
  }

  const slides = [...slider.querySelectorAll(".sgt-slide")];
  const dots = [...slider.querySelectorAll(".sgt-slider-dot")];
  if (!slides.length) {
    return;
  }

  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));

  const setActiveSlide = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => setActiveSlide(index));
  });

  setActiveSlide(activeIndex);
  if (slides.length > 1) {
    window.setInterval(() => setActiveSlide(activeIndex + 1), 2000);
  }
}

function setupPopup() {
  const popup = qs("#countdownPopup");
  const close = () => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
    qs("#home").scrollIntoView({ behavior: "smooth" });
  };

  qs("#closePopup").addEventListener("click", close);
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      close();
    }
  });

  window.setTimeout(() => {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
  }, 600);

  window.setTimeout(close, 5600);
}

function syncHeaderOffset() {
  const header = qs("header");
  if (!header) {
    return;
  }

  document.documentElement.style.setProperty("--site-header-height", `${Math.ceil(header.getBoundingClientRect().height)}px`);
}

function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  syncHeaderOffset();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  renderFaq();
  setupRevealAnimations();
  setupSgtSlider();
  setupPopup();
  qs("#faqSearch").addEventListener("input", renderFaq);
  window.addEventListener("resize", syncHeaderOffset);
  window.addEventListener("load", syncHeaderOffset);
  refreshIcons();
});
