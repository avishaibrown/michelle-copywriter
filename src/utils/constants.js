export const NAME = "Michelle Sky";

export const BANNER_TITLES = [
  "Copywriter.",
  "Content strategist.",
  "Brand storyteller.",
];

export const BANNER_DESCRIPTION =
  "Get the world to see your product the way you want it seen";

export const MAIN_ACTION_BUTTON = "Let's Talk";

export const MENU_ITEMS = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Contact", link: "/contact" },
];

export const ABOUT = {
  title: "About",
  description:
    "I am a copywriter, content strategist and brand storyteller. I help businesses and individuals tell their stories in a way that resonates with their audience. I have a background in journalism and have worked in the marketing industry for over 10 years. I have worked with a variety of clients from small businesses to large corporations. I have also worked with non-profit organisations and government agencies. I have a passion for writing and I love to help businesses and individuals tell their stories in a way that resonates with their audience.",
  image: "about-photo.jpg",
};

export const PORTFOLIO = {
  title: "Portfolio",
  projects: [
    {
      title: "Fisher Lane Mobility",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vRFlg8Z2Q667pCSetJShkrBWEoMHo8TunItF055auceuGkq1T1Hg7AFV_0IbdtVluive8AL29FVnK5I/pub?start=true&loop=true&delayms=3000",
      socialMedia: "https://www.instagram.com/fisherlane26/?hl=en",
      image: "./images/FisherLaneMobilityLogo.png",
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
      title: "Luson",
      url: "https://clydenorth.luson.com.au/",
      image: "./images/LusonLogo.png",
      width: "24%",
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
  title: "Contact",
  fields: [
    {
      id: "name",
      name: "name",
      label: "Name",
      autoFocus: true,
      required: true,
      error: "Please enter a name",
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
};

export const ENQUIRY_SUCCESS_MSG = "Your enquiry has been sent. Thank you!";

export const COPYRIGHT = "Copyright © AB Development";
