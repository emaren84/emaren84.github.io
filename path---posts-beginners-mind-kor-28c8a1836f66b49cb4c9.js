webpackJsonp([0x5cb080d81e57],{385:function(e,n){e.exports={data:{markdownRemark:{html:'<ul>\n<li><strong>이 포스트는 <a href="https://twitter.com/IanCAnderson">Ian C. Anderson</a>의 <a href="https://robots.thoughtbot.com/beginners-mind">글</a>을 번역한 것입니다</strong></li>\n<li><strong>번역에 관한 감상 및 피드백은 작성자에게 큰 도움이 됩니다</strong></li>\n</ul>\n<hr>\n<p>저는 루비 프로그래머입니다. 저는 이 언어를 즐겨 쓰며, 직업적으로 소프트웨어를 만들면서 루비가 저의 호기심과 흥미를 충족시켜준다고 믿고 있습니다. 저는 매일 끊임없이 루비와 레일즈에 대해 배우고 있지만 이 언어와 플랫폼에 대해서는 잘 이해하고 있습니다.</p>\n<p>그러다가 최근에 하스켈을 배우기 시작했습니다. <a href="https://thoughtbot.com/">Thoughtbot</a>의 하스켈 프로젝트에 기여하고 싶었고, 제 시야를 확장해보고 싶었기 때문입니다.</p>\n<p>하스켈은 근본적으로 루비와 다릅니다. 순수한 함수형 언어이며 엄격한 정적 타입을 요구합니다. 루비가 동적 타입을 가지고 있고 함수형과는 거리가 먼 객체지향 언어라는 것과는 다릅니다. 제가 함수형 언어를 다루는 수준은 아주 미약합니다. 그래서 함수형 언어의 여러 개념과 하스켈이란 언어 자체가 저에게는 생소합니다.</p>\n<p>현 시점에서 하스켈 세계는 신비롭고 경이롭게 느껴집니다. 그래서 그런지 배우고자 하는 사람들에게는 동기부여와 흥분되는 기분을 가져다 줄 겁니다.</p>\n<h2 id="무한한-가능성"><a href="#%EB%AC%B4%ED%95%9C%ED%95%9C-%EA%B0%80%EB%8A%A5%EC%84%B1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>무한한 가능성</h2>\n<blockquote>\n<p>초심자의 마음속에는 많은 가능성이 자리잡고 있다, 그러나 전문가들은 그 가능성이 적다.(In the beginner’s mind there are many possibilities, but in the expert’s there are few.)</p>\n<p>— <em>Shunryu Suzuki, <a href="https://www.amazon.com/Zen-Mind-Beginners-Shunryu-Suzuki/dp/1590308492">Zen Mind, Beginner\'s Mind.</a></em></p>\n</blockquote>\n<p>이 인용문은 당신이 공부하고 있는 주제에 익숙해질 수록 점점 좁은 시야를 가지게 되는 것을 경계하고 있습니다. 저의 경우엔 문제 해결을 위한 만능 도구로서 루비를 갈고 닦으면서도, 언제나 제 기술적 선택에 만족하지 않도록 신경씁니다. 언제든지 더 나은 방법이 있다고 <em>믿으며</em> 그 방법을 찾아야 합니다.</p>\n<h2 id="전문가의-모순"><a href="#%EC%A0%84%EB%AC%B8%EA%B0%80%EC%9D%98-%EB%AA%A8%EC%88%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>전문가의 모순</h2>\n<blockquote>\n<p>모순되게도 마치 좁은 시야와 선입견을 가지게 되는 것처럼, 아주 탄탄하게 쌓아올린 전문 지식은 퍼포먼스의 저하를 초래할 수 있다.(Paradoxically, the very underpinning of expertise can entail degradation in performance as well, such as tunnel vision and biases.)</p>\n<p>— <em>Itiel E. Dror, <a href="https://core.ac.uk/download/pdf/1717017.pdf">The paradox of human expertise: Why experts get it wrong</a></em></p>\n</blockquote>\n<p>지식이 늘어날 수록 무엇이 어떻게 동작하는 지에 대해 추측하는 일도 늘어납니다. 이런 선입견들은 전문가로서 효율적으로 정보를 처리하고 문제를 푸는데 능숙하게 만들어 줄 수도 있습니다. 그러나 "기본적인(defaults)" 해답은 전문가들에게 주어진 문제를 해결하기 위한 더 적절한 답을 고민하지 못하게 만들 수 있습니다. 전문가들의 뇌는 특정 분야에 특화되어 있습니다. 말하자면 좁고 엄격한 마음가짐을 가지게 된다는 겁니다.</p>\n<h2 id="정신적-기민함의-가치"><a href="#%EC%A0%95%EC%8B%A0%EC%A0%81-%EA%B8%B0%EB%AF%BC%ED%95%A8%EC%9D%98-%EA%B0%80%EC%B9%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>정신적 기민함의 가치</h2>\n<blockquote>\n<p>지능의 척도는 변화할 수 있는 능력이다.(The measure of intelligence is the ability to change.)</p>\n<p>— <em>Albert Einstein</em></p>\n</blockquote>\n<p>저는 thoughbot의 <a href="https://thoughtbot.com/playbook#research">Research Trello board</a>가 생각났습니다. 우리는 이 장소를 우리가 진행하는 일이나 기술 스택의 변화를 실험하는 장소로 사용합니다. 우리는 어떤 툴을 사용하고 어떻게 사용하는지에 대해 고집스럽게 굴지만<em>(역주: 예를 들면 Thoughtbot의 개발자들은 대부분 Vim을 사용한다고 합니다)</em>, 언젠가 더 좋은 도구가 있다면 기꺼이 갈아탈 용의가 있습니다.  과학적 방법을 통해 지속적으로 우리 자신의 가설에 도전하는 것은, 우리가 주어진 문제를 해결하기 위해 현재와 미래에 걸쳐 최선의 도구와 기술을 사용하고 있다는 확신을 들게 합니다. 기술 분야에서 변화는 피할수 없습니다. 그러므로 이런 정신적 기민함은 굉장히 가치있는 자산입니다.</p>\n<h2 id="당신의-지혜-주머니를-키워라"><a href="#%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%A7%80%ED%98%9C-%EC%A3%BC%EB%A8%B8%EB%8B%88%EB%A5%BC-%ED%82%A4%EC%9B%8C%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>당신의 지혜 주머니를 키워라</h2>\n<blockquote>\n<p>… 몇몇 경우에 지혜롭게 모나드의 힘을 적용하면 우리는 중첩된 콜백을 풀어낼 수 있고, 코드의 일부분을 재사용가능하게 만들며, 전반적으로 우리의 프로그램을 더 좋게 만듭니다.</p>\n<p>— Tom Stuart, <a href="http://codon.com/refactoring-ruby-with-monads">Refactoring Ruby with Monads</a></p>\n</blockquote>\n<p><a href="https://en.wikipedia.org/wiki/Monad_(functional_programming)">모나드</a>는 함수형 프로그래밍의 추상 개념인데 하스켈에서 필수적입니다. <a href="http://codon.com/refactoring-ruby-with-monads">Tom의 발표</a>에서 모나드를 이용하여 이상한 루비 코드 덩어리들을 멋진 해법으로 바꾸는 세 가지 실전적인 예시를 볼 수 있습니다. Tom의 코드가 그가 경험한 함수형 프로그래밍의 도움을 받았다는 것은 자명합니다. 그는 평상시의 문제를 해결하기 위해 다른 개념을 빌려올 수 있다는 것을 보여주었습니다. 이상적인 루비 코딩 스타일을 유지하면서요.</p>\n<p>제가 하스켈 전문가가 될 수 있을까요? 아니면 제가 하스켈 프로젝트를 풀 타임으로 다루게 될까요? <a href="https://robots.thoughtbot.com/if-you-gaze-into-nil-nil-gazes-also-into-you">아마도요</a>. 만약 아니라고 해도 하스켈을 배운 경험이 무의미하다고 생각하진 않을 겁니다. 저는 제 지혜 주머니를 키우고 있고(I am adding to my bag of tricks), 그래서 다각도로 문제를 해결해볼 수 있습니다. 제가 어떤 레일즈 앱의 기능을 구현할 때 함수형 프로그래밍의 접근 방식이 저의 평소 객체지향적 코드보다 더 나을지 생각해 볼 것입니다.</p>\n<p>전문가가 되기 위해 분투하는 것은 가치있는 일입니다. 그 비결은 끊임없이 특정 경우에 더 나을 수도 있는 대안을 찾아가면서, 더욱 많은 지식과 경험을 흡수하는 것입니다.</p>\n<hr>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>저도 루비 프로그래머입니다(쑥스럽지만 원본 글 첫머리를 빌려서 한마디 적어봅니다). 매일 새로운 것을 1이라도 알면 그 뒤에 알아야 할 것들이 10이 넘는 하루하루를 보내고 있습니다. 하지만 나름 재미있지요. 당장 저의 주력 언어라고 말 할 수 있는 루비는 아직 잘 다룬다고 생각하지 않아서 더 깊게, 깊게 파고들어야 한다고 생각하고 있었습니다.</p>\n<p>물론 이 글에서 말하고자 하는 주제는 이미 알고 있었습니다만 언제나 \'아직은 다른 언어나 개념을 접하기엔 좀 부족해..\' 라는 생각을 하면서 고개를 돌리지 않고 있습니다. 올해 안에는 적어도 Elixir나 Scala에 도전해보고 싶긴 합니다. 물론 루비 이외에 다른 도전은 언제나 하고 있지요. 바로 자바스크립트입니다.</p>\n<p>저에게는 너무나 변화가 빠른 언어이고, 겉으로 보기에는 별거 없어 보이지만 다루고자 하면 굉장히 복잡하고(+골때리고) 코드를 잘 짜기 위한 고민을 계속 해도 잘 되지 않는 언어입니다. 지금은 이 두 언어를 번갈아 익히는 것 만으로도 벅차네요.</p>\n<p>제가 본격적으로 제 자신을 \'개발자\' 라고 지칭할만한 일을 하게 된지 이제 1년이 되었습니다. 이 시점에서 이번 글은 다시 한번 끊임없는 향상심에 대해 환기시켜주는 글이었습니다. 다음 해에는 어떤 글을 남길 수 있을지 제 자신에게 조금 더 기대를 걸어봅니다.</p>',frontmatter:{date:"2017/02/20",path:"/posts/beginners-mind-kor",title:"[번역] 초심자의 마음가짐",tags:["Learning","Translation"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-beginners-mind-kor-28c8a1836f66b49cb4c9.js.map