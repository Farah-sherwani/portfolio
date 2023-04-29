// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { Button, message, Form, Input } from 'antd';
// import { useDispatch, useSelector } from 'react-redux'
// //import { User } from '../utils/interfaces'
// import { loginUser } from '../store/actions/authAction'
// import { addAbortSignal } from 'stream';
// import { statfsSync } from 'fs';



// // const Login = () => {
// //   const dispatch = useDispatch()
// //   const router = useRouter()
// //   const users: User [] = useSelector((state: any) => state?.authReducerusers)

// //   const onFinish = (values: User) => {
// //     if (values?.fullName || !values?.email || !values?.password) {
// //       return message.error('All firelds required!')
// //     }
// //     else if (values?.password?.length < 6) {
// //       return message.error('Password mustbe 6 character!')

// //     }
// //     values.email = values?.email?.toLowerCase()
// //     for (var u of users) {
// //       console.log('u', u)
// //       if (u?.email === values?.email && u?.password === values?.password) {
// //         dispatch(loginUser(u))
// //         message.success('Successfully Login!')

// //         return router.push('/')

// //       }
// //     }

// //     message.error('Oops no user found')

// //   };

// //   const onFinishFailed = (errorInfo: any) => {
// //     console.log('Failed:', errorInfo);
// //   };


// //   // const Login = () => {

// //   return (
// //     <>
// //       <div className='loginpage'>
// //         <div className='formcard'>
// //           <h1>Login</h1>
// //           <Form
// //             name="basic"
// //             labelCol={{ span: 8 }}
// //             wrapperCol={{ span: 16 }}
// //             style={{ width: '100%' }}
// //             initialValues={{ remember: true }}
// //             onFinish={onFinish}
// //             onFinishFailed={onFinishFailed}
// //             autoComplete="off"
// //           >
// //             <Form.Item
// //               label="Email"
// //               name="email"
// //               rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
// //             >
// //               <Input className='form-input' />
// //             </Form.Item>

// //             <Form.Item
// //               label="Password"
// //               name="password"
// //               rules={[{ required: true, message: 'Please input your password!' }]}
// //             >
// //               <Input.Password />
// //             </Form.Item>


// //             <Form.Item wrapperCol={{ offset: 8, span: 16 }}
// //             >
// //               <Button type="primary" htmlType="submit" block>
// //                 Login
// //               </Button>
// //             </Form.Item>
// //           </Form>
// //           <p>Don't have an account?<Link href={'/register'}>Register</Link></p>
// //         </div> </div>


// //     </>

// //   )
// // }


// // export default Login



