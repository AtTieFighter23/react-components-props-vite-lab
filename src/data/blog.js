import logo from "../assets/logo";

const blogData = {
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Props 101",
      date: "July 6, 2026",
      preview: "Setting up the building blocks of my site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "July 7, 2026",
      preview: "Passing props ain't easy",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

export default blogData;
