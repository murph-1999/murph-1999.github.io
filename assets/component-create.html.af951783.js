import{_ as n,o as s,c as a,a as e}from"./app.fbeace38.js";const t={},o=e(`<h1 id="\u7EC4\u4EF6\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u521B\u5EFA" aria-hidden="true">#</a> \u7EC4\u4EF6\u521B\u5EFA</h1><p>\u9996\u5148\u8981\u5F3A\u8C03\u7684\u4E00\u70B9\u662F\uFF1A\u8FD9\u91CC\u7684\u7EC4\u4EF6\u521B\u5EFA\u4E0D\u662F\u521B\u5EFA\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\uFF0C\u521B\u5EFA\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\u662F\u5728\u7EC4\u4EF6\u6CE8\u518C\u4E2D\u5B8C\u6210\u7684\uFF0C\u800C\u662F\u521B\u5EFA\u7EC4\u4EF6<code>vnode</code>\u3002</p><h2 id="\u5F00\u59CB\u521B\u5EFA\u7EC4\u4EF6\u7684\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u521B\u5EFA\u7EC4\u4EF6\u7684\u65F6\u673A" aria-hidden="true">#</a> \u5F00\u59CB\u521B\u5EFA\u7EC4\u4EF6\u7684\u65F6\u673A</h2><p>\u5F53\u5DF2\u7ECF\u5B8C\u6210\u7EC4\u4EF6\u6CE8\u518C\u540E\uFF0C\u7B49\u5230\u521B\u5EFA<code>vnode</code>\u65F6\uFF0C\u6267\u884C<code>_createElement</code> \u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">_createElement</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">context</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  tag<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Class<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span> <span class="token operator">|</span> Function <span class="token operator">|</span> Object<span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  normalizationType<span class="token operator">?</span><span class="token operator">:</span> number</span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token operator">|</span> Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">let</span> vnode<span class="token punctuation">,</span> ns
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> Ctor
    ns <span class="token operator">=</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>ns<span class="token punctuation">)</span> <span class="token operator">||</span> config<span class="token punctuation">.</span><span class="token function">getTagNamespace</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isReservedTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// platform built-in elements</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        config<span class="token punctuation">.</span><span class="token function">parsePlatformTagName</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>Ctor <span class="token operator">=</span> <span class="token function">resolveAsset</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>$options<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// component</span>
      vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// unknown or unlisted namespaced elements</span>
      <span class="token comment">// check at runtime because it may get assigned a namespace when its</span>
      <span class="token comment">// parent normalizes children</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// direct component options / constructor</span>
    vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>


## createComponent
\u901A\u8FC7<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">createComponent</span><span class="token template-punctuation string">\`</span></span>\u5219\u521B\u5EFA<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vnode</span><span class="token template-punctuation string">\`</span></span>\uFF0C\u5B9A\u4E49\u5728<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/core/vdom/create-component.js</span><span class="token template-punctuation string">\`</span></span>\u4E2D\uFF0C\u4E0D\u8FC7\u8FD9\u90E8\u5206\u4EE3\u7801\u6BD4\u8F83\u590D\u6742\uFF0C\u6240\u4EE5\u53EA\u9009\u62E9\u4E00\u4E9B\u6838\u5FC3\u7684\u90E8\u5206\u8FDB\u884C\u5206\u6790\u3002\u5206\u4E3A\u4E09\u4E2A\u6B65\u9AA4\uFF1A\u6784\u9020\u5B50\u7C7B\u6784\u9020\u51FD\u6570\uFF0C\u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570\u548C\u5B9E\u4F8B\u5316 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vnode</span><span class="token template-punctuation string">\`</span></span>\u3002

### \u6784\u9020\u5B50\u7C7B\u6784\u9020\u51FD\u6570
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`js
  <span class="token comment">// _base\u662FVue\u6784\u9020\u51FD\u6570</span>
  <span class="token keyword">const</span> baseCtor <span class="token operator">=</span> context<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_base

  <span class="token comment">// plain options object: turn it into a constructor</span>
  <span class="token comment">// \u5982\u679CCtor\u4E0D\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570 \u800C\u662F\u4E00\u4E2A\u9009\u9879\u5BF9\u8C61</span>
  <span class="token comment">// \u901A\u8FC7Vue.extend\u6765\u521B\u5EFA\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Ctor <span class="token operator">=</span> baseCtor<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728\u7F16\u5199\u4E00\u4E2A\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u901A\u5E38\u90FD\u662F\u521B\u5EFA\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u8FD8\u662F\u4EE5\u6211\u4EEC\u7684 App.vue \u4E3A\u4F8B\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    HelloWorld
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u6587\u4EF6\u6700\u7EC8\u5BFC\u51FA\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4F1A\u76F8\u5BF9\u5E94\u5730\u8FDB\u5165<code>Ctor = baseCtor.extend(Ctor)</code>\u7684\u903B\u8F91\uFF0C\u6CE8\u610F\u4E3A\u4EC0\u4E48\u8FD9\u91CC<code>context.$options._base</code>\u53EF\u4EE5\u62FF\u5230Vue\u6784\u9020\u51FD\u6570\u5462\uFF1F\u56E0\u4E3A\u5728initGlobalAPI\u4E2D\u6709<code>Vue.options._base = Vue</code>\u3002\u5176\u6B21\u5728<code>src/core/instance/init.js</code> \u91CC <code> _init</code> \u51FD\u6570\u4E2D\u505A\u4E86options\u7684\u5408\u5E76\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
  <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
  options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  vm
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u64CD\u4F5C\u628A<code>Vue</code>\u4E0A\u7684\u4E00\u4E9B<code>option</code>\u6269\u5C55\u5230<code>vm.$options</code>\uFF0C<code>vm.$options._base</code>\u53EF\u4EE5\u62FF\u5230<code>Vue</code>\u6784\u9020\u51FD\u6570\u3002</p><p>\u518D\u6765\u770B\u4E0B<code>Vue.extend</code> \u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u5728 <code>src/core/global-api/extend.js</code> \u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Class inheritance
 */</span>
Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">extendOptions</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  extendOptions <span class="token operator">=</span> extendOptions <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> Super <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">const</span> SuperId <span class="token operator">=</span> Super<span class="token punctuation">.</span>cid
  <span class="token keyword">const</span> cachedCtors <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">||</span> <span class="token punctuation">(</span>extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> name <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>name <span class="token operator">||</span> Super<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">validateComponentName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Super</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Sub
  Sub<span class="token punctuation">.</span>cid <span class="token operator">=</span> cid<span class="token operator">++</span>
  Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
    Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
    extendOptions
  <span class="token punctuation">)</span>
  Sub<span class="token punctuation">[</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Super

  <span class="token comment">// For props and computed properties, we define the proxy getters on</span>
  <span class="token comment">// the Vue instances at extension time, on the extended prototype. This</span>
  <span class="token comment">// avoids Object.defineProperty calls for each instance created.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initProps</span><span class="token punctuation">(</span>Sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initComputed</span><span class="token punctuation">(</span>Sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// allow further extension/mixin/plugin usage</span>
  Sub<span class="token punctuation">.</span>extend <span class="token operator">=</span> Super<span class="token punctuation">.</span>extend
  Sub<span class="token punctuation">.</span>mixin <span class="token operator">=</span> Super<span class="token punctuation">.</span>mixin
  Sub<span class="token punctuation">.</span>use <span class="token operator">=</span> Super<span class="token punctuation">.</span>use

  <span class="token comment">// create asset registers, so extended classes</span>
  <span class="token comment">// can have their private assets too.</span>
  <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Sub<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> Super<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// enable recursive self-lookup</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>components<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> Sub
  <span class="token punctuation">}</span>

  <span class="token comment">// keep a reference to the super options at extension time.</span>
  <span class="token comment">// later at instantiation we can check if Super&#39;s options have</span>
  <span class="token comment">// been updated.</span>
  Sub<span class="token punctuation">.</span>superOptions <span class="token operator">=</span> Super<span class="token punctuation">.</span>options
  Sub<span class="token punctuation">.</span>extendOptions <span class="token operator">=</span> extendOptions
  Sub<span class="token punctuation">.</span>sealedOptions <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Sub<span class="token punctuation">.</span>options<span class="token punctuation">)</span>

  <span class="token comment">// cache constructor</span>
  cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span> <span class="token operator">=</span> Sub
  <span class="token keyword">return</span> Sub
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Vue.extend</code> \u7684\u4F5C\u7528\u5C31\u662F\u901A\u8FC7\u539F\u578B\u7EE7\u627F\u7684\u65B9\u5F0F\u6784\u9020\u4E00\u4E2A <code>Vue</code> \u7684\u5B50\u7C7B<code>Sub</code>\uFF0C\u5E76\u4E14\u5BF9<code>Sub</code>\u6269\u5C55\u4E86\u4E00\u4E9B\u5C5E\u6027\uFF0C\u6BD4\u5982<code>options</code>\uFF0C\u6DFB\u52A0\u5168\u5C40<code>API</code>\u7B49\uFF0C\u5E76\u4E14\u5BF9\u914D\u7F6E\u4E2D\u7684 props \u548C <code>computed</code>\u505A\u4E86\u521D\u59CB\u5316\u5DE5\u4F5C\uFF1B\u6700\u540E\u5BF9\u4E8E\u8FD9\u4E2A <code>Sub</code> \u6784\u9020\u51FD\u6570\u505A\u4E86\u7F13\u5B58\uFF0C\u907F\u514D\u591A\u6B21\u6267\u884C <code>Vue.extend</code> \u7684\u65F6\u5019\u5BF9\u540C\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u91CD\u590D\u6784\u9020\u3002\u8FD9\u6837\u5F53\u6211\u4EEC\u53BB\u5B9E\u4F8B\u5316 Sub \u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u6267\u884C <code>this._init</code> \u903B\u8F91\u518D\u6B21\u8D70\u5230\u4E86 <code>Vue</code> \u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u903B\u8F91\uFF0C\u5B9E\u4F8B\u5316\u5B50\u7EC4\u4EF6\u7684\u903B\u8F91\u5728\u4E4B\u540E\u7684\u7AE0\u8282\u4F1A\u4ECB\u7ECD\uFF0C\u5728<code>patch</code>\u4E00\u8282\u4E2D\u4E5F\u6709\u4ECB\u7ECD\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u7684\u5165\u53E3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570</h3><p>\u5728\u521D\u59CB\u5316\u4E00\u4E2A Component \u7C7B\u578B\u7684 VNode \u7684\u8FC7\u7A0B\u4E2D\u5B9E\u73B0\u4E86\u51E0\u4E2A\u94A9\u5B50\u51FD\u6570</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>const componentVNodeHooks = {
  init (vnode: VNodeWithData, hydrating: boolean): ?boolean {
    if (
      vnode.componentInstance &amp;&amp;
      !vnode.componentInstance._isDestroyed &amp;&amp;
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      const mountedNode: any = vnode // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode)
    } else {
      const child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      )
      child.$mount(hydrating ? vnode.elm : undefined, hydrating)
    }
  },

  prepatch (oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {
    const options = vnode.componentOptions
    const child = vnode.componentInstance = oldVnode.componentInstance
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    )
  },

  insert (vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, &#39;mounted&#39;)
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component&#39;s child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance)
      } else {
        activateChildComponent(componentInstance, true /* direct */)
      }
    }
  },

  destroy (vnode: MountedComponentVNode) {
    const { componentInstance } = vnode
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy()
      } else {
        deactivateChildComponent(componentInstance, true /* direct */)
      }
    }
  }
}

const hooksToMerge = Object.keys(componentVNodeHooks)

function installComponentHooks (data: VNodeData) {
  const hooks = data.hook || (data.hook = {})
  for (let i = 0; i &lt; hooksToMerge.length; i++) {
    const key = hooksToMerge[i]
    const existing = hooks[key]
    const toMerge = componentVNodeHooks[key]
    if (existing !== toMerge &amp;&amp; !(existing &amp;&amp; existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
    }
  }
}

function mergeHook (f1: any, f2: any): Function {
  const merged = (a, b) =&gt; {
    // flow complains about extra args which is why we use any
    f1(a, b)
    f2(a, b)
  }
  merged._merged = true
  return merged
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4E2A installComponentHooks \u7684\u8FC7\u7A0B\u5C31\u662F\u628A componentVNodeHooks \u7684\u94A9\u5B50\u51FD\u6570\u5408\u5E76\u5230 data.hook \u4E2D\uFF0C\u5728 VNode \u6267\u884C patch \u7684\u8FC7\u7A0B\u4E2D\u6267\u884C\u76F8\u5173\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u5177\u4F53\u7684\u6267\u884C\u6211\u4EEC\u7A0D\u540E\u5728\u4ECB\u7ECD patch \u8FC7\u7A0B\u4E2D\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u3002\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\u5408\u5E76\u7B56\u7565\uFF0C\u5728\u5408\u5E76\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u67D0\u4E2A\u65F6\u673A\u7684\u94A9\u5B50\u5DF2\u7ECF\u5B58\u5728 data.hook \u4E2D\uFF0C\u90A3\u4E48\u901A\u8FC7\u6267\u884C mergeHook \u51FD\u6570\u505A\u5408\u5E76\uFF0C\u8FD9\u4E2A\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5728\u6700\u7EC8\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4F9D\u6B21\u6267\u884C\u8FD9\u4E24\u4E2A\u94A9\u5B50\u51FD\u6570\u5373\u53EF\u3002</p><h3 id="\u5B9E\u4F8B\u5316-vnode" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5316-vnode" aria-hidden="true">#</a> \u5B9E\u4F8B\u5316 VNode</h3><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>const name = Ctor.options.name || tag
const vnode = new VNode(
  \`vue-component-\${Ctor.cid}\${name ? \`-\${name}\` : &#39;&#39;}\`,
  data, undefined, undefined, undefined, context,
  { Ctor, propsData, listeners, tag, children },
  asyncFactory
)
return vnode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u4E00\u6B65\u975E\u5E38\u7B80\u5355\uFF0C\u901A\u8FC7 new VNode \u5B9E\u4F8B\u5316\u4E00\u4E2A vnode \u5E76\u8FD4\u56DE\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\u548C\u666E\u901A\u5143\u7D20\u8282\u70B9\u7684 vnode \u4E0D\u540C\uFF0C\u7EC4\u4EF6\u7684 vnode \u662F\u6CA1\u6709 children \u7684\uFF0C\u8FD9\u70B9\u5F88\u5173\u952E\uFF0C\u5728\u4E4B\u540E\u7684 patch \u8FC7\u7A0B\u4E2D\u6211\u4EEC\u4F1A\u518D\u63D0\u3002</p>`,21),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","component-create.html.vue"]]);export{d as default};
