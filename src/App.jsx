

// import StatefulForm from './Component/StateFullForm/StatefulForm';
import RefForm from './Component/RefForm/RefForm';

function App() {


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
      <h2 className='text-3xl pb-5 font-bold'>Form Master</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      <RefForm></RefForm>
      </div>
    </div>
  )
}

export default App
