import yup from "yup";

export const RegisterUserSchema = yup.object({
  username: yup.string().required().min(3).max(256).strict(),
  phonenumber: yup.number().required().strict(),
  email: yup.string().email().required().strict(),
  password: yup.string().required().min(8).max(256).strict(),
});

export const LoginUserSchema = yup.object({
  email: yup.string().email().required().strict(),
  password: yup.string().required().min(8).max(256).strict(),
});
