import Image from 'next/image';
import style from './hero.module.css';
import Links from './Links';
import Link from 'next/link';
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
        <h1 className={jost.className}>Student Developer / uwaaa</h1>
        <Link href="/profile" className={jost.className}>
          Profile
        </Link>
        <Link href="/works" className={jost.className}>
          Works
        </Link>
        <Links />
      </div>
    </div>
  );
}
