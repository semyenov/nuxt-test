import { getQuery } from 'h3'

export default async (req: any) => {
  const { name } = getQuery(req)
  return {
    data: `Hello ${name}`
  }
}