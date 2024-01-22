import Link from "next/link";
import { NavBtns, SearchBar } from ".";

const NavBar = () => {
	return (
		<nav className=" h-[6.25rem] flex items-center">
			<div className="navbar justify-between bg-base-100">
				<div>
					<Link
						href={"/"}
						className=" tracking-wider capitalize text-xl gap-0"
					>
						Gadget<span className=" uppercase text-[#747EFC]">hub</span>
					</Link>
				</div>
				<SearchBar />
				<NavBtns />
			</div>
		</nav>
	);
};

export default NavBar;
