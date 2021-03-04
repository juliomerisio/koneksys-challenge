import { replaceItemAtIndex } from '../replaceItemAtIndex'

it('should replace item at index', function () {
  const arr = [
    { id: '2', name: 'Julio' },
    { id: '1', name: 'Merisio' },
  ]

  const merisioIndex = arr.findIndex((item) => item.name === 'Merisio')

  const newArr = replaceItemAtIndex(arr, merisioIndex, {
    id: '4',
    name: 'Cezar',
  })

  expect(newArr).toStrictEqual([
    { id: '2', name: 'Julio' },
    { id: '4', name: 'Cezar' },
  ])
})
