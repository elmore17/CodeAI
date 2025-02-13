import IconBlog from "../assets/Blog.svg";
import IconSocial from "../assets/Social.svg";

const structure = [
  {
    id: 1,
    name: "Блог",
    iconSRC: IconBlog,
    state: false,
    child: [
      {
        id: 11,
        name: "Блог2",
        iconSRC: IconBlog,
      },
    ],
  },
  {
    id: 2,
    name: "Обсуждение",
    iconSRC: IconSocial,
    state: false,
    child: [],
  },
];

export default structure; 
