
import "./_header.scss";

export const Header = () => {
  return (
    <header className="container header">
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: 23,004</span>
      </div>

      {/* <fieldset className="toggle header__toggle"
        aria-label="theme toggle"
        role="radiogroup"
      >
        <label htmlFor="dark">Dark</label>
        <div className="toggle__wrapper">
          <input type="radio" name="toggle" id="dark"/>
          <input type="radio" name="toggle" id="system"/>
          <input type="radio" name="toggle" id="light"/>
          <span aria-hidden="true" className="toggle__backgroung"></span>
          <span aria-hidden="true" className="toggle__button"></span>
        </div>
        <label htmlFor="dark">System Pref</label>
        <label htmlFor="light">Light</label>
      </fieldset> */}

    </header>
  )
}

