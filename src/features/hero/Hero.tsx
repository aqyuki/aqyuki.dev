import style from './hero.module.css';
import Links from '@/features/links/Links';
import Avatar from '@/features/avatar/Avatar';
import Link from 'next/link';
import { jost } from '@/utils/fonts/fonts';

export default function Hero() {
  return (
    <div className={style.hero_wrapper}>
      <div className={style.hero_card}>
        <Avatar />
        <h1 className={jost.className}>Student Developer / uwaaa</h1>
        <Link href="/about" className={jost.className}>
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
