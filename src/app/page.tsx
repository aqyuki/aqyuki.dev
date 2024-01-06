import Image from 'next/image'
import RootContainer from '@/components/root_container'
import ContentContainer from '@/components/content_container'
import ContentTitle from '@/components/content_title'
import ContentText from '@/components/content_text'
import { LinkListProps, LinkList } from './components'

const LinkListItems: LinkListProps = {
  links: [
    {
      display: 'X',
      href: 'https://twitter.com/aqyuki21s',
    },
    {
      display: 'GitHub',
      href: 'https://github.com/aqyuki',
    },
    {
      display: 'Zenn',
      href: 'https://zenn.dev/aqyuki',
    },
  ],
}

export default function Home() {
  return (
    <main className='w-screen'>
      <RootContainer>
        <ContentContainer className='mx-auto'>
          <h1 className='page-title'>Yuki Room</h1>
        </ContentContainer>

        <ContentContainer className='mx-auto'>
          <Image
            src={'/image/sns/profile.png'}
            alt='Profile Image'
            width={350}
            height={350}
            className='rounded-lg'
          />
        </ContentContainer>

        <ContentContainer className='mx-auto'>
          <ContentTitle>Profile</ContentTitle>
          <ContentText> 鹿児島高専の学生をしています。成人済み。</ContentText>
          <ContentText>
            ホロライブが好きで、配信をよく見ています。将来はCoverでHoloALTに関わりたいと思ってる。
          </ContentText>
          <ContentText>
            メタバースとかVRとVTuberの融合を目指してる。{' '}
          </ContentText>
          <ContentText>
            専門はバックエンド・フロントエンドも少しできます。
          </ContentText>
        </ContentContainer>

        <ContentContainer className='mx-auto'>
          <ContentTitle>Skills</ContentTitle>
          <ContentText>
            GoとTypeScriptをメインにCLIツールやWebページ・APIサーバーを作っています。Goが一番のお気に入り。
          </ContentText>
          <ContentText>
            アーキテクチャや設計も勉強中です。簡単なCIなら組めます。
          </ContentText>
          <ContentText>Git/GitHub・GitHubActionも使えます。</ContentText>
        </ContentContainer>

        <ContentContainer>
          <ContentTitle>Links</ContentTitle>
          <LinkList links={LinkListItems.links} />
        </ContentContainer>
      </RootContainer>
    </main>
  )
}
