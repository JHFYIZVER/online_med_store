import ButtonForm from "./UI/ButtonForm";
import InputForm from "./UI/InputForm";

const contentAuth = () => {
  return (
    <>
      <h3>Введите имя пользователя и пароль для входа.</h3>
      <form className="flex flex-col items-center justify-center" action="">
        <InputForm
          placeholder={"example@outlook.com"}
          type={"email"}
          autoComplete="email"
        />
        <InputForm
          placeholder={"***********"}
          type={"password"}
          autoComplete={"new-password"}
        />
        <ButtonForm title={"Войти"} />
        <span>Войти с помощью</span>
      </form>
    </>
  );
};

export default contentAuth;
