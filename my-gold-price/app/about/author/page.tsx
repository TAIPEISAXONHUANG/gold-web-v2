import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '鑑定師L｜巧品珠寶駐店珠寶鑑定師・國際認證專家',
  description: '鑑定師L 擁有鑽石、翡翠、彩色寶石、珠寶等多項國際認證，HRD 高級珠寶顧問資格，從事珠寶鑑定與採購顧問服務逾十年，現為巧品珠寶駐店鑑定師。',
  alternates: {
    canonical: 'https://www.gold-tw.com/about/author',
  },
  openGraph: {
    title: '鑑定師L｜巧品珠寶駐店鑑定師',
    description: '擁有鑽石、翡翠、彩色寶石等多項國際認證，10年以上珠寶鑑定資歷，中華民國珠寶鑑定協會會員。',
    url: 'https://www.gold-tw.com/about/author',
    siteName: '巧品珠寶',
    locale: 'zh_TW',
    type: 'profile',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.gold-tw.com/#expert',
  name: '鑑定師L',
  jobTitle: '駐店珠寶鑑定師',
  url: 'https://www.gold-tw.com/about/author',
  worksFor: {
    '@id': 'https://www.gold-tw.com/#organization',
  },
  description:
    '擁有鑽石鑑定師、HRD 高級珠寶顧問、翡翠鑑定師、彩色寶石鑑定師、珠寶鑑定師等多項國際認證，從事珠寶鑑定與採購顧問服務逾十年。現為巧品珠寶駐店鑑定師，同時擔任中華海峽珠寶交流協會理事。',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: '鑽石鑑定師',
      credentialCategory: '國際認證',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'HRD 高級珠寶顧問（Jewellery Consultancy Course）',
      credentialCategory: '國際認證',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: '翡翠鑑定師',
      credentialCategory: '國際認證',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: '彩色寶石鑑定師',
      credentialCategory: '國際認證',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: '珠寶鑑定師',
      credentialCategory: '國際認證',
    },
  ],
  memberOf: [
    {
      '@type': 'Organization',
      name: '中華民國珠寶鑑定協會',
      description: '會員',
    },
    {
      '@type': 'Organization',
      name: '中華海峽珠寶交流協會',
      description: '理事',
    },
  ],
  knowsAbout: [
    '鑽石鑑定',
    '彩色寶石',
    '彩鑽',
    'GIA 鑽石',
    '翡翠鑑定',
    '黃金回收估價',
    '珠寶採購',
    'HRD 珠寶顧問',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: '珠寶鑑定師',
    occupationLocation: {
      '@type': 'City',
      name: '台北市',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://www.gold-tw.com' },
    { '@type': 'ListItem', position: 2, name: '關於鑑定師', item: 'https://www.gold-tw.com/about/author' },
  ],
}

export default function AuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-yellow-700">首頁</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">關於鑑定師</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">鑑定師 L</h1>
          <p className="text-yellow-700 font-medium text-lg">巧品珠寶 駐店珠寶鑑定師</p>
        </header>

        {/* Bio */}
        <section className="prose prose-gray max-w-none mb-10">
          <p className="text-gray-700 text-base leading-relaxed">
            鑑定師L 是巧品珠寶的駐店珠寶鑑定師，擁有多項國際專業認證，從事珠寶鑑定與採購顧問服務逾十年。
            深耕彩色寶石、彩鑽、GIA 鑽石及翡翠等專業領域，同時擔任中華海峽珠寶交流協會理事，
            並受邀為台灣珠寶雜誌特約撰稿人。
          </p>
        </section>

        {/* Credentials */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">國際認證</h2>
          <ul className="space-y-2">
            {[
              '鑽石鑑定師',
              'HRD 高級珠寶顧問（Jewellery Consultancy Course）',
              '翡翠鑑定師',
              '彩色寶石鑑定師',
              '珠寶鑑定師',
            ].map((cert) => (
              <li key={cert} className="flex items-start gap-2 text-gray-700">
                <span className="mt-1 text-yellow-600 flex-shrink-0">✦</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Industry roles */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">業界資歷</h2>
          <ul className="space-y-2">
            {[
              '中華民國珠寶鑑定協會 會員',
              '中華海峽珠寶交流協會 理事',
              '台灣珠寶雜誌 特邀撰稿人',
              '台北市衡陽扶輪社 珠寶拍賣官',
            ].map((role) => (
              <li key={role} className="flex items-start gap-2 text-gray-700">
                <span className="mt-1 text-yellow-600 flex-shrink-0">✦</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Expertise */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">專業領域</h2>
          <p className="text-gray-700">彩色寶石、彩鑽、GIA 鑽石、翡翠鑑定、黃金回收估價</p>
        </section>

        {/* CTA */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4">需要專業珠寶鑑定或黃金估價？歡迎親臨巧品珠寶。</p>
          <p className="text-sm text-gray-500 mb-4">台北市大安區濟南路3段62-1號・捷運忠孝新生站步行5分鐘</p>
          <a
            href="tel:+886986821626"
            className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
          >
            立即來電 0986-821-626
          </a>
        </div>
      </main>
    </>
  )
}
