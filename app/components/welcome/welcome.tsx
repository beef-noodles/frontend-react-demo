import logoDark from './logo-dark.svg'
import logoLight from './logo-light.svg'

const homeRoutes = [
  { url: '/', name: 'Home' },
  { url: '/concerts', name: 'All Concerts' },
  { url: '/about', name: 'About' },
]

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="w-full max-w-[300px]">
          <nav className="rounded-3xl border border-dashed border-gray-700 space-y-4 p-6">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What's Next
            </p>
            <ul>
              {homeRoutes.map((route) => (
                <li key={route.url}>
                  <a
                    href={route.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center self-stretch gap-3 p-3 leading-none text-blue-700 hover:text-blue-500 hover:underline"
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  )
}
