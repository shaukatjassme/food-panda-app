import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubMenu from '../components/SubMenu'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />
  
      {/* Main content with top padding to avoid overlap with the fixed navbar */}
      <main className="pt-36"> {/* Adjust the `pt-20` value based on the height of your navbar */}
      <SubMenu />
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MyApp;
