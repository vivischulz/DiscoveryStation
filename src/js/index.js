import EmblaCarousel from "embla-carousel";
import { autoplay } from "./autoplay";
import {
  disablePrevNextBtns,
  listenForPrevBtnClick,
  listenForNextBtnClick
} from "./prevAndNextButtons";

import "../css/embla.css";


const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const embla = EmblaCarousel(viewPort, { skipSnaps: false });
const autoplayer = autoplay(embla, 4000);
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

listenForPrevBtnClick(prevBtn, embla, autoplayer);
listenForNextBtnClick(nextBtn, embla, autoplayer);

embla.on("select", disablePrevAndNextBtns);
embla.on("init", disablePrevAndNextBtns);

embla.on("pointerDown", autoplayer.stop);
embla.on("init", autoplayer.play);