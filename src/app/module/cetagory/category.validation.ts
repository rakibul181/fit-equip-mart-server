import { z } from 'zod'

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Name is required'),
    image: z.string().url('Invalid URL'),
  }),
})

export const categoryValidation = {
  createCategoryValidationSchema,
}
