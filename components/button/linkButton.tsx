import { motion } from 'framer-motion'
import { MouseEvent, useState } from 'react'

export const LinkButton = ({ onClick, text, className, secondary, accent }:{text:string, onClick?:Function, className?:string, secondary?:boolean, accent?:boolean}) => {
  const [hover, setHover] = useState(false)
  return <button
    className={'relative flex py-1 ' + (className || '')}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={(e: MouseEvent<HTMLElement>) => onClick ? onClick(e) : null}
  >
    <motion.div
      initial="hidden"
      className={'h-full absolute z-1 '}
      animate={ hover ? 'visible' : 'hidden'}
      variants={{
        visible: {
          width: '95%',
          backgroundColor: (
            secondary
              ? 'rgb(15, 23, 42)'
              : 'rgba(var(--accent)'
          )
        },
        hidden: {
          width: '0.4rem',
          backgroundColor: (
            secondary
              ? 'rgb(15, 23, 42)'
              : 'rgba(var(--accent)'
          )
        }
      }}
    />
    <div
      className='flex mt-2 font-bold ml-4 tracking-wide overflow-hidden w-36 m-0 p-0 z-10 '
      style={{
        color: (
          hover
            ? 'white'
            : 'rgb(15, 23, 42)'
        )
      }}
    >
      {text}
    </div>
  </button>
}
