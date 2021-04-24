import React from 'react';
import { Container } from 'reactstrap';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8},
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class SignUp extends React.Component<> {

    render() {

        return (
            <div>
                <Container>
                    <br />
                    <h1 id="textH3">Register</h1>
                    <Card className="signUpCard" style={{width:500, alignItems:"center", marginTop:20}}>
                        <Form className="register-form" {...formItemLayout}>

                            <br/>
                            <Form.Item name="email"
                                       label="E-mail"
                                       rules={[
                                           {
                                               type: 'email',
                                               message: 'The input is not valid E-mail!',
                                           },
                                           {
                                               required: true,
                                               message: 'Please input your E-mail!',
                                           },
                                       ]}>
                                <Input type="username"
                                          name="username"
                                          id="username"
                                          placeholder="Username"
                                          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            </Form.Item>
                            <Form.Item name="password"
                                       label="Password"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Please input your password!',
                                           },
                                       ]}
                                       hasFeedback >
                                <Input.Password
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            </Form.Item>
                            <Form.Item name="confirm"
                                       label="Confirm Password"
                                       dependencies={['password']}
                                       hasFeedback
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Please confirm your password!',
                                           },
                                           ({ getFieldValue }) => ({
                                               validator(_, value) {
                                                   if (!value || getFieldValue('password') === value) {
                                                       return Promise.resolve();
                                                   }
                                                   return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                               },
                                           }),
                                       ]}>
                                <Input.Password
                                    placeholder="Confirm Password" prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            </Form.Item>
                            <Form.Item label="E-mail" required="true">
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email" />
                            </Form.Item>

                            <br />
                            <Form.Item {...tailFormItemLayout}>
                                <Button> Register</Button>
                            </Form.Item>
                        </Form>
                    </Card>

                </Container>
            </div>
        );
    }
}


export default SignUp;
