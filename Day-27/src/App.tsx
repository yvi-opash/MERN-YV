import ErrorBoundary from "./Components/ErrorBoundary";
import ErrorFallback from "./Components/ErrorFallback";
import BuggyComponent from "./Components/BuggyComponent";
import Fetchapi from "./Components/Fetchapi";

function App() {
  return (
    <div>
      <h1>My TypeScript React App</h1>

      <ErrorBoundary fallback={<ErrorFallback />}>
        <Fetchapi />
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorFallback />}>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
