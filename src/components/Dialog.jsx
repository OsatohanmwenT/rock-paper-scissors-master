import React from "react";
export function Dialog({
  showRules,
  setShowRules,
  closeIcon,
  rules
}) {
  return <dialog open={showRules} className="mx-auto max-sm:w-full max-sm:h-screen sm:top-[23%] z-10 bg-white py-10 sm:rounded-lg px-14">
          <div className="flex mx-auto justify-self-start items-center max-sm:my-14 sm:mb-8 justify-between">
            <h1 className="text-4xl max-sm:mx-auto font-semibold text-Dark-text">RULES</h1>
            <button onClick={() => setShowRules(false)} className="max-sm:hidden" aria-label="close button">
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>
          <img className="mx-auto max-sm:mb-14" src={rules} alt="rules" />
          <div className="sm:hidden text-center">
            <button onClick={() => setShowRules(false)} className="active:scale-105" aria-label="close button">
                <img src={closeIcon} alt="close icon" />
              </button>
          </div>
        </dialog>;
}
  