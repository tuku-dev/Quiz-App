import Cross from "~/components/icons/cross";
import "./Rules.css";

interface RulesProps {
  onClose: (value: boolean) => void;
}

export default function Rules({ onClose }: RulesProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevents the backdrop click handler from firing
  };

  const handleCloseClick = () => {
    onClose(false);
  };

  return (
    <div
      className="rules-modal flex-center bg-black/30 fixed left-0 top-0 w-full h-full z-10"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg shadow max-w-2xl w-full py-4 px-6"
        onClick={handleModalClick}
      >
        <div className="header flex items-center justify-between mb-6">
          <div className="title text-3xl font-semibold">Quiz rules</div>
          <span className="cursor-pointer" onClick={handleCloseClick}>
            <Cross />
          </span>
        </div>
        <div className="modal-body text-black">
          <div className="section mb-6">
            <div className="title bg-[#F3F3E9] p-2">10-Second Timer</div>
            <div className="description">
              <ul className="rules-list">
                <li>Each question comes with a 10-second timer.</li>
                <li>
                  If you don't answer within the time limit, the app will
                  automatically move to the next question.
                </li>
              </ul>
            </div>
          </div>
          <div className="section mb-6">
            <div className="title bg-[#F3F3E9] p-2">Manual Navigation</div>
            <div className="description">
              <ul className="rules-list">
                <li>
                  You can navigate to the next question manually before the
                  timer expires.
                </li>
                <li>
                  Use the "Next" button to move ahead if you’re ready before the
                  timer runs out.
                </li>
              </ul>
            </div>
          </div>
          <div className="section mb-6">
            <div className="title bg-[#F3F3E9] p-2">
              Final Score and Performance Message
            </div>
            <div className="description">
              <ul className="rules-list">
                <li>
                  After all questions are answered, your final score will be
                  displayed.
                </li>
                <li>
                  Based on your performance, you will receive a personalized
                  message:
                  <ul className="rules-list">
                    <li>
                      Great job!: If you score <strong>above 80%</strong>.
                    </li>
                    <li>
                      Well done!: If you score{" "}
                      <strong>between 60% and 80%</strong>.
                    </li>
                    <li>
                      Keep practicing!: If you score <strong>below 60%</strong>.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}