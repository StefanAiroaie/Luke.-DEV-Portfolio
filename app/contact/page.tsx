"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const contact = () => {
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+1 234 567 890",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "dev@dev.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Adress",
      description: "Code Corner, 123 Street, City, Country",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] oder-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Le't work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, ipsam. Nostrum quod provident facilis, nulla omnis
                libero, corporis expedita molestias similique qui perspiciatis
                eum rem quibusdam. Quibusdam quidem architecto minus? form
              </p>
              <div>
                <Input type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <Input type="email" name="email" placeholder="Email" />
              </div>
              <div>
                <Input type="text" name="subject" placeholder="Subject" />
              </div>
              <div>
                <Textarea name="message" placeholder="Message" />
              </div>
              <div>
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
