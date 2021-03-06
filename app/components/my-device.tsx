import { useDeviceIcon } from "../utils/device";

type Props = {
  type: string;
};

export function MyDevice({ type }: Props) {
  let icon = useDeviceIcon(type);

  return (
    <div className="w-[5.35rem] h-[5.35rem] rounded-full bg-brand flex items-center justify-center text-white relative">
      {icon}
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-25" />
      <span className="bg-white text-gray-800 text-sm absolute top-[88%] whitespace-nowrap rounded-full py-1 px-2 font-bold">
        You
      </span>
    </div>
  );
}
