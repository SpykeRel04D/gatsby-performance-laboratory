import React from 'react';
import GlobalStyle from '../ui/Globals';

import Header from '../components/Header';

import CustomImage from '../components/CustomImage';
import Wrapper from '../ui/Wrappers';
import {
  BigImage,
  Double,
  Triple,
  FallRow,
  PlaceHolderBanner,
  PlaceHolderSquare,
} from '../ui/Containers';

import ImageData from '../images/ImageData';
import { getSrcset } from '../ui/helpers';

const Basic = props => {
  return (
    <>
      <GlobalStyle />
      <Header>{props.insideHeader && props.insideHeader}</Header>
      {props.children}
      {props.withContent && (
        <Wrapper size="mainwrapper" center>
          <h1>Image Test with 'CustomImage' component</h1>
          <BigImage>
            <CustomImage
              src={ImageData[0].original.href}
              aspectRatio={
                ImageData[0].original.meta.width /
                ImageData[0].original.meta.height
              }
              srcSet={getSrcset(ImageData[0])}
            />
          </BigImage>
          <h2>Double Module</h2>
          <Double>
            <CustomImage
              src={ImageData[1].original.href}
              aspectRatio={
                ImageData[1].original.meta.width /
                ImageData[1].original.meta.height
              }
              srcSet={getSrcset(ImageData[1])}
            />
            <CustomImage
              src={ImageData[2].original.href}
              aspectRatio={
                ImageData[2].original.meta.width /
                ImageData[2].original.meta.height
              }
              srcSet={getSrcset(ImageData[2])}
            />
          </Double>
          <h2>Double Module</h2>
          <Double>
            <CustomImage
              src={ImageData[1].original.href}
              aspectRatio={
                ImageData[1].original.meta.width /
                ImageData[1].original.meta.height
              }
              srcSet={getSrcset(ImageData[1])}
            />
            <CustomImage
              src={ImageData[2].original.href}
              aspectRatio={
                ImageData[2].original.meta.width /
                ImageData[2].original.meta.height
              }
              srcSet={getSrcset(ImageData[2])}
            />
          </Double>
          <p>
            Cupcake ipsum dolor sit amet liquorice cheesecake jelly candy canes.
            Soufflé jelly marshmallow soufflé carrot cake toffee cake sesame
            snaps. Jelly beans jelly beans sweet roll lemon drops. Cake sweet
            cupcake. Dragée jelly-o pie marshmallow biscuit. Toffee halvah bear
            claw marshmallow chocolate bar. Croissant powder gingerbread jelly
            beans pie cupcake tart chocolate cake. Lemon drops gummi bears
            pastry cake chocolate cookie sesame snaps. Chocolate cake fruitcake
            halvah cotton candy. Lemon drops sesame snaps fruitcake topping
            brownie muffin jelly. Wafer tiramisu bear claw sweet pastry cake
            cookie. Lollipop chocolate tiramisu ice cream sweet roll. Candy
            chocolate cake muffin pudding danish. Chocolate candy dragée jujubes
            lollipop candy canes caramels tart sweet. Brownie chocolate cake ice
            cream carrot cake candy. Oat cake chocolate cake gummi bears danish
            cheesecake tart biscuit. Bonbon topping cake dessert lollipop
            brownie jelly apple pie. Biscuit chocolate halvah chocolate bar
            powder jelly-o muffin brownie. Cheesecake chocolate bar powder
            cupcake. Sugar plum jelly jelly. Powder cotton candy candy canes
            bonbon lollipop. Toffee pastry halvah cheesecake wafer. Jelly
            gingerbread macaroon lemon drops cookie muffin jujubes ice cream
            tart. Cookie chocolate bar oat cake dessert tiramisu marshmallow
            wafer candy gingerbread. Sugar plum ice cream candy canes tootsie
            roll tiramisu marshmallow jelly beans tootsie roll. Cookie
            gingerbread tiramisu tart. Jelly oat cake pastry danish wafer
            soufflé. Sugar plum biscuit jelly beans cookie dessert.
          </p>
          <h2>Triple Module</h2>
          <Triple>
            <CustomImage
              src={ImageData[4].original.href}
              aspectRatio={
                ImageData[4].original.meta.width /
                ImageData[4].original.meta.height
              }
              srcSet={getSrcset(ImageData[4])}
            />
            <CustomImage
              src={ImageData[5].original.href}
              aspectRatio={
                ImageData[5].original.meta.width /
                ImageData[5].original.meta.height
              }
              srcSet={getSrcset(ImageData[5])}
            />
            <CustomImage
              src={ImageData[6].original.href}
              aspectRatio={
                ImageData[6].original.meta.width /
                ImageData[6].original.meta.height
              }
              srcSet={getSrcset(ImageData[6])}
            />
          </Triple>
          <h2>FallRow Module</h2>
          <FallRow>
            <CustomImage
              src={ImageData[7].original.href}
              aspectRatio={
                ImageData[7].original.meta.width /
                ImageData[7].original.meta.height
              }
              srcSet={getSrcset(ImageData[7])}
            />
            <CustomImage
              src={ImageData[8].original.href}
              aspectRatio={
                ImageData[8].original.meta.width /
                ImageData[8].original.meta.height
              }
              srcSet={getSrcset(ImageData[8])}
            />
            <CustomImage
              src={ImageData[9].original.href}
              aspectRatio={
                ImageData[9].original.meta.width /
                ImageData[9].original.meta.height
              }
              srcSet={getSrcset(ImageData[9])}
            />
            <CustomImage
              src={ImageData[10].original.href}
              aspectRatio={
                ImageData[10].original.meta.width /
                ImageData[10].original.meta.height
              }
              srcSet={getSrcset(ImageData[10])}
            />
            <CustomImage
              src={ImageData[11].original.href}
              aspectRatio={
                ImageData[11].original.meta.width /
                ImageData[11].original.meta.height
              }
              srcSet={getSrcset(ImageData[11])}
            />
            <CustomImage
              src={ImageData[12].original.href}
              aspectRatio={
                ImageData[12].original.meta.width /
                ImageData[12].original.meta.height
              }
              srcSet={getSrcset(ImageData[12])}
            />
          </FallRow>
          <PlaceHolderSquare />
          <h2>Double Module</h2>
          <Double>
            <CustomImage
              src={ImageData[13].original.href}
              aspectRatio={
                ImageData[13].original.meta.width /
                ImageData[13].original.meta.height
              }
              srcSet={getSrcset(ImageData[13])}
            />
            <CustomImage
              src={ImageData[14].original.href}
              aspectRatio={
                ImageData[14].original.meta.width /
                ImageData[14].original.meta.height
              }
              srcSet={getSrcset(ImageData[14])}
            />
          </Double>
        </Wrapper>
      )}
    </>
  );
};

export default Basic;
