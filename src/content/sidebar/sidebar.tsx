
import logout from '../../assets/logout.svg'
import home from '../../assets/home.svg'
import activehome from '../../assets/activehome.svg'
import activestore from '../../assets/activestore.svg'
import store from '../../assets/store.svg'
import activewallet from '../../assets/activewallet.svg'
import bar from '../../assets/bar.svg'
import activebar from '../../assets/activebar.svg'
import chipbox from '../../assets/chipbox.svg'
import activechip from '../../assets/activechip.svg'
import wallet from '../../assets/wallet.svg'
import { useState } from 'react'
import './style.css'
const Sidebar = () => {
    const [active, setActive] = useState('second')
    return (
        <div className='sider-bar'>
            <div>
                <div className='side-icon' onClick={() => setActive('second')}>{
                    active == 'second' ?
                        <div className='active'>
                            <div className='line'></div>
                            <div><img src={activehome} /></div>
                        </div>
                        :
                        <div><img src={home} /></div>}
                </div>
                <div className='side-icon' onClick={() => setActive('third')}>{
                    active == 'third' ?
                        <div className='active'>
                            <div className='line'></div>
                            <div><img src={activebar} /></div>
                        </div>
                        :
                        <div><img src={bar} /></div>}
                </div>
                <div className='side-icon' onClick={() => setActive('fourth')}>{
                    active == 'fourth' ?
                        <div className='active'>
                            <div className='line'></div>
                            <div><img src={activechip} /></div>
                        </div>
                        :
                        <div><img src={chipbox} /></div>}
                </div>
                <div className='side-icon' onClick={() => setActive('five')}>{
                    active == 'five' ?
                        <div className='active'>
                            <div className='line'></div>
                            <div><img src={activewallet} /></div>
                        </div>
                        :
                        <div><img src={wallet} /></div>}
                </div>
                <div className='side-icon' onClick={() => setActive('six')}>{
                    active == 'six' ?
                        <div className='active'>
                            <div className='line'></div>
                            <div><img src={activestore} /></div>
                        </div>
                        :
                        <div><img src={store} /></div>}
                </div>
            </div>
            <div className='side-icon sider-last' >
                <div><img src={logout} /></div>
            </div>


        </div>
    )
}
export default Sidebar;