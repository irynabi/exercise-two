import Data from '../app/components/data';
import ArticleCard from "../app/components/ArticleCard";

export default function Home() {
  const projectName = "Exercise Two";

  console.log(Data);
  return (
    <main>
        <h1>{projectName}</h1>
        <p>Iryn Delim</p>
        <ArticleCard title="Cool Title" description="blah blah blah"/>
        <ArticleCard title="Another Title"/>
    </main>
  )
}
