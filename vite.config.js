import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // 글꼴 조각을 CSS에 넣지 않고 별도 파일로 두어 필요한 글자만 내려받게 합니다.
    assetsInlineLimit: 0,
  },
})
