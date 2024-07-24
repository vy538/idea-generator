import React from 'react';
import styled from 'styled-components';

interface IllustrationItem {
  id: string;
  imageUrl: string;
  tags: string[];
}

// Mock data - replace this with actual data fetching logic later
const mockIllustrations: IllustrationItem[] = [
  { id: '1', imageUrl: 'https://example.com/image1.jpg', tags: ['神秘的', '魔法師', '古老森林'] },
  { id: '2', imageUrl: 'https://example.com/image2.jpg', tags: ['勇敢的', '戰士', '山頂'] },
  { id: '3', imageUrl: 'https://example.com/image3.jpg', tags: ['聰明的', '科學家', '實驗室'] },
];

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const IllustrationCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const IllustrationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TagsContainer = styled.div`
  padding: 10px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
  font-size: 0.8em;
`;

const Gallery: React.FC = () => {
  return (
    <GalleryWrapper>
      {mockIllustrations.map((item) => (
        <IllustrationCard key={item.id}>
          <IllustrationImage src={item.imageUrl} alt={`Illustration ${item.id}`} />
          <TagsContainer>
            {item.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </IllustrationCard>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;