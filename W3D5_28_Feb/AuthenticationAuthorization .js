// Authentication in React applications typically involves managing user sessions, storing tokens, and handling login/logout functionality. 
// React Hooks make it easier to manage authentication-related state and actions within functional components.
//  Additionally, context and custom hooks enhances code reusability, providing a scalable and maintainable solution for authentication across various parts of a React application.
// import React, { useState } from 'react';
// const Login = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogin = () => {
       
//         setIsLoggedIn(true);
//     };
//     return (
//         <div>
//             {isLoggedIn ? (
//                 <p>Welcome, User!</p>
//             ) : (
//                 <button onClick={handleLogin}>
//                     Login
//                 </button>
//             )}
//         </div>
//     );
// };
// export default Login;

//Authorization
// import React, { useState } from 'react';
// const Dashboard = () => {
//   const [isAdmin, setIsAdmin] = useState(true);
//   return (
//     <div>
//       {isAdmin ? (
//         <p>Welcome, Admin!</p>
//       ) : (
//         <p>Unauthorized Access</p>
//       )}
//     </div>
//   );
// };
// export default Dashboard;

