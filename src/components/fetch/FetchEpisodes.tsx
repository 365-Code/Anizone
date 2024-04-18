"use client";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";

const FetchEpisodes = ({
  ep,
  setEp,
}: {
  ep: number;
  setEp: Dispatch<SetStateAction<number>>;
}) => {
  const pathname = usePathname();
  const params = useParams();
  const basePath = pathname.split("/episode-")[0];
  const currentEpisode = Number(pathname.split("/episode-")[1]);
  const aId = (params["animeId"] as string) || "";
  const animId = aId.slice(aId.lastIndexOf("-") + 1);

  const dispatch = useDispatch<AppDispatch>();

  const fetchEpisodeInfo = async () => {
    try {
      const data = await fetch("/api/anilist/fetchAnimeInfo?anime=" + animId);
      const res = await data.json();
      if (res.success) {
        setEpisodes(
          res.animeData.currentEpisode || res.animeData.totalEpisodes,
        );
        dispatch(setCurrentAnime(res.animeData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime,
  ) as IAnimeInfo;

  const [episodes, setEpisodes] = useState(0);

  useEffect(() => {
    currentAnime
      ? setEpisodes(currentAnime.currentEpisode || currentAnime.totalEpisodes)
      : fetchEpisodeInfo();
  }, []);

  const nav = useRouter()
  const handleEpPush = (ep: number)=>{
    // setEp((prev) => ep);
    setEp(ep);
    const epRoute = "/anime/" + (params["animeId"] as string) + "?episode=";
    nav.push(epRoute + (ep))
  }

  const handleEpisode = (leap: number) => {
    if (ep + leap > 0 && ep + leap <= Number(currentAnime?.totalEpisodes)) {
      handleEpPush(ep+leap)
    }
  };

  return (
    <section className="flex items-center justify-between bg-black/30 p-2">
      {currentAnime?.type != "MOVIE" && (
        <div className="flex items-center gap-2 text-white">
          <button
            onClick={() => handleEpisode(-1)}
            className="flex items-center gap-2 transition-all hover:text-green-500"
          >
            <i className="fi fi-sr-caret-square-left_1 text-2xl" />
            <span className="hidden sm:block">Prev</span>
          </button>
          <div className=" group/episodes relative">
            <p className=" flex w-fit items-center justify-center gap-2 rounded-t-xl bg-black/40 px-4 py-2">
              <span className="text-center text-sm">
                <span className="hidden sm:inline-block">Episode</span>
                <span className="sm:hidden">Ep</span> - {ep}
              </span>
              <i className="fi fi-sr-angle-small-down" />
            </p>
            <div className="no-scrollbar absolute right-0 flex h-0 max-h-[95px] w-full flex-col overflow-hidden overflow-y-scroll bg-black/40 text-sm transition-all focus:h-0 group-hover/episodes:z-10 group-hover/episodes:h-auto">
              {[...Array(Number(episodes))].map((episode, i) => (
                <button
                  // onClick={() => setEp(i + 1)}
                  onClick={() => handleEpPush(i+1)}
                  className={`px-4 py-2 transition-all hover:bg-black/80 ${ep == i + 1 ? "bg-black/80" : ""}`}
                  key={i + 1}
                >
                  Ep - {i + 1}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleEpisode(1)}
            className="flex items-center gap-2 transition-all hover:text-green-500"
          >
            <span className="hidden sm:block">Next</span>
            <i className="fi fi-sr-caret-square-right text-2xl" />
          </button>
        </div>
      )}
    </section>
  );
};

export default FetchEpisodes;
