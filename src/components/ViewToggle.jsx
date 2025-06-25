import React from 'react';

/**
 * ViewToggle 컴포넌트
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.viewMode - 현재 보기 모드 ('list' 또는 'card')
 * @param {Function} props.setViewMode - 보기 모드를 변경하는 함수
 * 
 * @description
 * 목록형태와 카드형태 보기 모드를 전환하는 토글 버튼 컴포넌트
 * useState 훅 사용 예시: 부모 컴포넌트에서 상태를 관리하고 이 컴포넌트는 UI만 담당
 */
function ViewToggle({ viewMode, setViewMode }) {
  return (
    <div className="flex justify-center mb-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => setViewMode('list')}
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            viewMode === 'list'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } border border-gray-200`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          목록형
        </button>
        <button
          type="button"
          onClick={() => setViewMode('card')}
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            viewMode === 'card'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } border border-gray-200`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          카드형
        </button>
      </div>
    </div>
  );
}

export default ViewToggle;