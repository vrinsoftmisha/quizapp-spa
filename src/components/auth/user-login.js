import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiServices from "../../api-services/api-services";
import { TOKEN } from "../../constant";
import { DASHBOARD } from "../../constant/routes";

const UserLogin = () => {
  let history = useNavigate();
  const apiServices = new ApiServices();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isUserLoggedIn = () => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      history(DASHBOARD);
    }
    return false;
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginResponse = await apiServices.login(
      "test@test.com",
      "hello@world"
    );
    console.log(loginResponse);
    localStorage.setItem(TOKEN, "testToken");
    history(DASHBOARD);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex mt-4 justify-center"></div>
        <h3 className="text-2xl font-bold text-center">
          Sign in to your account
        </h3>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-5">
              <label>Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div className="text-sm">
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                {" "}
                Forgot your password?{" "}
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={(e) => handleLogin(e)}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
