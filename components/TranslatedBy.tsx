interface Props {
  githubUserNames: string[];
}

function TranslatedBy(props: Props) {
  return <div
    className="text-xs text-gray-400 mdx-component flex items-center mt-24">
    <span>本篇文章由</span>
    {props.githubUserNames.map(name => <a
      key={name}
      href={`https://github.com/${name}`}
      target="_blank"
      rel="noreferrer"
      className="items-center flex mx-2">
      <img
        src={`https://github.com/${name}.png`}
        alt={name}
        className="inline-block rounded-full w-6 h-6 object-cover mr-2" />
      <p className="text-xs text-[#0074de] hover:text-[#0080f6] transition-all">
        {name}
      </p>
    </a>)}
    <span>貢獻翻譯。</span>
    <a
      className="text-[#0074de] hover:text-[#0080f6] transition-all ml-2"
      target="_blank"
      rel="noreferrer"
      href="https://github.com/yuaanlin/nextjs.tw">
      瞭解如何參與貢獻
    </a>
  </div>;
}

export default TranslatedBy;
