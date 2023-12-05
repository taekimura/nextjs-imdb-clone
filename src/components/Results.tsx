import Card from './Card';
import { Result } from '../app/types';

type ResultProps = { results: Result[] };

export default function Results({ results }: ResultProps) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result: Result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
