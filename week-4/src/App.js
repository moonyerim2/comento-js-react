import React from "react";
import BackgroundTypo from "./components/BackgroundTypo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexPage from "./pages/Index";

class Layout extends React.Component {
  render() {
    return (
      <>
        <BackgroundTypo />
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

function App() {
  return (
    <>
      <Layout>
        <IndexPage />
      </Layout>
    </>
  );
}

export default App;
