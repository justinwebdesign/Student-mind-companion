import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console for debugging
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    // Clear localStorage and reload
    try {
      localStorage.clear();
    } catch (e) {
      console.error("Failed to clear localStorage:", e);
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-slate-100 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-amber-300">
                <AlertTriangle className="w-5 h-5" />
                Something went wrong
              </CardTitle>
              <CardDescription>
                We encountered an unexpected error. Don't worry, your data is safe.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <p className="text-sm text-slate-300 mb-2">
                  If this problem persists, you can reset the app to clear any corrupted data:
                </p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• All your check-ins and journal entries will be cleared</li>
                  <li>• Settings will be reset to defaults</li>
                  <li>• The app will restart fresh</li>
                </ul>
              </div>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-xs">
                  <summary className="cursor-pointer text-slate-400 hover:text-slate-300">
                    Error details (development only)
                  </summary>
                  <pre className="mt-2 p-2 bg-slate-800 rounded text-red-400 overflow-auto">
                    {this.state.error && this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </CardContent>
            <CardFooter className="justify-center">
              <Button onClick={this.handleReset} className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Reset App
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
