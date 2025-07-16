---
title: "Markdown 语法指南"
date: 2025-07-16T11:00:00+08:00
tags: ["Markdown", "写作", "教程"]
categories: ["技术"]
draft: false
---

这篇文章展示了博客支持的各种 Markdown 语法和功能。

## 基础语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 文本格式

**粗体文本** 和 *斜体文本* 以及 ~~删除线~~。

### 列表

无序列表：
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

有序列表：
1. 第一项
2. 第二项
3. 第三项

### 链接和图片

[这是一个链接](https://example.com)

### 引用

> 这是一个引用块。
> 
> 可以包含多行内容。

### 代码

行内代码：`console.log('Hello World')`

代码块：

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('xiaoweige'));
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

### 表格

| 功能 | 支持 | 说明 |
|------|------|------|
| 语法高亮 | ✅ | 支持多种编程语言 |
| 数学公式 | ✅ | 支持 LaTeX 语法 |
| 图片 | ✅ | 支持本地和远程图片 |

### 分隔线

---

## 高级功能

### 高亮文本

这个主题支持 ==高亮文本== 功能。

### 任务列表

- [x] 完成博客搭建
- [x] 配置基础信息
- [ ] 写第一篇正式文章
- [ ] 配置评论系统

### 脚注

这里有一个脚注引用[^1]。

[^1]: 这是脚注的内容。

## 总结

这个博客支持丰富的 Markdown 语法，可以满足各种写作需求。开始您的创作之旅吧！
