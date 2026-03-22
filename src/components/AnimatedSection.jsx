"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      ease: "easeOut",
    },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function AnimatedSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedList({
  children,
  className,
  delay = 0,
  amount = 0.2,
  as = "div",
}) {
  const MotionComponent = motion[as] ?? motion.div;
  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerVariants}
      transition={{ delay }}
    >
      {children}
    </MotionComponent>
  );
}

export function AnimatedListItem({ children, className, as = "div" }) {
  const MotionComponent = motion[as] ?? motion.div;
  return (
    <MotionComponent className={className} variants={staggerItemVariants}>
      {children}
    </MotionComponent>
  );
}
