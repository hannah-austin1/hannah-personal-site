const slideUp = {
  name: "Slide Up",
  variants: {
    initial: {
      opacity: 0,
      top: "100vh",
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      top: "0vh",
      scale: 1,
    },
    exit: {
      opacity: 0,
      top: "100vh",
      scale: 0.4,
    },
  },
  transition: {
    duration: 0.7,
  },
};

const xOffset = 100;
export const slideRight = {
  name: "Slide Right",
  variants: {
    enter: (direction: number) => ({
      x: direction > 0 ? xOffset : -xOffset,
      opacity: 0,
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -xOffset : xOffset,
      opacity: 0,
    }),
  },
  transition: {
    duration: 0.5,
  },
};

// export const animations = [slideRight];
