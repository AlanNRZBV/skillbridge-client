import { z, ZodObject, ZodString } from 'zod';

export const userLoginSchema: ZodObject<{
  email: ZodString;
  password: ZodString;
}> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(16, { message: 'Password is too long' }),
});

export const userSignUpSchema: ZodObject<{
  firstName: ZodString;
  lastName: ZodString;
}> = userLoginSchema.extend({
  firstName: z
    .string()
    .regex(/^[A-Za-z\s]+$/, {
      message: 'Numbers and non-character symbols are not allowed',
    })
    .min(2, { message: 'First name is too short' })
    .max(36, { message: 'First name is too long' }),
  lastName: z
    .string()
    .regex(/^[A-Za-z\s]+$/, {
      message: 'Numbers and non-character symbols are not allowed',
    })
    .min(2, { message: 'Last name is too short' })
    .max(36, { message: 'Last name is too long' }),
});

export const userMessageSchema = userSignUpSchema.extend({
  phoneNumber: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: 'Invalid phone number format',
  }),
  subject: z
    .string()
    .min(5, { message: 'Subject is too short' })
    .max(36, { message: 'Subject is too long' }),
  message: z
    .string()
    .min(15, { message: 'Message is too short' })
    .max(512, { message: 'Message is too long' }),
});
