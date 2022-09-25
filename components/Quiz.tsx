import CorrectIcon from './icons/Correct';
import IncorrectIcon from './icons/Incorrect';
import { useState, useContext, createContext, PropsWithChildren, useEffect } from 'react';

/**
 * @example
 * <Quiz>
 *  <QuizHeading type={QuizType.trueOrFalse}>
 *    標題文字
 *  </QuizHeading>
 *  <QuizOptionGroup>
 *    <QuizOption text="選項內文" />
 *    <QuizOption text="選項內文" isCorrect />
 *  </QuizOptionGroup>
 * </Quiz>
 */

enum QuizType {
    trueOrFalse = '是非題',
    quickReview = '小試身手'
}

interface QuizHeadingProps {
    type: QuizType
}

interface QuizOptionProps {
    text: string
    isCorrect: boolean
}

interface QuizSubmitButtonProps {
    onClick: () => void
}

interface AnswerType {
    text: string
    isCorrect: boolean
}

interface UserAnswerContent {
    userAnswer: AnswerType
    setUserAnswer: (answer: AnswerType) => void
}

interface CorrectAnswerContent {
    correctAnswer: AnswerType
    setCorrectAnswer: (answer: AnswerType) => void
}

const defaultAnswer: AnswerType = {
  text: '',
  isCorrect: false
};

const UserAnswerContext = createContext<UserAnswerContent>({
  userAnswer: defaultAnswer,
  setUserAnswer: () => { }
});

const CorrectAnswerContext = createContext<CorrectAnswerContent>({
  correctAnswer: defaultAnswer,
  setCorrectAnswer: () => { }
});

const IsSubmitContext = createContext<boolean>(false);

function Quiz({ children }: PropsWithChildren) {
  const [userAnswer, setUserAnswer] = useState<AnswerType>(defaultAnswer);
  const [correctAnswer, setCorrectAnswer] = useState<AnswerType>(defaultAnswer);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleSubmitButtonClick = () => {
    setIsSubmit(true);
  };

  return (
    <CorrectAnswerContext.Provider value={{ correctAnswer, setCorrectAnswer }}>
      <UserAnswerContext.Provider value={{ userAnswer, setUserAnswer }}>
        <IsSubmitContext.Provider value={isSubmit}>
          <div
            className="mdx-component answer-list bg-[#fafafa]
            border border-[#eaeaea] rounded-lg p-4 pt-0 mt-8 mb-16">
            {children}
            <div className="mt-8">
              {isSubmit
                ? <QuizAnswerReult />
                : <QuizSubmitButton onClick={handleSubmitButtonClick} />}
            </div>
          </div>
        </IsSubmitContext.Provider>
      </UserAnswerContext.Provider>
    </CorrectAnswerContext.Provider>
  );
}

function QuizHeading(
  { type, children }: PropsWithChildren<QuizHeadingProps>
) {
  return (
    <div className="[&_p]:inline my-4">
      <strong>{type}：</strong>
      {children}
    </div>
  );
};

function IconWrapper({ children }: PropsWithChildren) {
  return (
    <span className="leading-none mx-2 align-text-bottom">
      {children}
    </span>
  );
};

function QuizOptionGroup({ children }: PropsWithChildren) {
  return (
    <>
      { children }
    </>
  );
}

function QuizOption({ text, isCorrect }: QuizOptionProps) {
  const isSubmit = useContext(IsSubmitContext);
  const { userAnswer, setUserAnswer } = useContext(UserAnswerContext);
  const { setCorrectAnswer } = useContext(CorrectAnswerContext);
  const isSelected = text === userAnswer.text;

  const handleLabelClick = () => {
    if(isSubmit) return;
    setUserAnswer({ text, isCorrect });
  };

  useEffect(()=>{
    if(isCorrect){
      setCorrectAnswer({ text, isCorrect });
    }
  }, []);

  return (
    <label
      className={`block my-2 ${isSubmit ? '' : 'cursor-pointer'}`}
      onClick={handleLabelClick}
    >
      <input
        className="hidden"
        name="answer"
        type="radio"
        value={text}
        defaultChecked={isSelected}
        disabled={isSubmit}
      />
      <span
        // eslint-disable-next-line max-len
        className={`answer-list__item block py-2 px-4 rounded-lg border bg-white transition-shadow text-sm ${isSelected ?
        // eslint-disable-next-line max-len
          'text-[#111111] border-[#111111] font-semibold shadow-[0_0_0_3px_#c1c1c1]' :
          isSubmit ?
            'text-[#666666] border-[#eaeaea]' :
            'text-[#666666] border-[#666666]'}`}
      >
        {text}
        {
          (isSubmit && isCorrect) &&
          <IconWrapper >
            <CorrectIcon className="inline" />
          </IconWrapper>
        }
        {
          (isSubmit && !isCorrect && isSelected) &&
          <IconWrapper >
            <IncorrectIcon className="inline" />
          </IconWrapper>
        }
      </span>
    </label>
  );
}

function QuizSubmitButton({ onClick }: QuizSubmitButtonProps) {
  return (
    <a
      className="inline-block rounded-lg !text-white bg-[#252525]
        shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-8 h-10 leading-10
        hover:bg-[#252525e6] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      提交
    </a>
  );
};

function QuizAnswerReult() {
  const { userAnswer } = useContext(UserAnswerContext);
  const { correctAnswer } = useContext(CorrectAnswerContext);
  const isUnAnswered = userAnswer.text === '';
  const isCorrect = userAnswer.isCorrect;
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
  const unAnsweredBlock = (
    <>
      正確答案：<strong>{correctAnswer.text}</strong>
    </>
  );

  return isUnAnswered
    ? unAnsweredBlock
    : isCorrect
      ? correctBlock
      : incorrectBlock;

};

export { Quiz, QuizType, QuizHeading, QuizOptionGroup, QuizOption };

