import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <div className="hello">
         <p>This is the about page</p>
      </div>
      <style jsx>{`
        $color: blue;
        .hello {
          background: $color;
        }
      `}</style>
    </Layout>
)
