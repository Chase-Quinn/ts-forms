import './App.css';
import SimpleForm from './components/SimpleForm/SimpleForm';

// Config classes (Makes it easier to pass data from the parent component)
class SimpleFormConfig {
  title = 'Simple TypeScript Form'
  subtitle = 'A simple form created with TypeScript within a React application.'
}

// Object declarations
const SFConfig = new SimpleFormConfig

function App() {
  return (
    <div className="container-fluid">

    <SimpleForm title={SFConfig.title} subtitle={SFConfig.subtitle} />

    </div>
  );
}

export default App;
