import React, {useState} from "react";
import {Input} from "./Input";
import {InputLabel} from "./InputLabel";
import {Textarea} from "./Textarea";
import {useTranslation} from "react-i18next";

export const Survey = (props) => {

  const [situation, setSituation] = useState('');
  const [feel, setFeel] = useState('');
  const [percent, setPercent] = useState('');
  const [thoughts, setThoughts] = useState('');
  const {t, i18n} = useTranslation();

  const onSituationChange = (value) => setSituation(value);
  const handlePercentValue = (value) => {
    if (value === '' || value.match('\D+')) {
      setPercent('');
      return;
    }
    if (value < 0 || value > 100) {
      return;
    }
    setPercent(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = {
      situation,
      feel,
      percent,
      thoughts,
    };
    props.onSubmit(result);
  }

  return (
    <main className="flex flex-col items-center w-full flex-1 py-16 px-10 overflow-y-auto">
      <div className="w-full max-w-xl flex flex-col content-center">
        <h2 className='text-3xl font-medium mb-6 text-zinc-900 dark:text-zinc-200'>
          {t('How do you feeling?')}
        </h2>
        <div className='w-full max-w-xl'>
          <form className="grid grid-cols-1 gap-6">
            <label className='block'>
              <InputLabel>
                {t('Situation')}
              </InputLabel>
              <Textarea required value={situation} onChange={onSituationChange}/>
            </label>
            <label className="block mt-4">
              <InputLabel>{t('Feelings')}</InputLabel>
              <Input required value={feel} onChange={(value) => setFeel(value)}/>
            </label>
            <label className='block'>
              <InputLabel>{t('How much in %')}</InputLabel>
              <Input value={percent} onChange={handlePercentValue}/>
            </label>
            <label className='block mt-4'>
              <InputLabel>{t('Automatic thoughts')}</InputLabel>
              <Textarea value={thoughts} onChange={(value) => setThoughts(value)}/>
            </label>
          </form>
          <div className="flex flex-col items-center md:block">
          <button
            type='submit'
            onClick={handleSubmit}
            className='rounded-md h-10 px-4 mt-8 py-2 bg-teal-400 shadow-md text-white dark:text-zinc-800 shadow-teal-500/50 hover:bg-teal-500 active:bg-teal-600'
          >
            {t('Submit')}
          </button>
          </div>
        </div>
      </div>
    </main>
  );
};
