(() => {
  const allTooltipped = document.querySelectorAll('[data-tooltip]');

  const createOrUpdateTooltip = (element) => {
    const tooltipText = element.getAttribute('data-tooltip') || element.getAttribute('title');

    if (!tooltipText) return;

    let tooltipElement = element.querySelector('.__generated-tooltip');
    if (!tooltipElement) {
      element.classList.add('group', 'relative', 'tooltipped');

      tooltipElement = document.createElement('div');
      tooltipElement.classList.add(
        '__generated-tooltip',
        ...'absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 bg-black/80 text-white px-2.5 py-1.5 rounded text-xs whitespace-nowrap opacity-0 invisible transition-all duration-300 pointer-events-none mb-2 z-1000 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 dark:bg-white/90 dark:text-black'.split(' ')
      );
      element.appendChild(tooltipElement);
    }

    tooltipElement.textContent = tooltipText;
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      createOrUpdateTooltip(element);

      // listen to tooltip text changes
      const mutationObserver = new MutationObserver(mutations => {
        for (const mutation of mutations) {
          if (mutation.type === 'attributes' &&
              (mutation.attributeName === 'title' || mutation.attributeName === 'data-tooltip')) {
            createOrUpdateTooltip(element);
          }
        }
      });

      mutationObserver.observe(element, {
        attributes: true,
        attributeFilter: ['title', 'data-tooltip'],
      });

      obs.unobserve(element); // 不再需要 Intersection 监听
    });
  }, {
    rootMargin: '100px',
    threshold: 0.1,
  });

  allTooltipped.forEach(el => observer.observe(el));
})();
