
`use strict`

//......................................................................................................................

E.get = query => document.querySelector(query)
E.getAll = query => document.querySelectorAll(query)
E.write = text => ({at : box => box.innerHTML = text})

E.random = (min , max) => Math.random() * (max - min) + min
E.roll = (min , max) => Math.floor(E.random(min , max + 1))
E.concat = link => (a , b) => a + link + b
E.sum = (a , b) => a + b

//......................................................................................................................

E.is = (item , type) =>
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
    : E.is(item , `array`)
    ? type === `array`
    : typeof item === type

  return value
}

