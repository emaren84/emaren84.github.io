webpackJsonp([28040607566721],{415:function(a,n){a.exports={data:{markdownRemark:{html:'<ul>\n<li><strong>이 포스트는 <a href="http://frantic.im/">Alex Kotliarskyi</a>의 <a href="http://frantic.im/meta-language">글</a>을 번역한 것입니다.</strong></li>\n<li><strong>오역 지적 및 피드백은 언제나 환영합니다.</strong></li>\n</ul>\n<hr>\n<p>저는 드디어 <a href="https://twitter.com/_chenglou">Cheng Lou</a>가 ReactConf\'17에서 발표한 내용을 이해했습니다. 20분정도 시간을 내실 수 있다면 이 영상을 먼저 봐 주세요.</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/_0T5OSSzxms" frameborder="0" allowfullscreen></iframe>\n<p><strong>요약:</strong> 언어가 있으면 <a href="https://ko.wikipedia.org/wiki/%EB%A9%94%ED%83%80_%EC%96%B8%EC%96%B4">메타언어</a>(고차 언어)도 있다. 여기서 언어는 실제 소스 코드이고, 메타 언어는 그 위에 있는 모든 것(테스트, 주석, IDE 기능, 문서, 예제, 튜토리얼, 블로그 글, 책, 비디오, 컨퍼런스 등의 기술 발표 등)을 뜻한다. 우리는 언어를 배우기 위해 메타언어를 사용한다. 우리가 메타언어의 개념을 언어 자체로 끌어내리면, 우리가 다루는 개념은 더욱 유연해지고 점차 새로운 메타언어를 만들어나갈 수 있게 된다. 새로운 메타언어는 같은 에너지를 쏟아도 기존 메타언어에 비해 더 고차원적이고 풍부한 형태를 가질 수 있게 된다.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 790px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5UlEQVQoz6WSX0vDQBDE+/0/muiDL4JY0bZJY7lL06T3f29v3ORBlBDa4MI83LH8mB1mgxuTc0Z2DkmpH3GMi/ubW0AiQrx4dC9n2H2HbAyK/P0LqE4BH1uDvk+wYQ6LIa8DfhmHp6PC80njVV/uAxo5pWkacdGjqqpJ3nuEENCnAe/XPT5NBUsOpfAfYFrr0PojVPsAdX5EZ7a4ypuZfgF5HZBsC6/eQK5F4XmGFFcAU0rIEkM+HJB3O7DW8x1Dy8DRkZPejflNHRQx86SlKaUsA0eQFhdKChylwKOGYUBd17hnvgGAkBLKECI+lQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="The Flow"\n        title=""\n        src="/static/2017-04-04-1b52eac1f90484ea982f2dbab689b235-ffc88.png"\n        srcset="/static/2017-04-04-1b52eac1f90484ea982f2dbab689b235-d16f8.png 198w,\n/static/2017-04-04-1b52eac1f90484ea982f2dbab689b235-f21b1.png 395w,\n/static/2017-04-04-1b52eac1f90484ea982f2dbab689b235-ffc88.png 790w,\n/static/2017-04-04-1b52eac1f90484ea982f2dbab689b235-81e7e.png 1185w,\n/static/2017-04-04-1b52eac1f90484ea982f2dbab689b235-c6d11.png 1200w"\n        sizes="(max-width: 790px) 100vw, 790px"\n      />\n    </span>\n  </span>\n  </p>\n<p>이 그림의 이해를 돕기 위해 다양한 예제를 준비해왔습니다.</p>\n<h2 id="어셈블리-명령어-→-변수명"><a href="#%EC%96%B4%EC%85%88%EB%B8%94%EB%A6%AC-%EB%AA%85%EB%A0%B9%EC%96%B4-%E2%86%92-%EB%B3%80%EC%88%98%EB%AA%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>어셈블리 명령어 → 변수명</h2>\n<p>우주 산업 분야에서 행성으로부터의 <a href="https://ko.wikipedia.org/wiki/%ED%83%88%EC%B6%9C_%EC%86%8D%EB%8F%84">탈출 속도(escape velocity)</a>를 구하기 위해 사용되는 코드 일부를 살펴보겠습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-assembly"><code>.SUB_0_21:\n    ; Computes escape velocity\n    ; register xmm0 - planet mass\n    ; retister xmm1 - planet radius\n    mulsd   xmm0, qword ptr [rip + .LCPI0_0]\n    divsd   xmm0, xmm1\n    xorps   xmm1, xmm1\n    sqrtsd  xmm1, xmm0\n    ucomisd xmm1, xmm1\n    jp      .LBB0_2\n    movapd  xmm0, xmm1\n    ret\n.LBB0_2:\n    jmp     sqrt                    ; TAILCALL\n.LCPI0_0:\n    .quad   4459223850755291651     ; double 1.334816E-10</code></pre>\n      </div>\n<p>코드의 상당수가 메타언어에 기대고 있습니다. 이 코드에 대한 주석이나 문서(여기엔 보이지 않지만) 말입니다. 위 코드와 비교해서 C로 작성된 예를 살펴보겠습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">define</span> GRAVITY_CONSTANT 6.67408e-11</span>\n<span class="token keyword">double</span> <span class="token function">escape_velocity</span><span class="token punctuation">(</span><span class="token keyword">double</span> mass<span class="token punctuation">,</span> <span class="token keyword">double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> GRAVITY_CONSTANT <span class="token operator">*</span> mass <span class="token operator">/</span> radius<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>그저 변수에 이름을 지정해주었을 뿐인데 메타언어에 기대고 있던 정보를 언어 자체로 끌어내릴 수 있게 됐습니다.</p>\n<h2 id="변수명-→-심화-타입advanced-types"><a href="#%EB%B3%80%EC%88%98%EB%AA%85-%E2%86%92-%EC%8B%AC%ED%99%94-%ED%83%80%EC%9E%85advanced-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>변수명 → 심화 타입(Advanced Types)</h2>\n<p>C 버전의 코드는 어셈블리로 작성된 코드보다 훨씬 많은 정보를 가지고 있고, 메타언어도 더 높은 수준으로 이루어져 있습니다. 이제 우리는 반복 작성을 하거나 코드 안의 내용이 무엇인지 문서화할 필요가 없어졌습니다. 이 함수가 2개의 인자를 받아야 하며 첫 번째 인자는 질량, 두 번째 인자는 반경이라는 내용 말입니다.</p>\n<p>하지만 아직 문맥상 코드에 부족한 부분이 있습니다. 이 함수가 어느 단위 위에서 동작하는지 알 수가 없다는 겁니다. 당장은 라이브러리의 문서(메타언어)에 기댈 수 밖에 없습니다.</p>\n<p>우리는 인자 이름을 <code>mass_kilograms</code>, <code>radius_meters</code> 같은 이름으로 바꾸는 간단한 트릭을 써 볼수 있지만, 언어 자체에서 \'이 함수는 반드시 킬로그램과 미터를 입력해야한다\'고 보장해주는 장치가 없습니다.</p>\n<p>이제 더 복잡한 타입을 지원하는 언어의 예를 살펴보겠습니다. 저는 OCaml을 사용하겠지만 대부분의 ML-계열 언어들(하스켈, 스위프트 등)은 이런 기능을 지원합니다. (<a href="https://docs.microsoft.com/en-us/dotnet/articles/fsharp/language-reference/units-of-measure">그리고 F#은 아예 단위에 대해 가장 높은 우선 순위로 지원을 하고 있습니다.</a>)</p>\n<div class="gatsby-highlight">\n      <pre class="language-ocaml"><code><span class="token keyword">let</span> gravity<span class="token punctuation">_</span>constant <span class="token operator">=</span> <span class="token number">6.67408e-11</span>\n\n<span class="token keyword">type</span> mass <span class="token operator">=</span> Kilograms <span class="token keyword">of</span> float\n<span class="token keyword">type</span> length <span class="token operator">=</span> Meters <span class="token keyword">of</span> float\n<span class="token keyword">type</span> velocity <span class="token operator">=</span> MetersPerSecond <span class="token keyword">of</span> float\n\n<span class="token keyword">let</span> escape<span class="token punctuation">_</span>velocity <span class="token punctuation">(</span>Kilograms mass<span class="token punctuation">)</span> <span class="token punctuation">(</span>Meters radius<span class="token punctuation">)</span> <span class="token operator">=</span>\n    MetersPerSecond <span class="token punctuation">(</span><span class="token number">2.0</span> <span class="token operator">*.</span> gravity<span class="token punctuation">_</span>constant <span class="token operator">*.</span> mass <span class="token operator">/.</span> radius <span class="token operator">|></span> sqrt<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><em>실은 지구로부터의 탈출 속도를 계산할 때 제 구현체에서 버그를 발견했습니다. 질량을 엉뚱한 단위로 입력하고 있었어요.</em></p>\n<p>위의 코드에서 <code>length</code> 와 <code>mass</code> 는 단순한 숫자가 아니라 1급 객체(first class citizen)입니다. 덕분에 더욱 안전하고 유지보수가 용이하며 코드를 발전시키기 쉬워졌지요. 예를 들어 우리가 야드파운드법을 지원하고자 한다면(왜 그래야하는지는 모르겠지만), <code>mass</code> 타입을 이렇게 바꾸면 됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ocaml"><code><span class="token keyword">type</span> mass <span class="token operator">=</span>\n  <span class="token operator">|</span> Kilograms <span class="token keyword">of</span> float\n  <span class="token operator">|</span> Pounds <span class="token keyword">of</span> float\n</code></pre>\n      </div>\n<p>이러면 타입 체커가 기존 코드에서 새 단위를 적용하기 위해 수정해야 할 부분을 낱낱이 지적해줄 겁니다.</p>\n<h2 id="사용되지-않을-경우deprecation와-다른-메타정보들"><a href="#%EC%82%AC%EC%9A%A9%EB%90%98%EC%A7%80-%EC%95%8A%EC%9D%84-%EA%B2%BD%EC%9A%B0deprecation%EC%99%80-%EB%8B%A4%EB%A5%B8-%EB%A9%94%ED%83%80%EC%A0%95%EB%B3%B4%EB%93%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>사용되지 않을 경우(Deprecation)와 다른 메타정보들</h2>\n<p>우리가 기존의 탈출 속도보다 훨씬 정확한 값을 구할 수 있는 새로운 공식을 발견했다고 칩시다. 그렇다면 기존의 함수가 더 이상 사용되지 않는다고 표시하려면 어떻게 해야할까요?</p>\n<p>이럴 때 보통 주석이나 문서를 추가하거나 Medium에 글을 쓰는 등 메타언어를 구축할 것입니다. 하지만 메타언어로 구성된 정보들을 코드 자체로 끌어내리는게 훨씬 더 생산적인 방법입니다.</p>\n<p>전에 썼던 트릭처럼 C 함수의 이름을 바꾸어 <code>escape_velocity</code> 를 <code>escape_velocity_DEPRECATED</code> 나 <a href="https://github.com/facebook/react/blob/80bff5397bf854750dbe7c286f61654ea58938c5/src/umd/ReactUMDEntry.js#L21">이렇게 괴상한 이름으로 바꿀 수도 있습니다</a>. 하지만 이는 우리의 API가 변경되면서 클라이언트의 코드가 동작하지 않게 되고, 표준적인 방법도 아닙니다(누구나 자신만의 접미사를 붙일 수 있으니까요). 그리고 새로이 사용해야 할 메서드를 제대로 추천하지 않고 있습니다.</p>\n<p>만약 언어 자체가 이 메타정보를 알아서 알려주는 기능을 지원한다면 어떨까요?</p>\n<div class="gatsby-highlight">\n      <pre class="language-ocaml"><code><span class="token keyword">let</span> escape<span class="token punctuation">_</span>velocity <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">[</span><span class="token operator">@</span>ocaml<span class="token punctuation">.</span>deprecated <span class="token string">"Please use `quantum_escape` instead"</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2 id="추가-예시"><a href="#%EC%B6%94%EA%B0%80-%EC%98%88%EC%8B%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>추가 예시</h2>\n<p>지금까지 메타적 공간에 있던 많은 정보를 언어 자체에 심어주는 하나의 방법을 보여드렸습니다. 다른 예들을 보여드리겠습니다.</p>\n<p><strong><a href="https://ko.wikipedia.org/wiki/%EB%B9%84%EC%A7%80%ED%84%B0_%ED%8C%A8%ED%84%B4">방문자 패턴(Visitor Pattern)</a>과 <code>for</code> 루프 → map/filter/reduce:</strong> 제가 대학에 다닐 땐 방문자 패턴을 배웠지만, 이젠 이 패턴이 많은 언어에서 기본 라이브러리로 손쉽게 제공되고 있습니다.</p>\n<p><strong>상태(state) 불러오기:</strong> 저는 종종 사람들이 리액트 컴포넌트를 만들면서 상태를 이렇게 설정해두는 것을 보게 됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  error<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  loading<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이 경우 <code>loading</code> 이 <code>false</code> 라면 <code>data</code> 나 <code>error</code> 중에 하나가 <code>null</code> 이 되어서는 안된다는 안내를 하려면 메타언어를 사용할 수 밖에 없습니다. 그 대신 우리는 Flow나 타입스크립트(Typescript)를 사용하여 언어 단위에서 제약을 걸 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-typescript"><code><span class="token keyword">type</span> State <span class="token operator">=</span>\n  <span class="token punctuation">{</span> progress<span class="token punctuation">:</span> <span class="token string">\'loading\'</span> <span class="token punctuation">}</span> <span class="token operator">|</span>\n  <span class="token punctuation">{</span> progress<span class="token punctuation">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> Object <span class="token punctuation">}</span> <span class="token operator">|</span>\n  <span class="token punctuation">{</span> progress<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> error<span class="token punctuation">:</span> Error <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>리덕스(Redux)와 불변성(Immutability):</strong> 현재는 문서, 블로그 포스트, 비디오, 컨퍼런스 발표 등에서 리덕스를 사용할 때 변수나 객체에 직접적으로 변화를 주지 않을 것을(lack of direct mutation) 전제하고 있습니다. 만약 자바스크립트가 기본적으로 불변 데이터 타입과 타입 선언(type annotations)을 제공한다면 위에서 말하는 전제를 코드에서 바로 표현할 수 있지 않을까요?</p>\n<p><strong>프로미스(Promises)와 옵저버블(Observables):</strong> 자바스크립트에서 프로미스 패턴은 라이브러리에서 제공하는 기능이었지만 이제 코어 기능으로 자리잡았습니다. <a href="https://github.com/tc39/proposal-observable">옵저버블</a>에도 같은 과정이 진행중입니다.</p>\n<h2 id="결론"><a href="#%EA%B2%B0%EB%A1%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>결론</h2>\n<p>아무리 메타언어를 언어로 끌어내린다 하더라도 사람 사이에 의사소통하는 부분을 해결할 수는 없다는 것을 새겨두시는게 좋습니다. 하지만 언어의 진화와 함께 우리는 더 효과적인 의사소통의 기회를 열어가고 있습니다.</p>\n<p>반드시 어딘가엔 복잡한 부분이 존재합니다. 만약 언어가 아주 단순하다면, 복잡한 부분은 메타언어에 머무르게 됩니다.</p>\n<p>참고로  <a href="https://www.youtube.com/watch?v=4anAwXYqLG8">Sebastian Markbåge의 최소한의 API 표현 범위(minimal API surface area)에 관한 발표와</a>, <a href="https://www.youtube.com/watch?v=V1po0BT7kac">Jared Forsyth의 타입 시스템에 대한 발표</a>를 살펴보세요. 아 그리고 영화 <a href="http://movie.daum.net/moviedb/main?movieId=105570">컨택트(Arrival, 2016)</a>도 꼭 보세요. 강추합니다!</p>\n<hr>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>처음 이 글을 접하게 된 계기는 이 코드 때문이었습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// explicit</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">!==</span> undefined<span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">.</span>x<span class="token punctuation">;</span>\n\n<span class="token comment">// implicit</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">.</span>x<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>보고 계시는 자바스크립트 코드에서 위쪽에 제시된 코드가 평균적으로 최대 15%까지 처리 속도가 빠르다고 합니다. <a href="https://twitter.com/dhh/status/846627223176167424">DHH는 트위터에서</a> \'어차피 15%라고 해봤자 실제로는 몇 밀리초 이하일텐데 왜 기계에게 맞추려고 하느냐\' 같은 내용의 비판을 쏟아내었지요. 코드를 어떻게 작성하실건지는 여러분의 취향에 맡기겠습니다.</p>\n<p>하지만 오늘 제가 드리고픈 말씀은 아래 트윗에 다 있기 때문에 후기를 짧게 줄이고자 합니다.</p>\n<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/dhh">@dhh</a> Code is not a conversation between a dev and a machine.&#13;&#13;Code is a conversation between a developer AND THE NEXT DEVELOPER.</p>&mdash; Don Schenck (@DonSchenck) <a href="https://twitter.com/DonSchenck/status/846675893909180416">March 28, 2017</a></blockquote>\n<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',frontmatter:{date:"2017/04/04",path:"/posts/understanding-taming-the-meta-language-kor",title:"[번역] 메타언어 길들이기",tags:["Programming","Learning"]}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-understanding-taming-the-meta-language-kor-1b5785eef4e303953e06.js.map