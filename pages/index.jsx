import {
  useStoryblokState,
  useStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import Home1Blog from "../src/components/wellcon/Home1/Home1Blog";
import Home1Cta from "../src/components/wellcon/Home1/Hom1Cta";
import Hom1Cta from "../src/components/wellcon/Home1/Hom1Cta";

export default function Home({ story: initialStory }) {
  const story = useStoryblokState(initialStory);

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StoryblokComponent blok={story.content} />
      <Hom1Cta />
      <div
        style={{
          paddingTop: "10rem",
        }}
      ></div>
      <Home1Blog />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const storyblokApi = useStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}
