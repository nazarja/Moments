import { Image } from 'react-bootstrap';

const Avatar = ({ src, username, size = 32 }) =>
    <div className="avatar">
        <Image
            src={src}
            height={size}
            width={size}
            alt="default avatar"
        />
        <span className="text-capitalize">{username}</span>
    </div>;


export default Avatar;