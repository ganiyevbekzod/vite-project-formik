import { RegisterWrapper, RegisterTitle, RegisterError, RegisterForm, RegisterInput, RegisterLabel, RegisterBlock, RegisterButton }
    from "./Register.style";
    import * as Yup from "yup"
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
export const Register = () => {
    const formik = useFormik({
        initialValues: {
            "First_name": "",
            "Last_name": '',
            "email": '',
            "password": '',
        },
        onSubmit: (values) => {
            axios.post("http://localhost:5050/register",values)
            .then(res=>console.log(res)).catch((err)=>console.log(err));
        },
        validationSchema:Yup.object({
            "First_name": Yup.string().required("Required!!!"),
            "Last_name": Yup.string().required("Required!!!"),
            "email": Yup.string().email("Invalid email format").required("Required!!!"),
            "password": Yup.string().min(3,"Password must be longer 3 chartes").max(8,"Password must be last 8 charters").required("Required!!!"),
        })
    })
    return (<RegisterWrapper>
        <div>
            <RegisterTitle>Register</RegisterTitle>
            <RegisterForm onSubmit={formik.handleSubmit}>
                <RegisterBlock>
                    <RegisterLabel htmlFor="First name">First name</RegisterLabel>
                    <RegisterInput
                        type="text"
                        id="First name"
                        name="First_name"
                        placeholder="First name"
                        {...formik.getFieldProps("First_name")}
                    >
                    </RegisterInput>
                    {formik.touched.First_name && formik.errors.First_name ? (<RegisterError>{formik.errors.First_name}</RegisterError>) : ("")}
                </RegisterBlock>
                <RegisterBlock>
                    <RegisterLabel htmlFor="Last name">Last name</RegisterLabel>
                    <RegisterInput
                        type="text"
                        id="Last name"
                        name="Last_name"
                        placeholder="Last_name"
                        {...formik.getFieldProps("Last_name")}
                        >
                    </RegisterInput>
                    {formik.touched.Last_name && formik.errors.Last_name ? (<RegisterError>{formik.errors.Last_name}</RegisterError>) : ("")}
                </RegisterBlock>
                <RegisterBlock>
                    <RegisterLabel htmlFor="email">Email</RegisterLabel>
                    <RegisterInput
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        {...formik.getFieldProps("email")}
                        >
                    </RegisterInput>
                    {formik.touched.email && formik.errors.email ? (<RegisterError>{formik.errors.email}</RegisterError>) : ("")}
                </RegisterBlock>
                <RegisterBlock>
                    <RegisterLabel htmlFor="password">Password</RegisterLabel>
                    <RegisterInput
                        type="text" id="password"
                        name="password"
                        placeholder="Password"
                        {...formik.getFieldProps("password")}>
                    </RegisterInput>
                    {formik.touched.password && formik.errors.password ? (<RegisterError>{formik.errors.password}</RegisterError>) : ("")}
                </RegisterBlock>
                <RegisterButton type="submit">
                    Send
                </RegisterButton>
            </RegisterForm>
        </div>
    </RegisterWrapper>
    )
}


