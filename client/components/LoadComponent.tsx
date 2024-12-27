interface Props {
	component: React.ComponentType<unknown>;
}

export const LoadComponent = ({ component: Component }: Props) => {
	return <Component />;
};

export default LoadComponent;
