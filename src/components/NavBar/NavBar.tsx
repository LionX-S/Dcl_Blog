import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [showSlide, setShowSlide] = useState<boolean>(false);
	return (
		<>
			<nav className='box-border h-20 max-w-full min-w-full p-1 border-b border-solid border-slate-200 bg-white/70'>
				<div className='container mx-auto h-full flex text-center'>
					<div className='nav_container'>
						<div className='hidden md:block'>icon</div>
						<div
							className='md:hidden i-mdi:menu'
							onClick={() => {
								setShowSlide(true);
							}}></div>
					</div>
					<div className='flex-auto h-full leading-18 w-6/12'>
						<div className='hidden md:block'>
							<ul className='flex m0 p0 justify-center'>
								<li className='nav_item'>
                  <Link to='/home'>首页</Link>
                </li>
								<li className='nav_item'>留言板</li>
								<li className='nav_item'>圈子</li>
							</ul>
						</div>
					</div>
					<div className='nav_container'>message</div>
				</div>
			</nav>
			{/* TODO 这里是否写成穿梭框更好些 */}
			{showSlide && (
				<div className='h-screen bg-blue w-xl pos-fixed top-0'>
					<div
						className='i-mdi:backburger'
						onClick={() => {
							setShowSlide(false);
						}}></div>
				</div>
			)}
		</>
	);
};
export default NavBar;
