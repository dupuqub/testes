
`use strict`

//......................................................................................................................

M.stage.calculate = (stage , total) =>
{
  const scale = {w : total.w / stage.w , h : total.h / stage.h}
  const vertical = scale.w < scale.h
  const {aspect} = stage

  const w = ! aspect ? stage.w : vertical ? total.w : scale.h * stage.w
  const h = ! aspect ? stage.h : ! vertical ? total.h : scale.w * stage.h
  const unit = ! aspect ? 1 : (w + h) / 2000

  return {w , h , unit}
}

