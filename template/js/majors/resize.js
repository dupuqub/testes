
`use strict`

//......................................................................................................................

P.resize = () =>
{
  //....................................................................................................................

  const {reroot , write , html , get} = P

  const screen = P.info.screen
  const aspect = screen.aspect

  //....................................................................................................................
  // calculations

  const space = {w : window.innerWidth , h : window.innerHeight}
  const scale = {w : space.w / screen.w , h : space.h / screen.h}

  const vertical = scale.w < scale.h

  const width = ! aspect ? screen.w : vertical ? space.w : scale.h * screen.w
  const height = ! aspect ? screen.h : ! vertical ? space.h : scale.w * screen.h
  const unit = ! aspect ? 1 : (width + height) / 2000

  //....................................................................................................................
  // store useful information for easy access

  P.info.unit = unit
  P.info.body = {width , height}
  P.info.screen.type = space.w < space.h ? `portrait` : space.w > space.h ? `landscape` : `square`

  //....................................................................................................................

  reroot(width , height , unit)

  //....................................................................................................................
}

