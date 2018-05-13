
`use strict`

//......................................................................................................................

E.screen.resize = () =>
{
  //....................................................................................................................

  const {screen} = E.info
  const {aspect} = screen

  //....................................................................................................................
  // calculations

  const space = {w : window.innerWidth , h : window.innerHeight}
  const scale = {w : space.w / screen.w , h : space.h / screen.h}

  const vertical = scale.w < scale.h

  const w = ! aspect ? screen.w : vertical ? space.w : scale.h * screen.w
  const h = ! aspect ? screen.h : ! vertical ? space.h : scale.w * screen.h
  const u = ! aspect ? 1 : (w + h) / 2000

  //....................................................................................................................
  // store useful information for easy access

  E.info.unit = u
  E.info.body = {w , h}
  E.info.screen.type = space.w < space.h ? `portrait` : space.w > space.h ? `landscape` : `square`

  //....................................................................................................................

  E.screen.reroot(w , h , u)
  E.screen.reload()

  //....................................................................................................................
}

