// 포트폴리오 콘텐츠 데이터
// 이 파일을 수정하여 내용을 관리할 수 있습니다.

export interface BentoCard {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  colorClass: string;
  fullContent: {
    title: string;
    subtitle: string;
    content: string;
  };
}

export interface NarrativeSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface ExternalLink {
  name: string;
  url: string;
}

export interface FeaturedArticle {
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  platform: 'naver' | 'brunch' | 'medium' | 'substack';
}

// Hero Section
export const heroData = {
  title: '낭만적 인본주의자',
  subtitle: '우리는 어차피 죽는데,\n왜 살아야 할까요?',
};

// Narrative Sections (짧은 버전 - 섹션용)
export const narrativeSections: NarrativeSection[] = [
  {
    id: 'death-and-universe',
    title: '중2, 두 팔이 부러진 채 죽음과 우주의 공포를 마주하다',
    paragraphs: [
      '중2 때 보드를 타다가 두 팔이 다 부러졌습니다. 2주 동안 아무것도 못 하고, 천장만 보면서 누워 있었습니다. 별의 별 상상을 다하다 갑자기 이런 생각들이 떠올랐습니다.',
      '죽음이란 무엇일까. 죽고 나면 우리는 어디로 갈까. 우주로 갈까. 우주는 대체 무엇일까. 끝이 있긴 할까.',
      '아득한 광활함이 한 번에 밀려왔고, 동시에 죽음의 공포도 같이 왔습니다. 그 이후로 꽤 오랫동안 이 질문을 끌고 다녔습니다.',
      '세상이란 뭘까? 죽음이란 뭘까? 삶의 의미는 뭘까?',
      '결론은 단순했습니다. 모릅니다. 아무도 알 수가 없습니다. 그런데 그 결론이 저를 허무주의로 끌고 가지는 않았습니다. 오히려 반대로 갔습니다. 아, 이건 내가 만들어 가기 나름이구나. 왜 사는지도, 어떻게 살지도, 결국 내가 만들어 가는 거구나.',
    ],
  },
  {
    id: 'romantic-humanism',
    title: '낭만적 인본주의자로 살기로 결심하다',
    paragraphs: [
      '저는 무엇인가 새로운 것을 경험하고, 그 순간을 충만히 살아갈 때 고양감을 느낍니다. 그래서 죽기 전에 더 많이 경험하고, 더 많이 뜨겁게 느끼고 싶습니다.',
      '하지만 우리는 죽을 때까지 한정된 1인칭으로만 세상을 삽니다. 그리고 저는 인식의 한계가 곧 세상의 한계, 경험의 한계라고 생각합니다. 그 인식의 한계를 깰 수 있는 유일한 방법은 "타인"과 교류하는 것입니다.',
      '세계에는 80억명의 사람이 있고, 각자는 서로의 고유한 세상을 살고 있습니다. 세계는 하나지만, 80억개의 서로 다른 세상이 존재합니다. 서로를 만나 대화하고, 배우고, 함께 일하고, 때로는 반목하고, 또 때로는 사랑하고 연대할 때 각자의 세상이 조금씩 깨지며 넓어진다고 믿습니다.',
      '"사람"에 집중하고, 사람 사이의 "사랑"이 있는 사회를 꿈꾸는 사람입니다.',
    ],
  },
];

// Bento Grid Cards
export const bentoCards: BentoCard[] = [
  {
    id: 'music',
    emoji: '🎤',
    title: '부모님도 포기한 음치가\n쇼미더머니 준비한 썰',
    subtitle: '좋아하면 다 해봐야죠, 치열하게',
    colorClass: 'card-music',
    fullContent: {
      title: '부모도 포기한 음치가 쇼미더머니 준비한 썰',
      subtitle: '좋아하면 다 해봐야죠, 치열하게',
      content: `
        <p>저는 책, 영화, 음악, 영상, 밈 등 사람들이 향유하는 거의 모든 콘텐츠를 좋아합니다. 좋아하면 보통 참지 못합니다. 그래서 직접 해봅니다.</p>
        <p><strong>책:</strong> 부모님 몰래 휴학하고 책을 쓰다가 등록금을 탕진한 적이 있습니다. 언젠가 꼭 내고 싶습니다. "낭만적 인본주의자의 언어 사전" 이라는 제목입니다. 의미의 한계가 곧 인식의 한계라면, 의미를 확장하면 사람들이 조금 더 행복해질 수 있다고 믿었습니다.</p>
        <p><strong>영상:</strong> 여행 영상, 밈 영상을 제작해 대학 학번 그룹에 공유한 적이 있습니다. 3,800명 규모의 그룹에서 좋아요가 2,700개 정도 나왔습니다. 그때 유튜브를 했어야 했습니다.</p>
        <p><strong>음악:</strong> 쇼미더머니를 나가겠다고 랩 레슨도 받았습니다. 제가 하고 싶은 이야기를 가장 압축해서 담을 수 있는 매체가 랩이라고 생각했습니다. 참고로 부모님이 '너는 어디가서 노래 부르지 마라'라고 말을 한 지독한 음치였는데, 7년 가까이 혼자 연습하고 고민한 끝에 이제는 "사람답게"는 부를 수 있게 되었습니다.</p>
        <p><strong>춤:</strong> 대학에서 응원단을 했고, 스트릿댄스를 배워 안무도 했습니다. 앞으로는 밴드를 꼭 해보고 싶습니다.</p>
      `,
    },
  },
  {
    id: 'career',
    emoji: '🍁',
    title: '메이플 블로그로\n대기업 취직한 썰',
    subtitle: '우연의 면적을 넓히는 법, 기록',
    colorClass: 'card-blog',
    fullContent: {
      title: '메이플 블로그로 대기업 취직한 썰',
      subtitle: '우연의 면적을 넓히는 법, 기록',
      content: `
        <p>결론부터 말하면, 저는 중학교 때 하던 메이플 블로그 덕분에 대기업에 들어갔습니다.</p>
        <p>2020년, 저는 부모님 몰래 책을 쓰며 등록금을 탕진했고 돈을 벌어야 했습니다. 그래서 주식 시장으로 기어들어왔습니다. 당시 저는 "매수/매도, 매출, 영업이익"도 모르던 문돌이였습니다. 아무것도 몰라서 하나씩 찾아가며 공부했습니다.</p>
        <p>그런데 이상했습니다. 단어 설명은 많은데, 정작 제가 알고 싶은 게 없었습니다. "그래서 이 지표의 진짜 의미가 뭔데요?" "이게 왜 중요하고, 언제는 왜 무시해도 되는데요?"</p>
        <p>결국 제가 직접 찾아 공부했고, 그걸 그대로 기록했습니다. 기록이 쌓이자 블로그가 커졌습니다. 그리고 재미있는 일이 벌어졌습니다. 이 우연이 중학교 때 했던 메이플 블로그의 흔적 덕분에 더 빠르게 증폭됐습니다. 예전에 쌓인 '블로그 체력' 같은 게, 다시 시작한 블로그를 밀어 올린 겁니다.</p>
        <p>그 즈음부터 저는 사람들이 좋아하는 글의 형태를 체감으로 배웠습니다. 결국 제 커리어 대부분—파이낸스/크립토 리서치, VC, 대기업 IT 사업팀, 블록체인 사업개발—은 블로그라는 기록이 만든 기회였습니다. 완벽하지 않아도, 계속 "왜"를 묻고 정리해둔 흔적은 시간이 지나 우연이 붙을 자리를 만든다는 걸 알게 됐습니다.</p>
        <p>그래서 저는 지금도 치열하게 고민하고 기록합니다. 남에게 가치를 주려고 쓰다 보면, 그 흔적이 결국 제 운으로 돌아온다는 걸 이미 경험했기 때문입니다.</p>
      `,
    },
  },
  {
    id: 'nietzsche',
    emoji: '🔨',
    title: '도덕과 규율,\n고리타분한 인습을 부수다',
    subtitle: '내 인생의 롤모델 그리스인 조르바와 니체',
    colorClass: 'card-philosophy',
    fullContent: {
      title: '도덕과 규율, 고리타분한 인습을 부수다',
      subtitle: '내 인생의 롤모델 그리스인 조르바와 니체',
      content: `
        <p>저는 "당연한 것"을 믿지 않습니다. 세상에 절대적인 정답은 없다고 생각합니다. 인간은 연약하고, 사회는 더 연약합니다. 숱한 우연과 약한 고리 위에서 겨우 굴러가는 집합체라고 느낍니다. 배울수록 선명해지는 건 하나입니다. 우리는 생각보다 무지합니다. 과학적 법칙도, 수학적 공리도, 인간이 만든 법과 제도도 완벽한 진리라기보다 "현재의 최선"에 가깝다고 봅니다.</p>
        <p>니체의 말에 깊이 동감하는 이유입니다. 기존의 가치는 완벽하지 않습니다. 그렇기 때문에 그대로 받아들이기보다, 스스로 부수고 다시 세워야 유한한 삶을 온전히 살아갈 수 있다고 생각합니다. 그래서 저는 항상 "왜"를 묻습니다. 자본주의와 민주주의조차 완벽한 체계가 아닙니다. 인권 같은 개념도 하늘에서 떨어진 진리가 아니라, 인간이 불완전함 속에서 어렵게 합창조한 상호 주관적 개념입니다. 그래서 더더욱 묻습니다. 이 약속은 왜 필요했고, 무엇을 지키기 위해 무엇을 포기했는지 말입니다.</p>
        <p>저는 대책 없는 냉소를 좋아하진 않습니다. 다만 비판과 해체는 소모적이더라도 무의미하지 않다고 믿습니다. 우리를 얽매는 '고리타분한 인습'과 '말뿐인 당위'를 계속 두드려 보고, 깨질 수 있는 건 깨뜨리고 싶습니다. 개인이 개인 그 자체로, 실존하는 사람으로, 순간에 충만하기를 바랍니다. 저는 그리스인 조르바처럼 장대비 쏟아지는 인생을 춤추듯 걸어가며 사랑하고자 합니다.</p>
      `,
    },
  },
  {
    id: 'kindness',
    emoji: '🥯',
    title: 'Everything Everywhere\nAll at once',
    subtitle: '지금 이 순간, 함께 있는 사람에게 집중하기',
    colorClass: 'card-kindness',
    fullContent: {
      title: 'Everything Everywhere All At Once: Be Kind',
      subtitle: '',
      content: `
        <p>제가 좋아하는 영화 중 하나가 "에브리씽 에브리웨어 올 앳 원스"입니다. 이 영화가 좋았던 이유는, 세계가 아무리 복잡하고 말도 안 되는 우연으로 얽혀 있어도 결국 우리에게 가장 소중한 것은 "지금 이 순간" 그리고 "함께 있는 사람" 이라는 메시지 때문입니다.</p>
        <p class="text-2xl font-black my-8 italic text-blue-600">"Be kind."</p>
        <p>거창한 정의나 거대한 목표보다, 적어도 내 곁에 있는 사람들에게는 최선을 다해 친절해야 한다고 생각합니다. 부족하지만 그렇게 살려고 노력합니다. 저는 새로운 사람을 만나 대화하는 것을 좋아합니다. 모든 사람에게는 배울 점이 있다고 믿습니다. 그래서 독서/와인/포커 모임부터 크립토/창업/투자 스터디, 문화 행사 기획, 그리고 10년 넘게 이어진 친목 모임까지 수많은 커뮤니티를 운영해 왔습니다.</p>
        <p>저는 제 주변의 사람들이 웃을 때 가장 행복합니다. 제 가장 큰 자산은 제 곁의 사람들입니다. 저는 '그 모든 곳에서 그 모든 것이 될 수 있다고 해도 지금 이 순간을', 사람들과 함께, Be kind.</p>
      `,
    },
  },
  {
    id: 'fitness',
    emoji: '💪',
    title: '나를 무시하던 이들에게:\n끝까지 가면 다 이긴다고 했제?',
    subtitle: '인생은 복리야',
    colorClass: 'card-fitness',
    fullContent: {
      title: '나를 무시하던 이들에게: 끝까지 가면 다 이긴다고 했제?',
      subtitle: '인생은 복리야',
      content: `
        <p>저는 타인의 무시와 조롱을 많이 받아왔습니다. 학교에서는 발표만 하면 나댄다고 했고, 이상한 게임 블로그나 한다고 했고, 감성충 같은 글을 쓴다고 했습니다. "너 따위가 무슨 명문대냐", "네가 어떻게 바디프로필을 찍냐" 같은 말도 들었습니다. 그럴 때마다 저는 속으로 한 문장을 되뇌었습니다.</p>
        <p class="text-2xl font-black my-8 italic text-blue-600">"끝까지 가면 다 이깁니다."</p>
        <p>저는 어깨가 좁은 게 콤플렉스였지만 바디프로필을 찍었고, 지금은 그때보다 상의가 4사이즈 커졌습니다. 발표하고 나대던 습관 덕분에 무대에 오르는 것을 두려워하지 않게 됐고, 그 덕분에 수능에서도 덜 쫄고 제 실력을 냈습니다. 이 근성 덕분에 인생에서 가장 힘들었던 응원단도 버텼고, 성장이 안 보이던 채널 운영도 끝까지 끌고 갔습니다.</p>
        <p>저는 복리의 힘을 믿습니다. 중요한 건 되돌아가지 않는 것입니다. 1.00001이라도 조금씩 좋아지는 것입니다. 남들이 조롱해도, 그저 묵묵히 하다 보면 그 순간들이 쌓여 복리가 됩니다. 적당한 낙관주의로, 끝까지, 꾸준히, 묵묵히 살 것입니다.</p>
      `,
    },
  },
  {
    id: 'principles',
    emoji: '',
    title: '제 안의 문장들 →',
    subtitle: 'Principles',
    colorClass: 'card-principles',
    fullContent: {
      title: '제 안의 문장들 (Principles)',
      subtitle: '',
      content: `
        <ul class="space-y-4 text-xl">
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>성장과 행복은 셀프다.</span></li>
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>원래 실패와 거절이 디폴트다. 그럼에도 그냥 하는거다.</span></li>
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>할 거면 제대로. 순간에 뜨겁게, 충실하게.</span></li>
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>정답과 오답이 아니라 정답과 과정만 있다.</span></li>
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>끝까지 가면 다 이긴다. 근데 그러려면 끝까지 가야한다.</span></li>
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>Be kind, Be generous. 사람이 전부다.</span></li>
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>원칙은 큰일에나, 작은 일에는 연민이면 충분.</span></li>
          <li class="flex items-start"><span class="mr-3 text-blue-600">•</span><span>끝없이 "이게 최선일까?" 를 묻는다. 결정되면 Lead, Follow, or get out of the way.</span></li>
        </ul>
      `,
    },
  },
  {
    id: 'death-story',
    emoji: '🌌',
    title: '중2, 두 팔이 부러진 채\n죽음과 우주의 공포를 마주하다',
    subtitle: '세상이란 뭘까? 삶의 의미는 뭘까?',
    colorClass: 'card-philosophy',
    fullContent: {
      title: '중2, 두 팔이 부러진 채 죽음과 우주의 공포를 마주하다',
      subtitle: '',
      content: `
        <p>중2 때 보드를 타다가 두 팔이 다 부러졌습니다. 2주 동안 아무것도 못 하고, 천장만 보면서 누워 있었습니다. 별의 별 상상을 다하다 갑자기 이런 생각들이 떠올랐습니다.</p>
        <p class="text-xl font-bold my-6 text-slate-700 italic">죽음이란 무엇일까. 죽고 나면 우리는 어디로 갈까. 우주로 갈까. 우주는 대체 무엇일까. 끝이 있긴 할까.</p>
        <p>아득한 광활함이 한 번에 밀려왔고, 동시에 죽음의 공포도 같이 왔습니다. 그 이후로 꽤 오랫동안 이 질문을 끌고 다녔습니다.</p>
        <p class="text-2xl font-black my-8 text-blue-600">세상이란 뭘까? 죽음이란 뭘까? 삶의 의미는 뭘까?</p>
        <p>결론은 단순했습니다. 모릅니다. 아무도 알 수가 없습니다. 그런데 그 결론이 저를 허무주의로 끌고 가지는 않았습니다. 오히려 반대로 갔습니다. 아, 이건 내가 만들어 가기 나름이구나. 왜 사는지도, 어떻게 살지도, 결국 내가 만들어 가는 거구나.</p>
        <p>코스모스, 사피엔스, 「진리는 바뀔 수도 있습니다」 같은 책을 읽을수록 이 확신은 더 단단해졌습니다. 우주는 광활하고, 우리의 지식은 유한합니다. 우리가 살고 있는 세상은 숱한 우연과 약한 고리 위에 겨우 서 있는, 불완전한 시스템이라고 느꼈습니다.</p>
        <p>그래서 제가 할 일은 명확해졌습니다. 무지와 한계, 불완전함을 인정한 채로도 담대하게 나아가는 것입니다. 그리고 그 위에서 제 삶의 방향성과 지향점, 의미를 제가 직접 설정하는 것입니다.</p>
      `,
    },
  },
  {
    id: 'humanism-story',
    emoji: '💕',
    title: '낭만적 인본주의자로\n살기로 결심하다',
    subtitle: '"사람"에 집중하고, "사랑"이 있는 사회를 꿈꾸다',
    colorClass: 'card-kindness',
    fullContent: {
      title: '낭만적 인본주의자로 살기로 결심하다',
      subtitle: '',
      content: `
        <p>저는 무엇인가 새로운 것을 경험하고, 그 순간을 충만히 살아갈 때 고양감을 느낍니다. 그럴 때 심장이 미친듯이 뛰며, "살아있다"고 느낍니다. 저는 그런 순간을 위해 살아간다고 생각합니다. 죽기 전에 후회할 것은 물질적으로 더 가지지 못한 것 아니라 경험을 충분히 해보지 않은것, 온전히 심장이 뛰는 행복한 순간을 만끽하지 않은 것일 것입니다. 그래서 죽기 전에 더 많이 경험하고, 더 많이 뜨겁게 느끼고 싶습니다.</p>
        <p>하지만 우리는 죽을 때까지 한정된 1인칭으로만 세상을 삽니다. 그리고 저는 인식의 한계가 곧 세상의 한계, 경험의 한계라고 생각합니다. 그렇다면 결국 제 경험과 행복의 총량도 결국 제한되어 있습니다. 제가 아무리 열심히 살아도, 제 세계는 제 인식 속에 갇혀 있습니다. 그리고 그 인식의 한계를 깰 수 있는 유일한 방법은 "타인"과 교류하는 것입니다.</p>
        <p>세계에는 80억명의 사람이 있고, 각자는 서로의 고유한 세상을 살고 있습니다. 세계는 하나지만, 80억개의 서로 다른 세상이 존재합니다. 서로를 만나 대화하고, 배우고, 함께 일하고, 때로는 반목하고, 또 때로는 사랑하고 연대할 때 각자의 세상이 조금씩 깨지며 넓어진다고 믿습니다.</p>
        <p>그렇기 때문에 저는 사람들이 세상의 중심이라고 생각하는 인본주의입니다. 그리고 더 나아가 사람과 사람이 만날 때, 서로에게 집중하며, 사랑했으면 좋겠습니다. 서로의 세상을 깨고, 넓혀가며, 보듬어주는 것이 사랑이고 낭만이라고 생각합니다. 낭만은 거창한 이상이 아니라, 나 혼자 갇혀 있던 세계가 타인의 세계와 부딪히며 확장되는 순간이라고 믿습니다.</p>
        <p class="text-2xl font-black my-8 text-blue-600">"사람"에 집중하고, 사람 사이의 "사랑"이 있는 사회를 꿈꾸는 사람입니다.</p>
        <p>제가 말하는 인본주의는 "인간은 선하다"는 예찬이 아닙니다. 오히려 인간이 부족하고 나약하고 자주 흔들린다는 사실을 전제로 합니다. 그럼에도 불구하고 각자의 가능성이 조금이라도 더 발현될 수 있는 사회를 꿈꿉니다. 사람을 숫자나 역할이 아니라 '한 사람'으로 대하고, 서로의 세계를 존중하는 사회입니다. 더 나아가 저는 사람과 사람이 사랑하고 연대할 수 있는 사회를 꿈꿉니다. 각자의 세상이 존중받고, 서로의 세상이 사랑으로 합쳐져 더 충만해지기를 바랍니다.</p>
      `,
    },
  },
  {
    id: 'tmi',
    emoji: '',
    title: 'Personal TMI',
    subtitle: '취향과 근래의 관심사. 나를 구성하는 조각들.',
    colorClass: 'card-tmi',
    fullContent: {
      title: 'Personal TMI: 취향과 근래의 관심사',
      subtitle: '',
      content: `
        <div class="space-y-8">
          <div>
            <h5 class="font-black text-blue-600 mb-4 text-xl">음악 & 스포츠</h5>
            <p><strong>음악:</strong> 페퍼톤스를 미친 듯이 좋아합니다. 콘서트나 락페 가는 게 삶의 낙입니다. 일상이 지루해질 때, 비일상과 사람 냄새를 동시에 느낄 수 있는 몇 안 되는 "심장 뛰는 경험"이라고 생각합니다. 한로로, 극동아시아타이거즈, 80~90년대 노래 등 인디/밴드 사운드를 좋아합니다.</p>
            <p><strong>취미:</strong> 날씨 좋은 날 좋아하는 음악 들으면서 걷기, 러닝하면서 좋아하는 음악 듣기, 콘서트 가기. 이 세 가지를 할 때 미친 듯이 행복합니다.</p>
            <p><strong>스포츠:</strong> 아스날은 올해 반드시 우승해야 합니다. 약 15년째 팬입니다. 축구도 좋아합니다. 불러주면 나갑니다.</p>
          </div>
          <div>
            <h5 class="font-black text-blue-600 mb-4 text-xl">영화 & 책 & 만화</h5>
            <p><strong>영화:</strong> EEAAO, 그랜드 부다페스트 호텔, 크리스토퍼 놀란 작품들, 월터의 상상은 현실이 된다.</p>
            <p><strong>책:</strong> 사피엔스, 진리는 바뀔 수도 있습니다, 코스모스, 그리스인 조르바, 다자이 오사무, 김승옥.</p>
            <p><strong>만화:</strong> 강철의 연금술사(GOAT), 웹툰 캐슬.</p>
          </div>
          <div>
            <h5 class="font-black text-blue-600 mb-4 text-xl">관심사</h5>
            <p><strong>Vibe Coding:</strong> 상상만 하던 것들을 바로 만들어버리는 감각이 너무 재미있습니다. 스터디를 만들고 싶습니다.</p>
            <p><strong>기타:</strong> 무한도전 광팬, 뇌과학/언어학, 밈과 트렌드 관찰, 동물 사랑, 돈카츠 미식(압구정 카츠바이콘반 1위).</p>
          </div>
        </div>
      `,
    },
  },
];

// External Links
export const externalLinks: ExternalLink[] = [
  { name: '네이버 블로그', url: 'https://blog.naver.com/romantichumanist' },
  { name: '브런치', url: 'https://brunch.co.kr/@skyat23' },
  { name: '미디움', url: 'https://medium.com/@Romantic_Humanist' },
  { name: 'Substack', url: 'https://substack.com/@rohumanist' },
  { name: 'X (Twitter)', url: 'https://x.com/RoHumanist' },
  { name: 'Thread', url: 'https://www.threads.com/@romantic_humanist' },
];

// Featured Articles (대표 글들)
// 대표 글을 추가하려면 아래 배열에 객체를 추가하세요!
export const featuredArticles: FeaturedArticle[] = [
  // 예시:
  // {
  //   title: '글 제목',
  //   description: '글에 대한 간단한 설명',
  //   url: 'https://blog.naver.com/romantichumanist/...',
  //   platform: 'naver',  // 'naver', 'brunch', 'medium', 'substack' 중 선택
  //   thumbnail: '/images/article-1.jpg',
  // },
];

// Contact Info
export const contactEmail = 'skyat23@naver.com';

// Transition Text
export const transitionText = {
  question: '그렇다면 어떻게 하면',
  highlight: '낭만적 인본주의적',
  continuation: '으로\n살 수 있을까요?',
  answer: '저도 모릅니다.',
  action: '그래서 해봅니다.',
};

// Plaza Header
export const plazaHeader = {
  main: 'Just do it',
  highlight: 'connect the dots',
};

// Outro Section
export const outroData = {
  title: '저에 대해서 더 궁금하시다면\n제가 쓰는 글들을 봐주시거나,\n커피챗을 요청해주세요.',
  highlightWord: '커피챗',
};
