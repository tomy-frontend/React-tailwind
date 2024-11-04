const infoArray = [
  {
    name: "Web Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem",
  },
  {
    name: "Web Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem",
  },
  {
    name: "Web Director",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem",
  },
];

function Article() {
  return (
    <>
      {infoArray.map((info) => (
        <article key={info.name} className="md:w-1/3 p-4">
          <div className="bg-gray-200 rounded-lg p-8">
            <header className="flex items-center">
              <div className="bg-green-500 text-white rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg fotn-medium ml-2">
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Article;
