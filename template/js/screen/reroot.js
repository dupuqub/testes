
'use strict'

//......................................................................................................................

P.screen.reroot = sheet =>
{
  if(sheet.href !== null && sheet.href.indexOf('/root.css') !== -1)
  {
    sheet.cssRules[0].style.cssText =

      '--w : ' + P.info.body.w + 'px ;' +
      '--h : ' + P.info.body.h + 'px ;' +
      '--u : ' + P.info.unit + 'px ;'

    return true // to stop running
  }
}

