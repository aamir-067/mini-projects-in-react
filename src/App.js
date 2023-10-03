import './App.css';
import { PasswordGenerator, CurrencyCoverter } from './components/AllComponents';


function App() {
  return (
    <div className={`bg-slate-900 h-screen`}>
      <PasswordGenerator />
      <CurrencyCoverter />
    </div>
  );
}

export default App;
