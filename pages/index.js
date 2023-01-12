import LandingPage from "./component/layout/LandingPage";

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
