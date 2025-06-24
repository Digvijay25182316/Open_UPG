import React from 'react';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="bg-white text-blue-600 p-10 rounded-[40px] shadow-lg w-full max-w-sm flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">OpenUPG</h1>
        <form className="w-full">
          <label className="block mb-2 text-sm font-medium">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 mb-4 rounded bg-white text-black outline-none border border-blue-400 focus:border-2 focus:border-blue-100"
            maxLength={10}
            pattern="[0-9]{10}"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-100 text-blue-400 text-lg font-semibold py-2 rounded hover:bg-blue-200 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
