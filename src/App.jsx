import jp from './assets/jp.svg';
import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

              <span className="login-form-title">Bem vindo!</span>

              <span className="login-form-title">
                <img src={jp} alt="" />
              </span>

              <div className="wrap-input">
                <input className='input' type="email" />
                <span className="focus input" data-placeholder='Email'> </span>
              </div>


              <div className="wrap-input">
                <input className='input' type="password" />
                <span className="focus input" data-placeholder='Senha'> </span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>

                <a href="" className="txt2">Criar conta.</a>
              </div>

          </form>
        </div>
      </div>
    </div>  
  );
}

export default App;
