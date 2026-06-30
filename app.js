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
    a: "<p>The registration gives you access to the complete Sicilian Outbound Gala 2026 experience.</p><p><strong>Sicilian Social Hours · 3:30 PM – 5:30 PM</strong><br />High tea, live music, and the kind of conversations that don't happen across a meeting table.</p><p><strong>Featuring:</strong></p><ul><li>RJ Kunal</li><li>Reema Gadani</li></ul><p><strong>The Sicilian Gala · 7:30 PM Onwards</strong><br />Sicilian Awards Night, Sicilian Got Talent Performances, Chapter Celebrations. A Gala Dinner.</p><p><strong>Featuring:</strong></p><ul><li>BollyJammers</li></ul><p>The evening your chapter will talk about for years.</p><p><strong>After Hours · 11:00 PM Onwards</strong><br />The ties come off. The volume goes up.</p><p><strong>Featuring:</strong></p><ul><li>DJ Jolly</li><li>Monark Khatri</li></ul><p><strong>What's Included</strong></p><ul><li>High Tea and Gala Dinner</li><li>Access to Sicilian Outbound Gala</li><li>Chapter Awards &amp; Recognitions</li><li>Sicilians Got Talent</li><li>5+ Artists</li><li>Beer, Wine &amp; Mocktails</li><li>3 Separate Curated Experiences</li><li>Networking, Celebrations and Fun</li></ul>",
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
    a: "<p>Sicilian Got Talent 2026 is your opportunity to bring your chapter together, discover hidden talent, create unforgettable performances, and compete for chapter pride on one of the biggest stages of the year.</p><p>Whether it's singing, dancing, instrumental music, comedy, skits, cultural performances, band acts, or something completely unique, this is your chance to represent your chapter and create a performance that the entire Sicilian Tribe will remember.</p><ul><li>Auditions – 17th &amp; 18th July 2026</li><li>Semi-Finale – 26th July 2026</li><li>Finals – 1st August 2026, Udaipur</li></ul><p><a href=\"https://drive.google.com/file/d/1nRfbBJTw6tSFRW8rTVT8yR_dnUHs1mT_/view?usp=drive_link\" target=\"_blank\" rel=\"noopener noreferrer\">Click here for detailed rules and guidelines.</a></p>",
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

const EVENT_PARTNERS = [
  {
    role: "Creative & Design Partner",
    name: "Dheeraj Maheshwari",
    chapter: "BNI Maximus",
    company: "MORPHIC STUDIO LLP",
    photo: "./assets/partners/dheeraj-maheshwari.png",
    logo: "./assets/partners/morphic-studio-logo.png",
    instagram: "http://www.instagram.com/themorphicstudio.com",
    website: "http://www.themorphicstudio.com/",
    assetFolder: "https://drive.google.com/drive/folders/1KturvT0dIi4X2yb3ONFIdIveLoOfLUC3?usp=drive_link",
  },
  {
    role: "Motion Graphic Partner",
    name: "Vaibhav Kothari",
    chapter: "BNI Helenus",
    company: "OUT OF THE BOX",
    photo: "./assets/partners/vaibhav-kothari.png",
    logo: "./assets/partners/out-of-the-box-logo.png",
    instagram: "https://www.instagram.com/i_am_va1bhav",
    website: "http://www.otbideas.in/",
    assetFolder: "https://drive.google.com/drive/folders/1QUakvkDbWERvCH4JY2DSX7F-eqtmWi21?usp=drive_link",
  },
  {
    role: "Photography Partner",
    name: "Jignesh Thacker",
    chapter: "BNI Alethia",
    company: "THIRDEYE PICTURES",
    photo: "./assets/partners/jignesh-thacker.jpg",
    logo: "./assets/partners/thirdeye-pictures-logo.png",
    instagram: "https://www.instagram.com/thebioscope.co",
    website: "http://www.thebioscope.co/",
    assetFolder: "https://drive.google.com/drive/folders/14NIkRoE3ANPVA5-fGy-OgEnDLMsVBKWD?usp=drive_link",
  },
  {
    role: "Videography Partner",
    name: "Bhumil Soochak",
    chapter: "BNI Makarios",
    company: "BIOSCOPE",
    photo: "./assets/partners/bhumil-soochak.jpg",
    logo: "./assets/partners/bioscope-logo.png",
    assetFolder: "https://drive.google.com/drive/folders/1rAR_WYfv-kfHj0xLl-pFLGqSvFr02YXD?usp=drive_link",
  },
  {
    role: "Travel Partner",
    name: "Heena Poriya",
    chapter: "BNI Helenus",
    company: "UNIVERSAL TRAVEL PLANNERS",
    photo: "./assets/partners/heena-poriya.jpg",
    logo: "./assets/partners/universal-travel-planners-logo.jpg",
    instagram: "https://www.instagram.com/heena_poriya",
    website: "http://www.universaltravelplanners.com/",
    assetFolder: "https://drive.google.com/drive/folders/1RwPcn65VAViBFoR6WpdrpF_mbhSeGDZi?usp=drive_link",
  },
  {
    role: "Travel Partner",
    name: "Vivek Parikh",
    chapter: "BNI Mythos",
    company: "TRAVEL TRIP ONLINE PVT LTD",
    photo: "./assets/partners/vivek-parikh.jpg",
    logo: "./assets/partners/travel-trip-online-logo.jpg",
    instagram: "https://www.instagram.com/travel_trip_online",
    website: "http://www.traveltriponline.com/",
    assetFolder: "https://drive.google.com/drive/folders/1NwwpHR8rEXLGY8oeUPBf6ihtR_c-JQW1?usp=drive_link",
  },
  {
    role: "Travel Partner",
    name: "Priyanka Parikh",
    chapter: "BNI Ganicus",
    company: "TRAVEL TRIP ONLINE PVT LTD",
    photo: "./assets/partners/priyanka-parikh.jpg",
    logo: "./assets/partners/travel-trip-online-logo.jpg",
  },
  {
    role: "Outdoor Media Partner",
    name: "Saket Shah",
    chapter: "-",
    company: "KAUSHIK OUTDOOR",
    photo: "./assets/partners/saket-shah.jpg",
    logo: "./assets/partners/kaushik-outdoor-logo.jpg",
    instagram: "https://www.instagram.com/kaushikoutdoors?igsh=MW96NjlveXY4bHh4cA==",
    website: "https://www.kaushikoutdoors.com/",
    assetFolder: "https://drive.google.com/drive/folders/1FflF-aItd5lIQS6zxWobUOilKKpoT82k?usp=drive_link",
  },
  {
    role: "Studio & Creative Reel Partner",
    name: "Chirag Vagrecha",
    chapter: "BNI Makarios",
    company: "CHIRAG CREATIONS",
    photo: "./assets/partners/chirag-vagrecha.jpg",
    logo: "./assets/partners/chirag-creations-logo.jpg",
    assetFolder: "https://drive.google.com/drive/folders/1u1ng-tBzxNw0iGkCu8iqI18-NGuXq9Jt?usp=drive_link",
  },
  {
    role: "Digital Display Partner",
    name: "Kiran Thaker",
    chapter: "BNI Athena",
    company: "ALANKRIT TECHNOLOGIES PVT LTD",
    photo: "./assets/partners/kiran-thaker.jpg",
    logo: "./assets/partners/alankrit-technologies-logo.png",
    instagram: "https://www.instagram.com/alankrit_technologies?igsh=YXZ6NWIweWw1cThk",
    website: "http://www.alankrittechnologies.com/",
    assetFolder: "https://drive.google.com/drive/folders/1Ydy5ujpdcSNu1_kaMKjLp5EWJ_GHpzFK?usp=drive_link",
  },
  {
    role: "Wardrobe Partner - Sicilian Social Hours (Mens)",
    name: "Neha Gajjar",
    chapter: "BNI Atlas",
    company: "MAJEESTIC BOUTIQUE BY NEHA",
    photo: "./assets/partners/neha-gajjar.jpg",
    logo: "./assets/partners/majeestic-by-neha-logo.jpg",
    instagram: "https://www.instagram.com/majeesticboutique_byneha?igsh=MWoxdTlycmNtZmxsMw%3D%3D&utm_source=qr",
    website: "https://majeesticbyneha.com/",
    assetFolder: "https://drive.google.com/drive/folders/1tgo688_vgPNxv0skmm_Zh8IpNvgCHzfi?usp=drive_link",
  },
  {
    role: "Wardrobe Partner - Gala Night (Mens)",
    name: "Sahil Sanghvi",
    chapter: "BNI Anthropos",
    company: "ACCURATE",
    photo: "./assets/partners/sahil-sanghvi.png",
    logo: "./assets/partners/accurate-logo.png",
    assetFolder: "https://drive.google.com/drive/folders/1IHSTa3mLWc78NqH0RIasUeU62Y9ZyuuD?usp=drive_link",
  },
  {
    role: "PR Partner",
    name: "Vikas Thakkar",
    chapter: "BNI Prometheus",
    company: "TVM COMMUNICATION",
    photo: "./assets/partners/vikas-thakkar.jpg",
    logo: "./assets/partners/tvm-communication-logo.jpg",
    instagram: "https://www.instagram.com/tvmcommunication?igsh=ZXJmd3R3eW5wN3Jo",
    website: "https://tvmpr.com/",
    assetFolder: "https://drive.google.com/drive/folders/1SEZM4kjqvih9QGhkgd2M5hTvC4_rKiV-?usp=drive_link",
  },
  {
    role: "Logistic Partner",
    name: "Parth Shah",
    chapter: "BNI Zenobia",
    company: "NAVKAR ENTERPRISE",
    photo: "./assets/partners/parth-shah.jpg",
    logo: "./assets/partners/navkar-enterprise-logo.jpg",
    instagram: "https://www.instagram.com/navkar_enterprise_dtdc",
    assetFolder: "https://drive.google.com/drive/folders/1zx2MbePcbrh0LvOE1nz_phibU9xJx68k?usp=drive_link",
  },
  {
    role: "Gifting Partner",
    name: "Nency Shah Patel",
    chapter: "BNI Lincoln",
    company: "CFY GIFTING",
    photo: "./assets/partners/nency-shah-patel.jpg",
    logo: "./assets/partners/cfy-gifting-logo.jpg",
    instagram: "https://www.instagram.com/candlesforyou0708?igsh=MTBwaTZ4NHRzbzR3ag%3D%3D&utm_source=qr",
    assetFolder: "https://drive.google.com/drive/folders/1-EVIqefH7rwUcPiCHx67BF483vryR3rK?usp=drive_link",
  },
  {
    role: "Gifting Partner",
    name: "Gurjotsingh Digwa",
    chapter: "BNI Makarios",
    company: "SHAGUN RATNA",
    photo: "./assets/partners/gurjotsingh-digwa.jpg",
    logo: "./assets/partners/shagun-ratna-logo.jpg",
    assetFolder: "https://drive.google.com/drive/folders/1CvQdMiwRIOeOzqJDzikLRjbrYpq_s15G?usp=drive_link",
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

function partnerInitials(name) {
  return String(name)
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const PARTNER_LINK_ICONS = {
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.3" cy="6.7" r="1" />
    </svg>
  `,
  website: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.2 2.3 3.4 5.1 3.4 8.5s-1.2 6.2-3.4 8.5" />
      <path d="M12 3.5C9.8 5.8 8.6 8.6 8.6 12s1.2 6.2 3.4 8.5" />
    </svg>
  `,
};

function renderEventPartners() {
  const list = qs("#eventPartnersList");
  if (!list) {
    return;
  }

  list.innerHTML = EVENT_PARTNERS.map((partner) => {
    const photoContent = partner.photo
      ? `<img src="${escapeHtml(partner.photo)}" alt="${escapeHtml(partner.name)}" loading="lazy" />`
      : `<span>${escapeHtml(partnerInitials(partner.name))}</span><small>Partner Photo</small>`;
    const logoContent = partner.logo
      ? `<img src="${escapeHtml(partner.logo)}" alt="${escapeHtml(partner.company)} logo" loading="lazy" />`
      : `<span>${escapeHtml(partner.company)}</span><small>Company Logo</small>`;
    const links = [
      partner.instagram
        ? `<a class="event-partner-link event-partner-link-instagram" href="${escapeHtml(partner.instagram)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(partner.name)} Instagram"><span class="event-partner-link-icon">${PARTNER_LINK_ICONS.instagram}</span><span>Instagram</span></a>`
        : "",
      partner.website
        ? `<a class="event-partner-link event-partner-link-website" href="${escapeHtml(partner.website)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(partner.name)} website"><span class="event-partner-link-icon">${PARTNER_LINK_ICONS.website}</span><span>Website</span></a>`
        : "",
    ]
      .filter(Boolean)
      .join("");

    return `
      <article class="event-partner-card" data-asset-folder="${escapeHtml(partner.assetFolder || "")}">
        <div class="event-partner-media">
          <div class="event-partner-photo">
            ${photoContent}
          </div>
          <div class="event-partner-logo${partner.logo ? " has-logo-image" : ""}">
            ${logoContent}
          </div>
        </div>
        <div class="event-partner-body">
          <p class="event-partner-role">${escapeHtml(partner.role)}</p>
          <h3>${escapeHtml(partner.name)}</h3>
          <p class="event-partner-meta">${escapeHtml(partner.chapter)}</p>
          <p class="event-partner-company">${escapeHtml(partner.company)}</p>
        </div>
        <div class="event-partner-links${links ? "" : " is-empty"}">${links}</div>
      </article>
    `;
  }).join("");
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
    {
      rootMargin: "0px 0px -5% 0px",
      threshold: 0.01,
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function restoreHashScroll() {
  const hash = window.location.hash;
  if (!hash || hash.length <= 1) {
    return;
  }

  let target;
  try {
    target = document.querySelector(hash);
  } catch {
    return;
  }

  if (!target) {
    return;
  }

  const scrollToTarget = () => {
    target.scrollIntoView({ block: "start", inline: "nearest" });
  };

  scrollToTarget();
  requestAnimationFrame(scrollToTarget);
  [80, 300, 800, 1600].forEach((delay) => {
    window.setTimeout(scrollToTarget, delay);
  });
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

function setupMobileMenu() {
  const toggle = qs("#mobileMenuToggle");
  const menu = qs("#mobileMenu");
  const overlay = qs("#mobileMenuOverlay");
  const closeButton = qs("#mobileMenuClose");

  if (!toggle || !menu || !overlay || !closeButton) {
    return;
  }

  let closeTimer;
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  const openMenu = () => {
    clearTimeout(closeTimer);
    menu.hidden = false;
    overlay.hidden = false;
    window.requestAnimationFrame(() => {
      menu.classList.add("is-open");
      overlay.classList.add("is-open");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
    });
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");

    clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      menu.hidden = true;
      overlay.hidden = true;
    }, 240);
  };

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("is-open")) {
      return;
    }

    if (menu.contains(event.target) || toggle.contains(event.target)) {
      return;
    }

    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
}

function setupPopup() {
  const popup = qs("#countdownPopup");
  const close = () => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");

    if (window.location.hash && window.location.hash !== "#home") {
      restoreHashScroll();
      return;
    }

    qs("#home")?.scrollIntoView({ behavior: "smooth" });
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
  renderEventPartners();
  setupRevealAnimations();
  restoreHashScroll();
  setupSgtSlider();
  setupMobileMenu();
  setupPopup();
  qs("#faqSearch").addEventListener("input", renderFaq);
  window.addEventListener("resize", syncHeaderOffset);
  window.addEventListener("load", () => {
    syncHeaderOffset();
    restoreHashScroll();
  });
  window.addEventListener("hashchange", restoreHashScroll);
  refreshIcons();
});
