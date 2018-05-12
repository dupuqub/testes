
`use strict`

//......................................................................................................................

E.click = event =>
{
  const {target} = event
  const {id} = target

  if (id === `new`)
  {
    E.state.view = `editor`
  }
}

