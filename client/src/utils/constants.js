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
      title: "Project 1",
      date: "Nov 12",
      description:
        "This is a project I worked on for a non-profit organisation raising funds for the homeless.",
      image: "https://source.unsplash.com/random",
    },
    {
      title: "Project 2",
      date: "Nov 12",
      description:
        "This is a project I worked on for a non-profit organisation raising funds for the homeless.",
      image: "https://source.unsplash.com/random",
    },
    {
      title: "Project 3",
      date: "Nov 12",
      description:
        "This is a project I worked on for a non-profit organisation raising funds for the homeless.",
      image: "https://source.unsplash.com/random",
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
      required: true,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      required: true,
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      multiline: true,
      rows: 4, // only applies if multiline is true
      required: true,
    },
  ],
  submitButton: "Send",
};

export const COPYRIGHT = "Copyright © AB Development";
