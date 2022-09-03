export const transformToListItem = (array: any) => {
  if (array.length === 0) return array
  const result: any = []
  const hasProperty = (prop: any) => (prop ? prop[0] : null)

  for (let i = 0; i < array.length; i++) {
    const data = {
      id: array[i]?.item.id,
      name: array[i]?.item.name,
      org_name: array[i]?.item?.organization?.name,
      phone: [{ value: hasProperty(array[i]?.item?.phones) }],
      picture_id: hasProperty(array[i]?.item?.picture_id),
      primary_email: array[i]?.item.primary_email
    }

    result.push(data)
  }

  return result
}
