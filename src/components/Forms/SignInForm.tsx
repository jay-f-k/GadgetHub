"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SigninBtn } from ".";

const SignInSchema = z.object({
	email: z.string().email("provide your email "),
	password: z.string().min(4, "provide password minimum of 4 characters"),
});

type signInType = z.infer<typeof SignInSchema>;

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<signInType>({
		resolver: zodResolver(SignInSchema),
	});

	const LoginUser = async (data: signInType) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(LoginUser)}
			className=" mt-[1rem] flex flex-col gap-3 p-2"
		>
			<input
				{...register("email")}
				type="email"
				name="email"
				placeholder="Example@example.com"
				className="input input-bordered w-full placeholder:text-slate-400/40"
			/>
			{errors.email && (
				<p className=" text-red-300 px-5">{`${errors.email.message}`}</p>
			)}

			<input
				{...register("password")}
				type="password"
				name="password"
				placeholder="Password"
				className="input input-bordered w-full placeholder:text-slate-400/40"
			/>
			{errors.password && (
				<p className=" text-red-300 px-5">{`${errors.password.message}`}</p>
			)}
			<p className=" badge py-4 mx-auto w-full text-2xl">or</p>
			<SigninBtn />
			<button
				className=" btn capitalize font-semibold mt-6 btn-primary tracking-wide w-[200px] mx-auto text-xl"
				type="submit"
			>
				{isSubmitting ? (
					<p className=" text-gray-200 flex items-center gap-2">
						processing.. <span className=" loading  loading-spinner"></span>
					</p>
				) : (
					"submit"
				)}
			</button>

			<p className=" mt-4 text-center text-gray-500">
				Dont have An Account?
				<Link
					className=" text-primary  ml-4"
					href={"/register"}
				>
					Create One...
				</Link>
			</p>
		</form>
	);
};

export default SignInForm;
