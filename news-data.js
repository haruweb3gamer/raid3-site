// RAID3 News Data - Generated 2025-12-17T01:33:03.641Z
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
    "excerpt": "12月20日22:00 RAID3公式YouTubeチャンネルにて2周年記念配信を行います。",
    "body": "<h2>12月20日22:00 RAID3公式YouTubeチャンネルにて配信</h2>\n\n<p>配信は<a href=\"https://www.youtube.com/live/xb7QdSKes1w?si=-8UenLNFQcQ5yVTY\">こちら</a>から</p>\n\n<p>配信中にサプライズも⁉</p>\n<p>同日にプレミア公開予定の動画もお楽しみに➡<a href=\"https://youtu.be/QY6dfnIhtW0?si=o3WUKRbYRQfur1cU\">こちら</a></p>"
  },
  {
    "id": "002",
    "title": "RAID3 公式サイトリニューアルのお知らせ",
    "date": "2025-12-15",
    "thumbnail": "images/news001.png",
    "tags": [
      "ANNOUNCEMENT"
    ],
    "excerpt": "RAID3の公式ウェブサイトを全面リニューアルいたしました。",
    "body": "<p>いつもRAID3を応援いただき、誠にありがとうございます。</p>\n\n<p>この度、RAID3の公式ウェブサイトを全面リニューアルいたしました。</p>"
  },
  {
    "id": "004",
    "title": "Lateω｜Xociety公認クリエイターに就任",
    "date": "2025-12-09",
    "tags": [
      "ANNOUNCEMENT",
      "TEAM"
    ],
    "thumbnail": "images/news004.png",
    "excerpt": "Xociety 公認クリエイターに RAID3所属「Lateω」が就任",
    "body": "<h2>Xociety 公認クリエイターに RAID3所属「Lateω」が就任</h2>\n\n<p>この度、RAID3所属クリエイター Lateω（レイト） が、Web3シューティングゲーム Xociety の公認クリエイターに就任したことをお知らせいたします。</p>\n\n<p>本件は、Xociety公式Xアカウントより正式に発表されたものであり、Lateωのこれまでの活動実績や継続的な情報発信が評価され、今回の起用に至りました。</p>\n\n<p>今後はXociety公認クリエイターとして、ゲームプレイ配信や情報発信、コミュニティとの交流を通じて、本作の魅力を国内外へ発信していく予定です。</p>\n\n<p>RAID3は今後も、所属クリエイターの挑戦と成長を支援し、Web3ゲームシーンの発展に貢献してまいります。</p>\n\n<h3>🎮 Xociety とは</h3>\n\n<p>XOCIETYは、三人称視点（TPS）のPOPシューターに、エクストラクション型ゲームプレイとRPGコア要素を融合させたタイトルです。\n奥深いSF世界観を舞台に、まずは本格的なシューター体験を軸としながら、プレイヤーの体験価値を最優先にしたゲームへと進化していきます。</p>\n\n<p>本作は、PvPとPvEが融合したゲームプレイに加え、RPGメカニクスを取り入れることで、戦略性と成長要素のあるプレイ体験を実現しています。\nアクション性と没入感の高い世界観を兼ね備えた、次世代型シューターゲームです。</p>\n\n<h3>⬇️ ゲームダウンロード・公式リンク</h3>\n\n<p>Xociety 公式サイト</p>\n<a href=\"https://xociety.io/\">https://xociety.io/</a>\n\n<p>ゲームダウンロード（Epic Games Store）</p>\n<a href=\"https://store.epicgames.com/en-US/p/xociety-a7d5fe\">https://store.epicgames.com/en-US/p/xociety-a7d5fe</a>\n\n<p>Xociety 公式X（旧Twitter）</p>\n<a href=\"https://x.com/XOJPofficial\">https://x.com/XOJPofficial</a>\n\n<p>公認クリエイター就任 公式発表ポスト</p>\n<a href=\"https://x.com/XOJPofficial/status/1997501317250769003\">https://x.com/XOJPofficial/status/1997501317250769003</a>\n\n<h3>🔗 関連リンク</h3>\n\n<p>Lateω X</p>\n<a href=\"https://x.com/Bel_L_0o\">https://x.com/Bel_L_0o</a>\n\n<p>RAID3 公式サイト</p>\n<a href=\"https://raid3.vercel.app/\">https://raid3.vercel.app/</a>"
  },
  {
    "id": "001",
    "title": "チーム名変更のお知らせ",
    "date": "2025-12-08",
    "thumbnail": "images/news003.png",
    "tags": [
      "ANNOUNCEMENT"
    ],
    "excerpt": "OTAKU STREAMERSからRAID3へチーム名を変更しました。",
    "body": "<p>この度、新たなスタートを切る事となり、チーム名を変更致しました</p>\n\n<p>前) OTAKU STREAMERS</p>\n<p>後) RAID3 (レイドスリー)</p>"
  }
];
    const TAGS = ['ANNOUNCEMENT', 'TEAM', 'EVENT', 'STORE', 'STREAM', 'WEB3'];
    function getStoredNews() { try { const s = localStorage.getItem('raid3_news'); return s ? JSON.parse(s) : null; } catch(e) { return null; } }
    function saveNews(n) { try { localStorage.setItem('raid3_news', JSON.stringify(n)); } catch(e) {} }
    function getNews() { return getStoredNews() || defaultNews; }
    function sortByDate(items) { return [...items].sort((a, b) => new Date(b.date) - new Date(a.date)); }
    window.NewsData = {
        getAll: function() { return sortByDate(getNews()); },
        getById: function(id) { return getNews().find(n => n.id === id); },
        add: function(item) { const n = getNews(); n.unshift(item); saveNews(n); },
        update: function(id, u) { const n = getNews(); const i = n.findIndex(x => x.id === id); if(i !== -1) { n[i] = {...n[i], ...u}; saveNews(n); } },
        remove: function(id) { saveNews(getNews().filter(n => n.id !== id)); },
        reset: function() { localStorage.removeItem('raid3_news'); },
        TAGS: TAGS
    };
})();