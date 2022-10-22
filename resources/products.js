const RAW_PRODUCTS = [
  {
    "id": "1",
    "nameI18n": "지고한 열망",
    "name": "Sublime aspiration",
    "description": "이 선언의 어떠한 규정도 어떤 국가, 집단 또는 개인에게 이 선언에 규정된 어떠한 권리와 자유를 파괴하기 위한 활동에 가담하거나 또는 행위를 할 수 있는 권리가 있는 것으로 해석되어서는 아니된다",
    "image": "../resources/images/magenta-bg-01.jpg",
    "category": "collection"
  },
  {
    "id": "2",
    "nameI18n": "폭정과 억압",
    "name": "Tyranny and oppression",
    "description": "인간이 폭정과 억압에 대항하는 마지막 수단으로서 반란을 일으키도록 강요받지 않으려면, 법에 의한 통치에 의하여 인권이 보호되어야 하는 것이 필수적이다",
    "image": "../resources/images/magenta-bg-02.jpg",
    "category": "collection"
  },
  {
    "id": "3",
    "nameI18n": "권리와 자유",
    "name": "Rights and freedoms",
    "description": "모든 사람은 인종, 피부색, 성, 언어, 종교, 정치적 또는 기타의 견해, 민족적 또는 사회적 출신, 재산, 출생 또는 기타의 신분과 같은 어떠한 종류의 차별이 없이, 이 선언에 규정된 모든 권리와 자유를 향유할 자격이 있다.",
    "image": "../resources/images/magenta-bg-03.jpg",
    "category": "collection"
  },
  {
    "id": "4",
    "nameI18n": "무시와 경멸",
    "name": "Ignore and contempt",
    "description": "인권에 대한 무시와 경멸이 인류의 양심을 격분시키는 만행을 초래하였으며, 인간이 언론과 신앙의 자유, 그리고 공포와 결핍으로부터의 자유를 누릴 수 있는 세계의 도래가 모든 사람들의 지고한 열망으로서 천명되어 왔다",
    "image": "../resources/images/magenta-bg-04.jpg",
    "category": "collection"
  },
  {
    "id": "5",
    "nameI18n": "존엄과 가치",
    "name": "Dignity and value",
    "description": "국제연합의 모든 사람들은 그 헌장에서 기본적 인권, 인간의 존엄과 가치, 그리고 남녀의 동등한 권리에 대한 신념을 재확인하였으며, 보다 폭넓은 자유속에서 사회적 진보와 보다 나은 생활수준을 증진하기로 다짐하였다",
    "image": "../resources/images/magenta-bg-05.jpg",
    "category": "collection"
  },
  {
    "id": "6",
    "nameI18n": "보편적 존중",
    "name": "Universal respect",
    "description": "인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를 인정하는 것이 세계의 자유, 정의 및 평화의 기초이다",
    "image": "../resources/images/magenta-bg-06.jpg",
    "category": "collection"
  },
  {
    "id": "7",
    "nameI18n": "정보와 사상",
    "name": "Information and ideas",
    "description": "모든 사람은 사회의 일원으로서 사회보장을 받을 권리를 가지며, 국가적 노력과 국제적 협력을 통하여, 그리고 각 국가의 조직과 자원에 따라서 자신의 존엄과 인격의 자유로운 발전에 불가결한 경제적, 사회적 및 문화적 권리들을 실현할 권리를 가진다.",
    "image": "../resources/images/magenta-bg-07.jpg",
    "category": "collection"
  },
  {
    "id": "8",
    "nameI18n": "관용과 원칙",
    "name": "Tolerance and principles",
    "description": " 원칙의 수락과 방법의 설정에 의하여, 보장하고, 모든 국민의 경제적 및 사회적 발전을 촉진하기 위하여 국제기관을 이용한다는 것을 결의하면서, 이러한 목적을 달성하기 위하여 우리의 노력을 결집할 것을 결정하였다.",
    "image": "../resources/images/magenta-bg-08.jpg",
    "category": "collection"
  },
  {
    "id": "9",
    "nameI18n": "휴식과 여가",
    "name": "Relaxation and leisure",
    "description": "모든 사람은 노동시간의 합리적 제한과 정기적인 유급휴가를 포함하여 휴식과 여가의 권리를 가진다.",
    "image": "../resources/images/purple-bg-01.jpg",
    "category": "collection"
  },
  {
    "id": "10",
    "nameI18n": "천부의 존엄",
    "name": "Native dignity",
    "description": "모든 사람은 사상, 양심 및 종교의 자유에 대한 권리를 가진다. 이러한 권리는 종교 또는 신념을 변경할 자유와, 단독으로 또는 다른 사람과 공동으로 그리고 공적으로 또는 사적으로 선교, 행사, 예배 및 의식에 의하여 자신의 종교나 신념을 표명하는 자유를 포함한다.",
    "image": "../resources/images/purple-bg-02.jpg",
    "category": "collection"
  },
  {
    "id": "11",
    "nameI18n": "존엄과 인격",
    "name": "Dignity and personality",
    "description": "모든 사람은 사회의 일원으로서 사회보장을 받을 권리를 가지며, 국가적 노력과 국제적 협력을 통하여, 그리고 각 국가의 조직과 자원에 따라서 자신의 존엄과 인격의 자유로운 발전에 불가결한 경제적, 사회적 및 문화적 권리들을 실현할 권리를 가진다. ",
    "image": "../resources/images/purple-bg-03.jpg",
    "category": "collection"
  },
  {
    "id": "12",
    "nameI18n": "신념의 확인",
    "name": "Confirmation of belief",
    "description": "사회적 출신, 재산, 출생 또는 기타의 신분과 같은 어떠한 종류의 차별이 없이, 이 선언에 규정된 모든 권리와 자유를 향유할 자격이 있다.",
    "image": "../resources/images/purple-bg-04.jpg",
    "category": "collection"
  },
  {
    "id": "13",
    "nameI18n": "질서의 실현",
    "name": "The realization of order",
    "description": "국제연합의 모든 사람들은 그 헌장에서 기본적 인권, 인간의 존엄과 가치, 그리고 남녀의 동등한 권리에 대한 신념을 재확인하였으며, 보다 폭넓은 자유속에서 사회적 진보와 보다 나은 생활수준을 증진하기로 다짐하였다.",
    "image": "../resources/images/purple-bg-05.jpg",
    "category": "collection"
  },
  {
    "id": "14",
    "nameI18n": "헌신과 열정",
    "name": "Dedication and passion",
    "description": "정의와 조약 및 기타 국제법의 연원으로부터 발생하는 의무에 대한 존중이 계속 유지될 수 있는 조건을 확립하며, 더 많은 자유 속에서 사회적 진보와 생활 수준의 향상을 촉진할 것을 결의하였다.",
    "image": "../resources/images/purple-bg-06.jpg",
    "category": "collection"
  },
  {
    "id": "15",
    "nameI18n": "목적과 의무",
    "name": "Purpose and duty",
    "description": "관용을 실천하고 선량한 이웃으로서 상호간 평화롭게 같이 생활하며, 국제 평화와 안전을 유지하기 위하여 우리들의 힘을 합하며, 공동 이익을 위한 경우 이외에는 무력을 사용하지 아니한다.",
    "image": "../resources/images/purple-bg-07.jpg",
    "category": "collection"
  },
  {
    "id": "16",
    "nameI18n": "정의와 평화",
    "name": "Justice and peace",
    "description": "모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를 인정하는 것이 세계의 자유, 정의 및 평화의 기초이다",
    "image": "../resources/images/purple-bg-08.jpg",
    "category": "collection"
  },

  {
    "id": "17",
    "nameI18n": "지고한 열망",
    "name": "Sublime aspiration",
    "description": "이 선언의 어떠한 규정도 어떤 국가, 집단 또는 개인에게 이 선언에 규정된 어떠한 권리와 자유를 파괴하기 위한 활동에 가담하거나 또는 행위를 할 수 있는 권리가 있는 것으로 해석되어서는 아니된다",
    "image": "../resources/images/white-bg-01.jpg",
    "category": "seasonal"
  },
  {
    "id": "18",
    "nameI18n": "폭정과 억압",
    "name": "Tyranny and oppression",
    "description": "인간이 폭정과 억압에 대항하는 마지막 수단으로서 반란을 일으키도록 강요받지 않으려면, 법에 의한 통치에 의하여 인권이 보호되어야 하는 것이 필수적이다",
    "image": "../resources/images/white-bg-02.jpg",
    "category": "seasonal"
  },
  {
    "id": "19",
    "nameI18n": "권리와 자유",
    "name": "Rights and freedoms",
    "description": "모든 사람은 인종, 피부색, 성, 언어, 종교, 정치적 또는 기타의 견해, 민족적 또는 사회적 출신, 재산, 출생 또는 기타의 신분과 같은 어떠한 종류의 차별이 없이, 이 선언에 규정된 모든 권리와 자유를 향유할 자격이 있다.",
    "image": "../resources/images/white-bg-03.jpg",
    "category": "seasonal"
  },
  {
    "id": "20",
    "nameI18n": "무시와 경멸",
    "name": "Ignore and contempt",
    "description": "인권에 대한 무시와 경멸이 인류의 양심을 격분시키는 만행을 초래하였으며, 인간이 언론과 신앙의 자유, 그리고 공포와 결핍으로부터의 자유를 누릴 수 있는 세계의 도래가 모든 사람들의 지고한 열망으로서 천명되어 왔다",
    "image": "../resources/images/white-bg-04.jpg",
    "category": "seasonal"
  },
  {
    "id": "21",
    "nameI18n": "존엄과 가치",
    "name": "Dignity and value",
    "description": "국제연합의 모든 사람들은 그 헌장에서 기본적 인권, 인간의 존엄과 가치, 그리고 남녀의 동등한 권리에 대한 신념을 재확인하였으며, 보다 폭넓은 자유속에서 사회적 진보와 보다 나은 생활수준을 증진하기로 다짐하였다",
    "image": "../resources/images/white-bg-05.jpg",
    "category": "seasonal"
  },
  {
    "id": "22",
    "nameI18n": "보편적 존중",
    "name": "Universal respect",
    "description": "인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를 인정하는 것이 세계의 자유, 정의 및 평화의 기초이다",
    "image": "../resources/images/white-bg-06.jpg",
    "category": "seasonal"
  },
  {
    "id": "23",
    "nameI18n": "정보와 사상",
    "name": "Information and ideas",
    "description": "모든 사람은 사회의 일원으로서 사회보장을 받을 권리를 가지며, 국가적 노력과 국제적 협력을 통하여, 그리고 각 국가의 조직과 자원에 따라서 자신의 존엄과 인격의 자유로운 발전에 불가결한 경제적, 사회적 및 문화적 권리들을 실현할 권리를 가진다.",
    "image": "../resources/images/white-bg-07.jpg",
    "category": "seasonal"
  },
  {
    "id": "24",
    "nameI18n": "관용과 원칙",
    "name": "Tolerance and principles",
    "description": " 원칙의 수락과 방법의 설정에 의하여, 보장하고, 모든 국민의 경제적 및 사회적 발전을 촉진하기 위하여 국제기관을 이용한다는 것을 결의하면서, 이러한 목적을 달성하기 위하여 우리의 노력을 결집할 것을 결정하였다.",
    "image": "../resources/images/white-bg-08.jpg",
    "category": "seasonal"
  },
  {
    "id": "25",
    "nameI18n": "휴식과 여가",
    "name": "Relaxation and leisure",
    "description": "모든 사람은 노동시간의 합리적 제한과 정기적인 유급휴가를 포함하여 휴식과 여가의 권리를 가진다.",
    "image": "../resources/images/white-bg-09.jpg",
    "category": "seasonal"
  },
  {
    "id": "26",
    "nameI18n": "천부의 존엄",
    "name": "Native dignity",
    "description": "모든 사람은 사상, 양심 및 종교의 자유에 대한 권리를 가진다. 이러한 권리는 종교 또는 신념을 변경할 자유와, 단독으로 또는 다른 사람과 공동으로 그리고 공적으로 또는 사적으로 선교, 행사, 예배 및 의식에 의하여 자신의 종교나 신념을 표명하는 자유를 포함한다.",
    "image": "../resources/images/white-bg-10.jpg",
    "category": "seasonal"
  },
  {
    "id": "27",
    "nameI18n": "존엄과 인격",
    "name": "Dignity and personality",
    "description": "모든 사람은 사회의 일원으로서 사회보장을 받을 권리를 가지며, 국가적 노력과 국제적 협력을 통하여, 그리고 각 국가의 조직과 자원에 따라서 자신의 존엄과 인격의 자유로운 발전에 불가결한 경제적, 사회적 및 문화적 권리들을 실현할 권리를 가진다. ",
    "image": "../resources/images/white-bg-11.jpg",
    "category": "seasonal"
  },
  {
    "id": "28",
    "nameI18n": "신념의 확인",
    "name": "Confirmation of belief",
    "description": "사회적 출신, 재산, 출생 또는 기타의 신분과 같은 어떠한 종류의 차별이 없이, 이 선언에 규정된 모든 권리와 자유를 향유할 자격이 있다.",
    "image": "../resources/images/white-bg-12.jpg",
    "category": "seasonal"
  },
  {
    "id": "29",
    "nameI18n": "질서의 실현",
    "name": "The realization of order",
    "description": "국제연합의 모든 사람들은 그 헌장에서 기본적 인권, 인간의 존엄과 가치, 그리고 남녀의 동등한 권리에 대한 신념을 재확인하였으며, 보다 폭넓은 자유속에서 사회적 진보와 보다 나은 생활수준을 증진하기로 다짐하였다.",
    "image": "../resources/images/white-bg-13.jpg",
    "category": "seasonal"
  },
  {
    "id": "30",
    "nameI18n": "헌신과 열정",
    "name": "Dedication and passion",
    "description": "정의와 조약 및 기타 국제법의 연원으로부터 발생하는 의무에 대한 존중이 계속 유지될 수 있는 조건을 확립하며, 더 많은 자유 속에서 사회적 진보와 생활 수준의 향상을 촉진할 것을 결의하였다.",
    "image": "../resources/images/white-bg-14.jpg",
    "category": "seasonal"
  },
  {
    "id": "31",
    "nameI18n": "목적과 의무",
    "name": "Purpose and duty",
    "description": "관용을 실천하고 선량한 이웃으로서 상호간 평화롭게 같이 생활하며, 국제 평화와 안전을 유지하기 위하여 우리들의 힘을 합하며, 공동 이익을 위한 경우 이외에는 무력을 사용하지 아니한다.",
    "image": "../resources/images/white-bg-15.jpg",
    "category": "seasonal"
  },
  {
    "id": "32",
    "nameI18n": "정의와 평화",
    "name": "Justice and peace",
    "description": "모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를 인정하는 것이 세계의 자유, 정의 및 평화의 기초이다",
    "image": "../resources/images/white-bg-16.jpg",
    "category": "seasonal"
  }
];
