
'use strict'

//......................................................................................................................

P.screen.resize = () =>
{
  //....................................................................................................................
  // calculations

  const

  screen = P.info.screen ,

  partial =
  {
    w : window.innerWidth / screen.w ,
    h : window.innerHeight / screen.h ,
  } ,

  vertical = partial.w < partial.h ,

  w = ! screen.aspect ? screen.w : vertical ? window.innerWidth : partial.h * screen.w ,
  h = ! screen.aspect ? screen.h : ! vertical ? window.innerHeight : partial.w * screen.h

  //....................................................................................................................
  // store useful information for fast access

  P.info.body = { w , h }
  P.info.unit = w / 800

  //....................................................................................................................
  // modify CSS

  Array
  .from(document.styleSheets)
  .some(P.screen.reroot)
}

