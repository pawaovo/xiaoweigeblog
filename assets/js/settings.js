(() => {
  /**
   * ===========
   * Font Size
   * ===========
   */

   const setFontSize = (size) => {
     if (size) localStorage.setItem('xiaoweigeblog.ui.fontSize', size);
     const fontSizeSelected = size || localStorage.getItem('xiaoweigeblog.ui.fontSize') || 'medium';

     const markdownBodies = document.querySelectorAll('.markdown-body');

     const fontSizeClass = {
       'small': ['text-sm', 'md:text-base'],
       'medium': ['text-lg', 'md:text-xl'],
       'large': ['text-xl', 'md:text-2xl']
     }

     markdownBodies.forEach((body) => {
       // remove existing font size classes
       body.classList.remove(...fontSizeClass['small'],
         ...fontSizeClass['medium'],
         ...fontSizeClass['large'])
       // add required font classes
       body.classList.add(...fontSizeClass[fontSizeSelected])
     });
   }
   setFontSize();

   /**
    * ===========================
    * Initialize Settings Page
    * ===========================
    */

    // return if this is not the settings page
    if (!document.getElementById('settings')) return;

    const initializeSettingsPage = () => {
      // initialize text altering buttons
      function initTextAlterButtons() {
        const textAlterButtons = document.querySelectorAll('#text-alter-buttons button');
        textAlterButtons.forEach(button => {
          // highlight selected button
          if (button.dataset.textSize === localStorage.getItem('xiaoweigeblog.ui.fontSize')) {
            button.classList.add('bg-neutral-200/50', 'dark:bg-neutral-700/50');
          }

          // switch font size when clicked
          button.addEventListener('click', () => {
            setFontSize(button.dataset.textSize);
            // highlight selected button
            textAlterButtons.forEach(btn => btn.classList.remove('bg-neutral-200/50', 'dark:bg-neutral-700/50'));
            button.classList.add('bg-neutral-200/50', 'dark:bg-neutral-700/50');
          });
        });
      }
      initTextAlterButtons()

      // initialize checkbox options
      function initCheckboxes() {
        const checkboxOptions = [
          {
            id: 'dontAllowTracking',
            label: '禁止网站使用 Web 分析工具跟踪用户行为',
            storage: 'umami.disabled',
            default: 'false'
          },
          {
            id: 'hideBatrick',
            label: '隐藏回到顶部按钮',
            storage: 'xiaoweigeblog.ui.hideBatrick',
            default: 'false'
          }
        ]

        checkboxOptions.forEach(checkboxOption => {
          // create checkbox
          const element = document.createElement('input');
          element.type = 'checkbox';
          element.id = checkboxOption.id;
          element.checked = localStorage.getItem(checkboxOption.storage) ||
            checkboxOption.default === 'true';

          // add event listener to checkbox
          element.addEventListener('change', () => {
            if (element.checked)
              localStorage.setItem(checkboxOption.storage, 1);
            else
              localStorage.removeItem(checkboxOption.storage);
          });

          // create label
          const label = document.createElement('label');
          label.htmlFor = element.id;
          label.textContent = checkboxOption.label;

          // wrap checkbox and label in a div
          const wrapper = document.createElement('div');
          wrapper.classList.add('flex', 'items-center', 'mb-2', 'gap-2');
          wrapper.appendChild(element);
          wrapper.appendChild(label);

          // append checkbox and label to container
          const container = document.getElementById('checkbox-options');
          container.appendChild(wrapper);
        });
      }
      initCheckboxes();
    };

    initializeSettingsPage();
})();
