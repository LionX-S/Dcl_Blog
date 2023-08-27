import { ReactNode } from "react";

type IconProps = {
	type?: string;
	iconType: string;
	children?: ReactNode;
};
const Icon = ({ type, iconType, children }: IconProps) => {
	return (
		<div
			className={`flex flex-items-center flex-justify-center h-5 p-1 ${
				type === "iconBabelTime" ? "icon_babel_time" : ""
			} `}>
			<i className={`${iconType} mr-1`} />
			{children ? children : null}
		</div>
	);
};
export default Icon;
