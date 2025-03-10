import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import AuthLogo from "../../components/AuthLogo/AuthLogo";
import AuthForm from "../../components/AuthForm/AuthForm";
import InputField from "../../components/InputField/InputField";

function Signup() {
  return (
    <AuthLayout
      leftContent={<AuthLogo />}
      rightContent={
        <AuthForm type="signup">
          <InputField type="number" text="Numero de identidad" />
          <InputField type="text" text="Nombre" />
          <InputField type="text" text="Correo" />
          <InputField type="password" text="Contraseña" />
        </AuthForm>
      }
    />
  );
}

export default Signup;
