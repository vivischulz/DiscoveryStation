export const listenForPrevBtnClick = (btn, embla, autoplayer) => {
  const scrollPrev = () => {
    autoplayer.stop();
    embla.scrollPrev();
  };
  btn.addEventListener("click", scrollPrev, false);
};

export const listenForNextBtnClick = (btn, embla, autoplayer) => {
  const scrollNext = () => {
    autoplayer.stop();
    embla.scrollNext();
  };
  btn.addEventListener("click", scrollNext, false);
};

export const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  };
};
