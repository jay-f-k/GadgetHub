"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const searchSchema = z.object({
	searchData: z.string().min(3, "must be at least 3 characters long"),
});

const SearchBar = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(searchSchema),
	});

	const submitSearch = async (data: FieldValues) => {
		console.log(data.searchData);
		await new Promise((resolve) => setTimeout(resolve, 2000));
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(submitSearch)}
			className="form-control outline-none input-bordered   border-2 flex-row rounded-lg"
		>
			<input
				{...register("searchData", {
					required: "enter the item required",
				})}
				type="text"
				name="searchData"
				className="input outline-none w-40 md:w-auto"
			/>
			<button
				type="submit"
				className="btn flex gap-1  disabled:cursor-not-allowed capitalize rounded-l-none btn-primary"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<span className=" loading loading-spinner bg-primary "></span>
				) : (
					"search"
				)}
			</button>
		</form>
	);
};

export default SearchBar;
