import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInAuthService } from '../../services/authServices';
import AuthForm from './AuthForm';

const AuthSignIn = () => {
    const navigate = useNavigate();
    
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await signInAuthService(formData);

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
            page={'sign in'}
            url={'/signup'}
        />
    );
};

export default AuthSignIn;