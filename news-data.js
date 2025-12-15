(() => {
  const defaultNews = [
    {
      id: '001',
      title: 'RAID3 公式サイトリニューアルのお知らせ',
      date: '2024-12-15',
      tags: ['ANNOUNCEMENT'],
      thumbnail: '',
      excerpt: '公式サイトをリニューアルしました。使いやすいデザインで最新情報をお届けします。',
      body: `
        <p>いつもRAID3を応援いただき、誠にありがとうございます。</p>
        <p>この度、RAID3の公式ウェブサイトを全面リニューアルいたしました。より見やすく、より使いやすいデザインを目指し、皆様に最新情報をお届けできるよう改善を行いました。</p>
        <h2>主な変更点</h2>
        <ul>
          <li>モダンなデザインへの刷新</li>
          <li>クリエイター紹介ページの充実</li>
          <li>ニュースセクションの追加</li>
          <li>オフィシャルグッズストアへのリンク追加</li>
        </ul>
        <p>今後もRAID3はWeb3ゲーミングの可能性を追求し、透明性と信頼を大切にしたコンテンツをお届けしてまいります。</p>
        <p>引き続き、RAID3をよろしくお願いいたします。</p>
      `,
      createdAt: '2024-12-15T00:00:00.000Z'
    },
    {
      id: '002',
      title: '新メンバー加入のお知らせ',
      date: '2024-12-10',
      tags: ['TEAM', 'WEB3'],
      thumbnail: '',
      excerpt: 'Web3ゲーミングシーンで活躍する新メンバーがRAID3に加入しました。',
      body: `
        <p>RAID3に新たなメンバーが加入することになりましたので、お知らせいたします。</p>
        <p>今回加入するのは、Web3ゲーミングシーンで活躍中のストリーマーです。詳細は近日中に発表いたします。</p>
        <h2>RAID3について</h2>
        <p>RAID3は「HUB」モデルを採用し、専属契約なしでクリエイターが自由に活動できる環境を提供しています。透明性を重視したコンテンツ制作を行い、Web3ゲーミングの正しい情報を発信していきます。</p>
        <p>新メンバーの活躍にご期待ください！</p>
      `,
      createdAt: '2024-12-10T00:00:00.000Z'
    },
    {
      id: '003',
      title: '年末コラボ配信イベント開催決定',
      date: '2024-12-05',
      tags: ['EVENT', 'STREAM'],
      thumbnail: '',
      excerpt: '年末スペシャルコラボ配信イベントの開催が決定しました。',
      body: `
        <p>RAID3メンバー全員参加の年末スペシャルコラボ配信イベントの開催が決定しました！</p>
        <h2>イベント概要</h2>
        <ul>
          <li>日時：2024年12月31日（火）20:00〜</li>
          <li>配信プラットフォーム：YouTube / Twitch</li>
          <li>内容：Web3ゲーム振り返り＆2025年予想トーク</li>
        </ul>
        <p>2024年のWeb3ゲーミングシーンを振り返りながら、来年の展望についてメンバー全員でトークします。視聴者参加型の企画も予定していますので、ぜひご参加ください！</p>
        <p>配信URLは後日、公式Xアカウントにてお知らせいたします。</p>
      `,
      createdAt: '2024-12-05T00:00:00.000Z'
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

