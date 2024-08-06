import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import './style.css'
const Netprofit = () => {  
  const netProfit = 6759.25;
  const growth = 3; // 3%
  const goalCompletion = 70; // 70%

  return (
    <div className="container-net">
      <div className="netProfitSection">
        <h2 className="title">Net Profit</h2>
        <p className="netProfit">${netProfit.toFixed(2)}</p>
        <p className={`growth ${growth >= 0 ? 'positive' : 'negative'}`}>
          {growth >= 0 ? '▲' : '▼'} {growth}%
        </p>
      </div>
      <div className="progressSection">
        <CircularProgressbar
          value={goalCompletion}
          text={`${goalCompletion}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: '#3b82f6',
            textColor: '#fff',
            trailColor: '#d6d6d6',
          })}
        />
        <p className="goalText">Goal <br/> Completed</p>
        <p className="note">* The values here have been rounded off.</p>
      </div>
    </div>
  )
}

export default Netprofit