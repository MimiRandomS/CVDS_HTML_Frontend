import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import AuthLogo from "../../components/AuthLogo/AuthLogo";
import AuthForm from "../../components/AuthForm/AuthForm";
import InputField from "../../components/InputField/InputField";

function Login() {
  return (
    <AuthLayout
      leftContent={
        <AuthForm type="login">
          <InputField type="text" text="Correo" />
          <InputField type="password" text="Contraseña" />
        </AuthForm>
      }
      rightContent={<AuthLogo />}
    />
  );
}

export default Login;
