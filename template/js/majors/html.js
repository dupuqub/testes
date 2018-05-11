
`use strict`

//......................................................................................................................

P.html = block =>
{
  //....................................................................................................................

  const pass = item => item ? (item.length ? item.length > 0 : false) : false
  const attribute = item => ` ${item[0]}="${item[1]}"`

  const is = P.is
  const sum = P.sum
  const html = P.html
  const concat = P.concat

  //....................................................................................................................
  // block calculations

  if (is(block , `function`)) block = block()
  if (is(block , `array`)) return block.map(html).reduce(sum)
  if (! is(block , `object`)) return block

  const type = block.type || `div`
  const id = block.id ? ` id="${block.id}"` : ``
  const classes = pass(block.classes) ? ` class="${block.classes.reduce(concat(` `))}"` : ``
  const others = pass(block.others) ? block.others.map(attribute).reduce(sum) : ``

  //....................................................................................................................
  // inner calculations

  if (is(block.inner , `function`)) block.inner = block.inner()

  const inner =

      is(block.inner , `array`)
    ? block.inner.map(html).reduce(sum , ``)
    : is(block.inner , `object`)
    ? html(block.inner)
    : block.inner

  //....................................................................................................................

  return `<${type}${id}${classes}${others}>${inner}</${type}>`

  //....................................................................................................................
}

