---
title: 稻草人周刊 Vol.
subtitle: 
description: 
tags:
date: 2025-02-24 10:57:26
categories: 稻草人周刊
draft: true
toc: true
---

{{< callout "你正在阅读 稻草人周刊，一个读者的自述，每周一更新。" "🔖" >}}

## 🎧 这周在听什么？

## 🧑‍💻 这周做了什么？

给博客增加了「静态评论」，也就是把以前数据库里的评论放到了文章 Markdown 文件的 frontmatter 里，这样评论就和文章一样储存在本地了。因为之前总是折腾博客系统和评论系统，要找回这些数据还真是不容易。

{{< img src="https://image.guhub.cn/uPic/2025/02/image-20250226143631437.png" >}}

不过数据迁移到一半我就停下了，我想有的东西还是让他留在原来的地方比较好。

## 📚 这周读了什么？

## 🧠 这周思考了什么？

### Firefox 放弃了用户隐私

就在这周，Mozilla 开发的开源浏览器 Firefox 修改了他们的使用条例（Terms of Use），表示「当你在 Firefox 中上传和输入信息时，你就授权 Mozilla 使用你的信息」，原文如下：

> When you upload or input information through Firefox, you hereby grant us a nonexclusive royalty-free, worldwide license to use that information to help you navigate, experience, and interact with online content as you indicate with your use.

在 Hacker News 上出现了一条标题为「Mozilla owns "information you input through Firefox"」的帖子之后，Mozilla 很快修改了措辞。

> You give Mozilla the rights necessary to operate Firefox. This includes processing your data as we describe in the [Firefox Privacy Notice](https://www.mozilla.org/privacy/firefox/). It also includes a nonexclusive, royalty-free, worldwide license for the purpose of doing as you request with the content you input in Firefox. This does not give Mozilla any ownership in that content.

新版本的声明强调 Mozilla 不拥有（not give ... any ownership）你的信息，把信息（information）改成了内容（content），把「你授权」（you hereby grant us）改成了「这包含」（this includes），但仍然厚颜无耻地写着「royalty-free, worldwide license」。

人们又发现，Mozilla 删除了「永不出售用户数据的承诺」。

{{< img src="https://image.guhub.cn/uPic/2025/03/Gk1HpvFWMAAS9Sg.jpeg" >}}

2 月 26 日，Mozilla 发布了一篇[博客文章](https://blog.mozilla.org/en/products/firefox/firefox-news/firefox-terms-of-use/)解释使用条例的更新，我又发现了很有趣的一点——我在[这个 YouTube 视频](https://www.youtube.com/watch?v=W1kE3qA8FcA)里看到的这篇文章，和我现在访问同一个网址看到的文章内容，似乎不太一样。Mozilla 似乎偷偷地修改了博客内容。在视频里展示的内容中，Mozilla 承认向合作伙伴共享用户数据的行为，但现在似乎被删掉了。

Firefox 一直是一个注重用户隐私的开源浏览器，然而现在不是了。他们现在保护的是「重要的东西」而非「隐私」。看看他们的广告词就知道了。

{{< img src="https://image.guhub.cn/uPic/2025/03/image-20250301200444634.png" >}}

如果你正在使用 Firefox 并且很在乎用户隐私，你应该考虑更换浏览器。如果你不愿意做出太多改变，可以尝试编译自己的 Firefox 浏览器。Firefox 是开源的，使用自己编译的版本而不是下载 Mozilla 提供的版本，不会受到 Mozilla 使用条例的限制。

尽管 Google 和 Apple 这样的公司也不一定真的把用户数据保护得多好，但他们至少不会蠢到干出这种事情。这算是 Chrome 和 Safari 用户的胜利。

### 思考系统如何运作

读 The New Atlantis 上的文章《[We Live Like Royalty and Don’t Know It](https://www.thenewatlantis.com/publications/we-live-like-royalty-and-dont-know-it)》，一开始觉得作者过来人的语气有点讨厌，但认真读下去之后发现文章内容和阅历并没有关系。作者指出，不只是年轻人不思考「汗滴禾下土」，现代人几乎很少思考粮食、电、安全、干净的水从哪来这些问题了。

读到一半的时候我已经认同作者表达的担忧，但我仍在字里行间寻找「为什么」，我想知道要是人们不再思考这些问题会怎么样。尽管作者没能完全说服我，但我想到了前几周听的一期播客。

前段时间 TikTok 在美国短暂被封，一群「洋抖难民」逃到小红书，有位播客主表示了对这些人的嘲笑。她指出，「难民」们之所以能转到小红书来，是因为他们的国家给了他们自由，而他们视这些权利为理所当然，甚至还嘲弄「要把自己的数据全部上交中国」，丝毫没有意识到自己之所以能使用互联网，全都要归功于他们正在「逃离」的这个国家。他们只想要看可爱的猫猫、上交「猫税」，看帅哥美女拍短视频勾引自己。除了表达不满（甚至不能算反抗，因为毫无作用）、宣泄情绪和逃避现实，他们没有创造任何价值。

我不是说他们应该容忍，但他们做的事情只是在逃避，就像小孩子离家出走，他们不关心也不参与到系统中来，因为他们不知道没有这套系统时，生活有多糟糕。

系统不是邪恶的，就像市场看似吞噬金钱，但却是配置资源的好方法。系统不是完美也不是理应服务于自己的。很喜欢[一派胡言](https://yipai.me)放在首页的话：如果你在纵容，就不要抱怨世道变坏。如果个人连自己所处的系统如何运作都不清楚，那他凭什么指责任何人？

我认为现代人应该尝试了解系统如何运作，读一些经济学原理，理解法治是如何构建的。在对系统表达不满之前，想想问题是如何产生的。

### 被量化的和人性化的

听完 TED 演讲《[如何逃出教育的死亡谷](https://www.ted.com/talks/ken_robinson_how_to_escape_education_s_death_valley)》，演讲者 Ken Robinson 让我再次思考起了「为什么全世界都偏爱数理化，不在乎人文、艺术和体育？」这个问题。Robinson 在演讲后半段提到了在教育系统中做决策的并非教师和学生这些参与者，而是在宏观上根据数据调整政策的中央计划者。==他们认为教育是可以而被量化的，而 Robinson 指出教育应该是人性化的==。

理工科受到偏爱，很有可能是因为在这些学科中投入后得到的产出最容易被量化，容易被量化的就是最直观的。科技发展能直观地带来生产效率的提升和经济增长，这是能够被量化的。文学创作、艺术创作似乎不能，你或许能衡量出版物的市场规模和变化情况，但那有什么意义呢？就连诺贝尔文学奖也不如物理学和化学的奖项受关注。体育比艺术和人文更受重视，因为国际的体育比赛中，排名也是量化且直观的。

Paul Graham 也在《黑客与画家》中写道，黑客（优秀程序员）的工作不如销售员那样容易被量化，因此，在大公司中，黑客没法像小规模的创业公司那样做出大胆、优秀且有趣的软件，因为系统没法衡量他们的优秀，也不鼓励他们变得优秀。

全世界都在痴迷于数字的时候，有多少人愿意停下来倾听人的声音呢？



## 💡 这周学到了什么？

---

## 🗣️ 碎碎念

- 买「绝对小孩」的咖啡豆，附赠了一包 35g 的尝鲜装，名字叫「肯尼亚·涅里佳赛茜AA·水洗」。这个分量其实很尴尬，不如多加一克，这样就能两次用 18g 粉冲完。我准备用 15g 先试试，结果粉仓没拧紧，磨豆的时候撒了，最后干脆把剩下的都冲了，一共 25g 豆。好在粉量大也没影响出品效果，第一次喝到这样甜的水洗豆，麦芽糖的风味很明显，甚至在磨豆之前就闻到了，中温段有明显的果汁感，温度下来之后，也确实能喝到包装上所说的乌梅和莓果风味。好喝的，可惜撒了一小半。
- 爵士乐能唤起我脑海里最荒诞、最奇妙、最难以捕捉、最飘忽不定的想法，我看到了某个地方一直在下雨，有人的伞掉在了地上，灰蒙蒙的世界里落下一道闪电的白光。但是当我尝试把这幅图景画出来放在博客顶部当作头图时，我的幻想被我拙劣的绘画狠狠地击碎了，不敢想象我居然听了三个半小时的爵士乐，最后还没做出什么东西。有点可怕了。
- 我都已经在思考买 Airpods 4 还是 Airpods Pro 2 了，结果突然想起来那个我以为丢了的耳机仓在我外衣内袋里连着充电宝充电。*可恶的漫步者！*
- 在盗版网站上看剧没关弹幕，发现好多观众喜欢用正常人的批评情景喜剧演员的行为。*拜托！要是他们都是正常人那还有什么好看的！我要看到厮杀、拉扯和血流成河 <span style="font-size:80%">*（等等我看的不是喜剧吗？）</span>
- 老师刚在课上打开 DeepSeek 讲课，说可以在自己的电脑上部署，摸鱼的我就在阮一峰的科技爱好者周刊上翻到「本地部署 DeepSeek 保姆级教程」，两件事情发生的事件高度重合，有点过于好笑了。

