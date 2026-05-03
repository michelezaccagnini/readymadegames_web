import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import "@fontsource/inter";
import HomePage from "./components/HomePage";
import GameShowcase from "./components/GameShowcase";
import MusicGallery from "./components/MusicGallery";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SynthaesthesiaLanding from "./pages/SynthaesthesiaLanding";
import SynthaesthesiaPress from "./pages/SynthaesthesiaPress";
import SynthaesthesiaOnePager from "./pages/SynthaesthesiaOnePager";
import StudioPress from "./pages/StudioPress";
import NotFound from "./pages/not-found";
import { useNavigation } from "./lib/stores/useNavigation";

const queryClient = new QueryClient();

function StudioApp() {
  const { currentSection } = useNavigation();

  switch (currentSection) {
    case 'home':
      return <HomePage />;
    case 'games':
      return <GameShowcase />;
    case 'gallery':
      return <MusicGallery />;
    case 'about':
      return <AboutSection />;
    case 'contact':
      return <ContactForm />;
    case 'privacy':
      return <PrivacyPolicy />;
    default:
      return <HomePage />;
  }
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
          <Navigation />
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="text-white text-xl">Loading...</div>
              </div>
            }
          >
            <main className="flex-1">
              <Switch>
                <Route path="/synthaesthesia" component={SynthaesthesiaLanding} />
                <Route path="/synthaesthesia/press/one-pager" component={SynthaesthesiaOnePager} />
                <Route path="/synthaesthesia/press" component={SynthaesthesiaPress} />
                <Route path="/press" component={StudioPress} />
                <Route path="/" component={StudioApp} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </Suspense>
          <Footer />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
