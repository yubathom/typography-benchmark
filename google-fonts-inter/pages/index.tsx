import Head from 'components/head'

const System: React.FC = (): JSX.Element => {
	return <>
    <Head title='Price Shoes | Typography benchmark'>
      <meta name="description" content="Price Shoes order scheduler service"/>
    </Head>
		<section className="w-full">
			<h1 className="font-semibold text-3xl mt-5 mb-2">Inter typeface</h1>
			<h2 className="mb-10">Google webfont typeface (async)</h2>
			<div className="leading-7">
				<p className="font-normal">Regular 400</p>
				<p className="font-normal italic">Regular 400 Italic</p>
				<p className="font-medium">Medium 500</p>
				<p className="font-medium italic">Medium 500 Italic</p>
				<p className="font-semibold">Semibold 600</p>
				<p className="font-semibold italic">Semibold 600 italic</p>
				<p className="font-bold">Bold 700</p>
				<p className="font-bold italic">Bold 700 italic</p>
			</div>
			<img className="mt-10" src="https://apod.nasa.gov/apod/image/2101/M66_Hubble_LeoShatz_Crop.jpg" alt="a huge nasa image"/>
			<pre className="font-mono p-4 text-xs leading-snug text-white bg-black bg-opacity-75 mt-10 rounded-lg">
				font-family: <br />
				<span className="text-pink-300">'Inter'</span>,  <br />
				'ui-sans-serif',  <br />
				'system-ui',  <br />
				'-apple-system',  <br />
				'BlinkMacSystemFont',  <br />
				'Segoe UI', <br />
				'Roboto', <br />
				'Helvetica Neue', <br />
				'Arial', <br />
				'Noto Sans', <br />
				'sans-serif' <br />
			</pre>
			<p className="text-sm mt-1">Source of the glyphs: Google fonts</p>
			<div className="text-3xl">
				<p className="font-normal my-10">Regular 400 The quick brown fox jumps over the lazy dog</p>
				<p className="font-normal italic my-10">Regular 400 Italic The quick brown fox jumps over the lazy dog</p>
				<p className="font-medium my-10">Medium 500 The quick brown fox jumps over the lazy dog</p>
				<p className="font-medium italic my-10">Medium 500 Italic The quick brown fox jumps over the lazy dog</p>
				<p className="font-semibold my-10">Semibold 600 The quick brown fox jumps over the lazy dog</p>
				<p className="font-semibold italic my-10">Semibold 600 italic The quick brown fox jumps over the lazy dog</p>
				<p className="font-bold my-10">Bold 700 The quick brown fox jumps over the lazy dog</p>
				<p className="font-bold italic my-10">Bold 700 italic The quick brown fox jumps over the lazy dog</p>
			</div>
		</section>
	</>
}
export default System