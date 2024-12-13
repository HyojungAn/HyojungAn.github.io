// SVG 요소 가져오기
const svgElement = document.getElementById('circleSvg');

// 클릭 이벤트 추가
svgElement.addEventListener('click', () => {
    // 'rotate' 클래스 토글
    svgElement.classList.toggle('rotate');
});
