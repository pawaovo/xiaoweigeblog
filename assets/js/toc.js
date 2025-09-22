(() => {
  // 只在有 TOC 的页面运行
  const toc = document.getElementById('toc');
  if (!toc) return;

  const headings = document.querySelectorAll('h2, h3, h4');
  if (headings.length === 0) return;

  // 创建 Intersection Observer 来监听标题
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      const tocLink = toc.querySelector(`a[href="#${id}"]`);
      if (!tocLink) return;

      const listItem = tocLink.parentElement;
      const isH2 = entry.target.tagName === 'H2';

      // 当遇到新的 H2 时，清除所有活动状态
      if (isH2) {
        toc.querySelectorAll('li.active').forEach(el => el.classList.remove('active'));
      }

      // 设置当前项为活动状态
      listItem.classList.add('active');

      // 如果这是 H3 或 H4，找到并激活其父级 H2
      if (!isH2) {
        const parentH2Item = findParentH2Item(listItem);
        if (parentH2Item) {
          parentH2Item.classList.add('active');
        }
      }

      // 滚动 TOC 到可见区域
      scrollTocIntoView(listItem);
    });
  }, {
    rootMargin: '0px 0px -50% 0px',
    threshold: 0.5
  });

  // 查找父级 H2 项
  function findParentH2Item(h3Item) {
    let current = h3Item.previousElementSibling;
    while (current) {
      const link = current.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        const targetElement = document.querySelector(href);
        if (targetElement && targetElement.tagName === 'H2') {
          return current;
        }
      }
      current = current.previousElementSibling;
    }
    return null;
  }

  // 滚动 TOC 到可见区域
  function scrollTocIntoView(activeItem) {
    const tocContainer = toc.parentElement;
    if (!tocContainer) return;

    const containerRect = tocContainer.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    // 检查是否需要滚动
    if (itemRect.top < containerRect.top || itemRect.bottom > containerRect.bottom) {
      activeItem.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  // 为所有标题添加观察
  headings.forEach(heading => {
    // 确保标题有 ID
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
    observer.observe(heading);
  });

  // 添加点击事件处理
  toc.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // 平滑滚动到目标位置
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // 更新 URL 但不触发页面跳转
        if (history.pushState) {
          history.pushState(null, null, `#${targetId}`);
        }
      }
    }
  });

  // 页面加载时检查 URL 中的锚点
  function checkInitialHash() {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }

  // 页面加载完成后检查初始锚点
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkInitialHash);
  } else {
    checkInitialHash();
  }
})();
