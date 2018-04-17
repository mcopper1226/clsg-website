import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Posts</h1>
    <ul>
      {props.mposts.map((post) => (
        <li key={post.id}>
          <Link as={`/p/${post.slug}`} href={`/post?slug=${post.slug}`}>
            <a>{post.title.rendered}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://18.218.187.95/wp-json/wp/v2/events/?_embed')
  const mposts = await res.json()

  console.log(`Show data fetched. Count: ${mposts.length}`)

  return {
    mposts
  };
}

export default Index
