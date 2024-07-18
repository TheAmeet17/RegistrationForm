

export default function Main() {
  return (
    <div>
        <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      {/* Header */}
      <header className="w-full py-4 bg-blue-700 shadow-md">
        <h1 className="text-3xl text-center">Welcome to Our Website</h1>
      </header>

      {/* Main Content */}
      <div className="">
      <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Hello, users!</h2>
        
        <button className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200">
          Click Me
      
        </button>
      </main>
      </div>
     

      {/* Footer */}
      <footer className="w-full py-4 bg-blue-700 text-center">
        <p>© 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}
