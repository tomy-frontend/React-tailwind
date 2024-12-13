import CodeIcon from "@mui/icons-material/Code";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const infoArray = [
  {
    name: "Web Developer",
    text: "デザインカンプからのコーディング、WordPress構築・改修・React,Next.jsを使用したサイト制作などが対応可能です。",
  },
  {
    name: "Web Designer",
    text: "元々デザイナーになりたくて勉強をしていたので、簡易的なデザインを作成することも可能です！",
  },
  {
    name: "Web Director",
    text: "元々IT企業のサブマネージャーだったのでプロジェクトマネジメントの経験からディレクションも可能です!",
  },
];

function Article() {
  return (
    <>
      {infoArray.map((info) => (
        <article key={info.name} className="md:w-1/3 p-4">
          <div className="bg-gray-200 rounded-lg p-8">
            <header className="flex items-center">
              <CodeIcon className="text-green-500" />
              <h2 className="text-gray-900 text-lg font-medium ml-2">
                {info.name}
              </h2>
            </header>
            <div className="mt-3">
              <p>{info.text}</p>
              <a
                href="#"
                className="flex mt-3 text-green-500 items-center hover:text-green-400 duration-300"
              >
                もっと見る
                <ArrowOutwardIcon />
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Article;
