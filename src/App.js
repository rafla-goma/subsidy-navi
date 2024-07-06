import React, { useState } from 'react';
import { Search, Bell, User, TrendingUp, Award, FileText, ArrowRight, Info, CheckCircle } from 'lucide-react';

const SubsidyInfoService = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubsidy, setSelectedSubsidy] = useState(null);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [diagnosisResults, setDiagnosisResults] = useState(null);

  // 拡張されたダミーデータ
  const allSubsidies = [
    { id: 1, title: '革新的技術開発支援補助金', description: '中小企業の革新的な技術開発プロジェクトを支援します。最大1000万円の補助金が利用可能です。', deadline: '2024年8月31日', category: '技術開発', popularity: 95 },
    { id: 2, title: 'グリーンイノベーション促進補助金', description: '環境に配慮した新製品・サービスの開発を行う中小企業を支援します。最大500万円の補助金が利用可能です。', deadline: '2024年9月30日', category: '環境', popularity: 88 },
    { id: 3, title: 'デジタルトランスフォーメーション推進補助金', description: '中小企業のDX推進を支援します。ITツールの導入から業務プロセスの改善まで幅広くサポートします。', deadline: '2024年10月15日', category: 'IT', popularity: 92 },
    { id: 4, title: '事業承継・引継ぎ支援補助金', description: '事業承継・引継ぎを契機とした新たな取り組みを支援します。最大400万円の補助金が利用可能です。', deadline: '2024年11月30日', category: '事業承継', popularity: 75 },
    { id: 5, title: '海外展開支援補助金', description: '中小企業の海外進出を支援します。市場調査から現地法人設立まで幅広くサポートします。', deadline: '2024年12月15日', category: '海外展開', popularity: 80 },
    { id: 6, title: 'ポストコロナ対応ビジネスモデル転換補助金', description: 'コロナ禍後の新しい生活様式に対応したビジネスモデルへの転換を支援します。', deadline: '2024年9月1日', category: 'ビジネスモデル', popularity: 89 },
    { id: 7, title: 'AI・IoT活用促進補助金', description: '中小企業におけるAIやIoT技術の活用を促進し、生産性向上を図ります。', deadline: '2024年10月31日', category: 'IT', popularity: 87 },
    { id: 8, title: '地域資源活用販路開拓補助金', description: '地域の特産品や観光資源を活用した新商品開発や販路開拓を支援します。', deadline: '2024年11月15日', category: '地域振興', popularity: 78 },
    { id: 9, title: 'ものづくり・商業・サービス生産性向上促進補助金', description: '中小企業の生産性向上に資する革新的サービス開発・試作品開発・生産プロセスの改善を行うための設備投資等を支援します。', deadline: '2024年12月31日', category: '生産性向上', popularity: 93 },
    { id: 10, title: '小規模事業者持続化補助金', description: '小規模事業者の販路開拓等のための取り組みを支援します。', deadline: '2024年10月1日', category: '販路開拓', popularity: 91 },
  ];

  const popularSubsidies = allSubsidies.sort((a, b) => b.popularity - a.popularity).slice(0, 5);
  const newSubsidies = allSubsidies.sort((a, b) => new Date(b.deadline) - new Date(a.deadline)).slice(0, 5);
  const recommendedSubsidies = allSubsidies.sort(() => 0.5 - Math.random()).slice(0, 5);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('検索クエリ:', searchQuery);
    // ここで検索ロジックを実装
  };

  const handleSubsidyClick = (subsidy) => {
    setSelectedSubsidy(subsidy);
  };

  const handleDiagnosisStart = () => {
    setShowDiagnosis(true);
  };

  const handleDiagnosisSubmit = (e) => {
    e.preventDefault();
    // ダミーの診断ロジック
    const results = allSubsidies.filter(subsidy => 
      Math.random() > 0.5
    ).slice(0, 3);
    setDiagnosisResults(results);
  };

  const SubsidyModal = ({ subsidy, onClose }) => {
    if (!subsidy) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">{subsidy.title}</h2>
          <p className="mb-4">{subsidy.description}</p>
          <p className="text-sm font-medium text-indigo-600 mb-2">申請期限: {subsidy.deadline}</p>
          <p className="text-sm font-medium text-green-600 mb-4">カテゴリ: {subsidy.category}</p>
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              閉じる
            </button>
            <button className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all">
              申請する
            </button>
          </div>
        </div>
      </div>
    );
  };

  const DiagnosisForm = () => (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-800">企業診断</h2>
      <form onSubmit={handleDiagnosisSubmit} className="space-y-4">
        <div>
          <label htmlFor="industry" className="block mb-2">業種</label>
          <select id="industry" className="w-full p-2 border rounded">
            <option>製造業</option>
            <option>サービス業</option>
            <option>小売業</option>
            <option>IT・ソフトウェア</option>
            <option>その他</option>
          </select>
        </div>
        <div>
          <label htmlFor="employees" className="block mb-2">従業員数</label>
          <input type="number" id="employees" className="w-full p-2 border rounded" placeholder="例: 50" />
        </div>
        <div>
          <label htmlFor="annualSales" className="block mb-2">年間売上高（万円）</label>
          <input type="number" id="annualSales" className="w-full p-2 border rounded" placeholder="例: 10000" />
        </div>
        <div>
          <label htmlFor="businessGoals" className="block mb-2">事業目標（複数選択可）</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> 技術開発・イノベーション
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> 海外展開
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> デジタル化・DX推進
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> 環境対策・サステナビリティ
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all">
          診断結果を見る
        </button>
      </form>
    </div>
  );

  const DiagnosisResults = ({ results }) => (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-800">診断結果：おすすめの補助金</h2>
      <ul className="space-y-4">
        {results.map(subsidy => (
          <li key={subsidy.id} className="flex items-start">
            <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">{subsidy.title}</h3>
              <p className="text-sm text-gray-600">{subsidy.description}</p>
              <button
                onClick={() => handleSubsidyClick(subsidy)}
                className="text-indigo-600 hover:text-indigo-800 transition-colors text-sm mt-1"
              >
                詳細を見る
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <header className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-4 mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">補助金ナビ</h1>
        <nav className="flex space-x-4">
          <button onClick={handleDiagnosisStart} className="text-indigo-600 hover:text-indigo-800 transition-colors">企業診断</button>
          <button className="text-gray-600 hover:text-indigo-600 transition-colors"><Bell size={24} /></button>
          <button className="text-gray-600 hover:text-indigo-600 transition-colors"><User size={24} /></button>
        </nav>
      </header>
      <main className="space-y-8">
        {showDiagnosis ? (
          diagnosisResults ? <DiagnosisResults results={diagnosisResults} /> : <DiagnosisForm />
        ) : (
          <>
            <section className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-800">補助金を探す</h2>
              <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-inner overflow-hidden">
                <input
                  type="text"
                  placeholder="キーワードを入力"
                  className="flex-grow p-4 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all">
                  <Search size={24} />
                </button>
              </form>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: '人気の補助金', color: 'from-green-400 to-blue-500', data: popularSubsidies },
                { icon: Award, title: '新着の補助金', color: 'from-yellow-400 to-orange-500', data: newSubsidies },
                { icon: FileText, title: 'あなたへのおすすめ', color: 'from-pink-400 to-red-500', data: recommendedSubsidies }
              ].map((item, index) => (
                <div key={index} className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${item.color} text-white rounded-full p-3 inline-block mb-4`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <ul className="text-gray-600 mb-4">
                    {item.data.map(subsidy => (
                      <li key={subsidy.id} className="mb-2">
                        <button 
                          onClick={() => handleSubsidyClick(subsidy)}
                          className="text-left hover:text-indigo-600 transition-colors"
                        >
                          {subsidy.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
                    もっと見る <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              ))}
            </section>
          </>
        )}
      </main>
      <SubsidyModal subsidy={selectedSubsidy} onClose={() => setSelectedSubsidy(null)} />
    </div>
  );
};

export default SubsidyInfoService;