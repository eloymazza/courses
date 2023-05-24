export const LoginMode = {
  device: 'device',
  email: 'email',
  social: 'social',
} as const;

//typeof extracts a type from an object.
export type LoginMode = keyof typeof LoginMode;
