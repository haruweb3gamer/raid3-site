// RAID3 News Data - Generated 2025-12-16T12:40:09.799Z
(function() {
    const defaultNews = [
  {
    "id": "003",
    "title": "２周年記念配信決定",
    "date": "2025-12-16",
    "thumbnail": "images/news002.png",
    "tags": [
      "STREAM"
    ],
    "body": "<h2>12月20日22:00 RAID3公式YouTubeチャンネルにて配信</h2>\n\n<p>配信は<a href=\"https://www.youtube.com/live/xb7QdSKes1w?si=-8UenLNFQcQ5yVTY\">こちら</a>から</p>\n\n<p>配信中にサプライズも⁉</p>\n<p>同日にプレミア公開予定の動画もお楽しみに➡<a href=\"https://youtu.be/QY6dfnIhtW0?si=o3WUKRbYRQfur1cU\">こちら</a></p>"
  },
  {
    "id": "001",
    "title": "チーム名変更のお知らせ",
    "date": "2025-12-08",
    "thumbnail": "images/news003.png",
    "tags": [
      "ANNOUNCEMENT"
    ],
    "body": "<p>この度、新たなスタートを切る事となり、チーム名を変更致しました</p>\n\n<p>前) OTAKU STREAMERS</p>\n\n<p>後) RAID3 (レイドスリー)</p>\n\n<p>これまで支えてくださった関係者の皆様に心より感謝申し上げます</p>\n\n<p>新体制の元、更なる挑戦を続けて参りますので、引き続きご支援の程宜しくお願い致します</p>"
  },
  {
    "id": "002",
    "title": "RAID3 公式サイトリニューアルのお知らせ",
    "date": "2025-12-15",
    "thumbnail": "images/news001.png",
    "tags": [
      "ANNOUNCEMENT"
    ],
    "body": "<p>いつもRAID3を応援いただき、誠にありがとうございます。</p>\n\n<p>この度、RAID3の公式ウェブサイトを全面リニューアルいたしました。より見やすく、より使いやすいデザインを目指し、皆様に最新情報をお届けできるよう改善を行いました。</p>\n\n<h2>主な変更点</h2>\n\n<ul>\n<li>モダンなデザインへの刷新</li>\n<li>クリエイター紹介ページの充実</li>\n<li>ニュースセクションの追加</li>\n<li>オフィシャルグッズストアへのリンク追加</li>\n</ul>\n\n<p>引き続き、RAID3をよろしくお願いいたします。</p>"
  }
];
    const TAGS = { INFO: 'お知らせ', EVENT: 'イベント', MEMBER: 'メンバー', COLLAB: 'コラボ', MEDIA: 'メディア' };
    function getStoredNews() { try { const s = localStorage.getItem('raid3_news'); return s ? JSON.parse(s) : null; } catch(e) { return null; } }
    function saveNews(n) { try { localStorage.setItem('raid3_news', JSON.stringify(n)); } catch(e) {} }
    function getNews() { return getStoredNews() || defaultNews; }
    window.NewsData = {
        getAll: function() { return getNews(); },
        getById: function(id) { return getNews().find(n => n.id === id); },
        add: function(item) { const n = getNews(); n.unshift(item); saveNews(n); },
        update: function(id, u) { const n = getNews(); const i = n.findIndex(x => x.id === id); if(i !== -1) { n[i] = {...n[i], ...u}; saveNews(n); } },
        remove: function(id) { saveNews(getNews().filter(n => n.id !== id)); },
        reset: function() { localStorage.removeItem('raid3_news'); },
        TAGS: TAGS
    };
})();