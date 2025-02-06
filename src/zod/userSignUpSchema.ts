import { z, ZodObject, ZodString, ZodType } from 'zod';

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

export const userSignUpSchema: ZodType<SignUpOmitState> =
  userLoginSchema.extend({
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
