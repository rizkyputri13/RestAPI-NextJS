import LandingPage from "./component/layout/LandingPage";

//import Coba from "./coba";
import JobList from "./jobList";

export default function Home() {
  return (
    <div>
      <LandingPage>
          <JobList/>
      </LandingPage>
    </div>
  )
}
