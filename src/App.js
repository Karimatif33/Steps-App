import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />;
      <Steps />;
    </div>
  );
}

function Steps() {
  const [isOpen, setIsOpen] = useState(true);

  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep((currStep) => currStep + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((currStep) => currStep - 1);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div
          className="steps"
          style={{ backgroundColor: "rgb(22 22 24)", color: "#fff" }}
        >
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">

            
            <Button bgColor="#7950f2"
            textColor="#fff"
            onClick={handlePrevious}
            text="Previous"
            emoji="⬅️"
            />
            <Button bgColor="#7950f2"
            textColor="#fff"
            onClick={handleNext}
            text="Next"
            ><span>➡️</span></Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({textColor, bgColor, onClick, text, emoji, children}) {
return (
  <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}> <span>{emoji}</span>{text}{children}</button>
)
}