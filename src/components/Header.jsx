import ThemeToggleButton from "./ThemeToggleButton"

function Header() {
  return (
    <header className="w-full flex justify-between items-center shadow min-[4rem]:px-4 py-8 bg-white dark:bg-dark-element">
      <h1 className="font-semibold dark:text-light-element">Where in the world?</h1>
      <ThemeToggleButton />
    </header>
  )
}

export default Header