
`use strict`

//......................................................................................................................

E.click = event =>
{
  const {target} = event

  if (target.id === `new`)
  {
    M.stage.update(`project`)
  }
}

