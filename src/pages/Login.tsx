import React from "react";
import { PageTitle } from "../components/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../toolkit/store";
import { toast } from "react-toastify";
import { Admin, LoginFormData } from "../types";
import { fetchLogin } from "../toolkit/slices/adminSlices";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const onSubmit: SubmitHandler<LoginFormData> = async (data: Admin) => {
    console.log("form is submit", data);
    try {
      const response = await dispatch(fetchLogin(data));
      const isSuccess = response.payload.data;
      isSuccess
        ? toast.success("Welcome back ...") &&
          navigate("/admin/dashbored/photo")
        : toast.error(response.payload.message);
    } catch (error: any) {
      toast.error(error.message || "An error occured");
    }
  };
  return (
    <div className="login-container">
      <PageTitle title="Login" />
      <h1 className="login-title">Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter your Email"
          required
          {...register("email", { required: "Email is Required" })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          {...register("password", { required: "Password is Required" })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
