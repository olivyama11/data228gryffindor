import React from 'react';
import { Layout } from 'antd';
import {Link, Route, Switch} from 'react-router-dom';
import SearchBar from "../searchBar";
import SignIn from "../signin";
import SignUp from "../signup";
import '../../styles/AppNav.css';

const { Header, Content } = Layout;



 class AppNav extends React.Component<> {



    render() {

        return (
            <Layout>
                <Layout>
                    <Header className="topNavBar">
                        <SearchBar/>
                        <div className="grow" />
                        <span><Link className="signIn" to="/signin">Log In</Link></span>
                        <span><Link className="signIn" to="/signup">Sign Up</Link></span>
                    </Header>
                    <div className="fullscreen">
                        <Content >
                            <Switch>
                                <Route exact path="/signin" component={SignIn} />
                                <Route exact path="/signup" component={SignUp} />
                            </Switch>
                        </Content>
                    </div>
                </Layout>
            </Layout>

        );
    }
}
export default AppNav;


