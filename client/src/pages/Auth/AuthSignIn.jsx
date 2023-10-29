import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInService } from '../../services/userService';
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
        const response = await signInService(formData);

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