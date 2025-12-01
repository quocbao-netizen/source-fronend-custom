import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
// import Autoscroll

export function emblaInit(options, elEmbla) {
  const DEFAULT_OPTIONS = {
    duration: 1000,
    dragFree: false,
    startIndex: 0,
    axis: "x",
    align: "start",
    delay: 2000,
    autoplay: false,
    stopOnHover: false,
    stopOnInteraction: false,
    loop: false,
    watchDrag: true,
    containScroll: "",
  };
  const optionMain = { ...DEFAULT_OPTIONS, ...options };
  //   plugin
  const plugin = [];
  if (optionMain.autoplay === true) {
    plugin.push(
      Autoplay({
        delay: optionMain.delay,
        stopOnHover: optionMain.stopOnHover,
        stopOnInteraction: optionMain.stopOnInteraction,
      })
    );
  }

  const emblaClass = !elEmbla ? ".embla" : elEmbla;

  $(emblaClass).each(function (i) {
    const $this = $(this);
    $this.addClass(`embla-id-${i}`);
    // view embla
    const viewEmbla = $(this).find(".embla__viewport")[0];
    // setting option, plugin embla api
    const emblaApi = EmblaCarousel(
      viewEmbla,
      {
        duration: optionMain.duration,
        align: optionMain.align,
        axis: optionMain.axis,
        startIndex: optionMain.startIndex,
        dragFree: optionMain.dragFree,
        loop: optionMain.loop,
        watchDrag: optionMain.watchDrag,
        containScroll: optionMain.containScroll,
      },
      plugin
    );
  });
}
