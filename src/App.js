import BPLoading from "components/Elements/BPLoading";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes/routesDefinition";

function App() {
  return (
    <Suspense
      fallback={
        <BPLoading
          className={"flex justify-center items-center h-screen"}
          size={"large"}
        />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
