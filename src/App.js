import "./App.css";
import ClientTestimonials from "./component/ClientTestimonial.js.js";
import CarrerResoure from "./component/CarrerResoure.js";
import FindMentor from "./component/FindMentor.js";
import LastSect from "./component/LastSect.js";
import Main from "./component/Main.js";
import Mentor from "./component/Mentor.js";
import Mentor2 from "./component/Mentor2.js";
import WorkFlow from "./component/WorkFlow.js";
import Faq from "./component/Faq.js";

function App() {


  return (
    <div className="app-main">
    
      <Main></Main>
      <FindMentor></FindMentor>
      <WorkFlow></WorkFlow>
      <Mentor></Mentor>
      <Mentor2></Mentor2>
    <ClientTestimonials/>
      <CarrerResoure></CarrerResoure>
      <Faq></Faq>
      <LastSect></LastSect>

    </div>
  );
}

export default App;
