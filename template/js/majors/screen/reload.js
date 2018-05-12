
'use strict'

//......................................................................................................................

E.screen.reload = () =>
{
  const {html , get , write , state , blocks} = E
  const {views} = blocks
  const {view} = state

  const block = views[view]
  const final = html(block)
  const screen = get(`#screen`)

  write(final).at(screen)

  E.info.view = view
}

