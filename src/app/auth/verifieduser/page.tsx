const ConfirmPassword = () => {
	return (
		<article>
			<div className="rounded-3xl p-4 mt-8 flex gap-4  flex-col justify-center bg-slate-50 w-full max-w-[400px] mx-auto ">
				<div className=" flex flex-col gap-4 items-center">
					<div className=" rounded-full h-[100px] w-[100px] bg-success flex items-center justify-center text-slate-50">
						success
					</div>
					<p className=" text-success capitalize ">User verified successfully!!</p>
				</div>
				<p className=" text-center p-3 text-slate-600">
					Hi there, your account have been verified successfully, click the button
					below to visit home page
				</p>
				<button
					type="button"
					className=" w-[160px] text-slate-50 capitalize text-xl mx-auto btn btn-success tracking-wider"
				>
					home page
				</button>
			</div>
		</article>
	);
};

export default ConfirmPassword;
