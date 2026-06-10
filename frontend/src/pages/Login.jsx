// import { useState } from "react";

// function Login() {

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const handleSubmit = (
//     e
//   ) => {

//     e.preventDefault();

//     console.log({
//       email,
//       password,
//     });

//   };

//   return (

//     <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">

//       <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

//         <div className="text-center mb-8">

//           <h1 className="text-3xl font-bold">

//             Admin Login

//           </h1>

//           <p className="text-gray-500 mt-2">

//             Spirit Of Kashmir

//           </p>

//         </div>

//         <form
//           onSubmit={
//             handleSubmit
//           }
//           className="space-y-4"
//         >

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) =>
//               setEmail(
//                 e.target.value
//               )
//             }
//             className="w-full border rounded-xl px-4 py-3 outline-none"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) =>
//               setPassword(
//                 e.target.value
//               )
//             }
//             className="w-full border rounded-xl px-4 py-3 outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-xl"
//           >

//             Login

//           </button>

//         </form>

//       </div>

//     </div>

//   );

// }

// export default Login;



















// import { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import API from "../api/axios";

// function Login() {

//   const [secretKey, setSecretKey] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   const handleGoogleSuccess =
//   async (credentialResponse) => {

//     try {

//       console.log(
//         "GOOGLE RESPONSE:",
//         credentialResponse
//       );

//       console.log(
//         "CLIENT ID:",
//         import.meta.env
//           .VITE_GOOGLE_CLIENT_ID
//       );

//       console.log(
//         "SECRET KEY:",
//         secretKey
//       );

//       if (!secretKey.trim()) {

//         alert(
//           "Please enter admin secret key"
//         );

//         return;

//       }

//       setLoading(true);

//       console.log(
//         "SENDING REQUEST..."
//       );

//       const res =
//         await API.post(
//           "/auth/admin-google-login",
//           {
//             token:
//               credentialResponse.credential,

//             secretKey,
//           }
//         );

//       console.log(
//         "LOGIN RESPONSE:",
//         res.data
//       );

//       localStorage.setItem(
//         "adminToken",
//         res.data.token
//       );

//       localStorage.setItem(
//         "admin",
//         JSON.stringify(
//           res.data.user
//         )
//       );

//       window.location.href =
//         "/dashboard";

//     } catch (error) {

//       console.log(
//         "FULL ERROR:",
//         error
//       );

//       console.log(
//         "ERROR RESPONSE:",
//         error?.response
//       );

//       console.log(
//         "ERROR DATA:",
//         error?.response?.data
//       );

//       alert(
//         error?.response?.data
//           ?.message ||
//           "Login failed"
//       );

//     } finally {

//       setLoading(false);

//     }

//   };

//   return (

//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

//         <div className="text-center mb-8">

//           <h1 className="text-3xl font-bold">

//             Spirit Of Kashmir

//           </h1>

//           <p className="text-gray-500 mt-2">

//             Admin Dashboard

//           </p>

//         </div>

//         <div className="space-y-5">

//           <input
//             type="password"
//             placeholder="Admin Secret Key"
//             value={secretKey}
//             onChange={(e) =>
//               setSecretKey(
//                 e.target.value
//               )
//             }
//             className="w-full border rounded-xl px-4 py-3 outline-none"
//           />

//           {loading ? (

//             <button
//               disabled
//               className="w-full bg-black text-white py-3 rounded-xl"
//             >

//               Logging In...

//             </button>

//           ) : (

//             <div className="flex justify-center">

//               <GoogleLogin
//                 onSuccess={
//                   handleGoogleSuccess
//                 }
//                 onError={() =>
//                   alert(
//                     "Google Login Failed"
//                   )
//                 }
//               />

//             </div>

//           )}

//         </div>

//       </div>

//     </div>

//   );

// }

// export default Login;


// import { useEffect, useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import API from "../api/axios";

// function Login() {

//   const [secretKey, setSecretKey] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   useEffect(() => {

//     console.log(
//       "========== LOGIN PAGE LOADED =========="
//     );

//     console.log(
//       "CURRENT URL:",
//       window.location.href
//     );

//     console.log(
//       "ORIGIN:",
//       window.location.origin
//     );

//     console.log(
//       "GOOGLE CLIENT ID:",
//       import.meta.env
//         .VITE_GOOGLE_CLIENT_ID
//     );

//     console.log(
//       "API URL:",
//       import.meta.env
//         .VITE_API_URL
//     );

//   }, []);

//   const handleGoogleSuccess =
//     async (credentialResponse) => {

//       try {

//         console.log(
//           "========== GOOGLE SUCCESS =========="
//         );

//         console.log(
//           "FULL RESPONSE:",
//           credentialResponse
//         );

//         if (!secretKey.trim()) {

//           alert(
//             "Please enter admin secret key"
//           );

//           return;

//         }

//         setLoading(true);

//         const payload = {

//           token:
//             credentialResponse.credential,

//           secretKey,

//         };

//         console.log(
//           "REQUEST PAYLOAD:",
//           payload
//         );

//         const res =
//           await API.post(
//             "/auth/admin-google-login",
//             payload
//           );

//         console.log(
//           "BACKEND RESPONSE:",
//           res.data
//         );

//         localStorage.setItem(
//           "adminToken",
//           res.data.token
//         );

//         localStorage.setItem(
//           "admin",
//           JSON.stringify(
//             res.data.user
//           )
//         );

//         window.location.href =
//           "/dashboard";

//       } catch (error) {

//         console.log(
//           "========== LOGIN ERROR =========="
//         );

//         console.log(error);

//         console.log(
//           "ERROR DATA:",
//           error?.response?.data
//         );

//         alert(
//           error?.response?.data
//             ?.message ||
//             "Login failed"
//         );

//       } finally {

//         setLoading(false);

//       }

//     };

//   const handleGoogleError =
//     () => {

//       console.log(
//         "========== GOOGLE ERROR =========="
//       );

//       console.log(
//         "Origin:",
//         window.location.origin
//       );

//       console.log(
//         "Client ID:",
//         import.meta.env
//           .VITE_GOOGLE_CLIENT_ID
//       );

//       alert(
//         "Google Login Failed"
//       );

//     };

//   return (

//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

//         <div className="text-center mb-8">

//           <h1 className="text-3xl font-bold">

//             Spirit Of Kashmir

//           </h1>

//           <p className="text-gray-500 mt-2">

//             Admin Dashboard

//           </p>

//         </div>

//         <div className="space-y-5">

//           <input
//             type="password"
//             placeholder="Admin Secret Key"
//             value={secretKey}
//             onChange={(e) =>
//               setSecretKey(
//                 e.target.value
//               )
//             }
//             className="w-full border rounded-xl px-4 py-3 outline-none"
//           />

//           {loading ? (

//             <button
//               disabled
//               className="w-full bg-black text-white py-3 rounded-xl"
//             >

//               Logging In...

//             </button>

//           ) : (

//             <div className="flex justify-center">

//               <GoogleLogin
//                 onSuccess={
//                   handleGoogleSuccess
//                 }
//                 onError={
//                   handleGoogleError
//                 }
//               />

//             </div>

//           )}

//         </div>

//       </div>

//     </div>

//   );

// }

// export default Login;













import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import API from "../api/axios";

function Login() {
  const [secretKey, setSecretKey] = useState("");
  const [loading, setLoading]     = useState(false);
  const [showKey, setShowKey]     = useState(false);
  const [focused, setFocused]     = useState(false);
  const [mounted, setMounted]     = useState(false);

  useEffect(() => {
    // mount animation trigger
    setTimeout(() => setMounted(true), 50);

    console.log("========== LOGIN PAGE LOADED ==========");
    console.log("CURRENT URL:", window.location.href);
    console.log("ORIGIN:", window.location.origin);
    console.log("GOOGLE CLIENT ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    console.log("API URL:", import.meta.env.VITE_API_URL);
  }, []);

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log("========== GOOGLE SUCCESS ==========");
      console.log("FULL RESPONSE:", credentialResponse);

      if (!secretKey.trim()) {
        alert("Please enter admin secret key");
        return;
      }

      setLoading(true);

      const payload = {
        token: credentialResponse.credential,
        secretKey,
      };

      console.log("REQUEST PAYLOAD:", payload);

      const res = await API.post("/auth/admin-google-login", payload);

      console.log("BACKEND RESPONSE:", res.data);

      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("admin", JSON.stringify(res.data.user));

      window.location.href = "/dashboard";
    } catch (error) {
      console.log("========== LOGIN ERROR ==========");
      console.log(error);
      console.log("ERROR DATA:", error?.response?.data);
      alert(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    console.log("========== GOOGLE ERROR ==========");
    console.log("Origin:", window.location.origin);
    console.log("Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    alert("Google Login Failed");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center px-4 relative overflow-hidden">

      {/* ── Decorative background blobs ── */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-orange-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-amber-200 rounded-full opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-orange-100 rounded-full opacity-20 blur-2xl pointer-events-none" />

      {/* ── Card ── */}
      <div
        className={`relative bg-white w-full max-w-md rounded-3xl shadow-2xl shadow-orange-100/60
          border border-orange-100/80 overflow-hidden
          transition-all duration-700 ease-out
          ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />

        <div className="p-8 sm:p-10">

          {/* ── Brand header ── */}
          <div className={`text-center mb-10 transition-all duration-700 delay-150
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

            {/* Logo mark */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
              bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-200 mb-5">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                {/* Chinar leaf */}
                <path d="M12 2C8 2 5 5.5 6 9.5C6.6 12 8.5 13.8 11 14.8V20C11 20.6 11.4 21 12 21
                         C12.6 21 13 20.6 13 20V14.8C15.5 13.8 17.4 12 18 9.5C19 5.5 16 2 12 2Z" />
              </svg>
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Sprit of Kashmir
            </h1>
            <p className="text-sm text-gray-400 mt-1.5 font-medium tracking-wide uppercase">
              Admin Portal
            </p>
          </div>

          {/* ── Form ── */}
          <div className={`space-y-5 transition-all duration-700 delay-300
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

            {/* Secret key input */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Admin Secret Key
              </label>
              <div className={`relative flex items-center rounded-2xl border-2 transition-all duration-200
                bg-gray-50 overflow-hidden
                ${focused ? "border-orange-400 bg-white shadow-md shadow-orange-100" : "border-gray-200"}`}>
                <div className="pl-4 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showKey ? "text" : "password"}
                  placeholder="Enter secret key…"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="flex-1 bg-transparent px-3 py-3.5 text-sm text-gray-800
                    placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="pr-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showKey ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400 font-medium">then sign in with Google</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Google login / loading */}
            {loading ? (
              <div className="flex items-center justify-center gap-3 w-full bg-gray-900 text-white
                py-3.5 rounded-2xl font-semibold text-sm">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Authenticating…
              </div>
            ) : (
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>
            )}

          </div>

          {/* ── Footer note ── */}
          <p className={`text-center text-xs text-gray-400 mt-8 transition-all duration-700 delay-500
            ${mounted ? "opacity-100" : "opacity-0"}`}>
            Restricted access — authorised personnel only
          </p>

        </div>
      </div>

      {/* Floating particles — pure CSS, no lib needed */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0)   scale(1);   opacity: 0.6; }
          100% { transform: translateY(-120px) scale(0.4); opacity: 0; }
        }
        .particle {
          position: absolute;
          bottom: 10%;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #f97316;
          animation: floatUp 4s ease-in infinite;
          pointer-events: none;
        }
        .particle:nth-child(1)  { left: 15%; animation-delay: 0s;    opacity: 0.4; width:6px;  height:6px;  }
        .particle:nth-child(2)  { left: 30%; animation-delay: 1.2s;  opacity: 0.3; width:10px; height:10px; background:#fb923c; }
        .particle:nth-child(3)  { left: 55%; animation-delay: 0.6s;  opacity: 0.5; width:5px;  height:5px;  }
        .particle:nth-child(4)  { left: 70%; animation-delay: 1.8s;  opacity: 0.3; width:8px;  height:8px;  background:#fbbf24; }
        .particle:nth-child(5)  { left: 85%; animation-delay: 0.3s;  opacity: 0.4; width:6px;  height:6px;  }
      `}</style>
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />

    </div>
  );
}

export default Login;