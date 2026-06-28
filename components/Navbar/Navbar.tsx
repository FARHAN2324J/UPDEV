import CategoryFilter from "./CategoryFilter";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <header className="navbar-wrapper px-3 sm:px-4">
            <nav className="navbar h-14 sm:h-16 w-full max-w-225 md:max-w-205 lg:max-w-225">
                <Logo />

                <CategoryFilter />
            </nav>
        </header>
    );
}