import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
// import { map } from 'framer-motion/client'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            img,
            imgClassName,
            className,
            title,
            titleClassName,
            description,
            spareImg,
            style
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
              spareImge={spareImg}
              style = {style}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default Grid