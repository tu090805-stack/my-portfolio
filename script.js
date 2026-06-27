document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. TÍNH NĂNG MENU TRÊN ĐIỆN THOẠI (Giữ nguyên)
    // ----------------------------------------------------
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (btn && menu) {
        // Mở / Đóng menu
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Đóng menu khi click vào một link
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    if (navbar) {
        // Đổ bóng cho thanh navbar khi cuộn xuống
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-md');
            } else {
                navbar.classList.remove('shadow-md');
            }
        });
    }

    // ----------------------------------------------------
    // 2. TÍNH NĂNG ĐA NGÔN NGỮ (VI / EN)
    // ----------------------------------------------------
    const langToggleBtn = document.getElementById('lang-toggle');
    // Kiểm tra xem người dùng đã từng chọn ngôn ngữ nào chưa, nếu chưa thì mặc định là 'vi'
    let currentLang = localStorage.getItem('portfolio_lang') || 'vi';

    function setLanguage(lang) {
        currentLang = lang;
        // Lưu lựa chọn vào bộ nhớ trình duyệt để lần sau vào lại web vẫn giữ nguyên ngôn ngữ đó
        localStorage.setItem('portfolio_lang', lang);
        
        // Đổi tên nút bấm
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'vi' ? 'EN' : 'VI';
        }

        // Tìm TẤT CẢ các thẻ HTML có chứa thuộc tính data-vi
        // và thay đổi nội dung (innerHTML) của thẻ đó tương ứng với ngôn ngữ được chọn
        const elementsToTranslate = document.querySelectorAll('[data-vi]');
        elementsToTranslate.forEach(el => {
            const translatedText = el.getAttribute(`data-${lang}`);
            if (translatedText) {
                el.innerHTML = translatedText;
            }
        });
    }

    // Gắn sự kiện click cho nút đổi ngôn ngữ
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'vi' ? 'en' : 'vi');
        });
    }

    // Khởi chạy ngôn ngữ ngay khi trang vừa load xong
    setLanguage(currentLang);
});
