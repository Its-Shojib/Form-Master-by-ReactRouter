

import StatefulForm from './Component/StateFullForm/StatefulForm';

function App() {


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
      <h2 className='text-3xl pb-5 font-bold'>Form Master</h2>
      {/* <SimpleForm></SimpleForm> */}
      <StatefulForm></StatefulForm>
      </div>
    </div>
  )
}

export default App
