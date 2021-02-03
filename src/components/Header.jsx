import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { ReactComponent as FavoriteIcon } from '../assets/icons/favorite_border-24px.svg'
import { ReactComponent as FavoriteIconFill } from '../assets/icons/favorite-24px.svg'
import './Header.css';
import {useToggle} from '../hooks/useToggle'
import { Badge } from '@material-ui/core';






import { connect } from 'react-redux';

import {logoutUser} from '../redux/actions/users'

function Header(props) {
    const {numberOfProducts, numberOfFavorites, user, logout } = props;

    const [isToggled, setIsToggled] = useToggle();


    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    { user && user.uid
                        ? <p>Salut, {user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        <Link to='/favorites' className='heart-icon' onMouseEnter={setIsToggled} onMouseLeave={setIsToggled}>
                        <div className='mr-3'>
                        <Badge color="secondary" max={99} badgeContent={numberOfFavorites} >
                                    {
                                        isToggled
                                        ? <FavoriteIconFill className='heart-icon-hover'/>
                                        : <FavoriteIcon className='heart-icon-hover'/>
                                    }
                        </Badge>
                        </div>
            
                        </Link>
                        { user && user.uid
                            ? <p className="logout h5" onClick={() => logout()}>Delogare</p>
                            : <Link to="/login" className="h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            {/* Adaugam link catre pagina cart-ului */}
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0">{ numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        numberOfFavorites: state.favorites.items.length,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch){
    return{
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);