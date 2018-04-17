import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <div className='container'>
        <p>This is the research page</p>
        <style jsx global>{`
          .container { background: black }
          p { color: white }
          `}</style>
       </div>
    </Layout>
)
