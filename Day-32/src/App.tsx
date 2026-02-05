
import UseCallback from './components/useCallback'
import UseMemo from './components/useMemo'

function App() {


  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Use Callback</h2>
      <UseCallback/>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-12">Use Memo</h2>
      <UseMemo/>
    </div>
  )
}

export default App
