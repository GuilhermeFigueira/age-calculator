"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
interface IFormInput {
	day: number;
	month: number;
	year: number;
}
export default function Home() {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
	return (
		<main className="bg-white p-6 max-w-screen-md flex flex-col items-center rounded-3xl rounded-br-[6rem] mt-24">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-3 gap-4 w-fit pb-10 border-b-2"
			>
				<div className="input">
					<label>Day</label>
					<input
						{...register("day", {
							required: "Can't be blank",
							min: {
								value: 0,
								message: "Must be a valid day",
							},
							max: {
								value: 32,
								message: "Must be a valid day",
							},
						})}
						placeholder="DD"
					/>
				</div>
				<div className="input">
					<label>Month</label>
					<input {...register("month")} placeholder="MM" />
				</div>
				<div className="input">
					<label>Year</label>
					<input {...register("year")} placeholder="YY" />
				</div>
			</form>
			<button className="flex rounded-full bg-purple hover:bg-off_black w-16 h-16 justify-center items-center -translate-y-1/2">
				<Image
					src="/icon-arrow.svg"
					width={30}
					height={30}
					alt="Arrow pointing down"
				/>
			</button>
			<footer className="flex flex-col ">
				<div className="results">
					<strong>38</strong> years
				</div>
				<div className="results">
					<strong>3</strong> months
				</div>
				<div className="results">
					<strong>36</strong> days
				</div>
			</footer>
		</main>
	);
}
// 									<input
// 											type="text"
// 											{...register("name", {
// 												required: "Can't be blank",
// 												minLength: {
// 													value: 3,
// 													message:
// 														"The minimum lenght is 3",
// 												},
// 												maxLength: {
// 													value: 60,
// 													message:
// 														"The max lenght is 60",
// 												},
// 											})}
// 											placeholder="e.g Jane Appleseed"
// 											className="w-full"
// 										/>
// 									<span>{errors.name?.message}</span>
