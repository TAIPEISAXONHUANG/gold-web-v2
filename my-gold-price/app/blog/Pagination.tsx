'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function Pagination({ 
  totalItems, 
  itemsPerPage 
}: { 
  totalItems: number; 
  itemsPerPage: number;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(`/blog?page=${page}`);
  };

  return (
    <div style={{ 
      marginTop: '2rem', 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '0.5rem',
      flexWrap: 'wrap'
    }}>
      {/* 上一頁 */}
      <button 
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: '8px 16px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          background: currentPage === 1 ? '#f3f4f6' : 'white',
          color: currentPage === 1 ? '#9ca3af' : '#666',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
        }}
      >
        ← 上一頁
      </button>
      
      {/* 頁碼 */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          style={{
            padding: '8px 14px',
            border: page === currentPage ? '2px solid #b91c1c' : '1px solid #e5e7eb',
            borderRadius: '8px',
            color: page === currentPage ? '#b91c1c' : '#666',
            fontWeight: page === currentPage ? 'bold' : 'normal',
            background: page === currentPage ? '#fef2f2' : 'white',
            cursor: 'pointer'
          }}
        >
          {page}
        </button>
      ))}
      
      {/* 下一頁 */}
      <button 
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: '8px 16px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          background: currentPage === totalPages ? '#f3f4f6' : 'white',
          color: currentPage === totalPages ? '#9ca3af' : '#666',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
        }}
      >
        下一頁 →
      </button>
    </div>
  );
}
