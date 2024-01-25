import { SignInForm } from "@/components/Forms";

const LoginUser = () => {
	return (
		<main className=" w-full flex justify-center ">
			<section className="  border-gray-500/10 border-2 p-4 mt-6 rounded-lg w-full max-w-[450px]">
				<h2 className=" text-2xl capitalize tracking-wider py-2 text-center font-bold">
					GadgetHub
				</h2>
				<p className=" text-center tracking-wider mt-2 text-xl capitalize">login</p>
				<SignInForm />
			</section>
		</main>
	);
};

export default LoginUser;
