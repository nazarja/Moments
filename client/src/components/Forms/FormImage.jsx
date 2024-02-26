import { forwardRef } from 'react';
import { Container, Form, Image } from 'react-bootstrap';
import FormErrors from './FormErrors';

const FormImage = forwardRef(({ src, text, formKey, formData, setFormData, errors }, ref) => {

    const handleChangeImage = event => {
        if (event.target.files.length) {
            URL.revokeObjectURL(formData[formKey]);
            setFormData({
                ...formData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        };
    };

    return (
        <>
            <Container className="container-border m-0 form-image-container">
                <Form.Label htmlFor="image-upload">
                    {
                        formData[formKey]
                            ? (
                                <>
                                    <figure>
                                        <Image src={formData[formKey]} className="form-image" rounded />
                                    </figure>
                                    <span className="form-button">Change the image</span>
                                </>
                            )
                            : (
                                <>
                                    <img src={src} alt={text} />
                                    <p className="mt-4">{text}</p>
                                </>
                            )
                    }
                    <Form.Control
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleChangeImage}
                        ref={ref}
                    />
                </Form.Label>
            </Container>
            <FormErrors errors={errors} type={'key'} keyName={formKey} />
        </>
    );
});

export default FormImage;