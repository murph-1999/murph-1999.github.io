import{_ as a,o as s,c as e,a8 as i}from"./chunks/framework.D8k27DW7.js";const g=JSON.parse('{"title":"准备工作","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue2/01-start.md","filePath":"vue/vue2/01-start.md","lastUpdated":null}'),t={name:"vue/vue2/01-start.md"},l=i(`<h1 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">介绍</p><ol><li>这是一个基于vue2.6版本的源码分析。为什么在目前vue3已经较为普及的环境下，仍然去更新vue2的源码分析呢？一方面呢<br></li></ol></div><h2 id="前置准备" tabindex="-1">前置准备 <a class="header-anchor" href="#前置准备" aria-label="Permalink to &quot;前置准备&quot;">​</a></h2><p><strong>拉取代码</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/vuejs/vue.git</span></span></code></pre></div><h3 id="源码目录文件" tabindex="-1">源码目录文件 <a class="header-anchor" href="#源码目录文件" aria-label="Permalink to &quot;源码目录文件&quot;">​</a></h3><p>拉完后自己可以先自行浏览一下源码目录。下面给出了源码目录的核心部分。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─complier                      # 编译相关，包括将模版解析成ast语法树，ast语法树优化，代码生成等功能</span></span>
<span class="line"><span>├─core                          # vue的核心库，与平台无关，包括响应式原理，虚拟dom等</span></span>
<span class="line"><span>├─platforms                     # 平台相关，vue可以跑在web上，也可以配合weex跑在native客户端上</span></span>
<span class="line"><span>├─server                        # 服务端渲染相关</span></span>
<span class="line"><span>├─sfc                           # 单文件组件文件编译成js对象，通常都会编写单文件组件，然后使用webpack构建</span></span>
<span class="line"><span>├─shared                        # 一些公共的代码，包括常量和公共方法</span></span></code></pre></div><hr><p><strong>Quiz Time</strong>👇</p><details><summary> 源码文件的打包工具是什么？它和 webpack 有什么区别？</summary> ✅ vue 源码的打包工具是 rollup，关于构建相关的内容在 scripts 文件下，构建后将输出文件。webpack 把所有文件当成模块，rollup 只处理 js，更适合在 vue 这样的库中使用，不会产生冗余的代码。一般在构建一些 lib 的时候可以选择 rollup, 而在构建一些应用的时候，选择 webpack。 </details><h3 id="构建版本类型" tabindex="-1">构建版本类型 <a class="header-anchor" href="#构建版本类型" aria-label="Permalink to &quot;构建版本类型&quot;">​</a></h3><p>vue的构建版本主要分为三种，分别是：</p><ul><li>完整版 同时包含编译时和运行时的版本</li><li>编译版 将模板字符串编译成为js渲染函数的代码，体积大，效率低</li><li>运行时 创建vue实例，渲染并处理虚拟dom等的代码，体积小，效率高</li></ul><p>这个系列的分析主要以 <code>UMD</code> 完整版的 <code>Vue</code> 来学习，可以通过<code>&lt;script&gt;</code>标签直接用在浏览器中，便于调试。</p><div class="language-HTML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/dist/vue.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><hr><p><strong>Quiz Time</strong>👇</p><details><summary> 源码中对应的只有运行时版本和带编译版本的区别是什么？</summary> ✅ 带编译版本的入口文件中重写了实例的 mount 方法，其作用就是将模版转化为 render 函数，最后会调用 ../runtime/index中的mount 方法。 </details><br><details><summary> 基于 vuecli 创建的项目是什么版本？</summary> ✅ 基于 vuecli 创建的项目是 es6 的模块化方式，且是运行时版本，项目中可以通过：&gt;&gt;&gt; vue inpspect &gt; output.js生成一个新文件来查看 webpack 配置。 </details><h3 id="分析重点" tabindex="-1">分析重点 <a class="header-anchor" href="#分析重点" aria-label="Permalink to &quot;分析重点&quot;">​</a></h3><p>vue中的最重要的两个部分，一个是<strong>数据绑定</strong>，一个是<strong>组件化</strong>，这两个部分也将贯穿源码的分析过程。展开来说，一些非常关键的部分包括：</p><ul><li>vue的静态成员和实例成员初始化过程</li><li>首次渲染的过程</li><li>数据响应式原理（这里是vue2）</li><li>组件创建与组件注册</li><li>...</li></ul><p>在源码中，有一些重要的概念（术语），这些概念可以说是实现vue的基石，同时也不仅仅适用于vue的实现。包括：</p><ul><li>响应式实现中涵盖的原理（发布订阅模式）</li><li>虚拟<code>dom</code>，<code>diff</code>过程</li><li>生命周期</li><li>...</li></ul><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ol><li>当我们深入到源码实现时，其实会接触到很多基础的知识点，因此在掌握实现的过程中也可以夯实基础，查漏补缺；</li><li>需要多多debug进行分析，源码中<code>example</code>文件夹中提供了一些示例；</li><li>掌握一些源码阅读的技巧，提升效率。多关注核心内容，记录自己的思考（用自己的话阐述原理，并不断修正），快捷键跳转等等。</li><li>最后也是非常重要的一点，需要对<code>vue</code>的应用掌握到一定程度，再来探究源码实现，否则有点纸上谈兵了。</li></ol>`,28),n=[l];function p(o,r,d,c,h,u){return s(),e("div",{"data-pagefind-body":!0},n)}const v=a(t,[["render",p]]);export{g as __pageData,v as default};