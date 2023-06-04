"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
interface IFormInput {
	day: number;
	month: number;
	year: number;
}
export default function Home() {
	const current = new Date();
	const [years, setYears] = useState<number>();
	const [months, setMonths] = useState<number>();
	const [days, setDays] = useState<number>();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<IFormInput>({
		defaultValues: {},
	});

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		let ty = current.getFullYear();
		let tm = current.getMonth() + 1;

		if (current.getDate() < data.day) {
			setDays(current.getDate() - data.day + 30);
			tm = tm - 1;
		} else {
			setDays(current.getDate() - data.day);
		}

		if (tm < data.month) {
			setMonths(tm - data.month + 12);
			ty = ty - 1;
		} else {
			setMonths(tm - data.month);
		}
		setYears(ty - data.year);
	};

	return (
		<main className="bg-white p-6 max-w-screen-md flex flex-col items-center rounded-3xl rounded-br-[6rem] mt-24 m-auto md:mt-40 transition-all md:p-8">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid gap-4 w-full mb-10 border-b-2"
			>
				<div className="grid grid-cols-3 w-fit gap-6 m-auto md:m-0 transition-all md:transition-all">
					<div
						className={`input${
							errors.day?.message == undefined ? "" : "_error "
						}`}
					>
						<label>Day</label>
						<input
							{...register("day", {
								required: "This field is required",
								min: {
									value: 1,
									message: "Must be a valid day",
								},
								max: {
									value: 31,
									message: "Must be a valid day",
								},
							})}
							placeholder="DD"
						/>
						<h1>{errors.day?.message}</h1>
					</div>
					<div
						className={`input${
							errors.month?.message == undefined ? "" : "_error "
						}`}
					>
						<label>Month</label>
						<input
							{...register("month", {
								required: "This field is required",
								min: {
									value: 1,
									message: "Must be a valid month",
								},
								max: {
									value: 12,
									message: "Must be a valid month",
								},
							})}
							placeholder="MM"
						/>
						<h1>{errors.month?.message}</h1>
					</div>
					<div
						className={`input${
							errors.year?.message == undefined ? "" : "_error "
						}`}
					>
						<label>Year</label>
						<input
							{...register("year", {
								required: "This field is required",
								min: {
									value: 1850,
									message: "Must be a valid year",
								},
								max: {
									value: current.getFullYear() - 1,
									message: "Must be in the past",
								},
							})}
							placeholder="YY"
						/>
						<h1>{errors.year?.message}</h1>
					</div>
				</div>
				<button className="flex rounded-full bg-purple hover:bg-off_black w-16 h-16 justify-center items-center justify-self-center  md:justify-self-end translate-y-1/2">
					<Image
						src="/icon-arrow.svg"
						width={30}
						height={30}
						alt="Arrow pointing down"
					/>
				</button>
			</form>
			<footer className="flex flex-col tracking-tighter">
				<div className="results">
					<strong>{years == null ? "--" : years}</strong> years
				</div>
				<div className="results">
					<strong>{months == null ? "--" : months}</strong> months
				</div>
				<div className="results">
					<strong>{days == null ? "--" : days}</strong> days
				</div>
			</footer>
			<div className="text-center pt-4 justify-self-end font-bold text-sm italic">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</main>
	);
}
