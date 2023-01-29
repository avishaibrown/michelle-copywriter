import {
  Email,
  Web,
  Tag,
  RssFeed,
  Newspaper,
  AlternateEmail,
  Podcasts,
  People,
  DeveloperBoard,
  Edit,
  FitnessCenter,
  Celebration,
  Business,
  Home,
  Face3,
  DesignServices,
  PermMedia,
} from "@mui/icons-material";

export const NAME = "Michelle Sky";
export const MENU_ITEMS = [
  { title: "Home", link: "/", icon: <Home /> },
  { title: "About", link: "/about", icon: <Face3 /> },
  { title: "Services", link: "/services", icon: <DesignServices /> },
  { title: "Portfolio", link: "/portfolio", icon: <PermMedia /> },
  { title: "Contact", link: "/contact", icon: <Email /> },
];

export const HOME = {
  hero: {
    titles: ["Tell your story.", "Share your message."],
    description: "Creative, punchy copy for brands & businesses.",
    image: "./images/intro-bg.jpg",
    button: "Enquire",
  },
  whatIDo: {
    title: "What I Do",
    items: [
      {
        title: "Website Content",
        icon: <Web fontSize="large" />,
      },
      {
        title: "Digital Marketing Content",
        icon: <AlternateEmail fontSize="large" />,
      },
      {
        title: "Traditional Marketing Content",
        icon: <Newspaper fontSize="large" />,
      },
      {
        title: "Social Media Content",
        icon: <Tag fontSize="large" />,
      },
      {
        title: "Business Communications",
        icon: <Business fontSize="large" />,
      },
    ],
  },
  about: {
    title: "Hi, I’m Michelle.",
    description:
      "As a Communications & Marketing Strategist with roles across agency, not-for-profit, B2B and Arts organisations, my passion truly lies in Copywriting, Content Creation and Brand Storytelling. My experience both client-side and in the agency world has imbued me with the skills to immerse myself and delve deeply into projects, while giving me great scope and the ability to balance competing priorities, always delivering to deadline.",
    button: "Learn More",
    image: "./images/about-photo.jpg",
  },
  process: {
    title: "Work With Me",
    steps: [
      {
        title: "Enquire",
        description:
          "Fill out the application form to tell me all about your project and your business. You'll find it under Contact on the top right hand corner of your screen.",
        icon: <Email fontSize="large" />,
      },
      {
        title: "Let's Talk",
        description:
          "We’ll hop on a call to get to know each other. I’ll learn more about your vision and see how I can help bring it to life.",
        icon: <People fontSize="large" />,
      },
      {
        title: "Onboarding",
        description:
          "Once we’ve spoken and secured a booking, you can expect to find a welcome email outlining the process and next steps in your inbox. You’ll typically supply me with any existing copy, we’ll work on a copy brief and we’ll set a timeline together.",
        icon: <DeveloperBoard fontSize="large" />,
      },
      {
        title: "Writing",
        description:
          "This is the fun part where you get to sit back and relax, as I get started on writing your new and improved copy.",
        icon: <FitnessCenter fontSize="large" />,
      },
      {
        title: "Editing",
        description:
          "Once the first round of writing is complete, you and your team can provide feedback and comments, which will be integrated into the revised copy.",
        icon: <Edit fontSize="large" />,
      },
      {
        title: "Completion",
        description:
          "We're all done! Your new copy is ready for its big reveal.",
        icon: <Celebration fontSize="large" />,
      },
    ],
  },
  callToAction: {
    button: "Get Punchy Copy That Sells",
    subtitle: "Let's. Do. This. Thing.",
  },
};

export const ABOUT = {
  title: "About",
  description: [
    "With an academic background in Literature, History and Psychology, and over six years experience in the industry, I have excellent insight into the human condition that translates perfectly into knowing what drives consumers.",
    "I have a passion for creating highly engaging and creative written content, specialising in short and long form writing.",
    "You’ll find my writing across websites, blog posts, emails, brand books, press and media releases, as well as social media copy and ads, plus Google ads.",
    "I bring a thorough and meticulous approach to my copywriting, and my research, writing and editing skills are impeccable. I possess a nuanced understanding of English language conventions, style, usage, grammar, and punctuation, and enjoy translating complex concepts into easy to understand language, and flexibly adapting my tone of voice to suit a wide variety of audiences.",
  ],
  callToAction: [
    "Work with me today to tell your brand's story and get your message across.",
    "I will weave a compelling brand narrative so your audience knows exactly who you are and what you stand for, and keeps coming back for more.",
    "Together, we’ll take your copy to the next level.",
  ],
  image: "./images/about-photo.jpg",
  button: "Contact Michelle",
};

export const WEBSITES = "Websites";
export const SOCIAL_MEDIA = "Social Media";
export const ARTICLES_AND_BLOGS = "Articles & Blogs";
export const AD_COPY = "Ad Copy";
export const EMAIL_NEWSLETTERS = "Email Newsletters";
export const PODCASTS = "Podcasts";

export const SERVICES = {
  title: "Copywriting Services",
  blurb: [
    "As a copywriter, I can manage any copywriting needs across your business.",
    "Whether you’re looking for brand new copy for a one-off copy project, or for regular, ongoing copy to be supplied, you’re in the right place.",
    "I develop content across:",
  ],
  mediums: [
    {
      title: WEBSITES,
      description: [
        "The words on your website matter - a lot. Your message must be clear, compelling and distinct. ",
        "As your copywriter, I can liaise with web designers to create new information architecture and copy for your website. ",
        "Your website will feature intuitive, UX-optimised copy that gives visitors the answers they’re looking for, fast. Content will also include Google-friendly keywords, seamlessly integrated, helping you get noticed online.",
      ],
      icon: <Web fontSize="large" />,
      image: "./images/websites.jpg",
    },
    {
      title: SOCIAL_MEDIA,
      description: [
        "Social media is our go-to for news, information and updates across business, industry and commerce. ",
        "An aligned social media presence is essential for promoting your brand and mission. ",
        "Social media copywriting can include content strategy creation, content planning and content writing across social media platforms including Instagram, Facebook, LinkedIn, and TikTok. ",
        "Your copywriter can liaise with branding agencies, graphic designers, and/or your marketing team to provide copy and schedule content optimised for each platform.",
      ],
      icon: <Tag fontSize="large" />,
      image: "./images/social-media.jpg",
    },
    {
      title: ARTICLES_AND_BLOGS,
      description: [
        "Publishing articles and blog posts on your website showcases your expertise, builds trust with audiences and positions you as a thought-leader in your industry. It’s also important for building Google rankings so that you appear at the top of the search results pile. ",
        "As your copywriter, I can develop a series of blogs and articles to promote your brand and spark interest in your company’s values, mission, and key offerings. This includes researching, writing, editing, and optimising SEO for publication on the website.",
      ],
      icon: <RssFeed fontSize="large" />,
      image: "./images/articles-and-blogs.jpg",
    },
    {
      title: AD_COPY,
      description: [
        "Short form copy for ads needs to capture your message and make an impact in a short time frame, whether it’s through Google or the social media scroll. ",
        "Content creation for Google ads and social media ad copy will help promote your brand, products and offerings to a wider audience. This includes researching keywords to ensure ads are optimised for your audience and market category. It can also include working closely with digital marketing specialists and graphic designers to create ads in line with branding and tone of voice.",
      ],
      icon: <Newspaper fontSize="large" />,
      image: "./images/ad-copy.jpg",
    },
    {
      title: EMAIL_NEWSLETTERS,
      description: [
        "Imagine email newsletters that people actually want in their inbox. The key here is not to spam or overload an inbox but to deliver relevant, engaging and exciting news, offers and updates. ",
        "Email newsletter copywriting includes developing an email strategy and content calendar, liaising with your branding agency and/or graphic designers to create an email newsletter template, researching, writing, and editing e-newsletters monthly or fortnightly.",
      ],
      icon: <AlternateEmail fontSize="large" />,
      image: "./images/email-newsletters.jpg",
    },
    {
      title: PODCASTS,
      description: [
        "The podcast space is the new frontier for increasing visibility for your brand and building your audience. Reach people on a greater scale, and a more intimate setting - in their cars, homes or on their evening walk. ",
        "Podcast copywriting services include developing a long term podcast content plan, researching and creating podcast episode topics, content pillars, as well as researching guests, creating show notes, transcripts, and time stamps for publication via podcasting streamers and YouTube.",
      ],
      icon: <Podcasts fontSize="large" />,
      image: "./images/podcasts.jpg",
    },
  ],
  closingRemarks:
    "Choose the copywriting and content creation services you want to prioritise right now. We can always add on at a later point!",
  expandButton: "More",
  collapseButton: "Close",
};

export const PORTFOLIO = {
  title: "Portfolio",
  projects: [
    {
      title: "Luson",
      url: "https://clydenorth.luson.com.au/",
      image: "./images/LusonLogo.png",
      width: "40%",
    },
    {
      title: "FeelDX",
      url: "https://www.feeldx.com.au/",
      image: "./images/FeelDXLogo.png",
      width: "20%",
    },
    {
      title: "Modern Times",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vTsdISjLPiqsfWa8-DKxtQMMSztQC_1mfbAFJeu7jU5ouU8kftECUtz2UIrsJ-S_YxQrg54g31w_bJf/pub?start=true&loop=true&delayms=3000",
      image: "./images/ModernTimesLogo.png",
      width: "40%",
    },
    {
      title: "Splashbox",
      url: "https://www.splashbox.com.au/",
      image: "./images/SplashboxLogo.png",
      width: "38%",
    },
    {
      title: "Contact Me",
      url: "https://www.contactme.net.au/",
      socialMedia: "https://www.instagram.com/contactmeau/?hl=en",
      image: "./images/ContactMeLogo.png",
      width: "38%",
    },
    {
      title: "Fisher Lane Mobility",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vRFlg8Z2Q667pCSetJShkrBWEoMHo8TunItF055auceuGkq1T1Hg7AFV_0IbdtVluive8AL29FVnK5I/pub?start=true&loop=true&delayms=3000",
      socialMedia: "https://www.instagram.com/fisherlane26/?hl=en",
      image: "./images/FisherLaneMobilityLogo.png",
      width: "24%",
    },
    {
      title: "Girl Guides Victoria",
      url: "https://www.guidesvic.org.au/",
      marketing: [
        "https://mailchi.mp/guidesvic/guidingnews20201113",
        "https://mailchi.mp/guidesvic/7-september-update",
        "https://www.guidesvic.org.au/2020/05/24/guiding-in-victoria-frequently-asked-questions/",
        "https://mailchi.mp/4e5978407fed/quick-links-edition8",
        "https://www.guidesvic.org.au/2019/07/19/melton-girl-guides-help-grow-the-melton-botanic-garden/",
        "https://www.guidesvic.org.au/2020/07/03/girl-guides-victoria-live-the-promise-through-covid-19/",
        "https://www.guidesvic.org.au/wp-content/uploads/2020/10/Covid-Safe-Principles-v2.pdf",
        "https://www.guidesvic.org.au/wp-content/uploads/2020/06/Social-Distancing-Poster-colour.pdf",
        "https://www.guidesvic.org.au/wp-content/uploads/2020/06/Return-to-in-person-Girl-Guides-Poster-colour-T4.pdf",
        "https://www.guidesvic.org.au/?p=1519",
      ],
      image: "./images/GirlGuidesVictoriaLogo.png",
      width: "100%",
    },
    {
      title: "BRIC",
      url: "https://www.bric.com.au/",
      image: "./images/BRICLogo.png",
      width: "40%",
    },
    {
      title: "Hunt Heating",
      url: "https://huntcommercial.com.au/resources/hydronic-heating-vs-forced-air-2/",
      image: "./images/HuntHeatingLogo.png",
      width: "20%",
    },
    {
      title: "JIFF",
      url: "https://www.jiff.com.au/films/archive#",
      image: "./images/JIFFLogo.png",
      width: "40%",
    },
  ],
};

export const CONTACT = {
  title: "Got a project? Drop me a line!",
  fields: [
    {
      id: "name",
      name: "name",
      label: "Name",
      autoFocus: true,
      required: true,
      error: "Please enter your name",
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      autoFocus: false,
      required: true,
      error: "Please enter a valid email address",
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      autoFocus: false,
      multiline: true,
      rows: 4, // only applies if multiline is true
      required: true,
      error: "Please enter a message (1000 characters or less)",
    },
  ],
  submitButton: "Send",
  enquirySuccessMsg: "Your enquiry has been sent. Thank you!",
};

export const FOOTER = {
  imageAlt: "Copy That",
  image: "./images/title-logo.png",
  copyright: "Copyright © AB Development",
};
