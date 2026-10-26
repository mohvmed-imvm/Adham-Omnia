/* ==========================================
   A LETTER TO MY LOVE — 4U CELEBRATIONS
========================================== */

const CONFIG = {
  name: "MY FAVORITE PERSON",

  finalMessage:
    "اخر حاجه عايزاك تعرف اني بحبك اوي اوي اوي" +
    "ومقدرش اعيش من غيرك لحظه واحده انت عمري كلو" +
    "ربنا يخليك ليا ينور عيني وميحرمنيش منك ابدا" +
    "ونفضل طول العمر سوا ونعيش كل حاجه مع بعض" ,

  pages: [
    {
      chapter: "01 — BEFORE ANYTHING ELSE",
      title: "احلي ايامي<br> <i>وانا معاك</i>",
      text: "هايي يدبدوبييي🙈 <br> يا احلا وأجمل ادهم في حياتي عاوزه اقولك أنا كل لحفظه وكل وقت بتبقي معايا فيها قد اي ببقى مبسوطه بجد وقد اي بدعي ربنا من كل قلبي اننا نفضل مع بعض وتبقي معايا العمر كله عاوزه اقولك اني بحبك اوي اوي واني فعلا مقدرش اعيش من غيرك بجد اتوه لو بعدت عني انت حظي الحلو في الدنيا دي عارف أنا قد اي بفضل احسد نفسي اني معايا راجل زيك في حياتي وبشكر ربنا اني بعتك ليا ❤️",
      quote: "اقلب الصفحه ياحبيبي",
      photo: "photo1.jpg",
      caption: "My favorite kind of happiness",
      date: "",
      note: "SOME PEOPLE FEEL LIKE HOME"
    },
    {
      chapter: "02 — WHEN THINGS GOT HARD",
      title: "مقدرش اشوفك<br> <i>مضايق</i>",
      text: "عاوزه اقولك اني كل ما بشوفك زعلان ولا مضايق قد اي م ببقى مبسوطه وببقى زعلانه اوي اوي عاوزه اقولك انك لو م مع مريومه ولا احمد ولا ابوك ولا معايا م هتبقى مرتاح ربنا يخليك ليهم وليا واشوفك ديما ناجح ومبسوط واشوفك محقق كل حاجه نفسنا اننا نعملها سوى عاوزه اقولك كمان أنا ديما ببقى قويه بيك وببقى مبسوطه اوي ونت بتضحك ومبسوط ❤️",
      quote: "اقلب صفحه كمان",
      photo: "photo4.jpg",
      caption: "Best Moments in My Life",
      date: "4/12/2025",
      note: "YOUR FEELINGS MATTER TOO"
    },
    {
      chapter: "03 — WHAT I SHOULD HAVE SAID",
      title: "وجودك<br> <i>بيطمني</i>",
      text: "فاكر اليوم ده كنا قد اي تايهيين ومكناش لاقين مكان نفطر في😂❤️بس فطرنا وتعبت ودوخت ع نلاقي مكان نروحه ارتاح أنا فييي ومع ذلك كنت بتعمل كل ده بحب وحنيه وكنت  قد اي مبسوطه بحبك اوي اوي 😂❤️",
      quote: "كمان صفحه",
      photo: "photo2.jpg",
      caption: "A little reminder of us",
      date: "",
      note: "LOVE ALSO MEANS LEARNING"
    },
    {
      chapter: "04 — WHAT I SHOULD HAVE SAID",
      title: "انت احلي حاجه<br> <i>حصلتلي</i>",
      text: "اليوم ده كنا زعلانين اوي من بعض بس ساعتها شوفت عيونك ارتاحت كل مره بشوفك فيها باخد طاقه غير طبيعيه ببقى قد اي بعوض حاجات اتحرمت منها بس ربنا بعتهالي فيك انت ف ربنا يخليك ليا ومتبعدش عني أبدا بكل حياتي❤️🌏🌏🌏🌏",
      quote: "زهقتك عارفه اقلب اخر مره",
      photo: "photo3.jpg",
      caption: "A little reminder of us",
      date: "",
      note: "LOVE ALSO MEANS LEARNING"
    },
    {
      chapter: "05 — WHAT I SHOULD HAVE SAID",
      title: "<i>ربنا يخليك ليا يا احلي حاجه حصلتلي</i>",
      text: "آخر حاجه خلاص😂❤️عاوزه اقولك اني هفضل ديما فخوره بيك وهفضل فرحانه بيك وهفضل متشرفه بيك قدام اي حد يارب ميبعدنا عن بعض ايدااا ابدااا  بحبك اويييييي❤️❤️❤️❤️❤️🤴🏻💍",
      quote: "دوس Finish من تحت ياحبيبي",
      photo: "photo5.jpg",
      caption: "A little reminder of us",
      date: "",
      note: "LOVE ALSO MEANS LEARNING"
    },
  ]
};

/* ELEMENTS */

const coverScreen = document.getElementById("coverScreen");
const bookScreen = document.getElementById("bookScreen");
const finalScreen = document.getElementById("finalScreen");

const openBook = document.getElementById("openBook");
const bookStage = document.getElementById("bookStage");

const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");

const leftNumber = document.getElementById("leftNumber");
const rightNumber = document.getElementById("rightNumber");

const turnSheet = document.getElementById("turnSheet");
const sheetFront = document.getElementById("sheetFront");
const sheetBack = document.getElementById("sheetBack");

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const finalMessage = document.getElementById("finalMessage");
const restartButton = document.getElementById("restartButton");
const particlesBack = document.getElementById("particlesBack");

/* STATE */

let currentPage = 0;
let isTurning = false;
let isFinished = false;
let isOpeningBook = false;
let turnDirection = "next";
let openingTimer = null;
let turnTimer = null;

document.getElementById("coverName").textContent = CONFIG.name;
finalMessage.textContent = CONFIG.finalMessage;

/* PAGE CONTENT */

function createTextPage(page) {
  return `
    <div class="page-content text-page">
      <span class="page-kicker">${page.chapter}</span>
      <h2 class="page-title">${page.title}</h2>
      <p class="page-copy">${page.text}</p>
      <blockquote class="page-quote">${page.quote}</blockquote>
      <div class="page-decoration">♡ &nbsp; ✧ &nbsp; ♡</div>
    </div>
  `;
}

function createPhotoPage(page) {
  return `
    <div class="page-content photo-page">
      <div class="photo-frame">
        <img
          src="${page.photo}"
          alt="${page.caption}"
          loading="eager"
          draggable="false"
        >
        <div class="photo-caption">
          <span>${page.caption}</span>
          <span class="photo-date">${page.date}</span>
        </div>
      </div>
      <p class="photo-note">${page.note}</p>
    </div>
  `;
}

/* SPREAD: PHOTO LEFT, TEXT RIGHT */

function renderSpread() {
  const page = CONFIG.pages[currentPage];

  // الصورة على الشمال
  leftContent.innerHTML = createPhotoPage(page);

  // الكلام على اليمين
  rightContent.innerHTML = createTextPage(page);

  leftNumber.textContent =
  String(currentPage * 2 + 3).padStart(2, "0");

  rightNumber.textContent =
  String(currentPage * 2 + 2).padStart(2, "0");

  prevButton.disabled = currentPage === 0;

  nextButton.innerHTML =
    currentPage === CONFIG.pages.length - 1
      ? 'Finish our story <span>→</span>'
      : 'Turn the page <span>→</span>';

  progressText.textContent =
    `${String(currentPage + 1).padStart(2, "0")} / ` +
    `${String(CONFIG.pages.length).padStart(2, "0")}`;

  progressBar.style.width =
    `${((currentPage + 1) / CONFIG.pages.length) * 100}%`;
}

/* OPEN COVER: ONE COVER ONLY */

function startOpeningAnimation() {
  if (isOpeningBook || !bookScreen.classList.contains("hidden")) {
    return;
  }

  isOpeningBook = true;
  document.getElementById("bookMusic").play();
  openBook.disabled = true;

  currentPage = 0;
  renderSpread();

  openBook.classList.add("opening");
  coverScreen.classList.add("opening-sequence");

  releaseParticles();

  openingTimer = window.setTimeout(() => {
    coverScreen.classList.add("hidden");
    bookScreen.classList.remove("hidden");

    renderSpread();

    isOpeningBook = false;
    openBook.disabled = false;
    openingTimer = null;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 1650);
}

openBook.addEventListener("click", startOpeningAnimation);

/* HEARTS AND PETALS */

function releaseParticles() {
  const symbols = ["♡", "♥", "✧", "❀", "❧"];

  const colors = [
    "#a84c68",
    "#d6a0ad",
    "#e7bdc8",
    "#f3dfe4",
    "#8e3852"
  ];

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("span");

    particle.className = "flying-particle";
    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.setProperty(
      "--start-x",
      `${8 + Math.random() * 84}%`
    );

    particle.style.setProperty(
      "--drift-x",
      `${Math.random() * 300 - 150}px`
    );

    particle.style.setProperty(
      "--drift-y",
      `${-100 - Math.random() * 240}px`
    );

    particle.style.setProperty(
      "--rotation",
      `${Math.random() * 180 - 90}deg`
    );

    particle.style.setProperty(
      "--particle-duration",
      `${1.8 + Math.random() * 1.5}s`
    );

    particle.style.setProperty(
      "--particle-delay",
      `${Math.random() * 0.3}s`
    );

    particle.style.setProperty(
      "--particle-size",
      `${13 + Math.random() * 15}px`
    );

    particle.style.setProperty(
      "--particle-color",
      colors[Math.floor(Math.random() * colors.length)]
    );

    particlesBack.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    }, { once: true });
  }
}

/* NEXT PAGE: LEFT TO RIGHT */

function turnNextPage() {
  if (isTurning || isFinished || isOpeningBook) return;

  if (currentPage === CONFIG.pages.length - 1) {
    showFinalScreen();
    return;
  }

  isTurning = true;
  turnDirection = "next";

  const current = CONFIG.pages[currentPage];
  const next = CONFIG.pages[currentPage + 1];

  // وش الصفحة اللي على الشمال: الصورة الحالية
  sheetFront.innerHTML = createPhotoPage(current);

  // ظهر الورقة: كلام الصفحة الجديدة
  sheetBack.innerHTML = createTextPage(next);

  // تجهيز الصفحتين اللي تحت الورقة
  leftContent.innerHTML = createPhotoPage(next);
  rightContent.innerHTML = createTextPage(next);

  turnSheet.classList.remove("turning", "turning-prev");
  void turnSheet.offsetWidth;

  releaseParticles();
  turnSheet.classList.add("turning");

  startTurnTimer();
}

/* PREVIOUS PAGE: RIGHT TO LEFT */

function turnPreviousPage() {
  if (
    isTurning ||
    isFinished ||
    isOpeningBook ||
    currentPage === 0
  ) {
    return;
  }

  isTurning = true;
  turnDirection = "prev";

  const current = CONFIG.pages[currentPage];
  const previous = CONFIG.pages[currentPage - 1];

  // وش الورقة الحالية على اليمين
  sheetFront.innerHTML = createTextPage(current);

  // ظهر الورقة: صورة الصفحة السابقة
  sheetBack.innerHTML = createPhotoPage(previous);

  // تجهيز الصفحتين اللي تحت الورقة
  leftContent.innerHTML = createPhotoPage(previous);
  rightContent.innerHTML = createTextPage(previous);

  turnSheet.classList.remove("turning", "turning-prev");
  void turnSheet.offsetWidth;

  releaseParticles();
  turnSheet.classList.add("turning-prev");

  startTurnTimer();
}

function startTurnTimer() {
  if (turnTimer) {
    clearTimeout(turnTimer);
  }

  turnTimer = window.setTimeout(() => {
    finishPageTurn();
  }, 1050);
}

function finishPageTurn() {
  if (!isTurning) return;

  if (turnDirection === "next") {
    currentPage++;
  } else {
    currentPage--;
  }

  currentPage = Math.max(
    0,
    Math.min(currentPage, CONFIG.pages.length - 1)
  );

  turnSheet.classList.remove("turning", "turning-prev");

  renderSpread();

  isTurning = false;
  turnTimer = null;
}

/* BUTTONS */

nextButton.addEventListener("click", turnNextPage);
prevButton.addEventListener("click", turnPreviousPage);

/* CLICK PHOTO LEFT = NEXT, TEXT RIGHT = PREVIOUS */

bookStage.addEventListener("click", (event) => {
  if (isTurning || isFinished || isOpeningBook) return;

  const clickedPage = event.target.closest(".page");

  if (!clickedPage) return;

  if (clickedPage.classList.contains("left-page")) {
    // الضغط على الصورة الشمال يفتح الصفحة التالية
    turnNextPage();
  } else if (clickedPage.classList.contains("right-page")) {
    // الضغط على الكلام اليمين يرجع للصفحة السابقة
    turnPreviousPage();
  }
});

/* ENDING */

function showFinalScreen() {
  if (isTurning || isFinished || isOpeningBook) return;

  isFinished = true;

  bookScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");

  releaseParticles();
  releaseParticles();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* RESTART */

restartButton.addEventListener("click", () => {
  if (openingTimer) {
    clearTimeout(openingTimer);
    openingTimer = null;
  }

  if (turnTimer) {
    clearTimeout(turnTimer);
    turnTimer = null;
  }

  isTurning = false;
  isFinished = false;
  isOpeningBook = false;
  currentPage = 0;
  turnDirection = "next";

  turnSheet.classList.remove("turning", "turning-prev");
  particlesBack.innerHTML = "";

  openBook.classList.remove("opening");
  openBook.disabled = false;

  coverScreen.classList.remove("opening-sequence");
  finalScreen.classList.add("hidden");
  bookScreen.classList.add("hidden");
  coverScreen.classList.remove("hidden");

  renderSpread();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

renderSpread();