"use client";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const router = useRouter();
  const [user, setuser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  console.log(user);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("SignUp successfully Done");
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-indigo-600 font-bold sm:text-3xl">
            Sign-Up Page
          </h1>

          <p className="mt-4 text-gray-500">Sign-Up you account here</p>
        </div>

        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                type="text"
                value={user.username}
                onChange={(e) => setuser({ ...user, username: e.target.value })}
                className="w-full rounded-lg border-gray-200 text-black p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Your Username"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                value={user.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
                className="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                value={user.password}
                onChange={(e) => setuser({ ...user, password: e.target.value })}
                className="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Have an account?
              <Link className="underline" href="/login">
                Login here
              </Link>
            </p>

            <button
              onClick={onSignUp}
              className={`inline-block rounded-lg ${
                buttonDisabled
                  ? "bg-slate-500 opacity-50 pointer-events-none "
                  : "bg-indigo-600"
              }  px-5 py-3 text-sm font-medium text-white`}
            >
              {loading ? (
                <div className="animate-spin">
                  <AiOutlineLoading />{" "}
                </div>
              ) : (
                "SingUp"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;

// "use client";
// import Link from "next/link";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { AiOutlineLoading } from 'react-icons/ai';

// export default function SignUp() {
//   const router = useRouter();
//   const [user, setUser] = React.useState({
//     email: "",
//     password: "",
//     username: "",
//   });
//   const [buttonDisabled, setButtonDisabled] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   const onSignUp = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/signup", user);
//       console.log("Signup success", response.data);
//       router.push("/login");
//     } catch (error: any) {
//       console.log("SignUp failed", error.message);

//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (
//       user.email.length > 0 &&
//       user.password.length > 0 &&
//       user.username.length > 0
//     ) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1>{loading ? "Processing" : "Signup"}</h1>
//       <hr />
//       <label htmlFor="username">username</label>
//       <input
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//         id="username"
//         type="text"
//         value={user.username}
//         onChange={(e) => setUser({ ...user, username: e.target.value })}
//         placeholder="username"
//       />
//       <label htmlFor="email">email</label>
//       <input
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//         id="email"
//         type="text"
//         value={user.email}
//         onChange={(e) => setUser({ ...user, email: e.target.value })}
//         placeholder="email"
//       />
//       <label htmlFor="password">password</label>
//       <input
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//         id="password"
//         type="password"
//         value={user.password}
//         onChange={(e) => setUser({ ...user, password: e.target.value })}
//         placeholder="password"
//       />
//       <button
//         onClick={onSignUp}
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
//       >
//         {buttonDisabled ? "No signup" : "Signup"}
//       </button>
//       <Link href="/login">Visit login page</Link>
//     </div>

//   );
// }
