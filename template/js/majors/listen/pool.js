
'use strict'

//......................................................................................................................

E.listen.pool =
[
  {
    id : 'view' ,
    active : true ,
    kill : false ,
    test : () => E.info.view !== E.state.view ,
    act : () => E.screen.resize() ,
  } ,
]

