const socialmedia = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/mohamed",
  },
  { name: "Twitter", link: "https://twitter.com/_MohamedElyounous" },
];

const SocialMedia = () => {
  return (
    <div
      className="flex justify-center mt-[80px] p-10"
      style={{ background: "#59B4B2" }}
    >
      <div>
        <div>
          <div>
            <ul className="flex gap-4">
              {socialmedia.map((media, index) => (
                <li key={index} className="flex">
                  {" "}
                  <a href={media.link}>
                    <ul>{media.name}</ul>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-white text-center">&copy; Diwan Malla</p>
      </div>
    </div>
  );
};

export default SocialMedia;
