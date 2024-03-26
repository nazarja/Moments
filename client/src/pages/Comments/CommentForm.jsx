import React, { useState } from 'react';
import FormContainer from '../../components/Forms/FormContainer';
import FormTextArea from '../../components/Forms/FormTextArea';

const CommentForm = () => {
    const [form, setFormData] = useState({ content: '' });
    const [errors, setErrors] = useState({});

    const handleSubmit = event => {
        e.preventDefault();
    };

    return (
        <div id="comment-form" className="mb-3">
            <FormContainer handleSubmit={handleSubmit} errors={errors} comment={true} submitText={'post'}>
                <FormTextArea
                    formKey={'content'}
                    formData={form}
                    setFormData={setFormData}
                    errors={errors}
                    rows={3}
                    comment={true}
                    placeholder={'Add a comment...'}
                />
            </FormContainer>
        </div>
    );
};

export default CommentForm;