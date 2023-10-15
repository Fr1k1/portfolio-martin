import { AndroidLogo, Code, Database, Desktop } from "@phosphor-icons/react";

export const servicesData = [
  {
    id: 1,
    title: "Web development",
    text: "I excel in building modern web applications by skillfully combining React, Vue, Angular, and Laravel. With a keen eye for design and a robust back-end foundation, I create seamless and engaging user experiences. My approach blends versatility, efficiency, and creativity, resulting in web solutions that leave a lasting impact. ",
    icon: <Code size={20} />,
    background: "rgba(255, 198, 198, 1)",
  },

  {
    id: 2,
    title: "Mobile development",
    text: "I specialize in crafting compelling mobile applications, wielding the power of Flutter and Kotlin. With a creative touch and a strong foundation in back-end development, I seamlessly blend aesthetic design with robust functionality to deliver engaging mobile experiences.",
    icon: <AndroidLogo size={20} />,
    background: "rgba(209, 198, 255, 1)",
  },

  {
    id: 3,
    title: "Desktop apps development",
    text: "I thrive in the realm of desktop application development, with .NET as my primary technology. Through the lens of .NET, I design and build powerful and intuitive desktop solutions that cater to diverse user needs. My expertise allows me to craft feature-rich applications that seamlessly integrate with various platforms, providing users with a smooth and impactful desktop experience.",
    icon: <Desktop size={20} />,
    background: "rgba(255, 232, 198, 1)",
  },

  {
    id: 4,
    title: "Database development",
    text: "Mastering the art of organizing and optimizing data for seamless application performance. Whether it's crafting efficient queries, designing robust database architectures, or ensuring data security and scalability, I'm well-versed in various database technologies. My expertise lies in leveraging databases to their full potential, ensuring the heart of an application is both solid and efficient, resulting in reliable and high-performing systems.",
    icon: <Database size={20} />,
    background: "rgba(212, 241, 218, 1)",
  },
];
