// // function Navbar() {

// //   const admin =
// //     JSON.parse(
// //       localStorage.getItem(
// //         "admin"
// //       )
// //     );

// //   const logout =
// //     () => {

// //       localStorage.removeItem(
// //         "adminToken"
// //       );

// //       localStorage.removeItem(
// //         "admin"
// //       );

// //       window.location.href =
// //         "/";

// //     };

// //   return (

// //     <div className="h-16 bg-white shadow flex items-center justify-between px-6">

// //       <h2 className="font-semibold">

// //         Spirit Of Kashmir

// //       </h2>

// //       <div className="flex items-center gap-4">

// //         <span>

// //           {admin?.name}

// //         </span>

// //         <button
// //           onClick={logout}
// //           className="bg-red-500 text-white px-4 py-2 rounded"
// //         >

// //           Logout

// //         </button>

// //       </div>

// //     </div>

// //   );

// // }

// // export default Navbar;






// function Navbar() {

//   const admin =
//     JSON.parse(
//       localStorage.getItem(
//         "admin"
//       )
//     );

//   const logout =
//     () => {

//       localStorage.removeItem(
//         "adminToken"
//       );

//       localStorage.removeItem(
//         "admin"
//       );

//       window.location.href =
//         "/";

//     };

//   return (

//     <div className="bg-white border-b border-gray-200 h-20 px-8 flex items-center justify-between">

//       <div>

//         <h2 className="text-2xl font-bold text-slate-800">

//           Spirit Of Kashmir

//         </h2>

//         <p className="text-gray-500 text-sm">

//           Admin Dashboard

//         </p>

//       </div>

//       <div className="flex items-center gap-5">

//         <div className="text-right">

//           <p className="font-semibold">

//             {admin?.name}

//           </p>

//           <p className="text-sm text-gray-500">

//             {admin?.email}

//           </p>

//         </div>

//         <button
//           onClick={logout}
//           className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
//         >

//           Logout

//         </button>

//       </div>

//     </div>

//   );

// }

// export default Navbar;










// import { FaBars } from "react-icons/fa";

// function Navbar({
//   sidebarOpen,
//   setSidebarOpen,
// }) {

//   const admin =
//     JSON.parse(
//       localStorage.getItem(
//         "admin"
//       )
//     );

//   const logout =
//     () => {

//       localStorage.removeItem(
//         "adminToken"
//       );

//       localStorage.removeItem(
//         "admin"
//       );

//       window.location.href =
//         "/";

//     };

//   return (

//     <div className="bg-white border-b border-gray-200 h-20 px-8 flex items-center justify-between">

//       <div className="flex items-center gap-4">

//         <button
//           onClick={() =>
//             setSidebarOpen(
//               !sidebarOpen
//             )
//           }
//           className="bg-slate-100 hover:bg-slate-200 p-3 rounded-xl"
//         >

//           <FaBars />

//         </button>

//         <div>

//           <h2 className="text-2xl font-bold text-slate-800">

//             Spirit Of Kashmir

//           </h2>

//           <p className="text-gray-500 text-sm">

//             Admin Dashboard

//           </p>

//         </div>

//       </div>

//       <div className="flex items-center gap-5">

//         <div className="text-right hidden md:block">

//           <p className="font-semibold">

//             {admin?.name}

//           </p>

//           <p className="text-sm text-gray-500">

//             {admin?.email}

//           </p>

//         </div>

//         <button
//           onClick={logout}
//           className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
//         >

//           Logout

//         </button>

//       </div>

//     </div>

//   );

// }

// export default Navbar;

















import { FaBars } from "react-icons/fa";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    window.location.href = "/";
  };

  // Avatar initials from name
  const initials = admin?.name
    ? admin.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : "A";

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* ── Left: hamburger + brand ── */}
        <div className="flex items-center gap-3 min-w-0">

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl
              transition-all duration-200
              ${sidebarOpen
                ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {/* Animated hamburger → X */}
            <div className="w-4 h-3.5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center
                ${sidebarOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-200
                ${sidebarOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center
                ${sidebarOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>

          {/* Brand */}
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Kashmir motif — small chinar leaf shape */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600
              flex items-center justify-center shadow-sm shadow-orange-200">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                {/* Simple stylised leaf / chinar */}
                <path d="M10 2 C6 2 3 5 4 9 C4.5 11 6 12.5 8 13.5 L8 17 C8 17.6 8.4 18 9 18
                         L11 18 C11.6 18 12 17.6 12 17 L12 13.5 C14 12.5 15.5 11 16 9
                         C17 5 14 2 10 2Z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-extrabold text-gray-900 leading-none tracking-tight truncate">
                Spirit of Kashmir
              </h1>
              <p className="text-[10px] text-gray-400 font-medium mt-0.5 uppercase tracking-widest">
                Admin Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: user info + logout ── */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* User info — hidden on small screens */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800 leading-tight">
                {admin?.name || "Admin"}
              </p>
              <p className="text-[11px] text-gray-400 truncate max-w-[180px]">
                {admin?.email}
              </p>
            </div>

            {/* Avatar circle */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600
              flex items-center justify-center text-white text-sm font-bold shadow-sm shadow-orange-200
              ring-2 ring-orange-100 flex-shrink-0">
              {initials}
            </div>
          </div>

          {/* Mobile avatar only */}
          <div className="flex sm:hidden w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600
            items-center justify-center text-white text-xs font-bold ring-2 ring-orange-100">
            {initials}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-gray-100" />

          {/* Logout */}
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-50 hover:bg-red-100 active:bg-red-200
              text-red-600 font-semibold text-sm px-4 py-2 rounded-xl transition-all duration-200
              border border-red-100 hover:border-red-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="hidden sm:inline">Logout</span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;