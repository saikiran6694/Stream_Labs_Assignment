import { Navbar, Header, Services, Footer } from "./section";
const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div>
        <Navbar />
        <Header />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default App;
