// 사이트의 이름, 문구, 프로젝트, 연락처는 모두 이 파일에서 수정합니다.
//
// - 따옴표 안의 글자만 바꾸면 화면에 그대로 반영됩니다.
// - 아직 정보가 없는 항목은 '' (빈 따옴표)로 두면 '입력 예정' 같은 표시가 자동으로 나타납니다.
// - 링크는 https:// 부터 전체 주소를 적어 주세요.
// - 관련 사이트를 늘리려면 { ... } 묶음을 복사해 추가하면 됩니다.

export const content = {
  name: '김채란',
  role: '초등교사',
  footer: '김채란 · 초등교사',

  // 브라우저 탭 제목과 검색 설명
  // (링크 공유 미리보기에 쓰이므로 index.html의 <title>, description도 함께 수정해 주세요)
  pageTitle: '김채란 | 초등교사',
  pageDescription: '수업과 연구를 오가며, 아이들의 질문에서 새로운 배움의 가능성을 찾습니다.',

  // 정보가 비어 있을 때 표시할 문구
  placeholders: {
    projectTitle: '프로젝트 제목 입력',
    description: '설명 입력',
    link: '링크 입력',
    pending: '입력 예정',
  },

  nav: {
    skip: '본문으로 건너뛰기',
    home: '홈',
    philosophy: '이야기',
    research: '관심사',
    projects: '프로젝트',
    contact: '연락처',
  },

  // 1. 첫 화면
  hero: {
    homeTitle: '김채란의 홈피',
    ticker: '★ 어서 오세요 ♥ 김채란의 홈피입니다 ★ 질문 금지 ♥',
    tagline: '수업과 연구를 오가며, 아이들의 질문에서 새로운 배움의 가능성을 찾습니다.',
    intro: '예술·수학·독서·디지털 도구를 연결한 수업을 탐구합니다.',
    storyButton: '나의 이야기',
    researchButton: '연구 및 프로젝트',
    roomTitle: 'MINI ROOM · 질문이 자라는 교실',
    boardText: '왜 그럴까?',
    statusLabel: '오늘의 상태',
    status: '탐구 중',
    bgmLabel: '오늘의 BGM',
    bgm: '아이들의 질문',
  },

  // 2. 나의 교육 철학
  philosophy: {
    eyebrow: 'DIARY · 나의 이야기',
    title: '나의 교육 철학',
    items: [
      '학생의 질문과 생각에서 수업을 시작합니다.',
      '탐구와 대화를 통해 함께 배우는 교실을 만듭니다.',
      '예술과 기술을 연결해 배움의 가능성을 넓힙니다.',
    ],
  },

  // 3. 주요 연구 관심사
  // icon에는 palette, calc, book 등 index.html의 픽셀 아이콘 이름을 적습니다.
  research: {
    eyebrow: 'FOLDER · 연구',
    title: '주요 연구 관심사',
    recordLabel: '관련 연구 실적',
    items: [
      {
        tab: 'ART',
        icon: 'palette',
        title: '예술교육',
        description: '아이들이 자신의 생각과 감정을 다양한 방식으로 표현하도록 돕는 예술교육에 관심을 두고 있습니다.',
        record: '',
      },
      {
        tab: 'MATH',
        icon: 'calc',
        title: 'AI와 디지털 도구를 활용한 수학 수업',
        description: 'AI와 디지털 도구가 아이들의 수학적 탐구와 사고를 어떻게 넓힐 수 있는지 살펴봅니다.',
        record: '',
      },
      {
        tab: 'BOOK',
        icon: 'book',
        title: '독서교육과정',
        description: '읽기가 교과와 아이들의 삶으로 이어지도록 독서교육과정을 구성하는 방법을 탐구합니다.',
        record: '',
      },
    ],
  },

  // 4. 수업 및 연구 프로젝트
  // status는 카드의 작은 상태 라벨입니다. 예: '진행 중', '완료'
  projects: {
    eyebrow: 'PLAYLIST · 프로젝트',
    title: '수업 및 연구 프로젝트',
    numberPrefix: 'No.',
    linkLabel: '관련 링크',
    linkText: '바로 가기 ↗',
    items: [
      { status: '입력 대기', title: '', description: '', link: '' },
      { status: '입력 대기', title: '', description: '', link: '' },
      { status: '입력 대기', title: '', description: '', link: '' },
    ],
  },

  // 5. 연락처
  contact: {
    eyebrow: 'GUESTBOOK · 방명록',
    title: '연락처',
    emailLabel: '이메일',
    email: '',
    links: [{ label: '관련 사이트', url: '' }],
  },

  // 방명록 쓰기 칸
  guestbook: {
    title: '방명록에 질문 남기기',
    nameLabel: '이름 또는 별명 (선택)',
    namePlaceholder: '별명을 적어 주세요',
    messageLabel: '남길 말',
    messagePlaceholder: '궁금한 점이나 하고 싶은 말을 적어 주세요',
    note: '남겨 주신 글은 사이트에 공개되지 않고 김채란에게만 전달됩니다. 전화번호, 주소 같은 개인정보는 적지 말아 주세요.',
    submit: '남기기',
    sending: '보내는 중...',
    success: '잘 받았습니다. 고맙습니다!',
    error: '보내지 못했습니다. 잠시 후 다시 시도해 주세요.',
  },

  // 바닥글의 작은 배지 (장식)
  badges: ['♥ 질문 환영', '★ 모든 화면 OK', '♪ 오늘도 탐구'],
}
