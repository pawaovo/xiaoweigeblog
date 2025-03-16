---
title: 稻草人周刊 Vol.20
subtitle: 
description: 
tags:
date: 2025-03-11 09:06:34
categories: 稻草人周刊
draft: true
toc: true

---

{{< callout "你正在阅读 稻草人周刊，一个读者的自述，每周一更新。" "🔖" >}}

## 🎧 这周在听什么？

## 🧑‍💻 这周做了什么？

移除了博客的 [swup.js](https://swup.js.org)，使用 CSS 的新特性 View Transition 实现了非常丝滑的页面切换，我愿称之为年度最伟大的 CSS API。要实现 View Transition，你只需要：

```css
@view-transition {
  navigation: auto;
}
```

大功告成！如果想要了解更多，请继续阅读周刊后面的内容。

## 📚 这周读了什么？

## 🧠 这周思考了什么？

### 你好像在看手机

Pippin Barr 做了一个叫做「[It is as if you were on your phone](https://pippinbarr.com/it-is-as-if-you-were-on-your-phone/info/)」的网页游戏，仅限手机游玩。作者说：「假装你在看手机从来没有像现在这样重要过！」或许是因为不想说法，又或者是为了融入人类，你可能需要假装你在看手机，但又不想让任何信息占据你的大脑，那就试试这款游戏吧！

游戏的 UI 分为两个部分，上半部分是动作提示词，会随机出现一些句子提示你现在应该做什么动作，比如：

1. 盯着屏幕看
2. 皱眉
3. 摇摇头
4. 把两根手指放在嘴唇上
5. 呼气
6. 抬高眉头然后身体前倾

下半部分是操作屏幕，上面会随机出现一些你能够点击或者双击的元素，有的时候你需要拖动小球，有的时候你只需要盯着一个旋转的线条看。

虽然最好的方法其实是避免无意义社交，积极参与有意义的社交，但人也有身不由己的时候，如果不想被打扰又不想刷其他无意义的信息，这款游戏说不定能让你在什么都不做的情况下逃避社交。

### 收藏知识的后续动作？

Xiaoxiao 写了一篇《[关于收藏知识的后续动作](https://liuyuntian.com/2025/03/13/subsequent-actions-regarding-collecting-knowledge.html)》，他发现自己过去十几年收集的好文章，如今看来大部分都过时了，一方面是因为技术和趋势变化太快，另一方面是因为这些知识一直没有被转化为自己的东西。

作者指出，对于收藏的知识，应该定期回顾，删除没有用的内容，及时总结输出，才能内化，让有用的知识变成自己的。

而我在想，能不能完全移除「收藏知识」这一步？因为收藏就意味着告诉自己「我可以一会再看」，到最后回顾这些收藏项目就会变得非常痛苦。如果能在当下就稍微多花几分钟，将读到的、听见到的、看到的，及时地用自己的话写成笔记，而不是「收藏」，兴许会好很多。



## 💡 这周学到了什么？

### View Transition

CSS 的 View Transition API 其实在 2023 年上半年就已经开始测试了，如今已经被大多数现代浏览器支持（除了火狐）。

![image-20250316100620618](https://image.guhub.cn/uPic/2025/03/image-20250316100620618.png)

你只需要在网站的 CSS 文件中加上：

```css
@view-transition {
  navigation: auto;
}
```

浏览器就能自动帮你实现简单的渐变切页效果，而且非常丝滑，已经足够应付大部分场景了。如果你想要更细致的切页动画，比如现在从本站首页点击文章链接，就能看到链接丝滑地过渡为页面文章标题的动效，你只需要额外为这些元素添加 `view-transition-name` 属性就可以了。

```html
<!-- 在文章列表中 -->
<a 
   href="/post/xxx" 
   style="view-transition-name: post-xxx"
>文章标题</a>

<!-- 在文章页面中 -->
<header style="view-transition-name: post-xxx">
	<h1>文章标题</h1>
</header>
```

关于 View Transition，如果想要了解更多，可以阅读 [Dave 的博客](https://daverupert.com/2023/05/getting-started-view-transitions/)，他也用这个 API 在博客上实现了许多酷炫的切换效果。

Jim Nielsen 也在他的博客提出了用很多小 HTML 页面作为组件，利用 View Transition 实现很多原本要用到 JavaScript 才能实现的效果，比如下拉菜单。如果你感兴趣，可以阅读[他的博客文章](https://blog.jim-nielsen.com/2025/lots-of-little-html-pages/)，我觉得非常有意思。前端在减少 JavsScript 代码数量上又前进了一大步！

---

## 🗣️ 碎碎念