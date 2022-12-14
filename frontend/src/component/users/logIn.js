import { useContext, useState } from "react"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { CurrentUser } from "../../contexts/currentUser"

function LoginForm() {

    const history = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
       const response = await fetch(process.env.REACT_APP_API + `/authentication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(credentials)
       })

       const data = await response.json()

       if (response.status === 200) {
        setCurrentUser(data.user)
        history(`/`)
       } else {
        setErrorMessage(data.message)
       }
    }

    return (
        <Container>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <br />
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </Container>
    )
}

export default LoginForm