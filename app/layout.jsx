// components
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// styles
import "@styles/globals.css";

export const metadata = {
  title: "share-prompts",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
