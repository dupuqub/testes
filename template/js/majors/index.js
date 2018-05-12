
`use strict`

//......................................................................................................................

onresize = () => P.resize()

//......................................................................................................................

P.begin = () =>
{
  const {html , get , resize , write , state , blocks} = P
  const {views} = blocks
  const {view} = state

  const block = views[view]
  const final = html(block)
  const box = get(`#box`)

  resize()

  write(final).at(box)
}

//......................................................................................................................

P.loop = () =>
{
  window.requestAnimationFrame(P.loop)
}

//......................................................................................................................

P.begin()
P.loop()

