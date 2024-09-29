import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200 sticky inset-0 z-50 bg-white">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900">
            <span className="text-xl ml-3">Tommy-React</span>
          </a>
          <nav className="md:ml-auto text-base mt-4 md:mt-0">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skills" className=" hover:text-blue-400 duration-300">
              Skills
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          {/* 左側 */}
          <div className="md:w-1/2 flex-grow lg:pr-24 md:p-8 lg:p-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium">
              Hello!!
              <br />
              Im Tommy!!
              <br />
              Web Engineer
            </h1>
            <p className="mt-4 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
              voluptate tempora voluptatum similique esse vero magnam at quia
              corporis possimus!
            </p>
            <a
              href="https://tomy-dev.com/contact/"
              target="blank"
              className="mt-8 text-white bg-green-400 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300 inline-block"
            >
              Contact
            </a>
          </div>
          {/* 右側 */}
          <div className="md:w-1/2  mt-16 md:mt-0 flex-grow">
            <img
              src="./img/img_me.webp"
              alt="アイコン"
              width="5000"
              height="3334"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200" id="about">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              About Me
            </h2>
            <p className="mt-2 pb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              sed reiciendis neque explicabo similique tempore facilis, quas
              repudiandae et eaque qui, ad nostrum, error nihil accusantium
              sequi. Ipsam blanditiis sapiente velit repudiandae expedita
              mollitia fuga veritatis non. Est nesciunt tempora eligendi ducimus
              nam accusamus reprehenderit mollitia quo numquam inventore enim
              ullam, quos perferendis nostrum obcaecati error aperiam nulla,
              quae iusto a sunt veritatis quia fugit. Non amet corporis debitis
              beatae nesciunt, laborum harum ullam pariatur repellat
              necessitatibus soluta commodi eum aut est odio! Placeat iure
              consequatur magnam sint tempora excepturi vitae quod facilis,
              illum vel in veniam officiis. Aperiam, assumenda.
            </p>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit suscipit vero praesentium nisi dignissimos atque vel
              cum, earum veniam eius quis veritatis deserunt molestiae dicta
              esse recusandae quod porro rerum sunt ratione laudantium neque
              fugit accusamus? Dolores adipisci animi molestias provident modi
              at qui, ea dolor ducimus vitae harum quam magni exercitationem
              excepturi ratione quaerat, aut voluptatum iste quod repellat
              repellendus cumque rem incidunt? Exercitationem, amet. Aut
              nostrum, ipsam consectetur officiis et accusantium aliquid
              quisquam debitis quae totam iusto assumenda nam provident eveniet
              facilis eligendi excepturi laboriosam obcaecati. Nesciunt dicta
              rerum obcaecati aspernatur sit repellat velit doloremque eos
              perferendis! Laborum quo eligendi odio sit reprehenderit numquam
              repellendus molestiae commodi a autem fuga placeat, voluptas qui
              sequi ad! In iste tempora temporibus blanditiis sequi accusantium,
              voluptatum recusandae natus placeat eius voluptatem. Eaque aut
              possimus corporis ullam reiciendis, corrupti enim velit beatae
              laboriosam numquam ex soluta ratione porro voluptate. Voluptas
              corrupti iure, veritatis quo minus porro earum vel ex obcaecati,
              laudantium id fugiat labore perferendis hic iste quibusdam cum!
              Possimus assumenda sint accusamus quo impedit velit explicabo,
              consequuntur consectetur voluptatum praesentium nobis enim
              excepturi eligendi, quod fugiat quaerat porro suscipit omnis!
              Soluta perferendis, neque exercitationem similique amet ex vero
              illum assumenda quam?
            </p>
          </div>

          {/* カード全体*/}
          <div className="mt-20 flex flex-wrap">
            <article className="md:w-1/3 p-4">
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
                    Web Developer
                  </h2>
                </header>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum rem aliquam eveniet aut cumque at incidunt veniam,
                    ipsa veritatis magni dignissimos inventore vero odio
                    deserunt accusamus, nulla tempora aliquid asperiores!
                  </p>
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
            <article className="md:w-1/3 p-4">
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
                    Web Developer
                  </h2>
                </header>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum rem aliquam eveniet aut cumque at incidunt veniam,
                    ipsa veritatis magni dignissimos inventore vero odio
                    deserunt accusamus, nulla tempora aliquid asperiores!
                  </p>
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
            <article className="md:w-1/3 p-4">
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
                    Web Developer
                  </h2>
                </header>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum rem aliquam eveniet aut cumque at incidunt veniam,
                    ipsa veritatis magni dignissimos inventore vero odio
                    deserunt accusamus, nulla tempora aliquid asperiores!
                  </p>
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
          </div>
        </div>
      </section>

      <section className="text-gray-700" id="skills">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="./img/img_pc.jpg"
              alt="パソコン"
              className="rounded object-cover"
            />
          </div>
          {/* right side */}
          <div className="md:pl-12 md:py-6 w-full lg:w-1/2 mt-10 lg:mt-0 lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              My Skills
            </h2>
            <div className="mt-10 w-full">
              <h3>HTML</h3>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <h3 className="mt-5">CSS</h3>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <h3 className="mt-5">JavaScript</h3>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "60%" }}
                >
                  60%
                </div>
              </div>
              <h3 className="mt-5">PHP</h3>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "60%" }}
                >
                  60%
                </div>
              </div>
              <h3 className="mt-5">React</h3>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "10%" }}
                >
                  10%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-gray-700 bg-gray-100">
        <div className="container px-5 py-12 mx-auto">
          <p className="text-sm text-center">
            &copy;tomy_dev. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
