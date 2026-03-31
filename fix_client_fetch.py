path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 1. 改 props 簽名：從 initialData 改為 gasApiUrl
old_sig = "export default function ClientPage({ initialData }: { initialData: any }) {"
new_sig = "export default function ClientPage({ gasApiUrl }: { gasApiUrl: string }) {"
count = content.count(old_sig)
content = content.replace(old_sig, new_sig)
print(f"{count}x: function signature")

# 2. 移除舊的 initialData 解構
old_destruct = "  const { rates, updateTime, dailyTable, chartData, faq, articles } = initialData;"
new_destruct = """  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Client-side fetch: server 只送 HTML shell，資料由 client 自行抓取，不阻塞 FCP
    Promise.all([
      fetch(`${gasApiUrl}?action=getInitData`).then(r => r.json()),
      fetch(`${gasApiUrl}?action=getChartData`).then(r => r.json()),
      fetch(`${gasApiUrl}?action=getArticles`).then(r => r.json()),
    ]).then(([initData, chartData, articleList]) => {
      setData({
        rates: initData.rates?.rates || {},
        updateTime: initData.rates?.updatedAt || '',
        faq: initData.faq || [],
        dailyTable: chartData.dailyTable || [],
        chartData: chartData.chart || null,
        articles: articleList || [],
      });
    }).catch(err => console.error('GAS API error:', err));
  }, [gasApiUrl]);

  const rates = data?.rates || {};
  const updateTime = data?.updateTime || '';
  const dailyTable = data?.dailyTable || [];
  const chartData = data?.chartData || null;
  const faq = data?.faq || [];
  const articles = data?.articles || [];"""

count2 = content.count(old_destruct)
content = content.replace(old_destruct, new_destruct)
print(f"{count2}x: data fetch")

# 3. loading state 改成只顯示 null（讓頁面框架先出來）
# 不要整頁 loading，讓 Hero/Nav 先顯示，資料區 skeleton 另外處理

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
