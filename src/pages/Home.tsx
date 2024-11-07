import Background from "@/components/Background";
import BlurIn from "@/components/ui/blur-in";


function Home () {
    return (
        <Background iconSize={24} gap={10}>
              <section className="flex flex-col items-center justify-center -space-y-2">

              
                <div className="flex flex-row items-center">
                  <BlurIn
                    word="Create"
                    duration={1}
                    className="text-5xl lg:text-8xl font-black text-center font-bebas joyText"
                  />
                  <BlurIn
                    word="."
                    duration={1}
                    className="text-5xl lg:text-8xl text-white font-black text-center font-bebas"
                  />
                  <span className="text-transparent select-none">.....</span>
                  <BlurIn
                    word="Restore"
                    duration={1}
                    className="text-5xl lg:text-8xl font-black text-center font-bebas joyText"
                  />
                  <BlurIn
                    word="."
                    duration={1}
                    className="text-5xl lg:text-8xl text-white font-black text-center font-bebas"
                  />
                </div>

                <div className="flex flex-row items-center">
                  <BlurIn
                    word="Innovate"
                    duration={2}
                    className="text-4xl lg:text-8xl font-black text-center font-bebas joyText"
                  />
                  <BlurIn
                    word=". All-in-one with"
                    duration={2}
                    className="text-4xl lg:text-8xl font-black text-center font-bebas text-white"
                  />
                </div>
                
                <div className="flex flex-row items-center">
                  <BlurIn
                    word="Engjoy"
                    duration={2.5}
                    className="text-4xl lg:text-8xl font-black text-center font-bebas animated-gradient-text bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text"
                  />
                  <BlurIn
                    word="."
                    duration={2.5}
                    className="text-4xl lg:text-8xl text-white font-black text-center font-bebas"
                  />
                </div>
              </section>
            </Background>
    )
}

export default Home;