import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">Salesforce AI Prompts</span>
      </h1>
      <p className="desc text-center">
        This is an open-source, Salesforce-focused AI prompt repo built to help
        discover, create and share creative Einstein prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
