
`use strict`

//......................................................................................................................

P.get = query => document.querySelector(query)
P.getAll = query => document.querySelectorAll(query)
P.write = text => ({at : box => box.innerHTML = text})

P.random = (min , max) => Math.random() * (max - min) + min
P.roll = (min , max) => Math.floor(P.random(min , max + 1))
P.concat = link => (a , b) => a + link + b
P.sum = (a , b) => a + b

//......................................................................................................................

P.is = (item , type) =>
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
    : P.is(item , `array`)
    ? type === `array`
    : typeof item === type

  return value
}

