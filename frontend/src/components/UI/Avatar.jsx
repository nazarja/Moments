import { Image } from 'react-bootstrap';
import avatar from '../../assets/images/default-avatar.jpeg';

const Avatar = ({ src, text, height = 45 }) => {
    return (
        <>
            <Image
                src={src || avatar}
                className={""}
                height={height}
                width={height}
                alt="default avatar"
            />
            {text}
        </>
    );
};

export default Avatar;