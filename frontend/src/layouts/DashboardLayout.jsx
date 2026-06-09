// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function DashboardLayout({
//   children,
// }) {

//   return (

//     <div className="flex">

//       <Sidebar />

//       <div className="flex-1">

//         <Navbar />

//         <div className="p-6">

//           {children}

//         </div>

//       </div>

//     </div>

//   );

// }

// export default DashboardLayout;







// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function DashboardLayout({
//   children,
// }) {

//   return (

//     <div className="min-h-screen bg-gray-100 flex">

//       <Sidebar />

//       <div className="flex-1 flex flex-col">

//         <Navbar />

//         <main className="p-8">

//           {children}

//         </main>

//       </div>

//     </div>

//   );

// }

// export default DashboardLayout;












// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen bg-gray-50 flex">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main area */}
//       <div className="flex-1 flex flex-col min-w-0">

//         {/* Navbar */}
//         <Navbar />

//         {/* Page content */}
//         <main className="flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-8">
//           <div className="max-w-7xl mx-auto">
//             {children}
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="px-8 py-3 border-t border-gray-200 bg-white text-xs text-gray-400 flex items-center justify-between">
//           <span>© {new Date().getFullYear()} Admin Panel</span>
//           <span>v1.0.0</span>
//         </footer>

//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;











// import { useState } from "react";

// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function DashboardLayout({
//   children,
// }) {

//   const [sidebarOpen, setSidebarOpen] =
//     useState(false);

//   return (

//     <div className="min-h-screen bg-gray-50 flex">

//       {/* Mobile Overlay */}

//       {sidebarOpen && (

//         <div
//           onClick={() =>
//             setSidebarOpen(false)
//           }
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//         />

//       )}

//       {/* Sidebar */}

//       <div
//   className={`fixed z-50 h-full transition-all duration-300
//   ${
//     sidebarOpen
//       ? "translate-x-0"
//       : "-translate-x-full"
//   }`}
// >

//         <Sidebar />

//       </div>

//       {/* Main */}

//       <div className="flex-1 flex flex-col min-w-0">

//         <Navbar
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={
//             setSidebarOpen
//           }
//         />

//         <main className="flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-8">

//           <div className="max-w-7xl mx-auto">

//             {children}

//           </div>

//         </main>

//         <footer className="px-8 py-3 border-t border-gray-200 bg-white text-xs text-gray-400 flex items-center justify-between">

//           <span>

//             © {new Date().getFullYear()} Admin Panel

//           </span>

//           <span>

//             v1.0.0

//           </span>

//         </footer>

//       </div>

//     </div>

//   );

// }

// export default DashboardLayout;












// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function DashboardLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">

//       {/* ── Mobile overlay ─────────────────────────── */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity"
//         />
//       )}

//       {/* ── Sidebar (fixed) ────────────────────────── */}
//       <div
//         className={`fixed z-50 h-full transition-transform duration-300 ease-in-out
//           ${sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}
//       >
//         <Sidebar />
//       </div>

//       {/* ── Main area ──────────────────────────────── */}
//       <div className="flex-1 flex flex-col min-w-0">

//         {/* Navbar */}
//         <Navbar
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={setSidebarOpen}
//         />

//         {/* Page content */}
//         <main
//           className={`flex-1 overflow-y-auto transition-all duration-300
//             px-4 py-6 md:px-8 md:py-8
//             ${sidebarOpen ? "lg:pl-72" : "pl-6 lg:pl-8"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             {children}
//           </div>
//         </main>

//         {/* Footer */}
//         <footer
//           className={`border-t border-gray-100 bg-white transition-all duration-300
//             px-6 py-3 md:px-8
//             ${sidebarOpen ? "lg:pl-72" : "pl-6 lg:pl-8"}
//             flex items-center justify-between`}
//         >
//           <span className="text-xs text-gray-400">
//             © {new Date().getFullYear()}{" "}
//             <span className="font-semibold text-gray-500">Spirit of Kashmir</span>
//           </span>
//           <span className="text-xs text-gray-300 font-mono">v1.0.0</span>
//         </footer>

//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;















import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ── Mobile overlay ─────────────────────────── */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* ── Sidebar drawer (fixed, slides in from left) ── */}
      <div
        className={`fixed z-50 h-full transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* ── Main area ──────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Navbar */}
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page content — left padding always present */}
        <main className="flex-1 overflow-y-auto py-6 md:py-8 px-5 sm:px-8 md:px-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-white px-6 md:px-10 py-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-500">Spirit of Kashmir</span>
          </span>
          <span className="text-xs text-gray-300 font-mono">v1.0.0</span>
        </footer>

      </div>
    </div>
  );
}

export default DashboardLayout;