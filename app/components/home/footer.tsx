import { IconBrandInstagram as Instagram, IconBrandYoutube as Youtube, IconBrandReddit as Reddit } from "@tabler/icons-react";
import { motion } from "motion/react";
import { NavbarLogo } from "../ui/resizable-navbar";


const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <div className="text-center md:text-left">
            <NavbarLogo />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-cn-orange/20 transition-colors"
            >
              <Reddit />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-cn-pink/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-cn-red/20 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Circuit Nation. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
