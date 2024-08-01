// src/data/ideas.ts
import { Idea,Category } from '../types';

export const ideas: Record<Category, Idea[]> = {
  adjective: [{ category: 'adjective', text: { en: 'Mysterious', zh: '神秘的' }, image: "/assets/images/ideas/adj.png" }, { category: 'adjective', text: { en: 'Mysterious', zh: '神秘的' }, image: "/assets/images/ideas/adj.png" },
    { category: 'adjective', text: { en: 'Cheerful', zh: '陽光的' }, image: "/assets/images/ideas/adj.png" },
  { category: 'adjective', text: { en: 'Brave', zh: '勇敢的'}, image:"/assets/images/ideas/adj.png"},
  { category: 'adjective', text: { en: 'Magical', zh: '魔法的'}, image:"/assets/images/ideas/adj.png"},
  { category: 'adjective', text: { en: 'Ancient', zh: '古老的'}, image:"/assets/images/ideas/adj.png"},
  { category: 'adjective', text: { en: 'Futuristic', zh: '未來的'}, image:"/assets/images/ideas/adj.png"}],
  character: [ { category: 'character', text: { en: 'Wizard', zh: '魔法師'}, image:"/assets/images/ideas/char.png"},
  { category: 'character', text: { en: 'Gender Neutral', zh: '中性的人'}, image:"/assets/images/ideas/char.png"},
  { category: 'character', text: { en: 'Warrior', zh: '戰士'}, image:"/assets/images/ideas/char.png"},
  { category: 'character', text: { en: 'Detective', zh: '偵探'}, image:"/assets/images/ideas/char.png"},
  { category: 'character', text: { en: 'Alien', zh: '外星人'}, image:"/assets/images/ideas/char.png"},
  { category: 'character', text: { en: 'Robot', zh: '機器人'}, image:"/assets/images/ideas/char.png"}],
  location: [
  { category: 'location', text: { en: 'Ancient Forest', zh: '古老森林'}, image:"/assets/images/ideas/location.png"},
  { category: 'location', text: { en: 'Mountain Peak', zh: '山頂'}, image:"/assets/images/ideas/location.png"},
  { category: 'location', text: { en: 'Underwater City', zh: '水下城市'}, image:"/assets/images/ideas/location.png"},
  { category: 'location', text: { en: 'Desert Oasis', zh: '沙漠綠洲'}, image:"/assets/images/ideas/location.png"},
  { category: 'location', text: { en: 'Space Station', zh: '太空站'}, image:"/assets/images/ideas/location.png"},
  { category: 'location', text: { en: 'Fast Food Restaurant', zh: '快餐店'}, image:"/assets/images/ideas/location.png"}],
  verb: [{ category: 'verb', text: { en: 'Explore', zh: '探索'}, image:"/assets/images/ideas/verb.png"},{ category: 'verb', text: { en: 'Drink', zh: '征服'}, image:"/assets/images/ideas/verb.png"},
  { category: 'verb', text: { en: 'Conquer', zh: '喝'}, image:"/assets/images/ideas/verb.png"},
  { category: 'verb', text: { en: 'Transform', zh: '變形'}, image:"/assets/images/ideas/verb.png"},
  { category: 'verb', text: { en: 'Discover', zh: '發現'}, image:"/assets/images/ideas/verb.png"},
  { category: 'verb', text: { en: 'Create', zh: '創造'}, image:"/assets/images/ideas/verb.png"}],
  element: [{ category: 'element', text: { en: 'Magic Stone', zh: '魔法寶石'}, image:"/assets/images/ideas/element.png"},
  { category: 'element', text: { en: 'Ancient Sword', zh: '古劍'}, image:"/assets/images/ideas/element.png"},
  { category: 'element', text: { en: 'Time Machine', zh: '時光機'}, image:"/assets/images/ideas/element.png"},
  { category: 'element', text: { en: 'Magic', zh: '魔法'}, image:"/assets/images/ideas/element.png"},
  { category: 'element', text: { en: 'Invisible Cloak', zh: '隱形斗篷'}, image:"/assets/images/ideas/element.png"},
  { category: 'element', text: { en: 'Teleportation Device', zh: '瞬間移動裝置'}, image:"/assets/images/ideas/element.png"}]
};