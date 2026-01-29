import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth || {})
    
    useEffect(() => {
        if(isError) {
            toast.error(message)
            dispatch(reset())
        }
        
        if(isSuccess || user) {
            navigate('/')
        }
    }, [isError, isSuccess, user, message, navigate, dispatch])
    
    const { email, password } = formData
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }
    
    if(isLoading) {
        return <Spinner />
    }
    
    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please login and start setting goals</p>
            </section>
            
            <section className='form'>
                <form onSubmit={onSubmit}>
                    
                    <div className='form-group'>
                        <input 
                            type="email"
                            className='form-control' 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Enter your email' 
                            onChange={onChange} 
                            required
                        />
                    </div>
                    
                    <div className='form-group'>
                        <input 
                            type="password"
                            className='form-control' 
                            id='password' 
                            name='password' 
                            value={password} 
                            placeholder='Enter password' 
                            onChange={onChange} 
                            required
                        />
                    </div>
                    
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
                
                <p style={{ marginTop: '20px', textAlign: 'center' }}>
                    Don't have an account? <Link to='/register'>Register</Link>
                </p>
            </section>
        </>
    );
}

export default Login;