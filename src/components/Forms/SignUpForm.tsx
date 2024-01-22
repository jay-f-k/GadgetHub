"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z
	.object({
		firstname: z.string(),
		lastname: z.string().min(4, "minimum of 4 characters required"),
		email: z.string().email("provide your email "),
		telephone: z.string(),
		password: z.string(),
		confirmPassword: z.string(),
		acceptTerms: z.literal(true),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "passwords must match",
		path: ["confirmPassword"],
	});

type signUpType = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<signUpType>({
		resolver: zodResolver(SignUpSchema),
	});

	const RegisterUser = async (data: signUpType) => {
		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(RegisterUser)}
			className=" mt-[1rem] flex flex-col gap-3 p-2"
		>
			<div className="flex items-center  gap-3">
				<input
					{...register("firstname")}
					type="text"
					name="firstname"
					placeholder="Firstname"
					className="input input-bordered w-full placeholder:text-slate-400/40"
				/>
				<input
					{...register("lastname")}
					type="text"
					name="lastname"
					placeholder="Lastname"
					className="input input-bordered w-full placeholder:text-slate-400/40"
				/>
			</div>
			{errors.lastname && (
				<p className=" text-red-300 px-5">{`${errors.lastname.message}`}</p>
			)}
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
				{...register("telephone")}
				type="text"
				name="telephone"
				placeholder="+234 555 434 999"
				className="input input-bordered w-full placeholder:text-slate-400/40"
			/>
			{errors.telephone && (
				<p className=" text-red-300 px-5">{`${errors.telephone.message}`}</p>
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
			<input
				{...register("confirmPassword")}
				type="password"
				name="confirmPassword"
				placeholder="ConfirmPassword"
				className="input input-bordered w-full placeholder:text-slate-400/40"
			/>
			{errors.confirmPassword && (
				<p className=" text-red-300 px-5">{`${errors.confirmPassword.message}`}</p>
			)}
			<div className=" flex gap-3 py-1 rounded-md px-4">
				<input
					{...register("acceptTerms")}
					type="checkbox"
					name="acceptTerms"
					className="w-4"
					id="acceptTerms"
				/>
				<label
					htmlFor="acceptTerms"
					className=" text-slate-500"
				>
					Accept Terms and conditions
				</label>
			</div>
			{errors.acceptTerms && (
				<p className=" text-red-300 px-5">{`${errors.acceptTerms.message}`}</p>
			)}

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

			<p className=" text-end text-gray-500">
				An Account Already?
				<Link
					className=" text-primary  ml-4"
					href={"/signIn"}
				>
					click here...
				</Link>
			</p>
		</form>
	);
};

export default SignUpForm;
