import { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { createPostService } from '../../services/postService';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../../components/Forms/FormContainer';
import FormInput from '../../components/Forms/FormInput';
import FormImage from '../../components/Forms/FormImage';
import FormTextArea from '../../components/Forms/FormTextArea';
import UploadImage from '../../assets/images/upload-image.png';

const PostCreate = () => {
    const navigate = useNavigate();
    const imageRef = useRef(null);

    const [post, setPost] = useState({
        title: '',
        content: '',
        image: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async event => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("title", post.title);
        formData.append("content", post.content);
        formData.append("image", imageRef.current.files[0]);

        const response = await createPostService(formData);
        
        if (response.errors)
            setErrors(response.errors);
        else if (response.successUrl)
            navigate(response.successUrl);
    };

    return (
        <Row>
            <Col className="p-0 p-md-2 form-image-column" md={7} lg={8}>
                <FormImage
                    src={UploadImage}
                    text={"Click or tap to upload an image"}
                    formKey={'image'}
                    formData={post}
                    setFormData={setPost}
                    errors={errors}
                    ref={imageRef}
                />
            </Col>
            <Col md={5} lg={4} className="p-0 p-md-2">
                <FormContainer handleSubmit={handleSubmit} errors={errors}>
                    <FormInput
                        formKey={'title'}
                        formData={post}
                        setFormData={setPost}
                        errors={errors}
                    />
                    <FormTextArea
                        formKey={'content'}
                        formData={post}
                        setFormData={setPost}
                        errors={errors}
                    />
                </FormContainer>
            </Col>
        </Row>
    );
};

export default PostCreate;