import "./App.css";
import ClientTestimonials from "./ClientTestimonial.js.js";
import CarrerResoure from "./component/CarrerResoure.js";
import FindMentor from "./component/FindMentor.js";
import LastSect from "./component/LastSect.js";
import Main from "./component/Main.js";
import Mentor from "./component/Mentor.js";
import Mentor2 from "./component/Mentor2.js";
import WorkFlow from "./component/WorkFlow.js";
import Faq from "./Faq.js";

function App() {


  return (
    <div className="app-main">
    
      <Main></Main>
      <FindMentor></FindMentor>
      <WorkFlow></WorkFlow>
      <Mentor></Mentor>
      <div className=""></div>
      <Mentor2></Mentor2>
      <div className=""></div>
    <ClientTestimonials/>
      <div className=""></div>
      <CarrerResoure></CarrerResoure>
      <div className=""></div>
      <Faq></Faq>
      <div className=""></div>
      <LastSect></LastSect>
      {/* <div className="w-full h-[1.5px] bg-[#E7E3E9] my-14"></div> */}

    </div>
  );
}

export default App;
