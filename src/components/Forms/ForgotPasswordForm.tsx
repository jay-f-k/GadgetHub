"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ForgotPasswordSchema = z.object({
	email: z.string().email("provide your email "),
});

type forgotPasswordType = z.infer<typeof ForgotPasswordSchema>;

const ForgotPasswordForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<forgotPasswordType>({
		resolver: zodResolver(ForgotPasswordSchema),
	});

	const SubmitEmail = async (data: forgotPasswordType) => {
		console.log(data);

		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(SubmitEmail)}
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
				<Link
					className=" text-primary  ml-4"
					href={"/signIn"}
				>
					SignIn here...
				</Link>
			</p>
		</form>
	);
};

export default ForgotPasswordForm;
