
`use strict`

//......................................................................................................................

P.blocks.views.template = () =>
{
  //....................................................................................................................

  const block =
  {
    id : `bob` ,
    type : `p` ,
    classes : [`asd` , `derf` , `fong`] ,
    others : [[`kro` , NaN] , [`nup` , null] , [`weg` , undefined]] ,
    inner :
    [
      {
        classes : [] ,
        others : [] ,
        inner :
        {
          id : `bob` ,
          type : `p` ,
          classes : [`asd` , `derf` , `fong`] ,
          others : [[`kro` , NaN] , [`nup` , null] , [`weg` , undefined]] ,
          inner : NaN
        }
      } ,
      {
        classes : [] ,
        others : [] ,
        inner :
        {
          classes : [] ,
          others : [] ,
          inner : () =>
          {
            const block = `hello`

            return block
          }
        }
      } ,
      {
        classes : [] ,
        others : [] ,
        inner :
        {
          inner : () => 3 + 2
        }
      } ,
    ]
  }

  //....................................................................................................................

  return block

  //....................................................................................................................
}

