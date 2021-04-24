import React from 'react';
import {  Container, FormGroup, Label, ListGroup, ListGroupItem } from 'reactstrap';
import {Form, Input, Button, Card} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';




class SignIn extends React.Component<> {


    render() {

        return (
            <div>
                <Container>
                    <br />
                    <h1 id="textH3">Sign In</h1>
                    <Card className="signUpCard" style={{width:500, alignItems:"center", marginTop:20}}>
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <br />
                                <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                       className="login-form"
                                       type="username"
                                       name="username"
                                       id="username"
                                       placeholder="Username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="username">Password</Label>
                                <br />
                                <Input prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                       className="login-form"
                                       type="password"
                                       name="password"
                                       id="password"
                                       placeholder="Password"
                                />
                            </FormGroup>

                            <Button>Login</Button>{' '}
                            <Button>Logout</Button>
                        </Form>
                    </Card>
                    <br/>
                </Container>
            </div>

        );
    }
}




export default SignIn;