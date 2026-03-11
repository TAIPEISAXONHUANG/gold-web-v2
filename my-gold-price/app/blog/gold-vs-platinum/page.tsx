import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金、白金、K金有何不同？一篇搞懂',
  description: '黃金、白金、K金到底差在哪？回收價格怎麼算？完整比較讓你一目了然！',
  keywords: '黃金vs白金,K金是什麼,珠寶材質比較',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金、白金、K金差異比較</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>材質</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>黃金含量</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>特性</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>回收價格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>24K (9999)</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>99.99%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>純金，質軟</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>最高</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>硬度高，適合鑲嵌</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>中等</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>14K</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.5%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>硬度高，耐磨</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>中等</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>白金(鉑金)</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Pt950/Pt900</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>不褪色，光澤佳</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>較高</td>
          </tr>
        </tbody>
      </table>

      <h2>如何辨識K金？</h2>
      <p>珠寶上通常會打上標記：18K、750、14K、585等。</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>各類珠寶回收</h2>
      <p>巧品珠寶回收所有黃金、K金、白金飾品，無論是斷掉的、舊款都能收！</p>
      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 查詢今日報價
      </a>
    </main>
  );
}
