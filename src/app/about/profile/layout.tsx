
export default function ProfileLayout ({
 children 
}:
{
  children: React.ReactNode
}

){
  return (
    <>
      <nav className="fixed right-0 top-10 bg-slate-900 z-10 w-60 h-screen">
        <ul className="text-white p-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  )
}
