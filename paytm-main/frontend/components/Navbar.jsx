function Navbar({username}) {
  return (
    <div className="flex justify-between items-center h-16 shadow-sm shadow-slate-300 p-3">
        <h2 className="text-2xl font-bold">Payments App</h2>
        <div className="flex items-center">
            <span className="mr-2 text-black">Hello, {username}</span>
            <div className="bg-slate-200 w-10 h-10 rounded-full flex justify-center items-center">
                <div>{username[0].toUpperCase()}</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
