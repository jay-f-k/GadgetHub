import { ForgotPasswordForm } from "@/components/Forms";

const ForgotPassword = () => {
	return (
		<main className=" w-full flex justify-center ">
			<section className="  border-gray-500/10 border-2 p-4 mt-6 rounded-lg w-full max-w-[450px]">
				<h2 className=" text-2xl capitalize tracking-wider py-2 text-center font-bold">
					verify email
				</h2>
				<ForgotPasswordForm />
			</section>
		</main>
	);
};

export default ForgotPassword;
