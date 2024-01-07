
import { useTheme } from "context/theme";
import "./_header.scss";

export const Header = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="container header">
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: 23,004</span>
      </div>
    
      <div className="header__toggle">
        <input type="checkbox" checked={theme} onChange={toggleTheme} name="theme" />
      </div>

    </header>
  )
}

