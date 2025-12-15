(() => {
  const defaultNews = [
      {
          "id": "001",
          "title": "RAID3 公式サイトリニューアルのお知らせ",
          "date": "2024-12-15",
          "tags": [
              "ANNOUNCEMENT"
          ],
          "thumbnail": "../images/news001.png",
          "excerpt": "公式サイトをリニューアルしました。使いやすいデザインで最新情報をお届けします。",
          "body": "<p>いつもRAID3を応援いただき、誠にありがとうございます。</p>\n        <p>この度、RAID3の公式ウェブサイトを全面リニューアルいたしました。より見やすく、より使いやすいデザインを目指し、皆様に最新情報をお届けできるよう改善を行いました。</p>\n        <h2>主な変更点</h2>\n        <ul>\n          <li>モダンなデザインへの刷新</li>\n          <li>クリエイター紹介ページの充実</li>\n          <li>ニュースセクションの追加</li>\n          <li>オフィシャルグッズストアへのリンク追加</li>\n        </ul>\n        \n        <p>引き続き、RAID3をよろしくお願いいたします。</p>",
          "createdAt": "2024-12-15T00:00:00.000Z"
      }
  ];

  const TAGS = ['ANNOUNCEMENT', 'TEAM', 'EVENT', 'STORE', 'STREAM', 'WEB3'];
  const STORAGE_KEY = 'newsData';

  const load = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [...defaultNews];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) return [...defaultNews];
      return parsed;
    } catch {
      return [...defaultNews];
    }
  };

  const persist = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const sortDesc = (items) =>
    [...items].sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0));

  const getAll = () => sortDesc(load());

  const getById = (id) => load().find((item) => item.id === id);

  const upsert = (payload) => {
    const items = load();
    const index = items.findIndex((i) => i.id === payload.id);
    if (index >= 0) {
      items[index] = { ...items[index], ...payload };
    } else {
      items.push(payload);
    }
    persist(items);
    return sortDesc(items);
  };

  const remove = (id) => {
    persist(load().filter((i) => i.id !== id));
    return getAll();
  };

  const reset = () => {
    persist(defaultNews);
    return getAll();
  };

  window.NewsData = {
    TAGS,
    getAll,
    getById,
    upsert,
    remove,
    reset
  };
})();
