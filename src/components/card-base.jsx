import BottomHalf from "./bottom-half";
import TopHalf from "./top-half";

export default function CardBase() {
  return (
      <div className="p-6 w-fill h-fit border border-black rounded-lg max-w-md mx-auto bg-white shadow-black shadow-3xl flex flex-col">
          <TopHalf />
          <BottomHalf />
    </div>
  )
}