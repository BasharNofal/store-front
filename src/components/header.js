import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = (props) => {

    const state = useSelector(state => {
        // console.log(state)
        return { cartList: state?.cartList }
    });

    return (
        <AppBar style={{position:'relative'}}>
            <Toolbar  >
                <div>
                    <h1>Our Store</h1>
                </div>
                <div id='cartCount'>
                    <h3>Cart({state?.cartList?.length || 0})</h3>
                </div>                
            </Toolbar>
        </AppBar>
    )
}

export default Header