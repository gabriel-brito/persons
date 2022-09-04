import { transformToListItem } from 'utils/persons'

describe('transformToListItem', () => {
  it('should return an empty array', () => {
    expect(transformToListItem([])).toEqual([])
  })

  it('should return the expected', () => {
    const partialMockmock = [
      {
        item: {
          id: 102,
          type: 'person',
          name: 'Pedro',
          phones: ['(111) 665-4865'],
          primary_email: 'pedro@gmail.com',
          organization: null,
          pictures: []
        }
      }
    ]

    const expected = [
      {
        id: 102,
        name: 'Pedro',
        org_name: undefined,
        phone: [{ value: '(111) 665-4865' }],
        picture_id: null,
        primary_email: 'pedro@gmail.com'
      }
    ]

    expect(transformToListItem(partialMockmock)).toStrictEqual(expected)
  })
})
