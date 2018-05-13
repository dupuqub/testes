
`use strict`

//......................................................................................................................

E.ratio.resize = () =>
{
  //....................................................................................................................

  const {reroot , reload} = E.ratio
  const {ratio} = E.info

  //....................................................................................................................
  // calculations

  const space = {w : window.innerWidth , h : window.innerHeight}
  const scale = {w : space.w / ratio.w , h : space.h / ratio.h}

  const vertical = scale.w < scale.h

  const w = vertical ? space.w : scale.h * ratio.w
  const h = ! vertical ? space.h : scale.w * ratio.h
  const u = (w + h) / 2000

  //....................................................................................................................
  // store useful information for easy access

  E.info.unit = u
  E.info.body = {w , h}
  E.info.ratio.type =

      space.w < space.h
    ? `portrait`
    : space.w > space.h
    ? `landscape`
    : `square`

  //....................................................................................................................
  // complete

  reroot(w , h , u)
  reload()

  //....................................................................................................................
}

