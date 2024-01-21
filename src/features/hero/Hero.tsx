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
        <p className={jost.className}>Student Developer</p>
        <Links />
      </div>
    </div>
  );
}
