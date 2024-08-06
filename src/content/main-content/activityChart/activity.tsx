import ActivityChart from "./activityChart";
import './index.css'
const Activity = ()=> {
    return(
        <div className="active-header ">
          <div className="label">
        <div className="weekly-Activity">Activity</div>
        <div className="dropdown-button">
      Weekly
      <span className="dropdown-icon">▼</span>
    </div>
        </div>
        <ActivityChart />
      </div> 
    )
}
export default Activity;