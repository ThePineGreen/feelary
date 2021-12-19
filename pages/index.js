import { useState } from 'react';
import { Result } from '../components/Result';
import { Survey } from '../components/Survey';

export default function Home() {
  const [isEdit, setEdit] = useState(true);
  const [result, setResult] = useState({});

  const handleSubmit = (val) => {
    setResult(val);
    setEdit(false);
  };

  return (
    <>
      {
        isEdit
          ? <Survey onSubmit={handleSubmit} />
          : <Result result={result} resetForm={() => setEdit(true)} />
      }
    </>
  )
}
