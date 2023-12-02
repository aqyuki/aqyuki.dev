import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="root-container">
        <div className="content-container mx-auto">
          <h1 className="page-title">Yuki Room</h1>
        </div>

        <div className="content-container mx-auto">
          <Image
            src={"/image/sns/profile.png"}
            alt="Profile Image"
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>

        <div className="content-container mx-auto">
          <h2 className="content-title text-center">Profile</h2>

          <p className="w-body">
            鹿児島高専の学生をしています。成人済み。 <br />
            ホロライブが好きで、配信をよく見ています。将来はCoverでHoloALTに関わりたいと思ってる。
            <br />
            メタバースとかVRとVTuberの融合を目指してる。 <br />
            専門はバックエンド・フロントエンドも少しできます。
          </p>
        </div>

        <div className="content-container mx-auto">
          <h2 className="content-title text-center">Skills</h2>

          <p className="w-body">
            GoとTypeScriptをメインにCLIツールやWebページ・APIサーバーを作っています。Goが一番のお気に入り。
            <br />
            アーキテクチャや設計も勉強中です。簡単なCIなら組めます。
            <br />
            Git/GitHub・GitHubActionも使えます。
          </p>
        </div>

        <div className="content-container">
          <h2 className="content-title text-center">Links</h2>
          <div className="link-box">
            <div>
              <a href="https://twitter.com/aqyuki21s">X</a>
            </div>
            <div>
              <a href="https://github.com/aqyuki">GitHub</a>
            </div>
            <div>
              <a href="https://zenn.dev/aqyuki">Zenn</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
