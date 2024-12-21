import { FC } from 'react';
import { TemplateProps } from '../../../interfaces/template';
import Breadcrumb from '../BreadCrumbs';
import { Header } from '../Header';
import Background3D from '../Background3D';

const Template: FC<TemplateProps> = ({ children }) => {
	return (
		<div className="w-full flex flex-col items-center justify-start overflow-hidden h-[100vh]">
			<Background3D />
			<Header />
			<Breadcrumb />
			{children}
		</div>
	);
};

export default Template;
