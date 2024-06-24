import { link } from "fs";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  {
    icon: <FaGithub />,
    path: "#",
  },
  {
    icon: <FaLinkedinIn />,
    path: "#",
  },
  {
    icon: <FaYoutube />,
    path: "#",
  },
  {
    icon: <FaTwitter />,
    path: "#",
  },
];

const Socials: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
