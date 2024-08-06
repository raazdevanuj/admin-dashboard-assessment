import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import layout from '../../assets/layout.svg'
import email from '../../assets/email.svg'
import setting from '../../assets/setting.svg'
import bell from '../../assets/bell.svg'
import profile from '../../assets/profile.svg'
import './style.css'


const Header = () => {
    return (
        <div className='header'>
            <div className='icon-header'>
            <img src={layout}/>
            </div>
            <div className='search'>
                <div className='search-content '>

                <Input prefix={<SearchOutlined/>}placeholder='Search'/>
                </div>
            </div>
          <div className='right-content'>
            <div className='icon-space'><img src={email}/></div>
            <div className='icon-space'><img src={setting}/></div>
            <div className='icon-space'><img src={bell}/></div>
            <div className='icon-space'><img src={profile}/></div>
          </div>
        </div>
    )
}
export default Header;