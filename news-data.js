(() => {
  const defaultNews = [
      {
          "id": "news-1765808396349",
          "title": "【配信告知】２周年記念配信決定",
          "date": "2025-12-16",
          "tags": [
              "STREAM"
          ],
          "thumbnail": "../images/news002.png",
          "excerpt": "12/20㈯22:00からリブランディング＆２周年記念配信決定。サプライズも…！？",
          "body": "<h2>12/20㈯22:00～２周年記念配信決定</h2>\n<p>公式YouTubeチャンネルにて配信</p>\n<p>配信リンクは<a href=\"https://www.youtube.com/live/xb7QdSKes1w?si=fiEjeig1zQMmNqrV\" target=\"_blank\">こちら</a></p>\n<p>参加ストリーマー</p>\n<ul><li>Oshio</li><li>財黒オクト</li><li>星子にあ</li><li>Lateω</li></ul>\n<p>以上４名</p>\n<p>配信後にはサプライズも？</p>\n<p>同日、プレミア公開される動画もお見逃しなく</p>\n<p>プレミア公開動画は<a href=\"https://youtu.be/QY6dfnIhtW0?si=gOLpPsbi8OkiNhdb\" target=\"_blank\">こちら</a></p>",
          "createdAt": "2025-12-15T14:19:56.349Z"
      },
      {
          "id": "news-1765808628770",
          "title": "チーム名変更のお知らせ",
          "date": "2025-12-08",
          "tags": [
              "ANNOUNCEMENT"
          ],
          "thumbnail": "../images/news003.png",
          "excerpt": "【OTAKUSTREAMERS】は【RAID3】へチーム名を変更致しました。",
          "body": "<p>この度、新たなスタートを切る事となり、チーム名を変更致しました</p>\n\n<p>前) OTAKU STREAMERS</p>\n\n<p>後) RAID3 (レイドスリー)</p>\n\n<p>これまで支えてくださった関係者の皆様に心より感謝申し上げます</p>\n\n<p>新体制の元、更なる挑戦を続けて参りますので、引き続きご支援の程宜しくお願い致します</p>",
          "createdAt": "2025-12-15T14:23:48.770Z"
      },
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
