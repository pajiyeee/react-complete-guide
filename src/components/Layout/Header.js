import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from '../UI/HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.navigation}>
        <h4>Bagel Mart</h4>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes['banner-image']}>
        <img src="https://images.unsplash.com/photo-1494879186742-d85c43bbaf52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2785&q=80" />
      </div>
    </Fragment>
  );
};

export default Header;
