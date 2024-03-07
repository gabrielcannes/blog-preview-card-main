import cardImg from "../assets/images/illustration-article.svg";

export default function TopHalf() {
  return (
    <div className="flex flex-col">
          <img src={cardImg} alt="Article" className="rounded-lg mb-8" />
          <div className="font-bold bg-amber-300 rounded-md py-1 px-4 w-fit text-sm mb-4">Learning</div>
          <span>Published 21 Dec 2023</span>
    </div>
  );
}
