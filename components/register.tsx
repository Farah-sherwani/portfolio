// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { Button, message, Form, Input } from 'antd'
// import { useDispatch,  useSelector} from 'react-redux'
// import { registerUser } from '../store/actions/authAction'


// const Register = () => {
//     const dispatch = useDispatch()
//     const router = useRouter()
//     const users: string [] = useSelector((state: any) => state?.authReducerusers?.map((v: any) => v?.email ))

//     console.log('users',users)


//   const onFinish = (values: any) => {
//     console.log('Success:', values);
//     if (values?.fullName || !values?.email || !values?.password) {
//       return message.error('All firelds required!')
//     }
//     else if (values?.password?.length<6) {
//       return message.error('Password mustbe 6 character!')
//     }
//   values.email = values?.email?.toLowerCase()

//   // if(users?.indexOf(values?.email)!== - 1) {
//   //     return message.error('User already exit with this email')
//   // }

//           dispatch (registerUser(values))
//           message.success('Successfully Register')
//           router.push('./login')
//   }
  


//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo)
//   }

   
// // const Login = () => {

//     return (
//         <>
//         <div className='loginpage'>
//         <div className ='formcard'>
//         <h1>Register</h1>
//         <Form
//     name="basic"
//     labelCol={{ span: 8 }}
//     wrapperCol={{ span: 16 }}
//     style={{width:'100%' }}
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//    onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Full Name"
//       name="fullname"
//        rules={[{ required: true, message: 'Please input your Full Name!' }]}
//     >
//       <Input />
//     </Form.Item>
//     <Form.Item
//       label="Email"
//       name="email"
//     rules={[{ required: true, message: 'Please input your email!',type: 'email' }]}
//     >
//       <Input  />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//      rules={[{ required: true, message: 'Please input your password!' }]}
//     >
//       <Input.Password />
//     </Form.Item>

   
//     <Form.Item wrapperCol={{ offset: 8, span: 16 }}
//    >
//       <Button type="primary" htmlType="submit" block>
//         Login
//       </Button>
//     </Form.Item>
//     </Form>
// <p>Already have an account?<Link href={'/login'}>Register</Link></p>

  
//         </div> </div>
        
         
//         </>

//     )
// }


//         export default Register

