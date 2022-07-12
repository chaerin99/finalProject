import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/user';

import {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
  OptionContainer,
  ContentContainer,
} from '../../styles/SearchItem';

const SearchItem = ({ book }) => {
  const {
    cateNo,
    resourceName,
    cateName,
    people,
    option,
    imageUrl,
    fuel,
    content,
  } = book;

  console.log(book);

  const navigate = useNavigate();

  const onClickbtn = (e) => {
    e.preventDefault();
    navigate('/reserve', {
      state: book,
    });
  };

  return (
    <Link
      to="/reserve"
      state={book}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ItemContainer>
        <LeftContainer>
          <TitleContainer>
            <h2 className="title">{resourceName}</h2>
            <h3 className="location">[{cateName}]</h3>
            <span className="price_origin">
              {book.cateNo === 1 ? `인원 : ` + book.people : <></>}
            </span>
          </TitleContainer>
          <ImageContainer>
            <img src={imageUrl} alt="thumbnail" />
          </ImageContainer>
        </LeftContainer>
        <RightContainer>
          <OptionContainer>
            <div>옵션 : {option}</div>
            <div> {book.cateNo === 2 ? `연료 : ` + book.fuel : <></>}</div>
          </OptionContainer>
          <ContentContainer>
            <div>내용 : {book.content}</div>
          </ContentContainer>
        </RightContainer>
      </ItemContainer>
    </Link>
  );
};

export default SearchItem;
