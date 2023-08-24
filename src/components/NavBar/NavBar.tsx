import { ReactNode, useState } from "react";

type NavBarProps = {
	left?: ReactNode;
	middle?: ReactNode;
	right?: ReactNode;
};
const NavBar = ({
	left = "left",
	middle = "middle",
	right = "right"
}: NavBarProps) => {
	const [showSlide, setShowSlide] = useState<boolean>(false);
	return (
		<>
			<div className='box-border h-15 max-w-full min-w-full p-1 border-b border-solid border-slate-200 bg-slate-50/30 '>
				<div className='container mx-auto h-full flex text-center'>
					<div className='flex-none h-full leading-13'>
						<div className='hidden md:block'>{left}</div>
						<div
							className='md:hidden i-mdi:menu w-8 h-8'
							onClick={() => {
								setShowSlide(true);
							}}>
						</div>
					</div>
					<div className='flex-auto h-full leading-13 w-6/12'>
						<div className='hidden md:block'>{middle}</div>
					</div>
					<div className='flex-none h-full leading-13'>{right}</div>
				</div>
			</div>
			{/* TODO 这里是否写成穿梭框更好些 */}
			{showSlide && (
				<div className='h-screen bg-blue w-xl pos-fixed top-0'>
					侧边栏
				</div>
			)}
		</>
	);
};
export default NavBar;
