import { Image } from 'react-bootstrap';

const Avatar = ({ src, username, size = 35 }) =>
    <div>
        <Image
            src={src}
            height={size}
            width={size}
            alt="default avatar"
            className="mx-2"
        />
        <span className="text-capitalize">{username}</span>
    </div>;


export default Avatar;