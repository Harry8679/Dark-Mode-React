import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold">Dark Mode Test</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
