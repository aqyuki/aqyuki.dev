import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="title">Yuki Room</h1>

      <div className="content-center my-5">
        <Image
          src={"/image/sns/profile.png"}
          alt="Profile Image"
          width={350}
          height={350}
          className="rounded-lg"
        />
      </div>

      <div className="content-center my-5">
        <h2 className="article-title">Profile</h2>
        <p className="article-content">
          鹿児島高専の学生をしています。成人済み。 <br />
          ホロライブが好きで、配信をよく見ています。将来はCoverでHoloALTに関わりたいと思ってる。{" "}
          <br />
          メタバースとかVRとVTuberの融合を目指してる。 <br />
          専門はバックエンド・フロントエンドも少しできます。
        </p>
      </div>

      <div className="content-center my-5">
        <h2 className="article-title">Skills</h2>
        <p className="article-content">
          GoとTypeScriptをメインにCLIツールやWebページ・APIサーバーを作っています。Goが一番のお気に入りです。Rustも勉強しています。いつか、Rustでプログラムを書きたい。
          <br />
          アーキテクチャや設計も勉強中です。簡単なCIなら組めます。
          <br />
          Git/GitHub・GitHubActionも使えます。
        </p>
      </div>

      <div className="content-center my-5">
        <h2 className="article-title">Links</h2>
        <div className="article-grid my-2">
          <div className="content-center link-text">
            <a href="https://twitter.com/aqyuki21s">X</a>
          </div>
          <div className="content-center link-text">
            <a href="https://github.com/aqyuki">GitHub</a>
          </div>
          <div className="content-center link-text">
            <a href="https://zenn.dev/aqyuki">Zenn</a>
          </div>
        </div>
      </div>
    </main>
  );
}
