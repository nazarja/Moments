import { Image } from 'react-bootstrap';

const Avatar = ({ src, username, size = 35 }) =>
    <>
        <Image
            src={src}
            height={size}
            width={size}
            alt="default avatar"
        />
        <span className='text-capitalize'>{username}</span>
    </>;


export default Avatar;