"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const NavBtns = () => {
	const { data: session } = useSession();
	const closeDropdown = () => {
		const activeDropDown = document.activeElement;
		if (activeDropDown) {
			activeDropDown.blur();
		}
	};
	// console.log(session?.user);

	return (
		<div className="dropdown dropdown-end ">
			<div
				tabIndex={0}
				role="button"
				className="btn btn-ghost btn-circle avatar"
			>
				<div className="w-10 rounded-full">
					<Image
						src={session?.user ? `${session?.user?.image}` : "/contact1.png"}
						alt="contact avatar"
						fill
						className=" rounded-full"
					/>
				</div>
			</div>

			<ul
				tabIndex={0}
				className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 "
				// onClick={closeDropdown}
			>
				<li>
					<a className="justify-between">
						Profile
						<span className="badge">New</span>
					</a>
				</li>
				<li>
					<a>Settings</a>
				</li>
				{session?.user ? (
					<button
						onClick={() => signOut({ callbackUrl: "/signIn" })}
						className=" font-semibold capitalize text-lg btn mt-2 tracking-wider"
					>
						logOut
					</button>
				) : (
					<button
						onClick={() => signIn()}
						className=" font-semibold capitalize text-lg mt-2  btn tracking-wider"
					>
						Sign In
					</button>
				)}
			</ul>
		</div>
	);
};

export default NavBtns;
