import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const IllustrationCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const IllustrationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const TagsContainer = styled.div`
  padding: 10px;
`;

export const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: 0.8em;
  display: inline-block;
`;