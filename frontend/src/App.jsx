import React from "react";
import Approutes from "./Routes/Approutes.jsx";
import { UserProvider } from "./Context/UserContext.jsx"
function App() {
  return (
    <UserProvider>
      <Approutes />
    </UserProvider>
  );
}

export default App;
