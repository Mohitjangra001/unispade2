import "./App.css";
import ClientSay from "./ClientSay.js";
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
    <div className="w-full h-full">
      <Main></Main>
      <FindMentor></FindMentor>
      <WorkFlow></WorkFlow>
      <Mentor></Mentor>
      <div className="w-full h-[1.5px] bg-[#E7E3E9]"></div>
      <Mentor2></Mentor2>
      <div className="w-full h-[1.5px] bg-[#E7E3E9]"></div>
      <ClientSay></ClientSay>
      <div className="w-full h-[1.5px] bg-[#E7E3E9]"></div>
      <CarrerResoure></CarrerResoure>
      <div className="w-full h-[1.5px] bg-[#E7E3E9]"></div>
      <Faq></Faq>
      <div className="w-full h-[1.5px] bg-[#E7E3E9]"></div>
      <LastSect></LastSect>
      <div className="w-full h-[1.5px] bg-[#E7E3E9] my-14"></div>

    </div>
  );
}

export default App;
