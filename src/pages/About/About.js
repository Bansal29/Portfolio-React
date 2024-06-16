// import React from "react";
// import "./About.css";
// import Jump from "react-reveal/Jump";
// const About = () => {
//   return (
//     <div>
//       <Jump>
//         <div className="about" id="about">
//           <div className="row">
//             <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
//               <h1>About me</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
//                 corporis repellat, sed accusantium ex aspernatur, distinctio
//                 quas, accusamus eaque aperiam nostrum reprehenderit cupiditate
//                 libero consectetur. Amet, laboriosam! Ad, voluptatem
//                 repellendus. Lorem ipsum dolor sit amet consectetur adipisicing
//                 elit. Commodi similique est cumque nemo dicta quos animi eaque
//                 voluptatem sit quis assumenda accusamus laboriosam fugiat,
//                 recusandae, sint tempora optio modi earum.Lorem ipsum dolor sit
//                 amet consectetur, adipisicing elit. Totam corporis repellat, sed
//                 accusantium ex aspernatur, distinctio quas, accusamus eaque
//                 aperiam nostrum reprehenderit cupiditate libero consectetur.
//                 Amet, laboriosam! Ad, voluptatem repellendus. Lorem ipsum dolor
//                 sit amet consectetur adipisicing elit. Commodi similique est
//                 cumque nemo dicta quos animi eaque voluptatem sit quis assumenda
//                 accusamus laboriosam fugiat, recusandae, sint tempora optio modi
//                 earum.
//               </p>
//             </div>
//             <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
//               <img src="profile.png" alt="profile_pic" title="Aryan Bansal" />
//             </div>
//           </div>
//         </div>
//       </Jump>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                corporis repellat, sed accusantium ex aspernatur, distinctio
                quas, accusamus eaque aperiam nostrum reprehenderit cupiditate
                libero consectetur. Amet, laboriosam! Ad, voluptatem
                repellendus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Commodi similique est cumque nemo dicta quos animi eaque
                voluptatem sit quis assumenda accusamus laboriosam fugiat,
                recusandae, sint tempora optio modi earum.Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Totam corporis repellat, sed
                accusantium ex aspernatur, distinctio quas, accusamus eaque
                aperiam nostrum reprehenderit cupiditate libero consectetur.
                Amet, laboriosam! Ad, voluptatem repellendus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Commodi similique est
                cumque nemo dicta quos animi eaque voluptatem sit quis assumenda
                accusamus laboriosam fugiat, recusandae, sint tempora optio modi
                earum.
              </p>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <Zoom>
                <img src="profile.png" alt="profile_pic" title="Aryan Bansal" />
              </Zoom>
            </div>
          </div>
        </div>
      </Jump>
    </div>
  );
};

export default About;
