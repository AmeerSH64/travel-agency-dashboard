import { Header } from "../../../components"

const dashboard = () => {
  const user = { name: 'David' };
  return (
    <main className="dashboard wrapper">
      <Header title={`Welcome ${user?.name ?? 'Guest'}`} desc="Track activity, friends, and popular destinations in real time" />
    </main>
  )
}

export default dashboard