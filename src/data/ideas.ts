export interface IdeaTag {
  en: string;
  zh: string;
}

export interface Idea {
  category: string;
  text: IdeaTag;
  image: string;
}

export const ideas: Idea[] = [
  { category: 'adjective', text: { en: 'Mysterious', zh: '神秘的'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'adjective', text: { en: 'Brave', zh: '勇敢的'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzHwBmdsNGVEPoO2bxuT22pSX7l4r2oLB2B5qoqLYUOI_JWZ13nMIVUu5BlUmHhcqM5Se-bPUiJi6bgkWDYFvPu4rlf0MOIKQ6pSXyp-EDjgEoe9whtRRuIAZRzm3GIvvzoJYoZtGabp-P/s180-c/fruit_slice10_orange.png"},
  { category: 'adjective', text: { en: 'Magical', zh: '魔法的'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtZffm9F4DhF56L6zbfqLDJ3JsREuzD2xtoox3MkNq9fYq-bZkOS-Ca8v4s3ommlnBjPp9MTVw7WWyYwDccWOKaltCCvqEiJxwKnyNcmyU_GAdBzIv7IxRjsIQOZBUxe3F6EYOeRQF3anF/s800/tamanegi_onion+(1).png"},
  { category: 'adjective', text: { en: 'Ancient', zh: '古老的'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb2jjkxJKabArJ_HUCdJBcK303BB_z5PoDW1_CjDi_ebH6NCAbcUQzYCAFPfwaNFGphnZ-CEpn9mKmCrftpoU0WhsDNXcrqJKIcPUEY1Sm909vZ0wtDqT7bIP_Wro3QkKWNXRob06cMQqd/s800/fruit_grape.png"},
  { category: 'adjective', text: { en: 'Futuristic', zh: '未來的'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiap4rtb02syEgJLbbCMA6AMSFLcO-_y8T7aQr2K1aismSRRT9mRRSVc7d1D17fQIo83ecCVyewiIx-vJj71qKmFN31JRmrMnrek88KqIo5AjX9Dhep0vQUw6gjYscbhMAsvGH57SZ19lbX/w1200-h630-p-k-no-nu/fruit_blueberry.png"},
  
  { category: 'character', text: { en: 'Wizard', zh: '魔法師'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'character', text: { en: 'Warrior', zh: '戰士'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzHwBmdsNGVEPoO2bxuT22pSX7l4r2oLB2B5qoqLYUOI_JWZ13nMIVUu5BlUmHhcqM5Se-bPUiJi6bgkWDYFvPu4rlf0MOIKQ6pSXyp-EDjgEoe9whtRRuIAZRzm3GIvvzoJYoZtGabp-P/s180-c/fruit_slice10_orange.png"},
  { category: 'character', text: { en: 'Detective', zh: '偵探'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'character', text: { en: 'Alien', zh: '外星人'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'character', text: { en: 'Robot', zh: '機器人'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  
  { category: 'location', text: { en: 'Ancient Forest', zh: '古老森林'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'location', text: { en: 'Mountain Peak', zh: '山頂'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'location', text: { en: 'Underwater City', zh: '水下城市'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'location', text: { en: 'Desert Oasis', zh: '沙漠綠洲'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'location', text: { en: 'Space Station', zh: '太空站'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  
  { category: 'verb', text: { en: 'Explore', zh: '探索'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'verb', text: { en: 'Conquer', zh: '征服'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'verb', text: { en: 'Transform', zh: '變形'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'verb', text: { en: 'Discover', zh: '發現'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'verb', text: { en: 'Create', zh: '創造'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  
  { category: 'element', text: { en: 'Magic Stone', zh: '魔法寶石'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'element', text: { en: 'Ancient Sword', zh: '古劍'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'element', text: { en: 'Time Machine', zh: '時光機'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'element', text: { en: 'Invisible Cloak', zh: '隱形斗篷'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
  { category: 'element', text: { en: 'Teleportation Device', zh: '瞬間移動裝置'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
];