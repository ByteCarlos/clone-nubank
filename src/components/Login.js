import './login.css'
export default function Login(props) {
    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Acesse sua conta</h1>
                <h4>CPF</h4>
                <input type="text" value={props.cpf} onChange={(event) => props.setCpf(event.target.value)}></input>
                <h4>Senha</h4>
                <input type="password" value={props.password} onChange={(event) => props.setPassword(event.target.value)}></input>
                <p>Possui 8 caracteres ou mais</p>
                {props.cpf && props.password ? (
                    <button type="button">Continuar</button>
                ) : (
                    <button type="button" style={{backgroundColor: 'rgb(34, 34, 34)', color: 'rgba(255, 255, 255, 0.32)'}}>Continuar</button>
                )}
                
            </div>
            <div className="footer-login">
                <h4>Esqueci a senha</h4>
                <h4>Não sou cliente</h4>
            </div>
        </div>
    );

}