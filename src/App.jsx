import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Approach from './components/Approach';
import Experience from './components/Experience';
import Footer from './components/Footer';
import IPhoneView from './components/IPhoneView';

export default function App() {
    return (
        <div className="flex flex-col items-center bg-black-100">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center max-md:w-[90%]">
                    <Navbar />
                    <Hero />
                    <About />
                    <Approach />
                    <Experience />
                </div>
            </div>

            <div className="h-[90dvh] w-full">
                <IPhoneView />
            </div>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center max-md:w-[90%]">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
