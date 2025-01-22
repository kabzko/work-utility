import PageTitle from '../../components/helpers/pageTitle';

function Dashboard() {
  const pages = [
    {
      title: 'Python Print to Table',
      description: 'Convert Python print outputs to a structured table format with easy Excel export.',
      path: '/python-print-to-table',
      icon: '📊',
    },
  ];

  return (
    <>
      <PageTitle title='Dashboard' />
      <div className='container mx-auto p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen'>
        <h1 className='text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-sm'>
          Dashboard
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {pages.map((page, index) => (
            <a key={index} href={page.path} className='group'>
              <div
                className='h-full p-6 backdrop-blur-sm bg-white/30 rounded-2xl shadow-lg border border-white/50 
                          transition-all duration-300 hover:shadow-xl hover:scale-[1.02] 
                          hover:bg-white/40'
              >
                <div className='flex items-start space-x-4'>
                  <span className='text-4xl'>{page.icon}</span>
                  <div className='space-y-2'>
                    <h2
                      className='text-xl font-semibold text-indigo-900 group-hover:text-indigo-700 
                               transition-colors duration-300'
                    >
                      {page.title}
                    </h2>
                    <p className='text-gray-600'>{page.description}</p>
                  </div>
                </div>

                <div className='mt-4 flex justify-end'>
                  <span
                    className='inline-flex items-center text-sm font-medium text-indigo-600 
                               group-hover:text-indigo-500 transition-colors duration-300'
                  >
                    Open Tool →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
