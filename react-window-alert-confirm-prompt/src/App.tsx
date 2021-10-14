import './App.css';

export const App = () => {
  const reactAlert = (message?: string) => {};
  const reactConfirm = (message?: string) => {};
  const reactPrompt = (message?: string, defaultValue?: string) => {};

  return (
    <div className="app">
      <h1 className="title">react-window-alert-confirm-prompt</h1>
      <div className="main">
        <div className="native">
          <button className="btn" onClick={() => window.alert('alert')}>
            window.alert
          </button>
          <button className="btn" onClick={() => window.confirm('confirm')}>
            window.confirm
          </button>
          <button className="btn" onClick={() => window.prompt('prompt', '1')}>
            window.prompt
          </button>
        </div>
        <div className="react">
          <button className="btn" onClick={() => reactAlert('alert')}>
            react alert
          </button>
          <button className="btn" onClick={() => reactConfirm('confirm')}>
            react confirm
          </button>
          <button className="btn" onClick={() => reactPrompt('prompt', '1')}>
            react prompt
          </button>
        </div>
      </div>
    </div>
  );
};
