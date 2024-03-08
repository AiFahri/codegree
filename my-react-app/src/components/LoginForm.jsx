import React from "react";

const LoginForm = (type) => {
  return (
    <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-2" action="#" method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-1 text-gray-900"
          >
            Nama Lengkap
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type={type}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
