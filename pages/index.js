import Link from 'next/link'
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
	  <Link href = "/about">
          	<p>課題1</p>
	  </Link>
        </li>
        <li>
	  <Link href = "/about2">
          	<p>課題2</p>
	  </Link>
        </li>
        <li>
	  <Link href = "/about4">
          	<p>課題3</p>
	  </Link>
        </li>
	<li>
	  <Link href = "/about6">
          	<p>課題4</p>
	  </Link>
	</li>
	<li>
	  <Link href = "/about5">
          	<p>課題5</p>
	  </Link>
	</li>
      </ul>
    </>
  )
}

export default Home
