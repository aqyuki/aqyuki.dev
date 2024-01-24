import style from './links.module.css';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function Links() {
  return (
    <div className={style.links}>
      <a href="https://x.com/aqyuki21s">
        <FaXTwitter size={30} />
      </a>
      <a href="https://github.com/aqyuki">
        <FaGithub size={30} />
      </a>
    </div>
  );
}
