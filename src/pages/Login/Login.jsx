// import { LoginWrapper,LoginTitle,LoginForm,LoginInput,LoginLabel,LoginBlock,LoginButton } from "./login.style";


// import React from "react";
// export const Login = () => {
//     return (<LoginWrapper>
//       <div>
//       <LoginTitle>Login</LoginTitle>
//       <LoginForm>
//         <LoginBlock>
//         <LoginLabel htmlFor="email">Email</LoginLabel>
//         <LoginInput type="text" id="email" name="email" placeholder="Email"></LoginInput>
//         </LoginBlock>
//         <LoginBlock>
//         <LoginLabel htmlFor="password">Password</LoginLabel>
//         <LoginInput type="text" id="password" name="password" placeholder="Password"></LoginInput>
//         </LoginBlock>
//         <LoginButton type="submit">
//             Send
//         </LoginButton>
//       </LoginForm>
//       </div>
//     </LoginWrapper>
//     )
// }


import { LoginWrapper, 
    LoginError,
    LoginTitle, 
    LoginForm, 
    LoginInput, 
    LoginLabel, 
    LoginBlock, 
    LoginButton }
    from "./login.style";
import * as Yup from "yup"
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
export const Login = () => {
    const Formik = useFormik({
        initialValues: {
            "email": '',
            "password": '',
        },
        onSubmit: (values) => {
            axios.post("http://localhost:5050/login",values)
            .then(res=>console.log(res)).catch((err)=>console.log(err));
        },
        validationSchema:Yup.object({
            "email": Yup.string().email("Invalid email format").required("Required!!!"),
            "password": Yup.string().min(3,"Password must be longer 3 chartes").max(8,"Password must be last 8 charters").required("Required!!!"),
        })
    })
    // console.log(formik.errors)
    return (<LoginWrapper>
        <div>
            <LoginTitle>Login</LoginTitle>
            <LoginForm onSubmit={Formik.handleSubmit}>
                <LoginBlock>
                    <LoginLabel htmlFor="email">Email</LoginLabel>
                    <LoginInput
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        {...Formik.getFieldProps("email")}
                        >
                    </LoginInput>
                    {Formik.touched.email && Formik.errors.email ? (<LoginError>{Formik.errors.email}</LoginError>) : ("")}
                </LoginBlock>
                <LoginBlock>
                    <LoginLabel htmlFor="password">Password</LoginLabel>
                    <LoginInput
                        type="text" id="password"
                        name="password"
                        placeholder="Password"
                        {...Formik.getFieldProps("password")}>
                    </LoginInput>
                    {Formik.touched.password && Formik.errors.password ? (<LoginError>{Formik.errors.password}</LoginError>) : ("")}
                </LoginBlock>
                <LoginButton type="submit">
                    Send
                </LoginButton>
            </LoginForm>
        </div>
    </LoginWrapper>
    )
}






