// 私密文章功能
class PrivatePostsManager {
    constructor() {
        this.modal = null;
        this.autoHideTimer = null;
        this.init();
    }
    
    init() {
        this.createModal();
        this.bindEvents();
    }
    
    createModal() {
        // 创建模态框HTML - 使用新的BEM类名
        const modalHTML = `
            <div class="private-modal" id="private-modal">
                <div class="private-modal__content">
                    <div class="private-modal__icon">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 8.5c0 0-2.53 5.333-3.215 8.062-0.896 3.57 0.13 6.268-1.172 9.73-2.25 4.060-2.402 4.717-10.613 4.708-3.009-0.003-11.626-2.297-11.626-2.297-1.188-0.305-3.373-0.125-3.373-1.453s1.554-2.296 2.936-2.3l5.439 0.478c1.322-0.083 2.705-0.856 2.747-2.585-0.022-2.558-0.275-4.522-1.573-6.6l-5.042-7.867c-0.301-0.626-0.373-1.694 0.499-2.171s1.862 0.232 2.2 0.849l5.631 7.66c0.602 0.559 1.671 0.667 1.58-0.524l-2.487-11.401c-0.155-0.81 0.256-1.791 1.194-1.791 1.231 0 1.987 0.47 1.963 1.213l2.734 11.249c0.214 0.547 0.972 0.475 1.176-0.031l0.779-10.939c0.040-0.349 0.495-0.957 1.369-0.831s1.377 1.063 1.285 1.424l-0.253 10.809c0.177 0.958 0.93 1.098 1.517 0.563l3.827-6.843c0.232-0.574 1.143-0.693 1.67-0.466 0.491 0.32 0.81 0.748 0.81 1.351v0z"/>
                        </svg>
                    </div>
                    <p class="private-modal__text">暂不可见</p>
                </div>
            </div>
        `;

        // 添加到页面
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('private-modal');
    }
    
    bindEvents() {
        // 绑定私密文章点击事件（使用新的统一类名）
        document.addEventListener('click', (e) => {
            const privateElement = e.target.closest('.private-content__link, .private-content__title');
            if (privateElement) {
                e.preventDefault();
                this.showModal();
            }
        });

        // 绑定模态框点击外部关闭事件
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hideModal();
                }
            });
        }

        // 绑定ESC键关闭事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('show')) {
                this.hideModal();
            }
        });
    }
    
    showModal() {
        if (!this.modal) return;
        
        // 清除之前的自动隐藏定时器
        if (this.autoHideTimer) {
            clearTimeout(this.autoHideTimer);
        }
        
        // 显示模态框
        this.modal.classList.add('show');
        
        // 设置2秒后自动隐藏
        this.autoHideTimer = setTimeout(() => {
            this.hideModal();
        }, 2000);
    }
    
    hideModal() {
        if (!this.modal) return;
        
        // 清除自动隐藏定时器
        if (this.autoHideTimer) {
            clearTimeout(this.autoHideTimer);
            this.autoHideTimer = null;
        }
        
        // 隐藏模态框
        this.modal.classList.remove('show');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new PrivatePostsManager();
});
