console.log("Waiting for the page to load...");

async function replaceDoge() {
  const dogeSvg = document
    .querySelector('svg > g > path[d="M2.412.974h19.176v22.052H2.412z"]')
    .closest("svg");

  if (dogeSvg) {
    console.log("Found the Doge icon");

    const twitterSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    twitterSvg.setAttribute("width", "28");
    twitterSvg.setAttribute("height", "23");

    const pathEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathEl.setAttribute(
      "d",
      "M 25.059 5.783 C 25.076 6.027 25.076 6.272 25.076 6.519 C 25.076 14.042 19.34 22.719 8.853 22.719 L 8.853 22.715 C 5.755 22.719 2.721 21.833 0.113 20.162 C 0.563 20.216 1.016 20.243 1.47 20.245 C 4.037 20.247 6.531 19.387 8.551 17.802 C 6.111 17.756 3.972 16.168 3.225 13.848 C 4.079 14.013 4.959 13.979 5.799 13.75 C 3.139 13.214 1.225 10.88 1.225 8.17 L 1.225 8.097 C 2.018 8.538 2.905 8.783 3.813 8.81 C 1.307 7.138 0.535 3.81 2.048 1.207 C 4.943 4.765 9.214 6.927 13.799 7.156 C 13.339 5.179 13.967 3.106 15.449 1.716 C 17.745 -0.44 21.357 -0.329 23.515 1.963 C 24.792 1.711 26.016 1.244 27.136 0.581 C 26.711 1.899 25.82 3.018 24.63 3.73 C 25.76 3.597 26.864 3.294 27.904 2.833 C 27.139 3.978 26.175 4.976 25.059 5.783 Z"
    );
    pathEl.setAttribute("fill", "rgb(29,155,240)");
    twitterSvg.appendChild(pathEl);

    dogeSvg.replaceWith(twitterSvg);

    console.log("Replacing the Doge icon");
  } else {
    console.log("Did not find the Doge icon");
  }
}

setTimeout(() => {
  replaceDoge();
}, 2000);
