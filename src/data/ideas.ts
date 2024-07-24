export interface IdeaTag {
  en: string;
  zh: string;
}

export interface Idea {
  category: string;
  text: IdeaTag;
}

export const ideas: Idea[] = [
  { category: 'adjective', text: { en: 'Mysterious', zh: '神秘的' } },
  { category: 'adjective', text: { en: 'Brave', zh: '勇敢的' } },
  { category: 'adjective', text: { en: 'Magical', zh: '魔法的' } },
  { category: 'adjective', text: { en: 'Ancient', zh: '古老的' } },
  { category: 'adjective', text: { en: 'Futuristic', zh: '未來的' } },
  
  { category: 'character', text: { en: 'Wizard', zh: '魔法師' } },
  { category: 'character', text: { en: 'Warrior', zh: '戰士' } },
  { category: 'character', text: { en: 'Detective', zh: '偵探' } },
  { category: 'character', text: { en: 'Alien', zh: '外星人' } },
  { category: 'character', text: { en: 'Robot', zh: '機器人' } },
  
  { category: 'location', text: { en: 'Ancient Forest', zh: '古老森林' } },
  { category: 'location', text: { en: 'Mountain Peak', zh: '山頂' } },
  { category: 'location', text: { en: 'Underwater City', zh: '水下城市' } },
  { category: 'location', text: { en: 'Desert Oasis', zh: '沙漠綠洲' } },
  { category: 'location', text: { en: 'Space Station', zh: '太空站' } },
  
  { category: 'verb', text: { en: 'Explore', zh: '探索' } },
  { category: 'verb', text: { en: 'Conquer', zh: '征服' } },
  { category: 'verb', text: { en: 'Transform', zh: '變形' } },
  { category: 'verb', text: { en: 'Discover', zh: '發現' } },
  { category: 'verb', text: { en: 'Create', zh: '創造' } },
  
  { category: 'element', text: { en: 'Magic Stone', zh: '魔法寶石' } },
  { category: 'element', text: { en: 'Ancient Sword', zh: '古劍' } },
  { category: 'element', text: { en: 'Time Machine', zh: '時光機' } },
  { category: 'element', text: { en: 'Invisible Cloak', zh: '隱形斗篷' } },
  { category: 'element', text: { en: 'Teleportation Device', zh: '瞬間移動裝置' } },
];