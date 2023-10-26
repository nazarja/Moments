import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpAuthService } from '../../services/authServices';
import AuthForm from './AuthForm';

const AuthSignUp = () => {
    const navigate = useNavigate();
    
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        password1: '',
        password2: '',
    });

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await signUpAuthService(formData);

        if (response.errors)
            setErrors(response.errors);
        else if (response.successUrl)
            navigate(response.successUrl) 
    };

    return (
        <AuthForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            handleSubmit={handleSubmit}
            page={'sign up'}
            url={'/signin'}
        />
    );
};

export default AuthSignUp;