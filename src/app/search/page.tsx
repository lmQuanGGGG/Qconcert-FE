
import { Suspense } from 'react';
import SearchPageContent from './SearchPageContent';

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-white">Đang tải trang tìm kiếm...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
