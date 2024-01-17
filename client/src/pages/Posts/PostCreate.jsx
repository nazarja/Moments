import { useState } from "react";
import FormContainer from "../../components/Forms/FormContainer";
import FormInputs from "../../components/Forms/FormInputs";

const PostCreate = () => {

    const [post, setPost] = useState({
        title: '',
        content: '',
        image: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <FormContainer handleSubmit={handleSubmit} errors={errors}>
            <FormInputs formData={post} setFormData={setPost} errors={errors}/>
        </FormContainer>
    );
};

export default PostCreate;