const TARGET_DATE = new Date("2026-08-01T15:00:00+05:30").getTime();

const FAQS = [
  {
    q: "What is the Sicilian Outbound Gala 2026?",
    text: "first-ever outbound celebration sicilian tribe bni ahmedabad",
    a: "The Sicilian Outbound Gala 2026 is the first-ever outbound celebration of the Sicilian Tribe, bringing together BNI Ahmedabad members for relationships, celebration, entertainment, recognition, and meaningful connections beyond the regular chapter environment.",
  },
  {
    q: "When and where is the event taking place?",
    text: "date venue holymont udaipur august",
    a: "<p><strong>Date:</strong> 1st August 2026</p><p><strong>Venue:</strong> Holymont, Udaipur</p>",
  },
  {
    q: "Who can attend the Gala?",
    text: "members spouse partners",
    a: "The event is open to all BNI Ahmedabad members and their spouses or partners.",
  },
  {
    q: "What does the event registration include?",
    text: "registration includes social hour gala after hours",
    a: "<p>The registration gives you access to the complete Sicilian Outbound Gala 2026 experience.</p><ul><li>Social Hour: High tea, live music, RJ Kunal, and Reema Gadani.</li><li>Sicilian Gala: Awards, performances, chapter celebrations, grand dinner, and BollyJammers.</li><li>After Hours: DJ Jolly and Monark Khatri.</li></ul>",
  },
  {
    q: "What are the registration options available?",
    text: "registration options stay package pricing",
    a: "<p>There are two ways to register for Sicilian Outbound Gala 2026.</p><p><strong>Option 1: Event Registration Only</strong><br />&#8377;4,999 + GST per person<br />Register through the Sicilian Connect App: Events &rarr; Sicilian Outbound Gala 2026<br />For spouse registration: Events &rarr; Sicilian Outbound Gala 2026 &ndash; Spouse Registration</p><p><strong>Option 2: Registration with Stay Package</strong><br />Stay-inclusive packages are available starting from &#8377;7,499 + GST onwards.<br />These packages include event registration along with accommodation. Members can directly contact the official travel partners for these packages.</p>",
  },
  {
    q: "Is accommodation included in the registration fee?",
    text: "accommodation stay included fee",
    a: "No. The Rs. 4,999 + GST registration fee covers only the event experience. Accommodation can be booked separately through the official travel partners.",
  },
  {
    q: "Are there packages available with accommodation?",
    text: "stay accommodation packages travel partners heena vivek priyanka",
    a: "<p>Yes. Special stay-inclusive packages are available starting from Rs. 7,499 + GST onwards. Members can directly contact the travel partners for these packages.</p><ul><li>Heena Poriya: 9687077799</li><li>Vivek Parikh: 9099260101</li><li>Priyanka Parikh: 9712129977</li></ul>",
  },
  {
    q: "How do I register if I want the stay package?",
    text: "stay package travel partners payment",
    a: "You can directly contact the official travel partners and make the payment to them for the stay-inclusive package.",
  },
  {
    q: "I have already registered through the Sicilian Connect App. Can I still book accommodation?",
    text: "already registered app accommodation travel",
    a: "Absolutely. Members who have already registered through the Sicilian Connect App can separately contact the travel partners and book their accommodation.",
  },
  {
    q: "How should DNA members register?",
    text: "dna members ytd summit gala stay directors",
    a: "<p>DNA members can join the Sicilian Leadership Summit and Sicilian Outbound Gala, both happening in Udaipur at Holymont.</p><ul><li>Only Sicilian Leadership Summit: Rs. 8,999 + GST</li><li>Only Sicilian Outbound Gala: Rs. 4,999 + GST</li><li>Both together: Rs. 12,499 + GST</li></ul><p>This package includes 3 days stay, all meals, all training sessions, and the complete Sicilian Gala experience.</p>",
  },
  {
    q: "Who are the official travel partners?",
    text: "travel partners heena vivek priyanka universal travel trip",
    a: "<ul><li><strong>Heena Poriya</strong>, BNI Helenus, Universal Travel Planners: 9687077799</li><li><strong>Vivek Parikh</strong>, BNI Mythos, Travel Trip Online Pvt Ltd: 9099260101</li><li><strong>Priyanka Parikh</strong>, BNI Ganicus, Travel Trip Online Pvt Ltd: 9712129977</li></ul>",
  },
  {
    q: "Who are the artists performing at the Sicilian Outbound Gala 2026?",
    text: "artists performers rj kunal reema bollyjammer dj jolly monark",
    a: "<ul><li>RJ Kunal</li><li>Reema Gadani</li><li>BollyJammers</li><li>DJ Jolly</li><li>Monark Khatri</li></ul>",
  },
  {
    q: "Can I attend only the Gala Night?",
    text: "attend only gala night",
    a: "Registrations are available for the complete event experience. The team highly recommends experiencing the entire Sicilian journey, from Social Hour to Gala Night to After Hours.",
  },
  {
    q: "Can I register my spouse or partner?",
    text: "spouse partner register",
    a: "Yes. Spouses and partners are welcome to join the Sicilian Outbound Gala.",
  },
  {
    q: "Can an entire chapter register together?",
    text: "chapter register together",
    a: "Absolutely. The experience becomes even more memorable when chapters celebrate together.",
  },
  {
    q: "How do I reach Holymont, Udaipur?",
    text: "reach holymont udaipur travel transport",
    a: "Members can travel by personal vehicle, hired transport, train, or flight to Udaipur and then proceed to Holymont.",
  },
  {
    q: "Is transportation included?",
    text: "transportation included",
    a: "No. Transportation is not included in the registration fee or stay packages unless specifically communicated by the travel partner.",
  },
  {
    q: "Are food and beverages included?",
    text: "food beverages high tea grand dinner beer wine mocktails",
    a: "<p>Yes. The event experience includes high tea, grand dinner, beer, wine, and mocktails.</p>",
  },
  {
    q: "Can I attend the event alone?",
    text: "attend alone solo",
    a: "Absolutely. Many members attend independently and find it a great opportunity to build deeper relationships across the region.",
  },
  {
    q: "What should I wear?",
    text: "dress code attire wear wardrobe planner",
    a: "<ul><li><strong>Social Hour:</strong> Smart casuals</li><li><strong>Sicilian Gala:</strong> Elegant formals or evening wear</li><li><strong>After Hours:</strong> Comfortable party wear</li></ul><p>A more detailed dress code and wardrobe planner will be shared closer to the event.</p>",
  },
  {
    q: "What awards will be presented during the Gala?",
    text: "awards recognition categories",
    a: "The awards and recognition categories are currently being curated. Stay tuned. The celebration of excellence is going to be bigger than ever.",
  },
  {
    q: "What is Sicilians Got Talent (SGT)?",
    text: "sicilians got talent sgt chapter performance auditions semi finals",
    a: "<p>This year, Sicilians Got Talent brings back Chapter Performances. Expect creativity, entertainment, chapter spirit, and unforgettable moments on stage.</p><ul><li>Auditions: 4th &amp; 5th July</li><li>Semi-Finals: 18th July</li></ul>",
  },
  {
    q: "What is the cancellation policy?",
    text: "cancellation refund policy",
    a: "No cancellations or refunds will be permitted once registration is complete.",
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
