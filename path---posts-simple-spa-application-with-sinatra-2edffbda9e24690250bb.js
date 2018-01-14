webpackJsonp([0xfd6396987574],{412:function(n,s){n.exports={data:{markdownRemark:{html:'<h2 id="beginning-of-the-heonchek-hunter"><a href="#beginning-of-the-heonchek-hunter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Beginning of the Heonchek-hunter</h2>\n<p>예전에 레일즈로 <strong>헌책 헌터</strong> 라는 이름의 웹앱을 한번 만들어 본 적이 있다.</p>\n<p>알라딘 중고서점에 원하는 책의 재고가 있는지 알아보고 해당 매장으로 가고 싶은데 일일이 매장을 하나하나 잡아서 검색해야하는게 너무 불편했었기 때문이다.</p>\n<p>잉여력이 넘치던 시절에는 서울 어지간한 지역에는 마음만 먹으면 방문할 수 있었기 때문에 꽤 유용한 아이디어라고 생각했는데, 지금은 딱히 그러기가 힘들다. 그래도 여러 개 매장의 중고책 재고를 검색하는데는 꽤 요긴하다는 생각이 든다.</p>\n<p>구현 원리는 생각보다 단순했지만 귀찮은 과정이었다. 알라딘 중고서점 검색 url은 하나만 제공되는데, 어떤 매장의 책을 검색하는지 구분하는 방법은 클라이언트가 가지고 있는 쿠키(cookie) 정보이다. 먼저 신촌점 페이지를 방문한 뒤에 검색을 하면 신촌점의 검색 결과가 나오고, 종로점 페이지를 방문한 뒤에 검색을 하면 종로점 검색 결과가 나오는 형식이다.</p>\n<p>다만 이 문제로 단순히 요청을 하고 결과를 받아오는 형식의 웹 크롤링을 해 주는 <code>nokogiri</code> 젬은 쓸 수가 없었다. 이런저런 조사를 해 본 결과 <a href="https://github.com/sparklemotion/mechanize"><code>mechanize</code></a> 젬이 웹사이트에 대한 자동 상호작용(automatic interaction)을 지원한다는 것을 발견하여 임의의 <code>Mechanize</code> 객체가 가상으로 각 매장을 방문한 뒤에 책을 검색하고, 결과를 파싱해와서 html 페이지에 출력하는 방식의 구현에 성공했었다.</p>\n<h2 id="why-not-rails"><a href="#why-not-rails" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why not Rails?</h2>\n<p>여러가지 자잘한 문제가 있었지만, 일단 돌아가는 애플리케이션을 만들어서 쓰다 보니 조금 아쉽게 생각되는 점들이 있었다. 처음에야 가장 익숙한 웹 애플리케이션을 제작할 수 있는 도구인 레일즈로 제작을 하였지만, 여러 가지 이유에서 이 프로젝트를 제작하는데는 레일즈를 쓸 필요가 없었다.</p>\n<ol>\n<li><code>rails new myapp</code> 를 입력하고 엔터를 치는 순간 나는 굳이 쓸 필요가 없는 파일들이 무더기로 생성된다. 미관상 마음에 들지 않는다.</li>\n<li>(지금 수준의 애플리케이션에는 차이가 크게 느껴지지 않겠지만) 레일즈는 다른 가벼운 웹 프레임워크에 비해 무겁다.</li>\n<li>DB가 필요없는 애플리케이션임에 불구하고 앱을 실행하기 위해서는 반드시 DB를 준비해야 한다. (Sqlite 등)</li>\n</ol>\n<p>제일 크게 느껴지는 문제는 1번 이었는데, 각종 컨트롤러 파일, 헬퍼 파일 등 나는 굳이 쓸 필요가 없는 파일들이 기본적으로 저장소에 자리잡고 있는게 마음에 들지 않았다.</p>\n<p>그리고 서울 지역 알라딘 중고매장 페이지를 모두 방문하고 정보를 긁어와야 하는 앱 구조상 동작이 꽤 느린데, 혹시나 더 가볍게 앱을 제작하면 속도가 더 빨라지지 않을까 하는 막연한 기대가 있었다.</p>\n<p>그래서 처음에는 요즘 야금야금 공부하고 있는 Node.js(노드) 로 크롤링 앱을 작성해볼까 했는데, 쿠키를 들고 리퀘스트를 보내는 등의 여러가지 시도를 하였음에도 불구하고 자꾸 결과가 나오지 않아 포기 상태이다. 루비에 비하면 월등히 빠른 처리 속도를 가지고 있는 노드를 활용해보려 했지만(싱글 스레드라는 단점이 있어도) 자꾸 500에러를 내뿜으니.. 나중에 다시 시도해보고자 한다.</p>\n<p>그래서 기존에 레일즈용으로 작성했던 로직을 가져와 또 다른 루비 웹 프레임워크인 시나트라로 다시 한번 더 나은 버전의 헌책 헌터를 구현해보기로 하였다.</p>\n<h2 id="what-is-sinatra"><a href="#what-is-sinatra" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Sinatra?</h2>\n<blockquote>\n<p>Sinatra is a <a href="https://en.wikipedia.org/wiki/Domain-specific_language">DSL</a> for quickly creating web applications in Ruby with minimal effort</p>\n</blockquote>\n<p>시나트라는 최소한의 노력으로 루비 기반 웹 애플리케이션을 신속하게 작성하기 위한 DSL이다.</p>\n<p>특히 Node.js 의 웹 프레임워크로 유명한 Express 에 영감을 준 것으로 잘 알려져 있다. 파이썬의 Flask와도 비슷하다는데 파이썬을 제대로 써 보지 않아서 모르겠다.</p>\n<p>Rack(루비 기반 웹 애플리케이션 개발을 위한 인터페이스 제공, Rack자체로도 웹 애플리케이션 개발은 가능하다) 기반으로 작성되어 있으며 흔히 생각하는 MVC 패턴을 구현한 웹 프레임워크는 아니다.</p>\n<p>RESTful 라우팅과 다양한 템플릿을 지원하고, 유저가 어느정도 직접 구현하면 레일즈로 만든 애플리케이션 부럽지 않은 웹 애플리케이션 제작이 가능하다. 보통 레일즈가 더 유명하고 편해서 그렇지.. 그렇지만 순수한 루비를 이용하는 느낌이 더 강해서 이쪽이 더 마음에 든다.</p>\n<p>데이터베이스와 연결하고자 하면 보통 ActiveRecord(그 레일즈의 ActiveRecord 맞다) 를 불러와 쓰거나, DataMapper 라는 젬을 이용한다고 한다.</p>\n<p>시나트라로 간단하게 Hello World를 출력하는 앱을 만든다면 한개의 파일, 약 4줄짜리 코드면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token comment"># myapp.rb</span>\n<span class="token keyword">require</span> <span class="token string">\'sinatra\'</span>\n\nget <span class="token string">\'/\'</span> <span class="token keyword">do</span>\n  <span class="token string">\'Hello world!\'</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>당연 그 전에 시나트라 젬은 설치되어 있어야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># Install sinatra gem\n$ gem install sinatra\n\n# Launch the application\n$ ruby myapp.rb  # View at http://localhost:4567</code></pre>\n      </div>\n<h2 id="how-to-improve"><a href="#how-to-improve" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to improve?</h2>\n<p>그럼 이 시나트라를 이용하여 어떻게 기존에 작성한 애플리케이션을 재구성할 수 있을까? 기존에 작성한 소스는 그냥 정적 페이지로만 구성하였다. <code>index</code> 액션에서 검색어를 입력받고 <code>search</code> 같은 액션에 패러미터를 보내어 검색 후 결과가 나오면 <code>result</code> 페이지에서 출력해주는 방식이다.</p>\n<p>어차피 검색하고 결과를 출력하기만 하면 되는데 페이지 여러개를 만들 필요는 딱히 없겠다는 생각이 들었다. 그래서 이번에는</p>\n<ul>\n<li>컨트롤러와 검색 로직의 분리</li>\n<li>AJAX 통신으로 초기 페이지에서 결과 부분만 따로 랜더링</li>\n</ul>\n<p>이 두 가지 포인트를 우선적으로 구현하는 것을 목표로 애플리케이션을 제작해 보았다. Single Page Application이라고 AngularJS 등의 거창한 자바스크립트 프레임워크를 쓸 수준은 아니기에 단순히 jQuery AJAX로 구현할 예정이다.</p>\n<h2 id="work-with-sinatra"><a href="#work-with-sinatra" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Work with Sinatra</h2>\n<p>시나트라는 <code>rails new</code> 같이 편리한 CLI(Command Line Interface) 가 없다. 정말 위에 적은대로 루비파일 하나만으로도 만들 수 있을 정도이다. 조금 검색을 해 보니 따로 정립된 프로젝트의 형태는 없지만, 배포를 염두에 둔다면 시나트라 애플리케이션 구동 설정을 하는데 <code>config.ru</code> 파일을 작성하길 권장하고 있었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token comment"># config.ru</span>\n<span class="token keyword">require</span> <span class="token string">\'./app\'</span>\nrun <span class="token constant">Sinatra</span><span class="token punctuation">:</span><span class="token symbol">:Application</span>\n</code></pre>\n      </div>\n<p>그리고 <code>rackup</code> 커맨드로 애플리케이션을 실행시킨다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ rackup -p 4000</code></pre>\n      </div>\n<p>기본으로 설정된 애셋 파일은 <code>/public</code> 폴더에, 뷰 파일을 <code>/views</code> 파일에 랜더링된다고 적혀있으니 컨트롤러인 <code>app.rb</code> 파일은 루트에 두고 필요한 폴더를 작성하고 자바스크립트와 CSS 파일은 <code>public</code> 폴더에, ERB파일은 <code>views</code> 폴더에 작성하였다.</p>\n<h3 id="controller"><a href="#controller" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Controller</h3>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">require</span> <span class="token string">\'sinatra\'</span>\nrequire_relative <span class="token string">\'./lib/book_search\'</span>\n\nget <span class="token string">\'/\'</span> <span class="token keyword">do</span>\n  erb <span class="token symbol">:index</span>\n<span class="token keyword">end</span>\n\nget <span class="token string">\'/search\'</span> <span class="token keyword">do</span>\n  book_title <span class="token operator">=</span> params<span class="token punctuation">[</span><span class="token symbol">:title</span><span class="token punctuation">]</span>\n\n  <span class="token variable">@results</span> <span class="token operator">=</span> <span class="token constant">BookSearch</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>book_title<span class="token punctuation">)</span><span class="token punctuation">.</span>search\n  erb <span class="token symbol">:result</span><span class="token punctuation">,</span> locals<span class="token punctuation">:</span> <span class="token punctuation">{</span> results<span class="token punctuation">:</span> <span class="token variable">@results</span> <span class="token punctuation">}</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>검색을 위한 클래스를 따로 작성하여 <code>/lib</code> 폴더에 저장해두었다. 지금은 기존에 레일즈용으로 작성했던 로직을 거의 그대로 사용한 클래스인데, 여러가지 면에서 개선할 점들이 많다.</p>\n<p><code>erb</code> 로 템플릿을 지정하고 심볼로 파일 이름을 지정하면 해당 이름의 템플릿을 찾아서 html 파일로 랜더링한다. 굳이 <code>index.html.erb</code> 같은 이름이 아닌 <code>index.erb</code> 로 작성하여도 잘 작동하는게 신기했다. 또한 이 부분은 나중에 <code>result.erb</code> 파일에도 중요한 포인트로 작용한다.</p>\n<p><code>locals</code> 옵션은 레일즈의 <code>render partial</code> 이후 지역변수를 삽입해주는 것과 비슷하게 작용한 것 처럼 보여서 사용해보았다. 사실 굳이 쓰지 않고 그냥 <code>@results</code> 를 그대로 사용해도 별 문제 없어 보인다.</p>\n<h3 id="searching-books"><a href="#searching-books" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Searching Books</h3>\n<p>맨 처음 레일즈용으로 앱을 작성할 당시에는 컨트롤러에 프라이빗 메서드 하나 작성해 두고 거기다 모든 과정을 다 처리했었다. 처음엔 \'나중에 리팩터링 하면 되지\' 하고 생각했지만 이렇게 아예 새로 만드는 방향까지 와 버렸다.</p>\n<p><code>BookSearch</code> 라는 클래스를 하나 정의하여 거기에 매장 리스트, 매장 방문 URI, 검색 URI 등을 상수로 지정해 두고 시작하는 형태이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>book_title<span class="token punctuation">)</span>\n  <span class="token variable">@book_title</span> <span class="token operator">=</span> book_title<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">\'euc-kr\'</span><span class="token punctuation">,</span> <span class="token string">\'utf-8\'</span><span class="token punctuation">)</span>\n  <span class="token variable">@agent</span> <span class="token operator">=</span> <span class="token constant">Mechanize</span><span class="token punctuation">.</span><span class="token keyword">new</span>\n  <span class="token variable">@result</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>인자로 받는 <code>book_title</code> 은 인코딩을 반드시 바꾸어 주어야 한다. 알라딘 홈페이지는 EUC-KR 인코딩을 사용하기 때문이다. 국내 사이트는 정말 어쩔수가 없는건지.. <code>@agent</code> 는 알라딘 서버와 연결 상호작용을 수행할 <code>mechanize</code> 젬의 객체이다. 기존에는 매 검색마다 객체를 생성하도록 코드를 작성했었는데 전혀 그럴 필요가 없다는걸 뒤늦게 깨달았다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token comment"># ...</span>\n<span class="token keyword">def</span> search\n  <span class="token constant">STORE_LISTS</span><span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>store_code<span class="token punctuation">,</span> store_name<span class="token operator">|</span>\n    <span class="token comment"># 개별 매장 검색 시작</span>\n    search_results <span class="token operator">=</span> <span class="token function">get_books</span><span class="token punctuation">(</span>store_code<span class="token punctuation">)</span>\n    <span class="token variable">@result</span><span class="token punctuation">[</span>store_name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">serialize_info</span><span class="token punctuation">(</span>search_results<span class="token punctuation">)</span>\n  <span class="token keyword">end</span>\n\n  <span class="token variable">@result</span>\n<span class="token keyword">end</span>\n\nprivate\n\n<span class="token keyword">def</span> <span class="token function">query</span><span class="token punctuation">(</span>store_url<span class="token punctuation">)</span>\n  store_index <span class="token operator">=</span> <span class="token variable">@agent</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>store_url<span class="token punctuation">)</span>\n  store_form <span class="token operator">=</span> store_index<span class="token punctuation">.</span><span class="token function">form</span><span class="token punctuation">(</span><span class="token string">\'QuickSearch\'</span><span class="token punctuation">)</span>\n  store_form<span class="token punctuation">[</span><span class="token string">\'SearchWord\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">@book_title</span>\n\n  query_result <span class="token operator">=</span> <span class="token variable">@agent</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>store_form<span class="token punctuation">)</span>\n  query_result<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">\'EUC-KR\'</span>\n\n  query_result\n<span class="token keyword">end</span>\n\n<span class="token keyword">def</span> <span class="token function">get_books</span><span class="token punctuation">(</span>store_code<span class="token punctuation">)</span>\n  store_url <span class="token operator">=</span> <span class="token constant">URI</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">STORE_URI</span> <span class="token operator">+</span> store_code<span class="token punctuation">)</span>\n  <span class="token function">query</span><span class="token punctuation">(</span>store_url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">\'div.ss_book_box\'</span><span class="token punctuation">)</span>\n<span class="token keyword">end</span>\n\n<span class="token keyword">def</span> <span class="token function">serialize_info</span><span class="token punctuation">(</span>search_results<span class="token punctuation">)</span>\n  <span class="token comment"># 검색 결과가 있다면 검색 시작, 아니면 빈 배열 입력</span>\n  <span class="token keyword">return</span> search_results <span class="token keyword">if</span> search_results<span class="token punctuation">.</span>empty<span class="token operator">?</span>\n\n  <span class="token comment"># 매장별 결과는 배열로 리턴 (각 배열의 요소는 해쉬)</span>\n  search_results<span class="token punctuation">.</span>map <span class="token keyword">do</span> <span class="token operator">|</span>book<span class="token operator">|</span>\n    book_info<span class="token punctuation">,</span> price_info <span class="token operator">=</span> book<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">\'div.ss_book_list\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># Pattern matching</span>\n\n    title <span class="token operator">=</span> book_info<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">\'a.bo_l b\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text\n    sub_title <span class="token operator">=</span> book_info<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">\'span.ss_f_g2\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text\n\n    author_list <span class="token operator">=</span> book_info<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">\'ul > li\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' | \'</span><span class="token punctuation">)</span>\n\n    author<span class="token punctuation">,</span> publisher<span class="token punctuation">,</span> pub_date <span class="token operator">=</span> author_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token number">2</span><span class="token punctuation">]</span>\n\n    price <span class="token operator">=</span> price_info<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">\'span.ss_p2 b\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text\n    stock <span class="token operator">=</span> price_info<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">\'span.ss_p4 b\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text\n\n    <span class="token punctuation">{</span>\n      title<span class="token punctuation">:</span> title<span class="token punctuation">,</span>\n      sub_title<span class="token punctuation">:</span> sub_title<span class="token punctuation">,</span>\n      author<span class="token punctuation">:</span> author<span class="token punctuation">,</span>\n      publisher<span class="token punctuation">:</span> publisher<span class="token punctuation">,</span>\n      pub_date<span class="token punctuation">:</span> pub_date<span class="token punctuation">,</span>\n      price<span class="token punctuation">:</span> price<span class="token punctuation">,</span>\n      stock<span class="token punctuation">:</span> stock\n    <span class="token punctuation">}</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p><code>query</code> 메서드는 생성한 에이전트로 중고매장 각 지점을 임의로 방문한 뒤에 생성된 쿠키를 들고 책을 검색하는 역할을 수행한다. 초반부에 서술했듯이 검색을 할 때 매장이름을 패러미터로 받는 것이 아니라 요청한 클라이언트가 들고있는 쿠키로 어느 매장의 책을 찾고자 하는지 조회하기 때문이다.</p>\n<p>중요한 점은 여기서도 출력된 결과물을 EUC-KR 인코딩으로 바꾸어주어야 한다는 것이다.</p>\n<p><code>get_books</code> 는 각 매장 코드와 매장명을 가지고 있는 해시로 반복문을 돌 때 <code>query</code> 메서드를 매번 다른 매장명으로 실행시키고 그 결과를 출력하는 부분을 담당한다. <code>css</code> 는 <code>nokogiri</code> 젬에서 지원하는 메서드로 파싱한 결과를 말 그대로 css 선택자처럼 사용하여 결과를 가져올 수 있도록 만든다. 선택자로 선택된 DOM들은 <code>nokogiri</code>의 객체가 담긴 배열로 리턴된다. (nokogiri 젬은 웹 크롤링에 사용되는 대표적인 루비 젬이며 <code>mechanize</code> 젬과 의존관계를 형성하고 있다.)</p>\n<p>그리고 이를 이용하여 <code>serialize_info</code> 메서드를 실행하여 원하는 결과를 출력하는 방식이다. 각각 어떤 결과를 가져와야 하는지는 알라딘 검색을 직접 해 보고 크롬의 개발자 도구로 html 코드를 뒤져 찾아내었다.</p>\n<p>변수 할당에 패턴 매칭이 들어간 점도 눈여겨 볼 수 있다. 배열의 요소 하나하나를 변수에 할당한다고 한줄씩 코드를 작성하는 것 보다 배열의 범위와 그에 맞는 개수의 변수를 할당해주어 여러 줄로 작성할 코드를 손쉽게 한 줄로 줄일 수 있었다.</p>\n<h3 id="views"><a href="#views" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Views</h3>\n<p>뷰 파일들은 레일즈로 작성할 때 <code>html.erb</code> 템플릿과 크게 차이는 없었다. 단순히 <code>erb</code>  확장자만 넣어도 그대로 작동한다는 것만 빼면 컨트롤러 부분에서 보다시피 어떤 인자를 가져올 것인지 주입할 수도 있고, 템플릿을 바꾼다던지 할 수도 있다. 다만 내가 여지껏 깨닫지 못했던 흥미로운 요소가 있었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// public/script/app.js</span>\n<span class="token comment">// ...</span>\n  $<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/search\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> title<span class="token punctuation">:</span> bookTitle <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    $dimmer<span class="token punctuation">.</span><span class="token function">dimmer</span><span class="token punctuation">(</span><span class="token string">\'hide\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>indexPage <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.ui.main.text.container\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$result_partial<span class="token punctuation">.</span><span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token string">\'result_container\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      $result_partial<span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">\'result_container\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    $result_partial<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    $result_partial<span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token string">\'slide down in\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<p>다음은 내가 책 검색을 비동기로 처리하기 위해 작성했던 AJAX 호출이다. 함수 자체야 별거 없는데 성공 후의 콜백에서 <code>$result_partial.html(data);</code> 부분이 핵심이다. 저 <code>data</code> 인자는 컨트롤러에서 어떤 방식으로 전달되었을까?</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token comment"># app.rb</span>\n<span class="token comment"># ...</span>\nget <span class="token string">\'/search\'</span> <span class="token keyword">do</span>\n  book_title <span class="token operator">=</span> params<span class="token punctuation">[</span><span class="token symbol">:title</span><span class="token punctuation">]</span>\n\n  <span class="token variable">@results</span> <span class="token operator">=</span> <span class="token constant">BookSearch</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>book_title<span class="token punctuation">)</span><span class="token punctuation">.</span>search\n  erb <span class="token symbol">:result</span><span class="token punctuation">,</span> locals<span class="token punctuation">:</span> <span class="token punctuation">{</span> results<span class="token punctuation">:</span> <span class="token variable">@results</span> <span class="token punctuation">}</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>액션 실행 후 리턴은 erb로 한다고 작성되어 있다. 말인 즉슨 랜더링 처리가 다 된 erb 파일을 콜백 함수의 <code>data</code> 인자로 전달한다는 것이다. 보통 레일즈에서 작성했다면 <code>respond_to</code> 메서드로 어떤 포맷에 반응하여 출력할지를 지정해주어야 했을 텐데, 오히려 그런 면에서 신경 쓸 필요가 전혀 없었다. 랜더링된 <code>result.erb</code> 는 그냥 html 코드 덩어리나 다름없겠다는 생각에 jQuery의 <code>html()</code> 함수에 넣어보았다. 아주 잘 작동하였다.</p>\n<p>여지껏 \'Rails way\' 로 작성한 AJAX 호출에 익숙해져 있다 보니 이런 방식으로 결과를 출력할 수 있다는게 새삼 새롭게 느껴졌다.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>이번에는 아주 간단한 기능 위주로 작성해본 것지만, <a href="http://hanamirb.org">하나미</a> 를 시작으로 점점 레일즈를 벗어나 루비로 웹 애플리케이션을 작성하는데 익숙해지고, 더 재미를 느끼고 있다.</p>\n<p>앱 특성상 레일즈와 비교하여 검색 결과를 출력하는 속도가 압도적으로 빠르다고 느끼진 못했다. 아마 일반적인 형태의 홈페이지로 비교한다면 조금 다른 결과가 나올지도 모르겠다.</p>\n<p>특히 지금처럼 모든 웹 애플리케이션이 데이터베이스(혹은 모델)을 필요로 하는 것은 아니다. 이런 경우에는 레일즈보단 시나트라로 작성하는게 더 나아 보인다.</p>\n<p>앞으로도 더 복잡한 애플리케이션을 쉽게 잘 작성해보고 싶다. 공부해야할 것들이 너무나 많지만, 지금은 자바스크립트 위주의 공부부터 차근차근 도전중이다.</p>\n<p><strong>Source Code</strong>: <a href="https://github.com/emaren84/heoncheck-hunter-sinatra">https://github.com/emaren84/heoncheck-hunter-sinatra</a></p>',frontmatter:{date:"2016/11/21",path:"/posts/simple-spa-application-with-sinatra",title:"시나트라(Sinatra)로 간단한 Single Page Application(SPA) 제작해 보기",tags:["Ruby","Sinatra"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-simple-spa-application-with-sinatra-2edffbda9e24690250bb.js.map