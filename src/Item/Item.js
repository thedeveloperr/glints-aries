/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import { ItemWrapper, ItemImgWrapper, ItemContent } from '../Style/ItemStyle';

const Item = (props: Props) => {
  const {
    title,
    url,
    imgUrl,
    isExternal,
    isReactRouter,
    paddingSize,
    subtitle,
    className,
    ...defaultProps
  } = props;

  return (
    <ItemWrapper className={className} paddingSize={paddingSize} {...defaultProps}>
      <ItemImgWrapper>
        <img src={imgUrl} alt="" width="64" height="64" />
      </ItemImgWrapper>
      <ItemContent>
        <h4>
          {title}
        </h4>
        {!isReactRouter
          && (
            <a href={url} target={isExternal ? '_blank' : '_self'} rel="noopener noreferrer">
              {subtitle}
            </a>
          )
        }

        {isReactRouter
          && (
            <Link to={url}>
              {subtitle}
            </Link>
          )
        }
      </ItemContent>
    </ItemWrapper>
  );
};

Item.defaultProps = {
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png',
  isExternal: false,
  isReactRouter: false,
  subtitle: 'subtitle',
  title: 'default',
  paddingSize: '0',
  url: '/',
};

// Typecheck goes here
type Props = {
  title: string,
  subtitle: string,
  imgUrl: string,
  isExternal: boolean,
  isReactRouter: boolean,
  paddingSize: string,
  url: string,
  className: string,
};

export default Item;
