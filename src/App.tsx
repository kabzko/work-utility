import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from '@/pages/dashboard/Content';
import PythonPrintToTable from '@/pages/python-print-to-table/Content';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/python-print-to-table" element={<PythonPrintToTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
