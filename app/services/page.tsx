"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Divide } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Develpment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit molestiae hic odio numquam! Ipsa.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium molestiae hic odio numquam! Ipsa.",
    href: "#",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur laudantium molestiae hic odio numquam! Ipsa.",
    href: "#",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum  adipisicing elit. Itaque sed animi, laudantium molestiae odio numquam! Ipsa.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div key={index}>
                {/* top */}
                <div>
                  <div>{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                {/* title */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
