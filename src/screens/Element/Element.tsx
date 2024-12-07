import React, { useState } from "react";
import icon from '../../icons/main.svg'
import { motion, AnimatePresence } from "framer-motion";

export const Element = (): JSX.Element => {
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(true);

	const validateEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateEmail(email)) {
			setIsValidEmail(true);
			setShowModal(true);
		} else {
			setIsValidEmail(false);
		}
	};

	return (
		<div className="bg-[#ffffff] flex flex-row justify-center w-full overflow-x-hidden">
			<div className="bg-[#ffffff] w-full">
				<div className="flex flex-col w-full">
					<div className="flex flex-col items-center justify-center md:gap-10 relative pt-16">
						<div className="absolute top-0 right-0 w-full overflow-hidden pointer-events-none">
							<img
								className="hidden md:block ml-auto w-full max-w-[646px]"
								alt="Vector"
								src="https://c.animaapp.com/cTw2zJE8/img/vector-2.svg"
							/>
						</div>

						<img src={icon} alt="icon" />

						<div className="flex flex-col items-center justify-center gap-8 md:gap-[72px]">
							<div className="flex flex-col items-start justify-center gap-4 md:gap-6">
								<p className="relative w-full md:w-[850px] [font-family:'Figtree',Helvetica] font-bold text-[#001011] text-4xl md:text-6xl text-center tracking-[0.20px] leading-[1.2] md:leading-[72.0px]">
									Register For Creatr <br />
									Design Hackathon 2024
								</p>

								<p className="relative self-stretch [font-family:'Figtree',Helvetica] font-normal text-[#8a8a8a] text-sm text-center tracking-[0] leading-7">
									Participate in Creatr's Design Hackathon, and win prizes worth INR 100,000
								</p>
							</div>

							<div className="flex flex-col md:flex-row items-start gap-3 w-full px-4 md:px-0">
								<div className="w-full md:w-[500px] relative mb-6 md:mb-0">
									<input
										type="email"
										placeholder="Enter Email Address"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											setIsValidEmail(true);
										}}
										className={`w-full px-5 py-4 rounded-3xl border border-solid ${isValidEmail ? 'border-[#dfdfdf]' : 'border-[#FF4444]'
											} [font-family:'Figtree',Helvetica] font-normal ${email ? 'text-[#001011]' : 'text-[#8a8a8a]'
											} text-base cursor-text`}
									/>
									{!isValidEmail && (
										<p className="absolute -bottom-6 left-5 [font-family:'Figtree',Helvetica] text-[#FF4444] text-sm whitespace-nowrap">
											Please enter a valid email address
										</p>
									)}
								</div>

								<button
									onClick={handleSubmit}
									className="inline-flex items-center justify-center gap-2 px-5 py-4 relative bg-[#001011] rounded-[34px] w-full md:w-auto hover:bg-[#152425] transition-colors duration-200 cursor-pointer">
									<div className="relative w-fit [font-family:'Figtree',Helvetica] font-semibold text-[#ffffff] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
										Unlock Prompt
									</div>

									<div className="relative w-fit [font-family:'Figma_Hand-Bold',Helvetica] font-bold text-[#808788] text-base text-center tracking-[0] leading-[normal]">
										Saturday
									</div>
								</button>
							</div>
						</div>
					</div>

					{/* Modal */}
					<AnimatePresence>
						{showModal && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
								onClick={() => setShowModal(false)}
							>
								<motion.div
									initial={{ scale: 0.5, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.5, opacity: 0 }}
									transition={{ type: "spring", duration: 0.5 }}
									className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full"
									onClick={e => e.stopPropagation()}
								>
									<div className="flex flex-col gap-6">
										<div className="space-y-2">
											<h2 className="[font-family:'Figtree',Helvetica] font-bold text-[#001011] text-2xl">Today's Prompt</h2>
											<p className="[font-family:'Figtree',Helvetica] font-normal text-lg text-[#001011]">Hello</p>
										</div>

										<div className="flex justify-end gap-3">
											<motion.button
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												onClick={() => {
													navigator.clipboard.writeText("Hello");
												}}
												className="px-6 py-3 bg-[#001011] text-white rounded-xl hover:bg-[#152425] transition-colors duration-200 cursor-pointer [font-family:'Figtree',Helvetica] font-semibold"
											>
												Copy
											</motion.button>
											<motion.button
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												onClick={() => setShowModal(false)}
												className="px-6 py-3 bg-gray-100 text-[#001011] rounded-xl hover:bg-gray-200 transition-colors duration-200 cursor-pointer [font-family:'Figtree',Helvetica] font-semibold"
											>
												Dismiss
											</motion.button>
										</div>
									</div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>

					<div className="flex flex-col items-center gap-8 md:gap-12 p-4 md:p-16 bg-white">
						<div className="flex flex-col items-start justify-center gap-8 md:gap-12 p-6 md:p-16 relative self-stretch w-full bg-[#001011] rounded-3xl overflow-hidden">
							<div className="flex flex-col items-start gap-4 md:gap-6 relative self-stretch w-full">
								<p className="relative self-stretch [font-family:'Figtree',Helvetica] font-semibold text-[#ffffff] text-3xl md:text-5xl tracking-[0.48px] leading-tight md:leading-[72px]">
									Complete Daily UI Challenge & Win Big Prizes
								</p>
								<p className="relative self-stretch [font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-xl md:text-[32px] tracking-[0] leading-tight md:leading-[44.8px]">
									From Saturday, 07 December - Friday, 13th December
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
							<div className="flex flex-col items-start gap-6">
								<div className="relative w-full aspect-square bg-[#4482ef] rounded-[24px_24px_0px_0px] overflow-hidden">
									<div className="relative w-full h-full">
										<div className="absolute inset-0 flex items-center justify-center opacity-25 [font-family:'Manrope',Helvetica] font-extrabold text-[#ffffff] text-[200px] md:text-[357.3px]">
											1
										</div>
										<img
											className="absolute inset-0 w-full h-full object-cover"
											alt="First Prize"
											src="https://c.animaapp.com/cTw2zJE8/img/image-4.png"
										/>
									</div>
								</div>

								<div className="flex flex-col w-[400px] items-start gap-10 relative">
									<div className="flex flex-col items-start gap-3 relative self-stretch w-full">
										<div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[44.8px]">
											First Prize
										</div>

										<div className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-black text-base tracking-[0] leading-6">
											Apple iPad 10.9 inch
										</div>
									</div>
								</div>
							</div>

							<div className="inline-flex flex-col items-start gap-6">
								<div className="relative w-full md:w-[400px] h-[400px] bg-[#4482ef] rounded-[24px_24px_0px_0px] overflow-hidden">
									<div className="relative w-full h-[536px] top-3">
										<div className="top-0 absolute w-full opacity-25 [font-family:'Manrope',Helvetica] font-extrabold text-[#ffffff] text-[200px] md:text-[357.3px] tracking-[0] leading-[536.0px]">
											2
										</div>
										<img
											className="absolute w-full h-[353px] top-[35px] left-[43px] object-cover"
											alt="Image"
											src="https://c.animaapp.com/cTw2zJE8/img/image-2@2x.png"
										/>
									</div>
								</div>

								<div className="flex flex-col w-full md:w-[400px] items-start gap-10 relative">
									<div className="flex flex-col items-start gap-3 relative self-stretch w-full">
										<div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[44.8px]">
											Second Prize
										</div>

										<p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-black text-base tracking-[0] leading-6">
											boAt Aavante Sound Bar 600
										</p>
									</div>
								</div>
							</div>

							<div className="inline-flex flex-col items-start gap-6">
								<div className="relative w-full md:w-[400px] h-[400px] bg-[#4482ef] rounded-[24px_24px_0px_0px] overflow-hidden">
									<div className="relative w-full h-[536px] top-3">
										<div className="top-0 absolute w-full opacity-25 [font-family:'Manrope',Helvetica] font-extrabold text-[#ffffff] text-[200px] md:text-[357.3px] tracking-[0] leading-[536.0px]">
											3
										</div>
										<img
											className="absolute w-full h-[387px] top-px right-0 mix-blend-darken object-contain"
											alt="Image"
											src="https://c.animaapp.com/cTw2zJE8/img/image-3@2x.png"
										/>
									</div>
								</div>

								<div className="flex flex-col w-full md:w-[400px] items-start gap-10 relative">
									<div className="flex flex-col items-start gap-3 relative self-stretch w-full">
										<div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[44.8px]">
											Third Prize
										</div>

										<p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-black text-base tracking-[0] leading-6">
											boAt Rockerz 450 Bluetooth On Ear Headphones
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<img
						className="relative w-full h-auto object-cover"
						alt="Frame"
						src="https://c.animaapp.com/cTw2zJE8/img/frame-19.svg"
					/>

					<div className="flex items-center justify-around gap-8 md:gap-16 px-4 md:px-[300px] py-8 md:py-16 relative w-full bg-[#ffffff]">
						<div className="inline-flex flex-col items-center justify-center gap-6">
							<img
								className="relative w-[33px] h-[25px]"
								alt="Image"
								src="https://c.animaapp.com/cTw2zJE8/img/-.svg"
							/>

							<p className="relative w-full [font-family:'Figtree',Helvetica] font-medium text-[#001011] text-lg md:text-xl text-center tracking-[0] leading-7">
								We are super excited to host our first ever
								design hackathon! Can't wait to send over the
								prizes to our winners.
							</p>

							<div className="inline-flex items-center gap-4">
								<img
									className="relative w-11 h-11 object-cover"
									alt="Image"
									src="https://c.animaapp.com/cTw2zJE8/img/image@2x.png"
								/>

								<div className="inline-flex flex-col items-start justify-center">
									<p className="relative w-fit mt-[-1.00px] [font-family:'Figtree',Helvetica] font-medium text-[#001011] text-sm tracking-[0] leading-6 whitespace-nowrap">
										Kartik Sharma, Founder of Creatr
									</p>
								</div>
							</div>
						</div>
					</div>

					<img
						className="relative w-full h-auto object-cover"
						alt="Frame"
						src="https://c.animaapp.com/cTw2zJE8/img/frame-19.svg"
					/>

					<div className="flex flex-col items-center gap-6 md:gap-10 pt-10 md:pt-20 pb-4 md:pb-8 px-4 relative w-full">
						<div className="inline-flex flex-col items-center gap-6">
							<p className="relative w-full md:w-[850px] [font-family:'Figtree',Helvetica] font-normal text-[#001011] text-3xl md:text-5xl text-center tracking-[0.20px] leading-[1.2] md:leading-[57.6px]">
								<span className="font-bold tracking-[0.10px]">Simple Rules For </span>
								<span className="[font-family:'Figma_Hand-Bold',Helvetica] font-bold tracking-[0.10px]">Everyone.</span>
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center gap-8 px-4 md:px-[300px] py-8 relative w-full bg-[#ffffff]">
						<div className="flex flex-col items-start relative self-stretch w-full">
							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<div className="flex items-center gap-3 relative flex-1 grow">
										<p className="flex-1 relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px] break-words">
											<span className="font-bold">
												1. Participants must register
											</span>

											<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
												{" "}
												using the link or QR code, non registered submissions
												will not be considered.
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="relative self-stretch w-full h-px bg-[#eaeced]" />

								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<p className="flex-1 relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px] break-words">
										<span className="font-bold">2. </span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											This is a{" "}
										</span>

										<span className="font-bold">
											7-day UI challenge / hackathon
										</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											! Participants who miss a day won&#39;t be eligible for
											awards.
										</span>
									</p>
								</div>
							</div>

							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="relative self-stretch w-full h-px bg-[#eaeced]" />

								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<p className="flex-1 relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px] break-words">
										<span className="font-bold">3. </span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											Submissions are required to be posted{" "}
										</span>

										<span className="font-bold">
											under the thread shared by @getcreatr
										</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											{" "}
											each day.
										</span>
									</p>
								</div>
							</div>

							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="relative self-stretch w-full h-px bg-[#eaeced]" />

								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<p className="flex-1 relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px] break-words">
										<span className="font-bold">4. </span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											Design{" "}
										</span>

										<span className="font-bold">
											prompts will be shared on the website{" "}
										</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											hack.getcreatr.xyz everyday.
										</span>
									</p>
								</div>
							</div>

							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="relative self-stretch w-full h-px bg-[#eaeced]" />

								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<p className="flex-1 relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px] break-words">
										<span className="font-bold">5. </span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											Prompts are shared daily at{" "}
										</span>

										<span className="font-bold">10:00 AM IST</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											, with submissions starting at{" "}
										</span>

										<span className="font-bold">02:00 PM IST</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											&nbsp;
										</span>

										<span className="font-bold">on @getcreatr.</span>
									</p>
								</div>
							</div>

							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="relative self-stretch w-full h-px bg-[#eaeced]" />

								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<p className="flex-1 relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px] break-words">
										<span className="font-bold">
											6. Submission window will close at 08:00 PM IST
										</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											{" "}
											each day for that day's UI challenge.
										</span>
									</p>
								</div>
							</div>

							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="relative self-stretch w-full h-px bg-[#eaeced]" />

								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<p className="flex-1 relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px] break-words">
										<span className="font-bold">7. @getcreatr team</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											{" "}
											will choose the{" "}
										</span>

										<span className="font-bold">top 3 submissions,</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											{" "}
											which will get ranked by a{" "}
										</span>

										<span className="font-bold">
											public poll at 10:00 PM IST.
										</span>
									</p>
								</div>
							</div>

							<div className="flex flex-col items-start relative self-stretch w-full">
								<div className="relative self-stretch w-full h-px bg-[#eaeced]" />

								<div className="flex items-center gap-3 px-0 py-5 relative self-stretch w-full">
									<p className="w-fit max-w-full whitespace-normal relative mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
										<span className="font-bold">8. The three finalists</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											{" "}
											will be selected in a{" "}
										</span>

										<span className="font-bold">
											public poll on the seventh day
										</span>

										<span className="[font-family:'Figtree',Helvetica] font-normal text-[#313e48] text-lg tracking-[0] leading-[27px]">
											, from the daily rank 1st.
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center gap-3 pt-16 pb-4 px-0 relative self-stretch w-full">
						<p className="relative w-fit mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-[#001011] text-sm tracking-[0] leading-6 whitespace-nowrap">
							<span className="font-medium">With love by </span>

							<span className="font-bold">getcreatr.xyz</span>
						</p>
					</div>

					<div className="flex items-center justify-center gap-4 md:gap-8 px-4 md:px-[300px] py-4 md:py-8 relative self-stretch w-full bg-[#ffffff]">
						<img
							className="relative flex-1 grow h-px object-cover"
							alt="Line"
							src="https://c.animaapp.com/cTw2zJE8/img/line-3.svg"
						/>

						<img
							className="relative w-6 h-6"
							alt="Heart"
							src="https://c.animaapp.com/cTw2zJE8/img/heart.svg"
						/>

						<img
							className="relative flex-1 grow h-px object-cover"
							alt="Line"
							src="https://c.animaapp.com/cTw2zJE8/img/line-3.svg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
