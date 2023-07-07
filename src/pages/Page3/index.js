import React from "react";
import {
  MediaCardContainer,
  MediaCardWrapper,
  RecomendCardContainer,
  RecommendCardWrapper,
} from "./styles";
import RecommendCard from "./RecommendCard";
import MediaCard from "./MediaCard";
import FooterButton from "../../components/FooterButton";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const recommendData = [
  { title: "RECOMMENDED COLUMN", description: "オススメ" },
  { title: "RECOMMENDED DIET", description: "ダイエット" },
  { title: "RECOMMENDED BEAUTY", description: "美容" },
  { title: "RECOMMENDED HEALTH", description: "健康" },
];

const medias1 = [
  {
    imageUrl: "images/column-1.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-2.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-3.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-4.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
];

const medias2 = [
  {
    imageUrl: "images/column-5.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-6.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-7.jpg",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA",
    time: "2021.05.17 23:25",
  },
  {
    imageUrl: "images/column-8.jpg",
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

      <div className="flex-center space-btn">
        <FooterButton>コラムをもっと見る</FooterButton>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Page3;
