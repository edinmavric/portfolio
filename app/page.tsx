import Footer from '@/components/Footer';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data';

const Home = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Footer />
            </div>
        </main>
    );
};

export default Home;
