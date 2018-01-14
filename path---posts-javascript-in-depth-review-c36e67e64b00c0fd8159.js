webpackJsonp([0xd6993f882db8],{403:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://cl.ly/2c1k0h132v3U/%E1%84%89%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B5%E1%87%81%E1%84%8B%E1%85%B3%E1%86%AB_%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3_cover.jpg" alt="속깊은 자바스크립트 표지"></p>\n<p>감상평을 적기에 앞서 몇 가지 가벼운 질문이 있다. 혹시 아래의 문제를 보았을 때 모르는 내용이 2가지 이상 있거나, 알더라도 바로 명확한 답변이 떠오르지 않는지 생각해보라. (ES5 기준)</p>\n<ul>\n<li>아래의 코드는 무엇이 잘못되었는가? 문제가 있다면 어떻게 해결할 수 있는가?</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> len <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tdocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"div"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"You clicked div #"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>자바스크립트의  <code>this</code> 가 어떤 상황에 따라 다르게 묶이는지 이해하고 있는가?</li>\n<li>자바스크립트의 변수 범위(스코프)는 어떻게 정해지는가?</li>\n<li>자바스크립트의 이벤트 루프는 무엇이며 어떤 방식으로 동작하는가?</li>\n<li>DOM을 다루는 자바스크립트 코드를 작성시 성능을 최적화하기 위한 고려 방안을 3가지 이상 알고 있는가?</li>\n<li>사용자가 브라우저로 웹 사이트 접속 시 초기 로딩의 불편함을 최소화하기 위한 자바스크립트 코드를 구상할 수 있는가?</li>\n</ul>\n<p>답을 떠올리기 힘들었다면 자신이 자바스크립트의 제대로 알고 사용하고 있는지 다시 한번 깊이 고민해 볼 필요가 있다. 다행히도 이 책의 많은 부분은 그 \'기본\' 을 충실하게 짚어주는 편이다.</p>\n<p>그래도 코뿔소 책(자바스크립트 완벽 가이드 - 데이비드 플래너건 저)처럼 방대한 내용으로 독자를 허우적거리게 만들거나, 나비 책(자바스크립트 핵심 가이드 - 더글라스 크락포드 저)처럼 겉으로 보기에 너무나 축약된 내용이라 여러번 곱씹어야 내용을 알 법한 어려운 수준의 책도 아니다.\n그렇기에 나는 방금 소개한 두 책보다 자바스크립트 기본을 익힌 다음에 이 책을 먼저 탐독하길 권하고 싶다.</p>\n<p>2017년을 보내고 2018년을 맞이하는 현재 시점에서 이 책을 읽는 독자들이 가져야 할 마음가짐은 <strong>온고지신</strong> 이다.\n아마 이 책에 적힌 유용한 예제 코드를 직접 개발을 하며 사용할 일은 거의 없으리라 생각한다.\n하지만 Babel, Typescript같은 트랜스파일러를 통해(Typescript는 약간 성격이 다르지만 결과물이 일반 자바스크립트임을 감안하여 이 글에서는 트랜스파일러라 명명한다) 변환된 코드들은 이 책의 예제 코드와 유사한 형태를 가지고 있다.\n그리고 <strong>왜</strong> 이런 형태를 가지고 있는지, 문제에 부딪힐 때 어떤 방식으로 개량할 수 있는지 생각할 수 있는 지식을 얻을 수 있다.</p>\n<p>대충 프레임워크 가져다 쓰고, 대충 ES6+ 로 코드 작성하고, 대충 Webpack + Babel 등의 문서를 참고하여 코드 변환되도록 빌드하고 배포하면 (프론트엔드) 웹 애플리케이션이 뚝딱 나온다고 생각하기 쉬운 현재 프론트엔드 생태계 속에서\n자신이 작성하는 자바스크립트 코드의 무게를 다시 생각하는 계기가 될 것이다. <a href="https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e">우리는 언제나 이 무게를 신경써야 한다.</a></p>\n<p>조금 특이하지만 나는 책의 첫 번째 챕터인 <strong>웹과 자바스크립트</strong>에서 그 옛날 자바스크립트가 어떻게 여기까지 오게 되었는지 간단히 짚어보고,\n후반부 챕터인 <strong>자바스크립트 성능과 사용자 경험 개선</strong>에서 캐싱, 미니피케이션, gzip 등의 HTTP 요청 관련 최적화로 성능을 개선하는 부분까지 웹 개발의 큰 그림을 짚어보는 구성이 마음에 들었다.\n초보 프론트엔드 개발자들이 소홀히하기 쉽고, 아무도 바로 알려주지 않는 ‘최적화’ 에 대해 고민할 수 있는 요소를 알려주기 때문에 기초 수준이나 기초를 벗어나는 수준 즈음에 이 책을 읽어보는 것을 권한다.</p>\n<p>나머지 주요 내용(클로저, 프로토타입과 프로토타입 상속, 자바스크립트만의 독특한 패턴 - 특히 이벤트 델리게이션 등)은 사실 요즘에는 키워드만 알고 검색하면 얼마든지 잘 설명된 자료를 찾아볼 수 있을 것이다.\n다만 내가 보았을 때 그 자료들은 다 영어로 쓰여있었다. 영문으로 된 글을 읽는데 익숙지 않다면 이 책의 내용이 더 유용하리라 기대한다.</p>',frontmatter:{date:"2017/12/21",path:"/posts/javascript-in-depth-review",title:"'속깊은 Javascript' 감상평 및 추천사",tags:["Reading","Javascript"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-javascript-in-depth-review-c36e67e64b00c0fd8159.js.map