import ButtonForm from "./UI/ButtonForm";
import InputForm from "./UI/InputForm";

const contentRegister = () => {
   return (
     <>
       <h3>Введите почту и пароль для регистрации.</h3>
       <form className="flex flex-col items-center justify-center" action="">
         <InputForm placeholder={"Имя"} type={"text"} />
         <InputForm placeholder={"E-mail"} type={"email"} />
         <InputForm placeholder={"Пароль"} type={"password"} />
         <InputForm placeholder={"Подтвердить пароль"} type={"password"} />
         <ButtonForm title={"Регистрация"} />
         <span>Регистрация с помощью</span>
       </form>
     </>
   );
 };

 export default contentRegister;
