import './style.css'
import profile from '../../../assets/profile.svg'
const Table = () => {

    return (
        <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Order No.</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="customer">
                        <img src={profile}  alt="Wade Warren"/>
                        Wade Warren
                    </td>
                    <td>15478256</td>
                    <td>$124.00</td>
                    <td><div className="status delivered">Delivered</div></td>
                </tr>
                <tr>
                    <td className="customer">
                        <img src={profile}  alt="Jane Cooper"/>
                        Jane Cooper
                    </td>
                    <td>48965786</td>
                    <td>$365.02</td>
                    <td><div className="status delivered">Delivered</div></td>
                </tr>
                <tr>
                    <td className="customer">
                        <img src={profile} alt="Guy Hawkins"/>
                        Guy Hawkins
                    </td>
                    <td>78958215</td>
                    <td>$45.88</td>
                    <td><div className="status cancelled">Cancelled</div></td>
                </tr>
                <tr>
                    <td className="customer">
                        <img src={profile} alt="Kristin Watson"/>
                        Kristin Watson
                    </td>
                    <td>20965732</td>
                    <td>$65.00</td>
                    <td><div className="status pending">Pending</div></td>
                </tr>
                <tr>
                    <td className="customer">
                        <img src={profile} alt="Cody Fisher"/>
                        Cody Fisher
                    </td>
                    <td>95715620</td>
                    <td>$545.00</td>
                    <td><div className="status delivered">Delivered</div></td>
                </tr>
                <tr>
                    <td className="customer">
                        <img src={profile} alt="Savannah Nguyen"/>
                        Savannah Nguyen
                    </td>
                    <td>78514568</td>
                    <td>$128.20</td>
                    <td><div className="status delivered">Delivered</div></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
export default Table ;
