import React from "react";
import {
  FooterButton,
  MediaCardContainer,
  MediaCardWrapper,
  RecomendCardContainer,
  RecommendCardWrapper,
} from "./styles";
import RecommendCard from "./RecommendCard";
import MediaCard from "./MediaCard";

const recommendData = [
  { title: "RECOMMENDED COLUMN", description: "オススメ" },
  { title: "RECOMMENDED COLUMN", description: "オススメ" },
  { title: "RECOMMENDED COLUMN", description: "オススメ" },
  { title: "RECOMMENDED COLUMN", description: "オススメ" },
];

const medias1 = [
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
];

const medias2 = [
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
];

function Page3() {
  return (
    <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
      <RecomendCardContainer>
        {recommendData.map((rec) => (
          <RecommendCardWrapper>
            <RecommendCard title={rec.title} description={rec.description} />
          </RecommendCardWrapper>
        ))}
      </RecomendCardContainer>

      <MediaCardContainer>
        {medias1.map((rec) => (
          <MediaCardWrapper>
            <MediaCard
              imageUrl={rec.imageUrl}
              title={rec.title}
              subTitle={rec.subTitle}
              time={rec.time}
            />
          </MediaCardWrapper>
        ))}
      </MediaCardContainer>
      <MediaCardContainer>
        {medias2.map((rec) => (
          <MediaCardWrapper>
            <MediaCard
              imageUrl={rec.imageUrl}
              title={rec.title}
              subTitle={rec.subTitle}
              time={rec.time}
            />
          </MediaCardWrapper>
        ))}
      </MediaCardContainer>

      <MediaCardContainer>
        <FooterButton>コラムをもっと見る</FooterButton>
      </MediaCardContainer>
    </div>
  );
}

export default Page3;
