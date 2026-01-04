/**
 * 言語を切り替える関数
 * HTMLの onclick="switchLang('en')" から呼ばれる
 */
function switchLang(lang) {
    document.body.className = lang;
    localStorage.setItem('preferredLanguage', lang);
}

/**
 * モーダルを表示する関数
 * HTMLの onclick="showModal(this)" から呼ばれる
 */
function showModal(imgElement) {
    const modalEl = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    // Bootstrapが読み込まれているか確認
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap JS is not loaded.');
        return;
    }

    // バグ対策: 開く前に aria-hidden 属性を強制的に削除
    modalEl.removeAttribute('aria-hidden');

    // 画像パスをセット
    modalImg.src = imgElement.src;

    // モーダルを取得（なければ作成）して表示
    const myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    myModal.show();
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. 保存された言語設定の復元
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        document.body.className = savedLang;
    }

    // 2. モーダルの初期化
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
        bootstrap.Modal.getOrCreateInstance(modalElement);
    }
}); 