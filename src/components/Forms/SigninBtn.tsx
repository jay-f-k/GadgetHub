"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle, FaGithub, FaGithubAlt } from "react-icons/fa";

const SigninBtn = () => {
	return (
		<div className=" flex gap-3 justify-center">
			<button
				onClick={() =>
					signIn("google", {
						callbackUrl: "/",
					})
				}
				className=" btn capitalize tracking-wider font-semibold w-[170px] text-lg"
			>
				<FaGoogle />
				google
			</button>
			{/* <button
				onClick={() =>
					signIn("github", {
						callbackUrl: "/",
					})
				}
				className=" btn capitalize tracking-wider w-[170px] font-semibold text-lg"
			>
				<FaGithub />
				github
			</button> */}
		</div>
	);
};

export default SigninBtn;
