import { FaGolang, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa6';
import { SiTypescript } from 'react-icons/si';
import style from './skills.module.css';

export default function Skills() {
  const size = 40;

  return (
    <div className={style.skill_wrapper}>
      <FaGolang size={size} />
      <SiTypescript size={size} />
      <FaGitAlt size={size} />
      <FaGithub size={size} />
      <FaDocker size={size} />
    </div>
  );
}
