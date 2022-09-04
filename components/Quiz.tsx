/* eslint-disable max-len */

import CorrectIcon from './icons/Correct';
import IncorrectIcon from './icons/Incorrect';
import { useState } from 'react';

interface IconWrapperProps {
  children: React.ReactNode
}
export enum QuizType {
  trueOrFalse = '是非題',
  quickReview = '快速回顧'
}
interface QuizProps {
  type: QuizType,
  options: QuizOption[],
  children: React.ReactNode
}
interface QuizHeadingProps {
  type: QuizType,
  children: React.ReactNode
}
interface QuizOptionProps {
  option: QuizOption,
  answer: QuizOption,
  isSubmit: boolean,
  isCorrect: boolean,
  onClick: Function
}
interface QuizOption {
  text: string,
  isCorrect: boolean
}
interface QuizSubmitButtonProps {
  onClick: Function
}

const IconWrapper = ({ children }: IconWrapperProps) => {
  return (
    <span className="leading-none	mx-2 align-text-bottom">
      {children}
    </span>
  );
};

const QuizHeading = ({ type, children }: QuizHeadingProps) => {
  return (
    <div className="flex items-center">
      <strong>{`${type}：`}</strong>
      {children}
    </div>
  );
};

const QuizOption = ({ option, answer, isSubmit, isCorrect, onClick }: QuizOptionProps) => {
  const isSelected = answer.text === option.text;
  const handleLabelClick = () => {
    if (isSubmit) return;
    onClick(option);
  };

  return (
    <label
      className={`block my-2 ${isSubmit ? '' : 'cursor-pointer'}`}
      onClick={handleLabelClick}
    >
      <input
        className="hidden"
        name="answer"
        type="radio"
        value={option.text}
        defaultChecked={isSelected}
        disabled={isSubmit}
      />
      <span
        className={`answer-list__item block py-2 px-4 rounded-lg border bg-white transition-shadow text-sm ${isSelected ?
          'text-[#111111] border-[#111111] font-semibold shadow-[0_0_0_3px_#c1c1c1]' :
          isSubmit ?
            'text-[#666666] border-[#eaeaea]' :
            'text-[#666666] border-[#666666]'}`}
      >
        {option.text}
        {
          isSubmit && option.isCorrect &&
          <IconWrapper >
            <CorrectIcon className="inline" />
          </IconWrapper>
        }
        {
          isSubmit && !isCorrect && isSelected &&
          <IconWrapper >
            <IncorrectIcon className="inline" />
          </IconWrapper>
        }
      </span>
    </label>
  );
};

const QuizSubmitButton = ({ onClick }: QuizSubmitButtonProps) => {
  return (
    <a
      className="inline-block rounded-lg text-white bg-[#252525] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-8 h-10 leading-10"
      role="button"
      tabIndex={0}
      onClick={() => {
        onClick();
      }}
    >
      提交
    </a>
  );
};
const QuizAnswerReult = ({ isCorrect }: { isCorrect: boolean }) => {

  const correctBlock = (
    <div className="flex items-center">
      <IconWrapper>
        <CorrectIcon />
      </IconWrapper>
      <span className="text-[#0070f3]">
        <strong>正確。</strong>
        做得好！
      </span>
    </div>
  );
  const incorrectBlock = (
    <div className="flex items-center">
      <IconWrapper>
        <IncorrectIcon />
      </IconWrapper>
      <span className="text-[#ee0000]">
        <strong>錯誤，</strong>
        但不錯的嘗試！
      </span>
    </div>
  );

  return isCorrect ? correctBlock : incorrectBlock;

};
const Quiz = ({ type, options, children }: QuizProps) => {
  const [answer, setAnswer] = useState(
    {
      text: '',
      isCorrect: false
    }
  );
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const isCorrect = answer.isCorrect;

  const handleOptionButtonClick = (newAnswer: QuizOption) => {
    setAnswer(newAnswer);
  };
  const handleSubmitButtonClick = () => {
    setIsSubmit(true);
  };
  return (
    <div className="answer-list bg-[#fafafa] border border-[#eaeaea] rounded-lg p-4 pt-0 mt-8 mb-16">
      <QuizHeading type={type}>{children}</QuizHeading>
      {options.map((option, index) => (
        <QuizOption
          key={index}
          option={option as unknown as QuizOption}
          answer={answer}
          isSubmit={isSubmit}
          isCorrect={isCorrect}
          onClick={handleOptionButtonClick}
        />
      ))}
      <div className="mt-8">
        {isSubmit
          ? <QuizAnswerReult isCorrect={isCorrect} />
          : <QuizSubmitButton onClick={handleSubmitButtonClick} />}
      </div>
    </div>
  );
};
export default Quiz;

