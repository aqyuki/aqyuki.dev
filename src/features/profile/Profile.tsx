import Avatar from '@/features/avatar/Avatar'
import Skills from '@/features/skills/Skills'
import { jost } from '@/utils/fonts/fonts'

import style from './profile.module.css'
import Links from '../links/Links'

export default function Profile() {
  return (
    <div>
      <div className={style.profile_fix_center}>
        <div className={style.profile_card}>
          <Avatar />
          <h1 className={jost.className}>Student Developer / uwaaa</h1>
          <Links />
        </div>
      </div>

      <div className={style.profile_fix_center}>
        <div className={style.profile_card}>
          <h1 className={jost.className}>About Me</h1>
          <p className={jost.className}>
            NITKCに所属する学生です。
            <span> 主に、制御技術に関することについて学んでいます。</span>
          </p>
          <p className={jost.className}>
            趣味はゲームをすることで、
            <span>最近はブルーアーカイブをよくプレイしています。</span>
          </p>
          <p className={jost.className}>
            また、プログラムを書くことも好きで、
            <span>GoやTypeScriptをメインで使っています。</span>
          </p>
        </div>

        <div className={style.profile_card}>
          <h1 className={jost.className}>Skills</h1>
          <Skills />
        </div>

        <div className={style.profile_card}>
          <h1 className={jost.className}>Links</h1>
          <Links />
        </div>
      </div>
    </div>
  )
}
