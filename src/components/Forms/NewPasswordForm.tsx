"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const NewPasswordSchema = z
	.object({
		password: z
			.string()
			.min(6, "not less than 6 characters")
			.max(8, "not higher than 12 characters"),
		confirmPassword: z
			.string()
			.min(6, "not less than 6 characters")
			.max(8, "not higher than 12 characters"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "passwords must match",
		path: ["confirmPassword"],
	});

type newPasswordType = z.infer<typeof NewPasswordSchema>;

const NewPasswordForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<newPasswordType>({
		resolver: zodResolver(NewPasswordSchema),
	});

	const SubmitNewPassword = async (data: newPasswordType) => {
		console.log(data);

		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(SubmitNewPassword)}
			className=" mt-[1rem] flex flex-col gap-3 p-2"
		>
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
		</form>
	);
};

export default NewPasswordForm;
