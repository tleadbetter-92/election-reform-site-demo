import { fetchLaws } from '../../utils/fetchLaws'
import { LawPage } from '../../components/LawPage'

export async function generateStaticParams() {
  const laws = await fetchLaws()
  return laws.map((law) => ({
    title: law.shortTitle,
  }))
}

export default async function Page({ params }: { params: { title: string } }) {
  const laws = await fetchLaws()
  const law = laws.find((l) => l.shortTitle === decodeURIComponent(params.title))

  if (!law) {
    return <div>Law not found</div>
  }

  return <LawPage law={law} />
}

