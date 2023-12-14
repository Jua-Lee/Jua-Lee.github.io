//메인 텍스트 gsap
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});


//흐르는 텍스트
const pTag1 = document.querySelector('.first_parallel')
const pTag2 = document.querySelector('.second_parallel')

const textArr1 = 'Creative Visual Innovation'.split(' ')
const textArr2 = 'Creative Visual Innovation'.split(' ')

let count1 = 0
let count2 = 0

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)

function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0`
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  count1++
  count2++

  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, 1)

  window.requestAnimationFrame(animate)
}

function scrollHandler() {
  count1 += 15
  count2 += 15
}

window.addEventListener('scroll', scrollHandler)
animate()

//h3 gsap
const targets = gsap.utils.toArray(".split");

targets.forEach(target => {
  let SplitClient = new SplitType(target, { type: "lines, words, chars" });
  let lines = SplitClient.lines;
  let words = SplitClient.words;
  let chars = SplitClient.chars;

  gsap.from(chars, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
    stagger: {
      amount: 1,
      from: "random"
    },
    scrollTrigger: {
      trigger: target,
      start: "top bottom",
      end: "+=400",
      markers: false
    }
  });
});

// 포트폴리오 리스트 효과

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    const $target = e.target;

    // 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤
    if (e.isIntersecting) {
      $target.classList.add("show");
    } else {
      $target.classList.remove("show");
    }
  });
});

// 옵저버할 대상을 선택하여 관찰 시작
const $items = document.querySelectorAll(".port");
$items.forEach((item) => {
  io.observe(item);
});

// 특정 요소만 옵저버를 해제
// io.unobserve(target);

// 옵저버 전체를 해제
// io.disconnect();