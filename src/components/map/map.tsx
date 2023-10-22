import "@/assets/fonts/fonts.sass";
import "@/assets/styles/global.sass";
import { useScreenSize } from '@/hooks/useScreen';
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useCallback, useState } from 'react';
import { Icon } from '../icon';
import styles from "./map.module.sass";

import cn from "classnames";
import { animate } from './animation';

export const Map: FC = () => {
  const [isHidden, setIsHidden] = useState(true)
  const screen = useScreenSize()

  const isMobile = screen.width <= 600;
  const isHiddenOnMobile = isMobile && isHidden;

  const handlerShowMap = useCallback(() => {
    setIsHidden(false)
  }, [setIsHidden])

  const handlerHideMap = useCallback(() => {
    setIsHidden(true)
  }, [setIsHidden])


  const handlers = {
    onMouseEnter: handlerShowMap,
    onMouseLeave: handlerHideMap
  }

  const mapSrc = "https://yandex.com/map-widget/v1/?um=constructor%3A20e8ecaa5800cc08a8c36c916b1b2376b1e95408ff2912937bf16f64d1fba789&amp;source=constructor"

  return (
    <motion.div
      variants={animate.variants}
      initial={"initial"}
      animate={"hidden"}
      transition={{}}
      className={cn(styles.main, {
        [styles.main_hidden]: isHidden
      })}
      {...handlers}
    >
      <AnimatePresence>
        {isHiddenOnMobile && (
          <motion.div
            variants={animate.variants}
            initial={"initialIcon"}
            animate={isHiddenOnMobile ? "showIcon" : "hiddenIcon"}
            exit={"hiddenIcon"}
            className={styles.cover}
          >
            <Icon name='location' />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.header}>
        <span>Find us</span>
        <Icon name={"arrow-right-up"} />
      </div>

      <div className={cn(styles.map, {
        [styles.map_hidden]: isHidden
      })}>
        <iframe src={mapSrc} aria-hidden={isHidden} />
      </div>

      <div className={styles.footer}>
        <Icon name='location' />
        <span>Strada Bulgară 27 Chişinău</span>
      </div>

    </motion.div>
  )
}