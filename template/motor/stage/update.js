
`use strict`

//......................................................................................................................

M.stage.update = viewId =>
{
  //....................................................................................................................

  E.state.view = viewId

  //....................................................................................................................

  const {calculate , reroot} = M.stage
  const {stage} = E.state
  const space = {w : window.innerWidth , h : window.innerHeight}
  const newStage = calculate(stage , space)

  reroot(newStage)

  E.info.stage = newStage
  
  //....................................................................................................................

  const {html , get , write , is} = M
  const {views} = E.blocks
  const view = views[viewId]()
  const {block , start , loop} = view
  const text = html(block)
  const box = get(`#stage`)

  write(text).at(box)

  if (is(start , `function`)) start()
  if (is(loop , `object`)) E.loops.push(loop)

  //....................................................................................................................
}

