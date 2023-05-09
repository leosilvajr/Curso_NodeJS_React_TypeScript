// import RoutesApp from "./routes";
// import { ToastContainer } from "react-toastify";

// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   return (
//     <div className="App">
//       <ToastContainer autoClose={3000} />
//       <RoutesApp/>
//     </div>
//   );
// }

// export default App;

import RoutesApp from "./routes";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <RoutesApp/>
    </div>
  );
}

export default App;
