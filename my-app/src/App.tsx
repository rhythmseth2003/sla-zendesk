import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import Reply from './components/ReplyMetrics';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <Reply />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
