
`use strict`

//......................................................................................................................

E.listen.pool =
[
  {
    id : `template` ,
    active : true ,
    kill : true ,
    test : () => true ,
    act : () => console.log(`code listening template runned`) ,
  } ,
  {
    id : `view` ,
    active : true ,
    kill : false ,
    test : () => E.info.view !== E.state.view ,
    act : () => E.ratio.resize() ,
  } ,
]

