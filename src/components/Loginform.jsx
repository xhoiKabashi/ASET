import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="text-center">
        <img
          src="./ImagesLoginScreen/loginn.jpeg"
          className="w-48 mx-auto mb-5 md:w-64 lg:w-80"
          alt="logo"
        />
        <h4 className="mt-3 mb-5 pb-1 text-lg md:text-xl lg:text-2xl italic font-semibold">
          Albania South East Terminal
        </h4>
      </div>

      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-left mb-6">Please login to your account:</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`mt-1 p-2 w-full border rounded ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className={`mt-1 p-2 w-full border rounded ${errors.password ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                }`}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign In
          </button>
          <div className="flex flex-col md:flex-row items-center justify-center pb-4 mb-4">
            <p className="mb-2 md:mb-0 md:mr-2">Don't have an account?</p>
            <button className="border border-red-500 text-red-500 py-1 px-4 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring focus:border-red-300">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm