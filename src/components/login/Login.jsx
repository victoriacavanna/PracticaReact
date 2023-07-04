import {useState} from 'react'
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {users} = useContext(UsuariosContext);

    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={email}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Correo electronico</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={password}/>
            </div>
        </form>
    </>
  )
}

export default Login