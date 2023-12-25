// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector(".modal");
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement("div");
  modal.className = "modal hidden";

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content zoomIn";

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement("div");
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = "Door Image";
  image.style.width = "100%";
  image.style.height = "211px";

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement("p");
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener("click", () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove("hidden"), 0);
}

const modalMessageList = [
  {
    number: 1,
    message: "건강하고 따뜻한 크리스마스를 보내세요! 새해 복 많이 받으세요!",
  },
  {
    number: 2,
    message:
      "사랑해요! 크리스마스가 행복으로 가득하세요, 새해 복 많이 받으세요!",
  },
  {
    number: 3,
    message:
      "맛있는 음식을 줘서 감사합니다! 따뜻한 크리스마스와 행복한 새해를 기원해요!",
  },
  {
    number: 4,
    message: "새해 복 많이 받으세요! 특별한 크리스마스를 함께하세요.",
  },
  {
    number: 5,
    message:
      "함께 게임 더 많이 하자! 특별한 크리스마스와 행복한 새해를 기원해!",
  },
  {
    number: 6,
    message:
      "형, 피아노 잘 치고있어!? 크리스마스가 음악으로 가득한 새해를 기원해!",
  },
  { number: 7, message: "새해 복 많이 받아! 특별한 크리스마스를 즐겁게 보내!" },
  {
    number: 8,
    message:
      "할머니 음식 최고에요! 따뜻한 크리스마스와 기쁜 새해를 기원합니다!",
  },
  {
    number: 9,
    message: "사랑해요! 따뜻한 크리스마스와 행복한 새해를 바랍니다.",
  },
  {
    number: 10,
    message: "미국에서 건강하세요! 특별한 크리스마스와 행복한 새해를 바라세요!",
  },
  {
    number: 11,
    message: "건강하게 크리스마스를 보내세요! 특별한 새해를 기원해요!",
  },
  {
    number: 12,
    message:
      "서프라이즈! 크리스마스와 새해가 특별하고 기쁜 순간이 되길 바랍니다!",
  },
  {
    number: 13,
    message:
      "코딩으로 특별한 크리스마스를 카드를 알려줘서 감사해요! 새해 복 많이 받으세요!",
  },
  { number: 14, message: "JIMMYDOLFISH! merry christmas! HAPPY NEW YEAR!" },
  {
    number: 15,
    message:
      "이모 할머니, 내년에는 더욱 건강하세요. 따뜻한 크리스마스와 새해를 보내세요!",
  },
  {
    number: 16,
    message: "크리스마스 잘 보내! 특별한 크리스마스와 새해를 기원해!",
  },
  {
    number: 17,
    message:
      "발 괜찮아? 빨리 나아지길 바래. 크리스마스와 새해에는 더욱 건강해!",
  },
  {
    number: 18,
    message:
      "미술 시간에 미술을 알려줘서 감사합니다! 특별한 크리스마스와 새해를 기원해요.",
  },
  {
    number: 19,
    message: "지난번에 날 위로해줘서 고마워! 특별한 크리스마스와 새해를 보내.",
  },
  {
    number: 20,
    message: "건강하고 즐거운 크리스마스를 보내! 새해 복 많이 받아!",
  },
  { number: 21, message: "시안 공주님 안녕하세요. 즐거운 크리스마스 보내." },
  {
    number: 22,
    message: "10101001010110111010<hacking loaded>10110110110100101101010",
  },
  {
    number: 23,
    message: "버튼을 누르지마 너 또 누르면 죽어 제발하지마!",
  },
  {
    number: 24,
    message: "UFO다! 아아아아아아아아아아아아아아아!",
  },
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll(".door");
doors.forEach((door, index) => {
  door.addEventListener("click", () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card/card-${index + 1}.png`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`);
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector("p");
    const text = modalMessageList[index]["message"];

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});
