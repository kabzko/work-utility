import React from 'react';

import PageTitle from '@/components/pageTitle';

function PythonPrintToTable() {
  const [inputData, setInputData] = React.useState('2024-01-01 100 A B C\n2024-01-02 150 D E F\n2024-01-03 125 G H I');
  const [tableData, setTableData] = React.useState<string[][]>([
    ['2024-01-01', '100', 'A', 'B', 'C'],
    ['2024-01-02', '150', 'D', 'E', 'F'],
    ['2024-01-03', '125', 'G', 'H', 'I'],
  ]);
  const [copySuccess, setCopySuccess] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputData(e.target.value);
  };

  const convertToTable = () => {
    const rows = inputData.trim().split('\n');
    const parsedData = rows.map((row) => row.trim().split(/\s+/));
    setTableData(parsedData);
  };

  const copyToClipboard = async () => {
    try {
      const dataRows = tableData.map((row) => row.join('\t')).join('\n');
      await navigator.clipboard.writeText(dataRows);
      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <PageTitle title='Python Print to Table | Work Utility' />
      <div className='container mx-auto p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen'>
        <a
          href='/'
          className='inline-flex items-center mb-6 px-4 py-2 rounded-xl text-indigo-600 
                hover:text-indigo-800 transition-all duration-200 group'
        >
          <span
            className='inline-flex items-center justify-center w-8 h-8 mr-2
                    rounded-lg bg-indigo-100 group-hover:bg-indigo-200 
                    transition-all duration-200 transform group-hover:-translate-x-1'
          >
            ←
          </span>
          <span className='font-medium'>Back to Dashboard</span>
        </a>

        <h1 className='text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-sm'>
          Python Print to Table
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-4 backdrop-blur-sm bg-white/30 p-6 rounded-2xl shadow-lg border border-white/50'>
            <label className='block text-lg font-semibold text-indigo-900 mb-2'>Input Data</label>
            <textarea
              className='w-full p-4 border-2 border-indigo-200 rounded-xl shadow-inner
                        focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                        transition-all duration-200 bg-white/70 backdrop-blur-sm
                        text-gray-700 font-mono text-sm'
              rows={8}
              value={inputData}
              onChange={handleInputChange}
              placeholder='Enter your space-separated data here'
            />
            <button
              className='w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                        text-white px-6 py-3 rounded-xl font-medium shadow-lg
                        hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700
                        transform transition-all duration-200 hover:scale-[1.02]
                        border border-white/20 backdrop-blur-sm'
              onClick={convertToTable}
            >
              Convert to Table
            </button>
          </div>

          <div className='overflow-hidden bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50'>
            <div className='p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-semibold text-indigo-900'>Table View</h2>
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                                    ${
                                      copySuccess
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                                    } shadow-sm hover:shadow-md`}
                >
                  {copySuccess ? 'Copied!' : 'Copy for Excel'}
                </button>
              </div>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <tbody>
                    {tableData.map((row, rowIndex) => (
                      <tr key={rowIndex} className='border-b border-indigo-100 hover:bg-white/50 transition-colors'>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className='px-6 py-4 font-medium'>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PythonPrintToTable;
