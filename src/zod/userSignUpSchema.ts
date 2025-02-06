import { z, ZodType } from 'zod';
import { SignUpOmitState } from '../components/Forms/UserForm.tsx';

export const userSignUpSchema: ZodType<SignUpOmitState> = z.object({
  email: z.string().email(),
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
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(16, { message: 'Password is too long' }),
});
