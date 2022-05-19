import { useEffect, useRef, useState } from 'react'
import { Image } from '../../../components/image'
import { useStore } from '../../../lib/state'
import canvasLoop from './canvas'

export interface stateInterface{
  cHeight: number,
  cWidth: number,
  dots: number[][],
}

const HomeAboutSection = () => {
  const screenWidth = useStore((state:any) => state.screenWidth)
  const { mouseY, mouseX } = useStore((state:any) => state.mousePos)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasState, setCanvasState] = useState<stateInterface>({
    cHeight: 0,
    cWidth: 0,
    dots: []
  })

  useEffect(() => {
    const canvas = canvasRef.current
    let loopTimer:any

    if (!canvas) {
      console.error('canvas failed to load')
      return
    }
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      console.error('ctx failed to load')
      return
    }

    canvasLoop(setCanvasState, canvasState, canvas, ctx, mouseY, mouseX)

    return () => {
      clearTimeout(loopTimer)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [screenWidth, mouseY])

  return <section
    className='relative h-full w-full p-px min-h-[80vh]'
  >
    <div className='my-40'>
      <div
        className='relative bg-theme-main-bg/20 backdrop-blur-sm rounded overflow-hidden lg:flex max-w-[60rem] mx-auto z-20 '
        style={{
          // boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 20px'
        }}
      >
        <div className='mt-auto ml-10 lg:ml-0'>
          <Image
            src='/theodore_large_photo.png'
            alt=''
            height={220}
            width={220}
          />
        </div>
        <div className='ml-10 '>
          <h2 className='headerFont mb-1 text-theme-text-main text-3xl mt-4 font-[800] leading-[3.2rem] lg:leading-[4.3rem] '>
            About Me <span className='text-theme-accent'>/&gt;</span>
          </h2>
          <p className='mb-10 mr-5 md:mr-15 lg:mr-20 text-theme-text-accent'>
            {'I fell in love with design & coding 7 years ago. Since then I\'ve had the opportunity to work for agencies and small businesses designing systems, building websites, and all kinds of other awesome projects. I believe in making every project better than my last.'}
            <br/>
            <br/>
            {'I\'m always trying out new libraries and frameworks, even if just for cool weekend projects. '}
          </p>
        </div>
      </div>
    </div>
    <div
      className='w-full h-[40rem] absolute top-0 left-0 b-0'
    >
      <canvas
        className='w-full h-full'
        height={canvasState.cHeight}
        width={canvasState.cWidth}
        ref={canvasRef}
      />
    </div>
  </section>
}
export default HomeAboutSection

// ---------------------------------------
//   First concept at About Me Canvas
// ---------------------------------------
//
// let loopTimer:any
// function drawLoop (ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement) {

//   ctx.fillStyle = `rgba(${computedStyles.getPropertyValue('--main-bg')}, 1)`
//   ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

//   ctx.beginPath()
//   ctx.arc(20, 20, 3.5, 0, 2 * Math.PI, false)
//   ctx.fillStyle = 'red'
//   ctx.fill()

//   canvasState.dots.forEach((cords, index) => {
//     const y = cords[0]
//     const x = cords[1]

//     // adjusted for offset
//     const mouseYAdjusted = mouseY - (canvas.getBoundingClientRect().top + window.scrollY)
//     // x does not need to be adjusted as long as same width as Window
//     if (
//     // mouseX > (x - 40) && mouseX < (x + 40) &&
//       mouseYAdjusted > (y - 40) && mouseYAdjusted < (y + 40)
//     ) {
//       drawCircleFancy(ctx, x, y)
//     } else {
//       drawCircle(ctx, x, y)
//     }

//     if (y > canvas.offsetHeight) {
//       cords[0] = 0
//       cords[1] = Math.floor(Math.random() * canvas.offsetWidth) - (canvas.offsetWidth / 5)
//     } else {
//       cords[0] = y + 1
//       cords[1] = x + 1
//     }
//   })
//   loopTimer = setTimeout(() => {
//     drawLoop(ctx, canvas)
//   }, 10)
// }

// drawLoop(ctx, canvas)

// return () => {
//   clearTimeout(loopTimer)
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
// }
