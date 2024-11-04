import Header from "./component/header";
import Footer from "./component/footer";
import Article from "./component/Article";

function App() {
  return (
    <>
      <Header />
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          {/* 左側 */}
          <div className="md:w-1/2 flex-grow lg:pr-24 md:p-8 lg:p-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium">
              Hello!!
              <br />
              Im Tommy!!
              <br />
              Web Engineer!
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
              src="./img/img_mine.webp"
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
            <Article />
          </div>
        </div>
      </section>
      <section className="text-gray-700" id="skills">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="./img/img_pc.webp"
              alt="パソコン"
              width="3840"
              height="2400"
              loading="lazy"
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
                  40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
