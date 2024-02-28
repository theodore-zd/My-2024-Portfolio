import { Dispatch, SetStateAction } from 'react'
import { stateInterface } from '.'

function canvasLoop (
  setCanvasState:Dispatch<SetStateAction<stateInterface>>,
  canvasState:stateInterface,
  canvas:HTMLCanvasElement,
  ctx:CanvasRenderingContext2D,
  mouseY:number,
  mouseX:number
) {
  setCanvasState({
    ...canvasState,
    cHeight: canvas.offsetHeight,
    cWidth: canvas.offsetWidth
  })

  const root:any = document.getElementById('rootDiv')
  const computedStyles = getComputedStyle(root)

  function drawCircle (ctx:CanvasRenderingContext2D, x:number, y:number) {
    ctx.beginPath()
    ctx.arc(x, y, 3.5, 0, 2 * Math.PI, false)
    ctx.fillStyle = `rgba(${computedStyles.getPropertyValue('--accent')},1)`
    ctx.fill()
    ctx.lineWidth = 6
    ctx.strokeStyle = `rgba(${computedStyles.getPropertyValue('--accent')},0.15)`
    ctx.stroke()
  }

  function drawCircleFancy (ctx:CanvasRenderingContext2D, x:number, y:number) {
    ctx.beginPath()
    ctx.arc(x, y, 6, 0, 2 * Math.PI, false)
    ctx.fillStyle = `rgba(${computedStyles.getPropertyValue('--accent')},1)`
    ctx.fill()
    ctx.lineWidth = 6
    ctx.strokeStyle = `rgba(${computedStyles.getPropertyValue('--accent')},0.15)`
    ctx.stroke()
  }

  // generate dots
  if (canvasState.dots.length === 0) {
    const newDots:number[][] = []
    let row = 0
    let col = 0
    Array.from(Array(1000).keys()).forEach((_, index) => {
      const spacing = 70
      const offset = index % 2

      if (row * spacing > canvas.offsetHeight) return
      if ((col * spacing) > canvas.offsetWidth) {
        col = 0
        row++
        console.log(row)
      } else {
        col++
      }
      newDots.push([
        // ---- OFFSET ------
        // Y
        Math.floor((spacing * row) + 10),
        // X
        Math.floor((spacing * col) + 10 + (offset ? spacing : 0))

        // ---- RANDOM ------
        // // Y
        // Math.floor(Math.random() * canvas.offsetHeight),
        // // X
        // Math.floor(Math.random() * canvas.offsetWidth) - (canvas.offsetWidth / 10)
      ])
    })
    console.log(newDots)
    setCanvasState({
      ...canvasState,
      dots: newDots
    })
  }

  function drawLoop (ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement) {
    ctx.fillStyle = `rgba(${computedStyles.getPropertyValue('--main-bg')}, 1)`
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

    canvasState.dots.forEach((cords, index) => {
      const y = cords[0]
      const x = cords[1]

      // adjusted for offset
      const mouseYAdjusted = mouseY - (canvas.getBoundingClientRect().top + window.scrollY)
      // x does not need to be adjusted as long as same width as Window
      if (
        mouseX > (x - 50) && mouseX < (x + 50) &&
        mouseYAdjusted > (y - 50) && mouseYAdjusted < (y + 50)
      ) {
        drawCircleFancy(ctx, x, y)
        if (x < mouseX) cords[1] = cords[1] + 1
        if (x > mouseX) cords[1] = cords[1] - 1
        if (y < mouseYAdjusted) cords[0] = cords[0] + 1
        if (y > mouseYAdjusted) cords[0] = cords[0] - 1
      } else {
        drawCircle(ctx, x, y)
        // bug like movement
        // cords[0] = (Math.random() < 0.5 ? cords[0] - 1 : cords[0] + 1)
        // cords[1] = (Math.random() < 0.5 ? cords[1] - 1 : cords[1] + 1)
      }
    })
  }

  drawLoop(ctx, canvas)
}

export default canvasLoop
