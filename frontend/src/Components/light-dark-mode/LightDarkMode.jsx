import '../../scss/styles.scss';
import UseLocalStorage from './UseLocalStorage';

const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  console.log(theme);

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container-ldm'>
        <p>Theme-switcher-button for the container on this page!</p>
        <p>
          It uses Local Storage to save the theme (persistence across
          reloads/F5).
        </p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
