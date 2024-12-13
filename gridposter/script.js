// SVG 요소 가져오기
const svgElement = document.getElementById('circleSvg');
const circleGroup = document.getElementById('circleGroup');

// 클릭 이벤트 추가
svgElement.addEventListener('click', () => {
    // 'rotate' 클래스 토글
    svgElement.classList.toggle('rotate');

    // 각 세트의 색상 변경
    const circleSets = circleGroup.getElementsByClassName('circleSet');
    for (let j = 0; j < circleSets.length; j++) {
        const circles = circleSets[j].getElementsByTagName('circle');
        for (let i = 0; i < circles.length; i++) {
            const currentColor = circles[i].getAttribute('stroke');
            let newColor;

            switch (currentColor) {
                case 'red':
                    newColor = 'blue';
                    break;
                case 'blue':
                    newColor = 'green';
                    break;
                case 'green':
                    newColor = 'orange';
                    break;
                case 'orange':
                    newColor = 'purple';
                    break;
                case 'purple':
                    newColor = 'red';
                    break;
            }

            circles[i].setAttribute('stroke', newColor);
        }
    }
});

