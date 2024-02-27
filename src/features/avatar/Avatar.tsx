import Image from 'next/image';
import style from './avatar.module.css';

export default function Avatar() {
  return (
    <Image
      src="/profile.png"
      alt="profile image"
      width={250}
      height={250}
      className={style.avatar_image}
      priority
    />
  );
}
