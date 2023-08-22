import { ReactNode } from "react";

type NavBarProps = {
	left: ReactNode;
	middle: ReactNode;
	right: ReactNode;
};
const NavBar = ({
	left = "left",
	middle = "middle",
	right = "center"
}: NavBarProps) => {
	return (
		<div className='box-border h-15 max-w-full min-w-full p-1 border-b border-solid border-slate-200 bg-slate-50/30 '>
			<div className='container mx-auto h-full flex text-center'>
				<div className="flex-none h-full leading-13">{left}</div>
				<div className='flex-auto h-full leading-13 w-6/12'>{middle}</div>
				<div className='flex-none h-full leading-13'>{right}</div>
			</div>
		</div>
	);
};
export default NavBar;
