import { AnimationProps } from 'framer-motion';

export const animate: AnimationProps = {
  animate: {},
  variants: {
    initial: {},
    hidden: {},

    initialIcon: {
      opacity: 0
    },
    showIcon: {
      opacity: 1
    },
    hiddenIcon: {
      opacity: 0
    },
  }
}