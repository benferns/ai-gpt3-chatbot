import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">



          <Chat />

    </Page>
  )
}

Home.Layout = Layout

export default Home
