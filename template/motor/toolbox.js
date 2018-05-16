
`use strict`

//......................................................................................................................

M.get = query => document.querySelector(query)
M.getAll = query => document.querySelectorAll(query)
M.write = text => ({at : box => box.innerHTML = text})

M.random = (min , max) => Math.random() * (max - min) + min
M.roll = (min , max) => Math.floor(M.random(min , max + 1))
M.concat = link => (a , b) => a + link + b
M.sum = (a , b) => a + b

//......................................................................................................................

M.is = (item , type) =>
{
  const value =

      type === `array`
    ? Array.isArray(item)
    : type === `NaN`
    ? isNaN(item)
    : type === `null`
    ? typeof item === `object` && ! item
    : item === null
    ? type === `null`
    : M.is(item , `array`)
    ? type === `array`
    : typeof item === type

  return value
}

