const Layout: React.FC = ({ children }) => {
	return (
		<div className="p-4 m-auto max-w-xl">
			<main>{children}</main>
		</div>
	)
}
export default Layout
