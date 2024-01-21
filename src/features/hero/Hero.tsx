import Image from 'next/image';
import style from './hero.module.css';
import Links from './Links';
import { jost } from '@/utils/fonts/fonts';

export default function Hero() {
  return (
    <div className={style.hero_wrapper}>
      <div className={style.hero_card}>
        <Image
          src="/profile.png"
          alt="profile image"
          width={250}
          height={250}
        />
        <h1 className={jost.className}>Student Developer</h1>
        <a href="profile" className={jost.className}>
          Profile
        </a>
        <a href="works" className={jost.className}>
          Works
        </a>
        <Links />
      </div>
    </div>
  );
}
