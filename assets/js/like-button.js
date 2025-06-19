(function() {
  // 获取页面ID（需要在HTML中设置）
  const pageId = window.likeButtonPageId;
  if (!pageId) {
    console.error('Like button: pageId not found');
    return;
  }
  
  const countEl = document.getElementById("like-count-" + pageId);
  const btnEl = document.getElementById("like-btn-" + pageId);
  const containerEl = document.getElementById("like-container-" + pageId);
  
  if (!countEl || !btnEl || !containerEl) {
    console.error('Like button: required elements not found');
    return;
  }
  
  let isNearComments = false;
  
  function checkScrollPosition() {
    const commentsSection = document.querySelector('.post-comments');
    if (!commentsSection) return;
    
    const rect = commentsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // 当评论区进入视窗下半部分时触发
    const shouldHighlight = rect.top < windowHeight * 0.8;
    
    if (shouldHighlight !== isNearComments) {
      isNearComments = shouldHighlight;
      // 如果已经点赞，不添加 near-comments 类（避免晃动）
      if (containerEl.classList.contains('liked')) {
        return;
      }
      
      if (isNearComments) {
        containerEl.classList.add('near-comments');
      } else {
        containerEl.classList.remove('near-comments');
      }
    }
  }
  
  function updateTooltip() {
    if (containerEl.classList.contains('liked')) {
      btnEl.setAttribute('title', btnEl.getAttribute('data-liked-title'));
    } else {
      btnEl.setAttribute('title', '为这篇文章献上心脏');
    }
  }
  
  function fetchLikes() {
    fetch("https://like.guhub.cn/like/" + pageId)
      .then(resp => resp.json())
      .then(data => {
        countEl.innerText = data.likes ?? 0;
        if (localStorage.getItem("liked_" + pageId)) {
          btnEl.disabled = true;
          containerEl.classList.add("liked");
          // 移除可能存在的 near-comments 类
          containerEl.classList.remove('near-comments');
          updateTooltip();
        }
      })
      .catch(() => {
        countEl.innerText = "❌";
      });
  }
  
  window.sendLike = function(pageId) {
    if (localStorage.getItem("liked_" + pageId)) return;

    if (window.location.hostname !== 'localhost') {
      if (typeof umami !== 'undefined') {
        umami.track('👍 Hit Like Button');
      }
    }
    
    // 添加点击效果
    btnEl.classList.add("clicked");
    setTimeout(() => {
      btnEl.classList.remove("clicked");
    }, 300);
    
    fetch("https://like.guhub.cn/like/" + pageId, { method: "POST" })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("liked_" + pageId, "1");
        countEl.innerText = data.likes ?? 1;
        btnEl.disabled = true;
        containerEl.classList.add("liked");
        // 移除 near-comments 类，停止晃动
        containerEl.classList.remove('near-comments');
        updateTooltip();
      })
      .catch(() => {
        alert("点赞失败，请稍后再试");
      });
  };
  
  // 监听滚动事件
  window.addEventListener('scroll', checkScrollPosition);
  window.addEventListener('resize', checkScrollPosition);
  
  // 初始化
  fetchLikes();
  checkScrollPosition();
})();