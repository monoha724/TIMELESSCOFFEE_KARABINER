import { http, HttpResponse } from 'msw'
import dummy from './dummy.json'

export const handlers = [
    http.get("/dummy", () => {
        return HttpResponse.json(dummy);
    })
  ]

// const products = [
//     {
//         id: 1,
//         img: '/items/best/set01.webp',
//         pName: 'TIMELESS COFFEE + ミルセット',
//         maker: 'TIMELESS COFFEE',
//         price: '3,400',
//     },
//     {
//         id: 2,
//         img: '/items/best/coffee01.webp',
//         pName: 'TIMELESS コーヒー豆 (100g)',
//         maker: 'TIMELESS COFFEE',
//         price: '880',
//     },
//     {
//         id: 3,
//         img: '/items/best/coffee02.webp',
//         pName: 'TIMELESS コーヒー豆 2個セット(200g)',
//         maker: 'TIMELESS COFFEE',
//         price: '1,650',
//     },
//     {
//         id: 4,
//         img: '/items/best/tumblr.webp',
//         pName: 'SUS Coffee タンブラー (350ml)',
//         maker: 'TIMELESS COFFEE',
//         price: '2,420',
//     },
//     {
//         id: 5,
//         img: '/items/drippers/dripper01.webp',
//         pName: 'ハニカムステンドリッパー',
//         maker: 'COFFEE CHANGGO',
//         price: '1,090',
//     },
//     {
//         id: 6,
//         img: '/items/drippers/dripper03.webp',
//         pName: 'SUS シリコーングリップドリッパー',
//         maker: 'DECEMBER',
//         price: '2,190',
//     },
//     {
//         id: 7,
//         img: '/items/drippers/dripper04.webp',
//         pName: 'ウェーブグラスドリッパー',
//         maker: 'KALITA',
//         price: '1,930',
//     },
//     {
//         id: 8,
//         img: '/items/drippers/dripper06.webp',
//         pName: 'セラミックドリッパー',
//         maker: 'HARIO',
//         price: '1,000',
//     },
//     {
//         id: 9,
//         img: '/items/filters/filter05.webp',
//         pName: 'NUVO コーヒーフィルター (100枚)',
//         maker: 'NUVO',
//         price: '210',
//     },
//     {
//         id: 10,
//         img: '/items/filters/filter07.webp',
//         pName: 'VCF コーヒーフィルター (100枚)',
//         maker: 'HARIO',
//         price: '390',
//     },
//     {
//         id: 11,
//         img: '/items/filters/filter08.webp',
//         pName: 'ウェーブコーヒーフィルター (100枚)',
//         maker: 'KALITA',
//         price: '400',
//     },
//     {
//         id: 12,
//         img: '/items/filters/filter12.webp',
//         pName: 'HOMEBREW ラウンドフィルター (120枚)',
//         maker: 'NUVO',
//         price: '275',
//     },
//     {
//         id: 13,
//         img: '/items/mills/mill01.webp',
//         pName: 'SUS Coffee ミル',
//         maker: 'TIMELESS COFFEE',
//         price: '2,750',
//     },
//     {
//         id: 14,
//         img: '/items/mills/mill03.webp',
//         pName: 'ハンドミルグラインダー MSS-1DTB',
//         maker: 'HARIO',
//         price: '3,525',
//     },
//     {
//         id: 15,
//         img: '/items/mills/mill04.webp',
//         pName: 'Etzinger ハンドミルグラインダー',
//         maker: 'ETZINGER',
//         price: '50,200',
//     },
//     {
//         id: 16,
//         img: '/items/mills/mill05.webp',
//         pName: 'ワイヤレスデュアルグラインダー',
//         maker: 'LEGATO',
//         price: '17,615',
//     },
//     {
//         id: 17,
//         img: '/items/pots/pot04.webp',
//         pName: 'スタッグ 電気ポット 900ml (Black)',
//         maker: 'FELLOW',
//         price: '24,240',
//     },
//     {
//         id: 18,
//         img: '/items/pots/pot05.webp',
//         pName: 'スタッグ 電気ポット 900ml (White)',
//         maker: 'FELLOW',
//         price: '29,750',
//     },
//     {
//         id: 19,
//         img: '/items/pots/pot06.webp',
//         pName: 'テフロンドリップポート',
//         maker: 'CITTA',
//         price: '2,540',
//     },
//     {
//         id: 20,
//         img: '/items/pots/pot08.webp',
//         pName: 'HOMEBREW クラシックドリップポート',
//         maker: 'NUVO',
//         price: '2,650',
//     },
//     {
//         id: 21,
//         img: '/items/servers/server01.webp',
//         pName: 'ビーカードリップサーバー',
//         maker: 'COFFEE CHANGGO',
//         price: '1,190',
//     },
//     {
//         id: 22,
//         img: '/items/servers/server02.webp',
//         pName: 'グラスドリップサーバー',
//         maker: 'CITTA',
//         price: '650',
//     },
//     {
//         id: 23,
//         img: '/items/servers/server03.webp',
//         pName: 'レンジドリップサーバー',
//         maker: 'HARIO',
//         price: '2,090',
//     },
//     {
//         id: 24,
//         img: '/items/servers/server04.webp',
//         pName: 'ドリップサーバー',
//         maker: 'KALITA',
//         price: '1,545',
//     },
//     {
//         id: 25,
//         img: '/items/sets/set02.webp',
//         pName: 'ハニカム お得セット (豆 200g贈呈)',
//         maker: 'COFFEE CHANGGO',
//         price: '3,080',
//     },
//     {
//         id: 26,
//         img: '/items/sets/set03.webp',
//         pName: 'HOMEBREW デュアルドリップセット',
//         maker: 'NUVO',
//         price: '1,530',
//     },
//     {
//         id: 27,
//         img: '/items/sets/set05.webp',
//         pName: 'アイスコーヒーメーカー',
//         maker: 'HARIO',
//         price: '2,320',
//     },
//     {
//         id: 28,
//         img: '/items/sets/set06.webp',
//         pName: 'ウェーブ 185 ドリップセット',
//         maker: 'KALITA',
//         price: '4,400',
//     },
// ]

// export const handlers = [
//   http.get('/products', () => {
//     return HttpResponse.json(
//     {}
//     )
//   })
// ]