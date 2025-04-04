
import Module1 from './module-1/index'
import Module2 from './module-2/index'
import Module3 from './module-3/index'
function App() {

  return (
    <div style={{display: 'grid', gap: '10px', alignItems: 'flex-start'}}>
        <h3>1 модуль</h3>
        <Module1 />
        <h3>2 модуль</h3>
        <Module2 name='Анна' />
        <h3>3 модуль</h3>
        <Module3 />
    </div>
  );
}

export default App;