import Image from "next/image";
import "@/css/home/hero.css";
import Button from "@/components/button/button";
import Greeting from "@/components/Greet/greet";
import Letter from "@/components/letter/letter";
import "@/css/home/second_home.css";
import Arrow from "@/components/arrow/arrow";
import EnSlider from "@/components/slider/enSlider";
import JpSlider from "@/components/slider/jpSlider";
import KrSlider from "@/components/slider/krSlider";
import Profile from "@/components/profile/profile";
import "@/css/home/third_home.css";
import "@/css/home/fourth_home.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";


export default function Home() {
  return (
    <>
      <main style={{ position: "relative" }}>
        <Letter
          letter="A"
          bgcolor={"white"}
          txtcolor={"black"}
          position={["50vh", "auto", "auto", "auto"]}
        />
        <Letter
          letter="あ"
          bgcolor={"white"}
          txtcolor={"black"}
          position={[60, 50, 70, 100]}
        />
        <Letter
          letter="에이"
          bgcolor={"white"}
          txtcolor={"black"}
          position={["85vh", "auto", "auto", 100]}
        />
        <Navbar />
        <section className={"hero"}>
          <section className={"visibleHero"}>
            <div className="hero_right_container">
              <Greeting />
              <div className="hero_text_block">
                <h3>Want to be an International Student?</h3>
                <div className={"hero_heading_sum"}>
                  <h1>97%</h1> <h2>VISA Acceptance</h2>
                </div>

                <div className="flex_center">
                  <h4>10,000+ Students Sent </h4>

                  <Image
                    alt=""
                    src="/img/buttons/kite.svg"
                    height={30}
                    width={30}
                  />
                </div>
              </div>

              <div className="button_container">
                <Button
                  name={"Start Learning"}
                  type={true}
                  content={
                    <Image
                      alt=""
                      src="/img/buttons/start.svg"
                      width={30}
                      height={30}
                    />
                  }
                />

                <Button
                  name={"More"}
                  type={false}
                  content={
                    <Image
                      alt=""
                      src="/img/buttons/arrow.svg"
                      width={30}
                      height={30}
                    />
                  }
                />
              </div>
            </div>
            <div className="heroImage">
              <Image alt="" src="/img/avatars/lady.png" fill priority />
            </div>
          </section>

          <svg
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 1,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#f3f4f6"
              fillOpacity="1.1"
              d="M0,0L48,26.7C96,53,192,107,288,112C384,117,480,75,576,96C672,117,768,203,864,208C960,213,1056,139,1152,106.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        <section className={"second_home"}>
          <h1
            style={{
              zIndex: "2",
              color: "black",
            }}
          >
            Our Reach
          </h1>
          <Arrow />
          <video
            className={"video"}
            preload="none"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/video/showcase.mp4" type="video/mp4" />
          </video>
        </section>
        <svg
          style={{
            backgroundColor: "#2A393D",

            display: "block",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,224C672,213,768,139,864,138.7C960,139,1056,213,1152,208C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <section className="third_home">
          <h1
            style={{
              placeSelf: "center",
            }}
          >
           What we Teach?
          </h1>

          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <div className={"thirdHomeImage"}
              style={{
                backgroundImage: `url("/img/objects/book.svg")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                aspectRatio: 1 / 1,
                height: "50vh",
                zIndex: "1",
                position: "absolute",
              }}
            ></div>
          </div>
          <EnSlider />
          <JpSlider />
          <KrSlider />
        </section>

        <div
          style={{
            backgroundColor: "#e1f9f9",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#2a393e"
              fillOpacity="1"
              d="M0,192L48,208C96,224,192,256,288,240C384,224,480,160,576,165.3C672,171,768,245,864,261.3C960,277,1056,235,1152,192C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <section className="fourth_home">
          <h1
            style={{
              color: "#293d3d",
            }}
          >
            Hear Your Seniors!
          </h1>

          <div className="cards">
            <Profile profilePic={"/img/avatars/Profile.png"} 
            fullName={"Kabita Rana"} 
            des={"I loved studying English with Fuji! The teachers were supportive, and the IELTS preparation was spot-on. The counseling services for studying abroad made my planning process much smoother. Thank you!"}/>

            <Profile profilePic={"/img/avatars/Profile.png"} 
            fullName={"Kamal Shah"} 
            des={"My journey with Fuji's Japanese course was fantastic! The lessons were engaging, and I felt well-prepared for the test. The counselors also provided great support for studying abroad. Thank you, Fuji!"} />

            <Profile profilePic={"/img/avatars/Profile.png"}
             fullName={"Kabtria Sharma"} 
             des={"I had an amazing experience with Fuji while learning Korean! The instructors were knowledgeable, and the test preparation helped me boost my confidence for the exam. Highly recommend it!"}/>

            <Profile profilePic={"/img/avatars/Profile.png"}
             fullName={"Muna Magar"} 
             des={"My experience with Fuji's Korean classes was fantastic! The curriculum was thorough, and the coaching prepared me well. The study abroad counseling also helped me make informed decisions."} />

            <Profile profilePic={"/img/avatars/Profile.png"}
             fullName={"Sagar Bista"} 
             des={"Fuji's English program exceeded my expectations! The classes were interactive, and the IELTS training made a significant difference in my score. I appreciate the guidance for studying abroad. Highly recommend!"}/>

            <Profile profilePic={"/img/avatars/Profile.png"} 
            fullName={"Kesab Acharya"} 
            des={"Learning Korean at Fuji was an incredible experience! The course structure was effective, and the instructors really helped me. The counseling services for studying abroad were also very insightful!"} />

          </div>
        </section>
     
          <svg style={{
            display: "block",
            backgroundColor:"#282a36"
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50">
            <path
              fill="#E1F9F9"
              fillOpacity="1"
              d="M0,32L0,32L36.9,32L36.9,0L73.8,0L73.8,96L110.8,96L110.8,32L147.7,32L147.7,96L184.6,96L184.6,192L221.5,192L221.5,160L258.5,160L258.5,160L295.4,160L295.4,192L332.3,192L332.3,288L369.2,288L369.2,32L406.2,32L406.2,32L443.1,32L443.1,0L480,0L480,32L516.9,32L516.9,96L553.8,96L553.8,224L590.8,224L590.8,96L627.7,96L627.7,96L664.6,96L664.6,256L701.5,256L701.5,0L738.5,0L738.5,128L775.4,128L775.4,288L812.3,288L812.3,128L849.2,128L849.2,224L886.2,224L886.2,96L923.1,96L923.1,224L960,224L960,256L996.9,256L996.9,224L1033.8,224L1033.8,256L1070.8,256L1070.8,32L1107.7,32L1107.7,64L1144.6,64L1144.6,32L1181.5,32L1181.5,224L1218.5,224L1218.5,288L1255.4,288L1255.4,32L1292.3,32L1292.3,0L1329.2,0L1329.2,160L1366.2,160L1366.2,320L1403.1,320L1403.1,32L1440,32L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
            ></path>
          </svg>

      </main>

      <Footer />
    </>
  );
}
